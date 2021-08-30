// ICONS
import { MdInsertDriveFile } from "react-icons/md"

export default {
  name: "fileBlock",
  type: "object",
  title: "Other file",
  icon: MdInsertDriveFile,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "File type",
      name: "fileType",
      type: "string",
    },
    {
      name: "file",
      type: "file",
      title: "File",
    },
  ],
}
