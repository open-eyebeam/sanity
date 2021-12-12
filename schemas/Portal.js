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
            title: "Parent area",
            name: "parentArea",
            type: "reference",
            to: [{ type: "room" }],
            validation: Rule => Rule.required(),
        },
        {
            title: "X-Position",
            name: "x",
            type: "number",
            validation: Rule => Rule.required(),
        },
        {
            title: "Y-Position",
            name: "y",
            type: "number",
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
            title: "Dimensions",
            name: "dimensions",
            type: "object",
            fields: [
                {
                    title: "Width",
                    name: "width",
                    type: "number",
                    validation: Rule => Rule.required(),
                },
                {
                    title: "Height",
                    name: "height",
                    type: "number",
                    validation: Rule => Rule.required(),
                },
            ]
        },
        {
            title: "Restricted",
            name: "restricted",
            type: "boolean",
        },
        {
            title: 'Background color',
            name: 'backgroundColor',
            type: 'color'
        },
        {
            title: "Background image",
            description: "4000x4000 pixel png",
            name: "backgroundImage",
            type: "image",
        },
    ],
}
