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
      title: "Landing zone",
      name: "landingZone",
      description: "The landing zone is the area where the player can start the game",
      type: "object",
      fields: [
        {
          title: "X-position (min)",
          name: "minX",
          type: "number"
        },
        {
          title: "X-position (max)",
          name: "maxX",
          type: "number"
        },
        {
          title: "Y-position (min)",
          name: "minY",
          type: "number"
        },
        {
          title: "Y-position (max)",
          name: "maxY",
          type: "number"
        },
      ]
    },
    {
      title: 'Background color',
      name: 'backgroundColor',
      type: 'color'
    },
    {
      title: "Background image",
      name: "backgroundImage",
      type: "image",
    },
    {
      title: "Introduction",
      name: "introduction",
      type: "string",
    },
    // {
    //   title: "Enabled chat",
    //   name: "chat",
    //   type: "boolean",
    // },
    {
      title: "Stream",
      name: "stream",
      type: "url",
    },
    {
      title: "Background sound",
      name: "backgroundSound",
      description: "Format: mp3",
      type: "file",
    },

  ],
}
