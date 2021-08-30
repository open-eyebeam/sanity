import S from "@sanity/desk-tool/structure-builder"

// ICONS
import {
  MdGamepad,
  MdCast,
  MdViewAgenda,
  MdAudiotrack,
  MdShoppingBasket,
  MdMyLocation,
  MdCollections,
  MdSettings,
  MdMap,
  MdAccountCircle,
  MdSms,
  MdEvent,
  MdHome,
  MdImage,
  MdNote,
  MdLayers,
  MdMessage,
  MdVolumeUp,
  MdPalette,
  MdHelp
} from "react-icons/md"

export default () =>
  S.list()
    .title("TSoaP")
    .items([
      S.listItem()
      .title("Global settings")
      .icon(MdSettings)
      .child(
        S.editor()
          .id("global-settings")
          .title("Global settings")
          .schemaType("globalSettings")
          .documentId("global-settings")
      ),
      S.listItem()
      .title("Tutorial card")
      .icon(MdHelp)
      .child(
        S.editor()
          .id("tutorial-card")
          .title("Tutorial card")
          .schemaType("tutorialCard")
          .documentId("tutorial-card")
      ),
      S.listItem()
        .title("Active streams")
        .icon(MdCast)
        .child(
          S.editor()
            .id("active-streams")
            .title("Active streams")
            .schemaType("activeStreams")
            .documentId("active-streams")
        ),
      S.listItem()
        .title("Pinned message")
        .icon(MdMessage)
        .child(
          S.editor()
            .id("pinned-message")
            .title("Pinned message")
            .schemaType("pinnedMessage")
            .documentId("pinned-message")
        ),
        S.listItem()
        .title("Audioroom names")
        .icon(MdVolumeUp)
        .child(
          S.editor()
            .id("audioroom-names")
            .title("Audioroom names")
            .schemaType("audioRoomNames")
            .documentId("audioroom-names")
        ),
      S.divider(),
      // S.listItem()
      //   .title("Case Studies (Emergent)")
      //   .icon(MdShoppingBasket)
      //   .child(
      //     S.documentList()
      //       .title("Case Studies (Emergent)")
      //       .showIcons(true)
      //       .filter("_type == $type")
      //       .params({ type: "caseStudyEmergent" })
      //       .defaultOrdering([
      //         { field: "title", direction: "asc" }
      //       ])
      //   ),
      S.listItem()
        .title("Projects")
        .icon(MdHome)
        .child(
          S.documentList()
            .title("Projects")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "caseStudyExhibition" })
            .defaultOrdering([
              { field: "title", direction: "asc" }
            ])
        ),
      S.listItem()
        .title("Audio Installations")
        .icon(MdAudiotrack)
        .child(
          S.documentList()
            .title("Audio Installations")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "audioInstallation" })
            .defaultOrdering([
              { field: "title", direction: "asc" }
            ])
        ),
      S.listItem()
        .title("Events")
        .icon(MdEvent)
        .child(
          S.documentList()
            .title("Events")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "event" })
            .defaultOrdering([
              { field: "startDate", direction: "asc" },
            ])
        ),
      S.listItem()
        .title("Exhibitions")
        .icon(MdPalette)
        .child(
          S.documentList()
            .title("Exhibitions")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "exhibition" })
            .defaultOrdering([
              { field: "title", direction: "asc" }
            ])
        ),
      S.listItem()
        .title("Seminars")
        .icon(MdSms)
        .child(
          S.documentList()
            .title("Seminars")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "seminar" })
            .defaultOrdering([
              { field: "title", direction: "asc" }
            ])
        ),
      S.listItem()
        .title("Participants")
        .icon(MdAccountCircle)
        .child(
          S.documentList()
            .title("Participants")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "participant" })
            .defaultOrdering([
              { field: "name", direction: "asc" }
            ])
        ),
      S.listItem()
        .title("Cards")
        .icon(MdViewAgenda)
        .child(
          S.documentList()
            .title("Cards")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "card" })
            .defaultOrdering([
              { field: "title", direction: "asc" }
            ])
        ),
      S.listItem()
        .title("Pages")
        .icon(MdNote)
        .child(
          S.documentList()
            .title("Pages")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "page" })
            .defaultOrdering([
              { field: "title", direction: "asc" }
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Graphics")
        .icon(MdCollections)
        .child(
          S.list()
            .title("Graphics")
            .items([
              S.listItem()
                .title("Avatars")
                .icon(MdImage)
                .child(
                  S.documentList()
                    .title("Avatars")
                    .showIcons(true)
                    .filter("_type == $type")
                    .params({ type: "avatar" })
                    .defaultOrdering([
                      { field: "title", direction: "asc" }
                    ])
                ),
              S.listItem()
                .title("Case Study Sprites")
                .icon(MdHome)
                .child(
                  S.documentList()
                    .title("Case Study Sprites")
                    .showIcons(true)
                    .filter("_type == $type")
                    .params({ type: "caseStudySprite" })
                    .defaultOrdering([
                      { field: "title", direction: "asc" }
                    ])
                ),
              S.listItem()
                .title("Areas")
                .icon(MdLayers)
                .child(
                  S.documentList()
                    .title("Areas")
                    .showIcons(true)
                    .filter("_type == $type")
                    .params({ type: "area" })
                ),
              S.listItem()
                .title("Maps")
                .icon(MdMap)
                .child(
                  S.documentList()
                    .title("Maps")
                    .showIcons(true)
                    .filter("_type == $type")
                    .params({ type: "gfxMap" })
                ),
              S.listItem()
                .title("Landmarks")
                .icon(MdMyLocation)
                .child(
                  S.documentList()
                    .title("Landmarks")
                    .showIcons(true)
                    .filter("_type == $type")
                    .params({ type: "landmark" })
                    .defaultOrdering([
                      { field: "title", direction: "asc" }
                    ])
                ),
              S.listItem()
                .title("NPCs")
                .icon(MdGamepad)
                .child(
                  S.documentList()
                    .title("NPCs")
                    .showIcons(true)
                    .filter("_type == $type")
                    .params({ type: "npc" })
                ),
              S.listItem()
                .title("Graphics settings")
                .icon(MdSettings)
                .child(
                  S.editor()
                    .id("config")
                    .title("Graphics settings")
                    .schemaType("graphicsSettings")
                    .documentId("graphics-settings")
                ),
            ])
        ),
    ])
