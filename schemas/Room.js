// ICONS
import {
  MdHome
} from "react-icons/md"

export default {
  title: "Room",
  name: "room",
  type: "document",
  icon: MdHome,
  fields: [
    {
        title: "Title",
        name: "title",
        type: "string",
    },
    {
        title: "Introduction",
        name: "introduction",
        type: "string",
    },
    {
      title: "Chat",
      name: "chat",
      type: "boolean",
    },
    {
        title: "Stream",
        name: "stream",
        type: "url",
    },
    {
        title: "Sound file",
        name: "soundFile",
        description: "Format: mp3",
        type: "file",
    },
    {
        title: "Slug",
        name: "slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 200,
        },
        validation: (Rule) => Rule.required(),
    },
  ],
}
