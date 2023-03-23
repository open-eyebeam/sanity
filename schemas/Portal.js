// ICONS
import {
    MdDoorFront
} from "react-icons/md"

export default {
    title: "Portal",
    name: "portal",
    type: "document",
    icon: MdDoorFront,
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: Rule => Rule.required(),
        },
        {
            title: "Target area",
            name: "targetArea",
            type: "reference",
            to: [{ type: "room" }],
            validation: Rule => Rule.required(),
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
            description: "In grid units - must be a round number.",
            name: "x",
            type: "number",
            validation: Rule => Rule.required().integer(),
        },
        {
            title: "Y-Position",
            description: "In grid units - must be a round number.",
            name: "y",
            type: "number",
            validation: Rule => Rule.required().integer(),
        },

        {
            title: "Restricted",
            name: "restricted",
            type: "boolean",
        },
        {
            title: "Image",
            name: "backgroundImage",
            type: "image",
            validation: Rule => Rule.required(),
        },
        {
          title: "Image description",
          description: "Alt text for unsighted users.",
          name: "alt",
          type: "string",
          validation: Rule => Rule.required(),
        }

    ],
}
