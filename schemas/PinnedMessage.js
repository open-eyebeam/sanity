export default {
    title: "Pinned chat message",
    name: "pinnedMessage",
    type: "document",
    __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
    fields: [
      // {
      //   title: "Title",
      //   name: "title",
      //   type: "string",
      //   validation: (Rule) => Rule.required(),
      // },
      {
        title: "Show pinned message",
        name: "showPinnedMessage",
        type: "boolean",
      },
      {
        title: "Message",
        name: "content",
        type: "simpleEditor",
      },
    ],
  }
  