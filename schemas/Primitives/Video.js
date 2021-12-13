// ICONS
import { MdVideocam } from "react-icons/md"

export default {
  name: "videoBlock",
  type: "object",
  title: "Video",
  icon: MdVideocam,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "videoFile",
      type: "file",
      title: "video file",
      description: "File format: mp4",
    },
  ],
}
