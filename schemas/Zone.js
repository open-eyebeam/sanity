// ICONS
import {
    MdWaterDrop
} from "react-icons/md"

export default {
    title: "Zone",
    name: "zone",
    type: "document",
    icon: MdWaterDrop,
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
        {
            title: "Introduction",
            name: "introduction",
            type: "string",
        },
        {
            title: "Enabled chat",
            name: "chat",
            type: "boolean",
        },
        {
            title: "Stream",
            name: "stream",
            type: "url",
        },
        {
            title: "Background sound",
            name: "backgroundSound",
            description: "Format: mp3",
            type: "file",
        },
    ],
}
