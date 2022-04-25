// ICONS
import { MdMood } from "react-icons/md"

export default {
  title: "Avatar",
  name: "avatar",
  type: "document",
  icon: MdMood,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Image",
      description: "32x32 pixels",
      name: "image",
      type: "image",
      validation: Rule => Rule.required(),
    },
  ],
}
