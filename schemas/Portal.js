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
            title: "Restricted",
            name: "restricted",
            type: "boolean",
        },
        // {
        //     title: 'Background color',
        //     name: 'backgroundColor',
        //     type: 'color'
        // },
        {
            title: "Image",
            name: "backgroundImage",
            type: "image",
        },
    ],
}
