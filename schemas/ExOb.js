// ICONS
import { MdBook } from "react-icons/md"

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
      name: "x",
      type: "number",
      validation: Rule => Rule.required(),
    },
    {
      title: "Y-Position",
      name: "y",
      type: "number",
      validation: Rule => Rule.required(),
    },
    {
      title: "Restricted",
      name: "restricted",
      type: "boolean",
    },
    {
      title: "Image",
      name: "iconImage",
      type: "image"
    },
    {
      title: "Content",
      name: "content",
      type: "contentEditor",
    },
  ]
}
