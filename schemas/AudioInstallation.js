import { MdAudiotrack } from "react-icons/md";

export default {
  title: "Audio Installation",
  name: "audioInstallation",
  type: "document",
  icon: MdAudiotrack,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Connected participants",
      name: "participants",
      type: "array",
      options: {
        editModal: "popover",
      },
      of: [
        {
          title: "Participant",
          name: "authorLink",
          type: "reference",
          to: [{ type: "participant" }],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: "Turn off autoplay",
      name: "noAutoplay",
      type: "boolean",
    },
    {
      title: "Audio stream URL",
      name: "streamURL",
      type: "url",
    },
    {
      title: "Sound file",
      name: "soundFile",
      description: "Format: mp3",
      type: "file",
    },
    // {
    //   title: "Sound file (Mux)",
    //   name: "muxFile",
    //   description: "Format: mp3",
    //   type: 'mux.video'
    // },
    {
      title: "Text",
      name: "content",
      type: "contentEditor",
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
      title: "Description (Metadata)",
      description: "If left empty, a description will be generated from the main text",
      name: "description",
      type: "text",
    },
    {
      title: "X-coordinate",
      name: "x",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Y-coordinate",
      name: "y",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Radius",
      description: "In pixels, defaiult is 400",
      name: "radius",
      type: "number",
    },
    {
      title: "Sprite",
      name: "spriteLink",
      type: "reference",
      to: [{ type: "caseStudySprite" }],
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
