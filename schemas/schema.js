// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// __ COMPONENTS
import contentEditor from './components/ContentEditor'
import simpleEditor from './components/SimpleEditor'
import embedBlock from './components/Embed'
import feedItem from './components/FeedItem'
// import videoBlock from './components/Video'
import audioBlock from './components/Audio'
import dividerBlock from './components/Divider'
import columnsBlock from './components/Columns'
import donationWidget from './components/DonationWidget'
import applicationButton from './components/ApplicationButton'
import Faq from './components/Faq'
// ...
import avatar from "./Avatar"
import room from "./Room"
import zone from "./Zone"
import exob from './ExOb'
import portal from "./Portal"
import user from "./User"
import event from "./Event"
import streams from "./Streams"
import videoLibrary from "./VideoLibrary"
import bulletinBoardSettings from "./BulletinBoardSettings"
import onboardingTutorial from "./OnboardingTutorial"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // COMPONENTS
    contentEditor,
    simpleEditor,
    embedBlock,
    feedItem,
    audioBlock,
    dividerBlock,
    columnsBlock,
    donationWidget,
    applicationButton,
    Faq,
    // ...
    avatar,
    room,
    exob,
    user,
    zone,
    portal,
    streams,
    event,
    videoLibrary,
    bulletinBoardSettings,
    onboardingTutorial
  ]),
})
