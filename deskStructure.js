import S from "@sanity/desk-tool/structure-builder"

// ICONS
import {
  MdAccountCircle,
  MdYard,
  MdBook,
  MdDoorFront,
  MdAdjust,
  MdBookmarkAdded
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
        .title('Portals')
        .icon(MdDoorFront)
        .child(
          S.list()
            .title("Portals")
            .items([
              S.listItem()
                .title('All portals')
                .icon(MdDoorFront)
                .child(
                  S.documentList()
                    .title('All portals')
                    // .defaultLayout('detail')
                    .filter('_type == $type')
                    .params({ type: 'portal' })
                ),
              S.listItem()
                .title('Portals by Room')
                .icon(MdDoorFront)
                .child(
                  S.documentTypeList('room')
                    .title('Portals by Room')
                    .child(roomId =>
                      S.documentList()
                        .title('Portals by Room')
                        // .defaultLayout('detail')
                        .filter('_type == "portal" && $roomId== parentArea._ref')
                        .params({ roomId })
                    )
                ),
            ])
        ),
      S.listItem()
        .title('Objects')
        .icon(MdBook)
        .child(
          S.list()
            .title("Objects")
            .items([
              S.listItem()
                .title('All objects')
                .icon(MdBook)
                .child(
                  S.documentList()
                    .title('All objects')
                    // .defaultLayout('detail')
                    .filter('_type == $type')
                    .params({ type: 'exob' })
                ),
              S.listItem()
                .title('Objects by Room')
                .icon(MdBook)
                .child(
                  S.documentTypeList('room')
                    .title('Objects by Room')
                    .child(roomId =>
                      S.documentList()
                        .title('Objects by Room')
                        // .defaultLayout('detail')
                        .filter('_type == "exob" && $roomId== parentArea._ref')
                        .params({ roomId })
                    )
                ),
            ])
        ),
      S.listItem()
        .title('Zones')
        .icon(MdAdjust)
        .child(
          S.list()
            .title("Zones")
            .items([
              S.listItem()
                .title('All zones')
                .icon(MdAdjust)
                .child(
                  S.documentList()
                    .title('All zones')
                    // .defaultLayout('detail')
                    .filter('_type == $type')
                    .params({ type: 'zone' })
                ),
              S.listItem()
                .title('Zones by Room')
                .icon(MdAdjust)
                .child(
                  S.documentTypeList('room')
                    .title('Zones by Room')
                    .child(roomId =>
                      S.documentList()
                        .title('Zones by Room')
                        // .defaultLayout('detail')
                        .filter('_type == "zone" && $roomId== parentArea._ref')
                        .params({ roomId })
                    )
                ),
            ])
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
