// ICONS
import { MdSms } from "react-icons/md"

export default {
  title: "Seminar",
  name: "seminar",
  icon: MdSms,
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Free text block",
      name: "firstTextBlock",
      type: "contentEditor",
    },
    {
      title: "Link (More information)",
      name: "moreInformationLink",
      type: "url",
    },
    {
      title: "Link (big blue button)",
      name: "bbbLink",
      type: "url",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: Rule => Rule.required(),
    },
  ],
}
