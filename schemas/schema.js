// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// Schemas
import page from "./Page"
import card from "./Card"
import event from "./Event"
import exhibition from "./Exhibition"
// import caseStudyEmergent from "./CaseStudyEmergent"
import caseStudyExhibition from "./CaseStudyExhibition"
import audioInstallation from "./AudioInstallation"
import seminar from "./Seminar"
import participant from "./Participant"

import contentEditor from "./ContentEditor"
import simpleEditor from "./SimpleEditor"

import embedBlock from "./Embed"
import videoBlock from "./Video"
import audioBlock from "./Audio"
import pdfBlock from "./Pdf"
import fileBlock from "./File"
import imageBlock from "./ImageBlock"

import gfxAvatar from "./Avatar"
import gfxCaseStudySprite from "./CaseStudySprite"
import gfxMap from "./Map"
import landmark from "./Landmark"
import npc from "./NPC"
import graphicsSettings from "./GraphicsSettings"
import area from "./Area"

import activeStreams from "./ActiveStreams"
import globalSettings from "./GlobalSettings"
import pinnedMessage from "./PinnedMessage"
import audioRoomNames from "./AudioRoomNames"
import tutorialCard from "./TutorialCard"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    graphicsSettings,
    gfxAvatar,
    gfxMap,
    gfxCaseStudySprite,
    audioInstallation,
    landmark,
    page,
    event,
    // caseStudyEmergent,
    caseStudyExhibition,
    seminar,
    participant,
    contentEditor,
    simpleEditor,
    embedBlock,
    videoBlock,
    audioBlock,
    pdfBlock,
    fileBlock,
    imageBlock,
    activeStreams,
    npc,
    globalSettings,
    area,
    card,
    pinnedMessage,
    audioRoomNames,
    exhibition,
    tutorialCard,
  ]),
})
