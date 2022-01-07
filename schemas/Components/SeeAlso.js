// Embed.js
import { MdAddLink } from "react-icons/md"
// import EmbedPreview from '../../components/EmbedPreview'

export default {
    title: 'See also',
    name: 'seeAlso',
    type: 'object',
    icon: MdAddLink,
    fields: [
        {
            title: 'Internal links',
            name: 'internalLinks',
            type: 'array',
            of: [
                {
                    title: 'Link',
                    name: 'link',
                    type: 'reference',
                    to: [{ type: 'person' }, { type: 'note' }, { type: 'news' }, { type: 'press' }, { type: 'journalPost' }, { type: 'program' }, { type: 'project' }, { type: 'videoPost' }, { type: 'event' }]
                },
            ]
        },
        {
            title: 'External links',
            name: 'externalLinks',
            type: 'array',
            of: [
                {
                    title: 'Link',
                    name: 'link',
                    type: 'object',
                    fields: [
                        {
                            title: 'Link text',
                            name: 'linkText',
                            type: 'string',
                        },
                        {
                            title: 'Link URL',
                            name: 'linkUrl',
                            type: 'url',
                        }
                    ]
                },
            ]
        }
    ],
}