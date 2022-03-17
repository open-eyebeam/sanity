import { MdEvent } from "react-icons/md"
import AsyncSelect from '../src/AsyncSelect'
import { format, parseISO, isFuture } from "date-fns"

const postHandler = (json) => {
    console.log(json.result)
    return json.result.map(post => ({
        title: post.title,
        value: post._id
    }))
}

export default {
    title: "Event",
    name: "event",
    type: "document",
    icon: MdEvent,
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Import event from main site",
            name: "importEvent",
            type: "boolean",
        },
        {
            title: "Import event from main website",
            name: "importedEvent",
            type: "string",
            inputComponent: AsyncSelect,
            options: {
                url: 'https://3knpqano.api.sanity.io/v2021-10-05/data/query/production?query=*[_type == "event"]',
                handler: postHandler
            },
            hidden: ({ document }) => !document?.importEvent
        },
        {
            title: 'Location',
            name: 'location',
            type: 'simpleEditor',
            hidden: ({ document }) => document?.importEvent
        },
        {
            title: 'Start Date',
            name: 'startDate',
            type: 'datetime',
            hidden: ({ document }) => document?.importEvent
        },
        {
            title: "Image",
            name: "mainImage",
            type: "image",
            hidden: ({ document }) => document?.importEvent
        },
        {
            title: "Content",
            name: "content",
            type: "contentEditor",
            hidden: ({ document }) => document?.importEvent
        },
    ],
    preview: {
        select: {
            title: 'title',
            date: 'startDate',
            image: 'mainImage',
        },
        prepare(selection) {
            const { title, date, image } = selection
            const formattedDate = date ? format(parseISO(date), "d-MM-yyyy HH:mm") : ''
            return {
                title: title,
                subtitle: formattedDate,
                media: image
            }
        },
    }
}
