// Divider.js
import { MdHorizontalRule } from "react-icons/md"
import DividerPreview from '../../components/DividerPreview'

export default {
    title: 'Divider',
    name: 'dividerBlock',
    type: 'object',
    icon: MdHorizontalRule,
    fields: [
        {
            name: 'url',
            type: 'url',
            title: 'URL',
            hidden: true
        }
    ],
    preview: {
        component: DividerPreview
    }
}