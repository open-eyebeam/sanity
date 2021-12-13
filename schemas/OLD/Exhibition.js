import { MdPalette } from "react-icons/md"

export default {
  title: "Exhibition",
  name: "exhibition",
  type: "document",
  icon: MdPalette,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Participants",
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
      validation: Rule => Rule.unique(),
    },
    {
        title: "Area",
        name: "area",
        type: "reference",
        to: [{ type: "area" }],
    },
    {
      title: "Period",
      name: "period",
      type: "string",
    },
    {
      title: "Content",
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
        title: "Connected case studies",
        name: "connectedCaseStudies",
        type: "array",
        options: {
          editModal: "popover",
        },
        of: [
          {
            title: "Case study",
            name: "caseStudyLink",
            type: "reference",
            to: [{ type: "caseStudyExhibition" }],
          },
        ],
        validation: Rule => Rule.unique(),
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
  ]
}
