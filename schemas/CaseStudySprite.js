// CUSTOM INPUT
import GenerateSpritesheet from "../components/GenerateSpritesheet"

// ICONS
import { MdImage, MdHome } from "react-icons/md"

export default {
  title: "Case Study Sprite",
  name: "caseStudySprite",
  type: "document",
  icon: MdHome,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Frames",
      name: "frames",
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
      frames: "frames",
    },
    prepare(selection) {
      const { title, frames } = selection

      let previewImage = {}

      if (frames && frames.length > 0) {
        previewImage = frames[0]
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
