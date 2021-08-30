// ICONS
import { MdPictureInPicture } from "react-icons/md"

export default {
  name: "embedBlock",
  type: "object",
  title: "Embed code",
  icon: MdPictureInPicture,
  fields: [
    {
      name: "url",
      description: "Link to Youtube or Vimeo video or soundcloud track",
      type: "url",
      title: "URL",
    },
    {
      title: "Caption",
      name: "caption",
      type: "simpleEditor",
    },
  ],
}
