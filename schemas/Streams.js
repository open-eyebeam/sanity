// ICONS
import { MdStream } from "react-icons/md"

export default {
    title: "Streams",
    name: "streams",
    type: "document",
    icon: MdStream,
    fields: [
        {
            title: 'Active streams',
            name: 'activeStreams',
            type: 'array',
            of: [{
                type: 'object',
                icon: MdStream,
                fields: [
                    {
                        title: 'Title',
                        name: 'title',
                        type: 'string',
                    },
                    {
                        title: "Room or Zone",
                        name: "parentArea",
                        type: "reference",
                        to: [{ type: "room" }, { type: "zone" }],
                        validation: Rule => Rule.required(),
                    },
                    {
                        title: "Video url",
                        description: "URL for a stream hosted by peertube, youtube or vimeo.",
                        name: "videoUrl",
                        type: "url",
                        validation: Rule => Rule.required(),
                    },
                ]
            }]
        },
    ]
}
