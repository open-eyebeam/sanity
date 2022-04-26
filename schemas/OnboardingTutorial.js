// ICONS
import { MdHelp } from "react-icons/md"

export default {
    title: "Onboarding tutorial",
    name: "onboardingTutorial",
    type: "document",
    icon: MdHelp,
    fields: [
        {
            title: 'Tutorial slides',
            name: 'tutorialSlides',
            type: 'array',
            of: [{
                type: 'object',
                icon: MdHelp,
                fields: [
                    {
                        title: "Title",
                        name: "title",
                        type: "string",
                    },
                    {
                        title: "Content",
                        name: "content",
                        type: "contentEditor",
                    },
                ]
            }]
        },
    ]
}
