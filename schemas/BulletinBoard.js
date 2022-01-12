// ICONS
import { MdComment } from "react-icons/md"

export default {
    title: "Bulletin Board",
    name: "bulletinBoard",
    type: "document",
    icon: MdComment,
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
            title: "Image",
            name: "iconImage",
            type: "image"
        },
    ]
}
