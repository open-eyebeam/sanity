// ICONS
import { MdYard } from "react-icons/md"
import DimensionInput from '../src/DimensionInput'

export default {
  title: "Room",
  name: "room",
  type: "document",
  icon: MdYard,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Main area",
      name: "mainArea",
      description: "If toggled, the user will start in this room",
      type: "boolean",
    },
    {
      title: "Restricted",
      description: "Only show this room to users who are logged in",
      name: "restricted",
      type: "boolean",
      hidden: ({ document }) => document?.mainArea
    },
    {
      title: "Dimensions",
      name: "dimensions",
      type: "object",
      fields: [
        {
          title: "Width",
          description: "In grid units",
          name: "width",
          type: "number",
          inputComponent: DimensionInput,
          validation: Rule => Rule.required(),
        },
        {
          title: "Height",
          description: "In grid units",
          name: "height",
          type: "number",
          inputComponent: DimensionInput,
          validation: Rule => Rule.required(),
        },
      ]
    },
    {
      title: "Background image",
      name: "backgroundImage",
      type: "image",
    },
    {
      title: "Introduction",
      name: "introduction",
      type: "simpleEditor",
    },
    {
      title: 'Introduction texts',
      name: 'introductionTexts',
      type: 'array',
      of: [{
        type: 'object', fields: [
          {
            title: "Text",
            name: "text",
            type: "simpleEditor",
          }
        ]
      }]
    },
    {
      title: "Background sound",
      name: "backgroundSound",
      description: "Format: mp3",
      type: "file",
    },

  ],
}
