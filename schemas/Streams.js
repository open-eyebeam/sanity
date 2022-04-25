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
                        validation: Rule => Rule.required(),
                    },
                    {
                        title: "Room or Zone",
                        name: "parentArea",
                        type: "reference",
                        to: [{ type: "room" }, { type: "zone" }],
                        validation: Rule => Rule.required(),
                    },
                    {
                        title: "Stream type",
                        name: "streamType",
                        type: "string",
                        options: {
                            list: [
                                { title: "Video", value: "video" },
                                { title: "Audio", value: "audio" }
                            ],
                        },
                    },
                    {
                        title: "URL",
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
