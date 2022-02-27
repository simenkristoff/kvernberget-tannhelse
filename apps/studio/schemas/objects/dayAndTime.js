import { MdSchedule } from 'react-icons/md'

import TimeInput from '../../components/TimeInput'

const days = [
  'Mandag',
  'Tirsdag',
  'Onsdag',
  'Torsdag',
  'Fredag',
  'Lørdag',
  'Søndag'
]

const verifyInput = (dayAndTime) => {
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
  return opensAt < closesAt
    ? true
    : `Sørg for at klinikken åpner før den stenger på ${day}`
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

  validation: (rule) => [rule.custom(verifyInput)],

  fields: [
    {
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
      name: 'opensAt',
      title: 'Opens at',
      type: 'string',
      description: 'Choose when the store opens',
      inputComponent: TimeInput,
      hidden: ({ parent }) => parent?.closed
    },
    {
      name: 'closesAt',
      title: 'Closes at',
      type: 'string',
      description: 'Choose when the store closes',
      inputComponent: TimeInput,
      hidden: ({ parent }) => parent?.closed
    }
  ],
  preview: {
    select: {
      day: 'day',
      closed: 'closed',
      opensAt: 'opensAt',
      closesAt: 'closesAt'
    },
    prepare({ day, closed, opensAt, closesAt }) {
      return {
        title: day,
        subtitle: closed ? 'Stengt' : `${opensAt} - ${closesAt}`
      }
    }
  }
}
