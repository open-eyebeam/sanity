// Faq.js
import { MdQuestionAnswer } from "react-icons/md"
import FaqPreview from '../../components/FaqPreview'

export default {
    title: 'FAQ',
    name: 'faq',
    type: 'object',
    icon: MdQuestionAnswer,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Q&A',
            name: 'questionAnswer',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'faqItem',
                    fields: [
                        {
                            title: 'Question',
                            name: 'question',
                            type: 'string'
                        },
                        {
                            title: 'Answer',
                            name: 'answer',
                            type: 'simpleEditor'
                        },
                    ]
                }
            ]
        },
    ],
    preview: {
        select: {
            title: 'title',
            questionAnswer: 'questionAnswer'
        },
        component: FaqPreview
    }
}