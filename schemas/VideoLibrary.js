// ICONS
import { MdStream } from "react-icons/md";

export default {
  title: "Event Library",
  name: "videoLibrary",
  type: "document",
  icon: MdStream,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Start Date",
      name: "startDate",
      type: "datetime",
      hidden: ({ document }) => document?.importEvent,
      validation: (Rule) => Rule.required(),
    },

    {
      title: "Active videos",
      name: "activeVideos",
      type: "array",
      of: [
        {
          type: "object",
          icon: MdStream,
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              title: "Description",
              name: "description",
              type: "text",
            },
            {
              title: "Active",
              name: "active",
              type: "boolean",
              initialValue: false,
            },
            {
              title: "Rooms",
              name: "rooms",
              type: "array",
              of: [
                {
                  title: "room",
                  name: "room",
                  type: "reference",
                  to: [{ type: "room" }],
                },
              ],
            },
            {
              title: "URL",
              description:
                "URL for a video hosted by peertube, youtube or vimeo.",
              name: "videoUrl",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
            {
              title: "Date",
              name: "startDate",
              type: "datetime",
              validation: (Rule) => Rule.required(),
            },
            {
              title: "Image",
              name: "image",
              type: "image",
              hidden: ({ parent }) => parent?.streamType !== "audio",
            },
          ],
          preview: {
            select: {
              title: "title",
              active: "active",
            },
            prepare(selection) {
              const { title, active } = selection;
              return {
                title: title,
                subtitle: active ? "Active" : "Inactive",
              };
            },
          },
        },
      ],
    },
  ],
};
