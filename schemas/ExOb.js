// ICONS
import { MdBook } from "react-icons/md"
import DimensionInput from '../src/DimensionInput'

export default {
  title: "Object",
  name: "exob",
  type: "document",
  icon: MdBook,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Parent area",
      name: "parentArea",
      type: "reference",
      to: [{ type: "room" }],
      validation: Rule => Rule.required(),
    },
    {
      title: "X-Position",
      description: "In grid units",
      name: "x",
      type: "number",
      validation: Rule => Rule.required(),
    },
    {
      title: "Y-Position",
      description: "In grid units",
      name: "y",
      type: "number",
      validation: Rule => Rule.required(),
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
      title: "Static object",
      description: "Can not be interacted with and does not have content. A decorative object.",
      name: "static",
      type: "boolean",
    },
    {
      title: "Restricted",
      description: "Only shown to users who are logged in",
      name: "restricted",
      type: "boolean",
    },
    {
      title: "Image",
      name: "iconImage",
      type: "image"
    },
    {
      title: "Content type",
      name: "contentType",
      type: "string",
      options: {
        list: [
          { title: "Text", value: "text" },
          { title: "Video", value: "video" },
        ],
      },
    },
    {
      title: "Content",
      name: "content",
      type: "contentEditor",
      hidden: ({ document }) => document?.static || document?.contentType == "video",
    },
    {
      title: "Video url",
      name: "videoUrl",
      type: "url",
      hidden: ({ document }) => document?.static || document?.contentType !== "video",
    },
  ]
}
