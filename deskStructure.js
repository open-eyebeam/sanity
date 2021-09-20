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
  MdHome,
  MdImage,
  MdNote,
  MdLayers,
  MdMessage,
  MdBook,
  MdVolumeUp,
  MdPalette,
  MdHelp
} from "react-icons/md"

export default () =>
  S.list()
    .title("Open Eyebeam")
    .items([
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
      .title("Users")
      .icon(MdAccountCircle)
      .child(
        S.documentList()
          .title("Users")
          .showIcons(true)
          .filter("_type == $type")
          .params({ type: "user" })
          .defaultOrdering([
            { field: "name", direction: "asc" }
          ])
      ),
    S.listItem()
      .title("Avatars")
      .icon(MdAccountCircle)
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
      .title("Maps")
      .icon(MdMap)
      .child(
        S.documentList()
          .title("Maps")
          .showIcons(true)
          .filter("_type == $type")
          .params({ type: "map" })
      ),
    S.listItem()
      .title("Rooms")
      .icon(MdHome)
      .child(
        S.documentList()
          .title("Rooms")
          .showIcons(true)
          .filter("_type == $type")
          .params({ type: "room" })
      ),
    S.listItem()
      .title("Objects")
      .icon(MdBook)
      .child(
        S.documentList()
          .title("Objects")
          .showIcons(true)
          .filter("_type == $type")
          .params({ type: "exob" })
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
