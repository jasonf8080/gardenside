import { defineField, defineType } from 'sanity'

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().min(0),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Coffee', value: 'coffee' },
          { title: 'Pastries', value: 'pastries' },
          { title: 'Focaccias', value: 'focaccias' },
          { title: 'Salads', value: 'salads' },
          { title: 'Drinks', value: 'drinks' },
        ],
        layout: 'dropdown',
      },
    }),
  ],
})
