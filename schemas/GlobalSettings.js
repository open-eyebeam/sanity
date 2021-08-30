export default {
    title: "Global settings",
    name: "globalSettings",
    type: "document",
      // __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
    fields: [
      {
        title: "Site title",
        name: "title",
        type: "string",
        validation: Rule => Rule.required(),
      },
      {
        title: "Welcome card",
        name: "welcomeCard",
        type: "reference",
        to: [{ type: "card" }],
      },
      {
        title: "Case study overview text",
        name: "caseStudyOverview",
        type: "simpleEditor"
      },
      {
        title: "Event overview text",
        name: "eventOverview",
        type: "simpleEditor"
      },
      {
        title: "Show archived events in frontpage preview",
        name: "showArchived",
        type: "boolean",
      },
      {
        title: "Disable text chat input",
        name: "disableChat",
        type: "boolean",
      },
      {
        title: "Site description (Metadata)",
        name: "siteDescription",
        type: "text"
      },
      {
        title: "Image (Metadata)",
        name: "metaImage",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ],
  }
  