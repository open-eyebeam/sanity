// ICONS
import { MdAdjust } from "react-icons/md"
import DimensionInput from '../src/DimensionInput'

export default {
    title: "Zone",
    name: "zone",
    type: "document",
    icon: MdAdjust,
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
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
            title: "Background image",
            name: "backgroundImage",
            type: "image",
        },
        {
            title: "Introduction",
            name: "introduction",
            type: "simpleEditor",
        },
        {
            title: "Enabled chat",
            name: "chat",
            type: "boolean",
        },
        {
            title: "Background sound",
            name: "backgroundSound",
            description: "Format: mp3",
            type: "file",
        },
    ],
}
