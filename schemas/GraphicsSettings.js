export default {
  title: "Graphics settings",
  name: "graphicsSettings",
  type: "document",
  // __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Main map",
      name: "mapLink",
      type: "reference",
      to: [{ type: "map" }],
      validation: Rule => Rule.required(),
    },
    {
      title: "Active avatars",
      name: "activeAvatars",
      type: "array",
      of: [
        {
          title: "Avatar",
          name: "avatarLink",
          type: "reference",
          to: [{ type: "avatar" }],
        },
      ],
      validation: Rule => Rule.unique(),
    },
    {
      title: "Active rooms",
      name: "activeRooms",
      type: "array",
      of: [
        {
          title: "Room",
          name: "roomLink",
          type: "reference",
          to: [{ type: "room" }],
        },
      ],
      validation: Rule => Rule.unique(),
    },
  ],
}
