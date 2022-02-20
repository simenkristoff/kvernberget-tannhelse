import { Rule } from '@sanity/types'
import chain, { map, reduce } from 'lodash'

const verifyBlockLength = (blockContent: any, maxLen: number) => {
  const count = chain(blockContent)
    .map((item) => map(item.children, (child) => child.text))
    .reduce((prev, curr) => {
      prev += reduce(curr, (p, c) => c.length, 0)
      return prev
    }, 0)
    .valueOf()

  if (count > maxLen) {
    return `Teksten kan ikke være lengre enn ${maxLen} bokstaver`
  }

  return true
}

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'excerpt',
      title: 'Utdrag',
      type: 'blockContent',
      validation: (rule: Rule) => [
        rule.required(),
        rule.custom((value) => verifyBlockLength(value, 250))
      ]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    },
    prepare(selection) {
      return Object.assign({}, selection)
    }
  }
}
