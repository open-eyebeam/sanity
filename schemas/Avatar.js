// CUSTOM INPUT
import GenerateSpritesheet from "../components/GenerateSpritesheet"

// ICONS
import { MdImage } from "react-icons/md"

export default {
  title: "Avatar",
  name: "avatar",
  type: "document",
  icon: MdImage,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Do not include in random selection",
      name: "notRandom",
      type: "boolean",
    },
    {
      title: "Rest",
      name: "rest",
      type: "array",
      of: [
        {
          title: "Frame",
          name: "frame",
          type: "image",
        },
      ],
    },
    {
      title: "Front",
      name: "front",
      type: "array",
      of: [
        {
          title: "Frame",
          name: "frame",
          type: "image",
        },
      ],
    },
    {
      title: "Back",
      name: "back",
      type: "array",
      of: [
        {
          title: "Frame",
          name: "frame",
          type: "image",
        },
      ],
    },
    {
      title: "Left",
      name: "left",
      type: "array",
      of: [
        {
          title: "Frame",
          name: "frame",
          type: "image",
        },
      ],
    },
    {
      title: "Right",
      name: "right",
      type: "array",
      of: [
        {
          title: "Frame",
          name: "frame",
          type: "image",
        },
      ],
    },
    {
      title: "Generate Spritesheet",
      name: "fetch",
      type: "string",
      inputComponent: GenerateSpritesheet,
    },
    {
      title: "Generated Spritesheet",
      name: "spritesheet",
      type: "image",
      validation: Rule => Rule.required(),
    },
    {
      title: "JSON for Spritesheet",
      name: "spriteJson",
      type: "file",
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      rest: "rest",
    },
    prepare(selection) {
      const { title, rest } = selection

      let previewImage = {}

      if (rest && rest.length > 0) {
        previewImage = rest[0]
      } else {
        previewImage = MdImage
      }

      return {
        title: title,
        media: previewImage,
      }
    },
  },
}
