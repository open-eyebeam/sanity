// ICONS
import { MdBook} from "react-icons/md"

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
      title: "X",
      name: "x",
      type: "number",
    },
    {
      title: "Y",
      name: "y",
      type: "number",
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
