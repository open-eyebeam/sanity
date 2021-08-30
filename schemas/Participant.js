// ICONS
import { MdAccountCircle } from "react-icons/md"

export default {
  title: "Participant",
  name: "participant",
  icon: MdAccountCircle,
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      description: "!!! Synced from Discourse",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Discourse username",
      name: "username",
      description: "!!! Do not edit this field !!!",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Seminar",
      name: "seminarLink",
      type: "reference",
      to: [{ type: "seminar" }],
    },
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: "Avatar",
      name: "avatarLink",
      type: "reference",
      to: [{ type: "avatar" }],
    },
    {
      title: "Biography",
      name: "biography",
      type: "contentEditor",
    },
    {
      title: "Description (Metadata)",
      description: "If left empty, a description will be generated from the main text",
      name: "description",
      type: "text",
    },
    {
      title: "Image (Metadata)",
      description: "Used as preview when sharing to social media",
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
      },
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "name",
      seminar: "seminarLink.title",
    },
    prepare(selection) {
      const { title, seminar } = selection
      const subtitle = seminar
      return {
        title: title,
        subtitle: subtitle,
      }
    },
  },
}
