import S from "@sanity/desk-tool/structure-builder"

// ICONS
import {
  MdAccountCircle,
  MdYard,
  MdBook,
  MdDoorFront,
  MdAdjust
} from "react-icons/md"

export default () =>
  S.list()
    .title("Open Eyebeam")
    .items([
      S.listItem()
        .title("Rooms")
        .icon(MdYard)
        .child(
          S.documentList()
            .title("Rooms")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "room" })
        ),
      S.divider(),
      S.listItem()
        .title("Portals")
        .icon(MdDoorFront)
        .child(
          S.documentList()
            .title("Portals")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "portal" })
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
        .title("Zones")
        .icon(MdAdjust)
        .child(
          S.documentList()
            .title("Zones")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "zone" })
        ),
      S.divider(),
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
      // S.divider(),
      // S.listItem()
      //   .title("Graphics settings")
      //   .icon(MdSettings)
      //   .child(
      //     S.editor()
      //       .id("config")
      //       .title("Graphics settings")
      //       .schemaType("graphicsSettings")
      //       .documentId("graphics-settings")
      //   ),
    ])
