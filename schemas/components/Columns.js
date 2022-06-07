// Columns.js
import { MdViewColumn } from "react-icons/md"
import ColumnsPreview from '../../components/ColumnsPreview'

export default {
    title: 'Columns',
    name: 'columnsBlock',
    type: 'object',
    icon: MdViewColumn,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Column content',
            name: 'columnContent',
            type: 'contentEditor',
        },
    ],
    preview: {
        select: {
            title: 'title',
            columnContent: 'columnContent'
        },
        component: ColumnsPreview
    }
}