import { MdEditCalendar } from "react-icons/md"
import DimensionInput from '../src/DimensionInput'

export default {
    title: "Bulletin Board Settings",
    name: "bulletin-board-settings",
    type: "document",
    icon: MdEditCalendar,
    fields: [
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
            title: "Image",
            name: "iconImage",
            type: "image",
            validation: Rule => Rule.required(),
        },
        {
            title: "Info text",
            description: "Displayed in the bottom left corner of the screen when viewing the object",
            name: "infoText",
            type: "string",
        },
    ]
}
