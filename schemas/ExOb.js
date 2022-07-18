import { MdBook } from "react-icons/md"
import DimensionInput from '../src/DimensionInput'
import AsyncSelect from '../src/AsyncSelect'

const postHandler = (json) => {
  console.log(json.result)
  return json.result.map(post => ({
    title: post.title,
    value: post._id
  }))
}

export default {
  title: "Object",
  name: "exob",
  type: "document",
  icon: MdBook,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Parent area",
      name: "parentArea",
      type: "reference",
      to: [{ type: "room" }],
      validation: Rule => Rule.required(),
    },
    {
      title: "X-Position",
      description: "In grid units",
      name: "x",
      type: "number",
      validation: Rule => Rule.required(),
    },
    {
      title: "Y-Position",
      description: "In grid units",
      name: "y",
      type: "number",
      validation: Rule => Rule.required(),
    },
    {
      title: "Dimensions",
      name: "dimensions",
      type: "object",
      validation: Rule => Rule.required(),
      fields: [
        {
          title: "Width",
          description: "In grid units",
          name: "width",
          type: "number",
          inputComponent: DimensionInput,
          validation: Rule => Rule.required(),
        },
        {
          title: "Height",
          description: "In grid units",
          name: "height",
          type: "number",
          inputComponent: DimensionInput,
          validation: Rule => Rule.required(),
        },
      ]
    },
    {
      title: "Static object",
      description: "Can't be interacted with and doesn't have content. A decorative object.",
      name: "static",
      type: "boolean",
    },
    {
      title: "Restricted",
      description: "Only shown to users who are logged in",
      name: "restricted",
      type: "boolean",
    },
    {
      title: "Image",
      name: "iconImage",
      type: "image",
      validation: Rule => Rule.required(),
    },
    {
      title: "Image description",
      name: "alt",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Info text",
      description: "Displayed in the bottom left corner of the screen when viewing the object",
      name: "infoText",
      type: "string",
    },
    {
      title: "Content type",
      name: "contentType",
      type: "string",
      options: {
        list: [
          { title: "Text", value: "text" },
          { title: "Video", value: "video" },
          { title: "3D/360 Video", value: "video3D" },
          { title: "Import from main website", value: "importedPost" },
          { title: "Bulletin Board", value: "bulletinBoard" },
        ],
      },
    },
    {
      title: "Content",
      name: "content",
      type: "contentEditor",
      hidden: ({ document }) => document?.static || document?.contentType !== "text",
    },
    {
      title: "Video url",
      description: "URL for a video hosted by peertube, youtube or vimeo.",
      name: "videoUrl",
      type: "url",
      hidden: ({ document }) => document?.static || document?.contentType !== "video",
    },
    {
      title: "Import post from main website",
      name: "importedPost",
      type: "string",
      inputComponent: AsyncSelect,
      options: {
        url: 'https://3knpqano.api.sanity.io/v2021-10-05/data/query/production?query=%2A%5B_type%20in%20%5B%22project%22%2C%20%22news%22%2C%20%22event%22%2C%20%22note%22%2C%20%22program%22%5D%5D',
        handler: postHandler
      },
      hidden: ({ document }) => document?.static || document?.contentType !== "importedPost",
    },
    {
      title: "Direct iframe embed",
      description: "(Experimental, do not use if you don't know what you're doing). If the object is an iframe, embed it directly in the room.",
      name: "iframeEmbed",
      type: "boolean",
    },

  ]
}
