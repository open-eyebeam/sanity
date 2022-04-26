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
                        title: "Active",
                        name: "active",
                        type: "boolean",
                        initialValue: false
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
                        initialValue: 'video',
                    },
                    {
                        title: "URL",
                        description: "URL for a stream hosted by peertube, youtube or vimeo.",
                        name: "videoUrl",
                        type: "url",
                        hidden: ({ parent }) => parent?.streamType !== "video",
                    },
                    {
                        title: "Audio file",
                        name: "audioFile",
                        type: "file",
                        hidden: ({ parent }) => parent?.streamType !== "audio",
                    },
                    {
                        title: "Image",
                        name: "image",
                        type: "image",
                        hidden: ({ parent }) => parent?.streamType !== "audio",
                    },
                ],
                preview: {
                    select: {
                        title: 'title',
                        active: 'active'
                    },
                    prepare(selection) {
                        const { title, active } = selection
                        return {
                            title: title,
                            subtitle: active ? 'Active' : 'Inactive'
                        }
                    },
                }

            }]
        },
    ]
}
