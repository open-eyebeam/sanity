// ICONS
import { MdVideocam } from "react-icons/md"
import VideoPreview from '../../components/VideoPreview'

export default {
    name: 'videoBlock',
    type: 'object',
    title: 'Video',
    icon: MdVideocam,
    fields: [
        {
            name: 'videoPost',
            title: 'Video Post',
            type: 'reference',
            to: [{ type: 'videoPost' }]
        },
    ],
    preview: {
        select: {
            title: 'videoPost.title'
        },
        component: VideoPreview
    }
}