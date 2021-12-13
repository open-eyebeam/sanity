// ICONS
import { MdImage } from "react-icons/md"

export default {
  name: "imageBlock",
  type: "object",
  icon: MdImage,
  title: "Image",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
}
