import { MdSchedule } from "react-icons/md";
import { Rule } from '@sanity/types'

// 1. Import the TimeInput react component
import TimeInput from '../../components/TimeInput'

// 2. List of days the editor may choose from
const days = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag']

// 3. Validate function which is invoked on user input
const verifyInput = (dayAndTime: any) => {
  const { day, closed, opensAt, closesAt } = dayAndTime
  if (!day) {
    return 'Vennligst velg en dag'
  }

  if (closed) return true

  if (!opensAt) {
    return 'Velg når klinikken åpner'
  }
  if (!closesAt) {
    return 'Velg når klinikken stenger'
  }
  return opensAt < closesAt ? true : `Sørg for at klinikken åpner før den stenger på ${day}`
}

export default {
  name: 'dayAndTime',
  title: 'Day and Time',
  icon: MdSchedule,
  type: 'object',
  initialValue: {
    opensAt: '08:00',
    closesAt: '16:00'
  },

  // 4. Perform validation
  validation: (rule: Rule) => [
    rule.custom(verifyInput),
  ],

  fields: [
    {
      // 5. Enable editors to input a string from a predefined list (days)
      name: 'day',
      title: 'Day',
      type: 'string',
      description: 'Select day of week',
      options: {
        list: days,
        layout: 'dropdown'
      }
    },
    {
      name: 'closed',
      title: 'Stengt',
      type: 'boolean',
      initialValue: false
    },
    {
      // 6. Enable editors to input a point in time using a custom input component
      name: 'opensAt',
      title: 'Opens at',
      type: 'string',
      description: 'Choose when the store opens',
      inputComponent: TimeInput,
      hidden: ({ parent }) => parent?.closed
    },
    {
      // 7. Same time input as above, but assigned to a different field
      name: 'closesAt',
      title: 'Closes at',
      type: 'string',
      description: 'Choose when the store closes',
      inputComponent: TimeInput,
      hidden: ({ parent }) => parent?.closed
    }
  ],

  // 8. Define how the dayAndTime object will render in the Studio
  preview: {
    select: {
      day: 'day',
      closed: 'closed',
      opensAt: 'opensAt',
      closesAt: 'closesAt'
    },
    prepare ({ day, closed, opensAt, closesAt }) {
      return {
        title: day,
        subtitle: closed ? 'Stengt' : `${opensAt} - ${closesAt}`
      }
    }
  }
}
