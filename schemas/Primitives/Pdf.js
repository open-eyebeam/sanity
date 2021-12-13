// ICONS
import { MdPictureAsPdf } from "react-icons/md"

export default {
  name: "pdfBlock",
  type: "object",
  title: "Pdf file",
  icon: MdPictureAsPdf,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "pdfFile",
      type: "file",
      title: "Pdf file",
      description: "File format: pdf",
    },
  ],
}
