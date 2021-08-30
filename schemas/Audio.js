// ICONS
import { MdAudioTrack } from "react-icons/md"

export default {
  name: "audioBlock",
  type: "object",
  title: "Audio",
  icon: MdAudioTrack,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "audioFile",
      type: "file",
      title: "Audio file",
    },
  ],
}
