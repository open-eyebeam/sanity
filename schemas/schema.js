// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// Schemas
// import page from "./Page"
// import card from "./Card"
// import event from "./Event"
// import exhibition from "./Exhibition"
// import caseStudyEmergent from "./CaseStudyEmergent"
// import caseStudyExhibition from "./CaseStudyExhibition"
// import audioInstallation from "./AudioInstallation"
// import seminar from "./Seminar"
// import gfxCaseStudySprite from "./CaseStudySprite"
// import graphicsSettings from "./GraphicsSettings"
// import activeStreams from "./ActiveStreams"
// import map from "./Map"
// import landmark from "./Landmark"
// import npc from "./NPC"
// import pinnedMessage from "./PinnedMessage"
// import audioRoomNames from "./AudioRoomNames"
// import tutorialCard from "./TutorialCard"
// import globalSettings from "./GlobalSettings"

// PRIMITIVES
// import embedBlock from "./Primitives/Embed"
// import videoBlock from "./Primitives/Video"
// import audioBlock from "./Primitives/Audio"
// import pdfBlock from "./Primitives/Pdf"
// import fileBlock from "./Primitives/File"
// import imageBlock from "./Primitives/ImageBlock"
// import contentEditor from "./Primitives/ContentEditor"
// import simpleEditor from "./Primitives/SimpleEditor"
// __ COMPONENTS
import contentEditor from './components/ContentEditor'
import simpleEditor from './components/SimpleEditor'
import embedBlock from './components/Embed'
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
  ]),
})
