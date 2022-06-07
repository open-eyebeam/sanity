import React from 'react'

// ICONS
import {
    MdAccountCircle,
} from "react-icons/md"


// const personRender = props => (
//     <span style={{ background: '#dfddd7', color: '#221f20', borderBottom: 'none' }}>{props.children}</span>
// )

export default {
    type: 'object',
    name: 'simpleEditor',
    fields: [
        {
            title: 'Simple editor',
            name: 'content',
            type: 'array',
            options: {
                isHighlighted: true
            },
            of: [
                {
                    type: 'block',
                    styles: [],
                    lists: [],
                    marks: {
                        decorators: [
                            {
                                title: 'Strong',
                                value: 'strong'
                            },
                            {
                                title: 'Emphasis',
                                value: 'em'
                            },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'string'
                                    }
                                ]
                            },
                            // {
                            //     title: 'Person',
                            //     name: 'person',
                            //     type: 'object',
                            //     blockEditor: {
                            //         icon: MdAccountCircle,
                            //         render: personRender
                            //     },
                            //     fields: [
                            //         {
                            //             title: 'Person',
                            //             name: 'link',
                            //             type: 'reference',
                            //             to: [{ type: 'person' }]
                            //         },
                            //     ]
                            // },
                        ]
                    },
                },
            ]
        },
    ]
}