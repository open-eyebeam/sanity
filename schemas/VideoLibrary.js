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
            title: 'Start Date',
            name: 'startDate',
            type: 'datetime',
            hidden: ({ document }) => document?.importEvent
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
              title: "Active",
              name: "active",
              type: "boolean",
              initialValue: false,
            },
            {
              title: "URL",
              description: "URL for a video hosted by peertube, youtube or vimeo.",
              name: "videoUrl",
              type: "url",
            },
            {
              title: "Date",
              name: "startDate",
              type: "datetime",
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
