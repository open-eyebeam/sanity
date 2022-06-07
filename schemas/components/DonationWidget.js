// DonationWidget.js
import { MdPayment } from "react-icons/md"
import DonationPreview from '../../components/DonationPreview'


export default {
    title: 'Donation widget',
    name: 'donationWidget',
    type: 'object',
    icon: MdPayment,
    fields: [
        {
            name: 'url',
            type: 'url',
            title: 'URL'
        }
    ],
    preview: {
        component: DonationPreview
    }
}