export default {
  title: "Graphics settings",
  name: "graphicsSettings",
  type: "document",
  // __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Active avatars",
      name: "activeAvatars",
      type: "array",
      options: {
        editModal: "popover",
      },
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
      title: "Active map",
      name: "mapLink",
      type: "reference",
      to: [{ type: "gfxMap" }],
      validation: Rule => Rule.required(),
    },
    {
      title: "NPC Avatar",
      name: "npcAvatarLink",
      type: "reference",
      to: [{ type: "avatar" }],
    },
  ],
}
