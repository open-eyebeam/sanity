export default {
  title: "Active streams",
  name: "activeStreams",
  type: "document",
    // __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Active stream (Main area)",
      name: "mainStream",
      type: "url",
    },
    {
      title: "Active stream event",
      name: "mainStreamEvent",
      type: "reference",
      to: [{ type: "event" }],
    }
  ],
}
