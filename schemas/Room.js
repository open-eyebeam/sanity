// ICONS
import { MdYard } from "react-icons/md";
import DimensionInput from "../src/DimensionInput";
import AltInput from "../src/AltInput";

export default {
  title: "Room",
  name: "room",
  type: "document",
  icon: MdYard,
  groups: [
    {
      name: 'advanced',
      title: 'Advanced Settings'
    },
    {
      name: 'main',
      title: 'Main Settings',
      default: true
    }

  ],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: 'main'
    },
        {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
      group: 'advanced'
    },
    {
          title: "Feed",
          description: "A home for updates, messages, and ephemera during your fellowship",
          name: "feed",
          type: "array",
          of: [{'type': 'feedItem'}],
          group: 'main'
    },
    {
      title: "Background image",
      name: "backgroundImage",
      type: "image",
      hotspot: true,
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: "alt",
          name: "alt",
          type: "string",
          inputComponent: AltInput,
          validation: (Rule) => Rule.required(),
          options: {
            isHighlighted: true,
          },
        },
      ],
      group: 'main'
    },
    {
      title: "Artist Name",
      name: "artistName",
      type: "string",
      group: 'main'
    },
    {  
      title: "Artist Image",
      name: "artistImage",
      type: "image",
      group: 'main'
    },
    {
      title: "About the Artist",
      name: "artistBio",
      type: "simpleEditor",
      group: 'main'
    },
   {
      title: "Dimensions",
      name: "dimensions",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: "Width",
          description: "In grid units",
          name: "width",
          type: "number",
          inputComponent: DimensionInput,
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Height",
          description: "In grid units",
          name: "height",
          type: "number",
          inputComponent: DimensionInput,
          validation: (Rule) => Rule.required(),
        },
      ],
      group: 'main'
    },
     
    {
      title: "Introduction texts",
      name: "introductionTexts",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Text",
              name: "text",
              type: "simpleEditor",
            },
          ],
        },
      ],
      group: 'main'
    },
    {
      title: "Show Object Titles",
      name: "showTitles",
      description: "Show object and portal titles (toggle off to hide them)",
      type: "boolean",
      group: 'advanced'
    },
    {
      title: "Background video",
      description:
        "Uploading a file here will override the background image. Formats: mp4, webm",
      name: "backgroundVideo",
      type: "file",
      group: 'advanced'
    },
    {
      title: "Background link",
      description:
        "Adding a link here will override the background image and display the chosen link as an iframe",
      name: "backgroundLink",
      type: "url",
      group: 'advanced'
    },
    {
      title: "Disable iframe interaction",
      description:
        "This will prevent the background iframe from taking keyboard or mouse input",
      name: "iframeInteraction",
      type: "boolean",
      group: 'advanced'
    },
    {
      title: "Background sound",
      name: "backgroundSound",
      description: "Format: mp3",
      type: "file",
      group: 'main'
    },
    {
      title: "Autoplay background sound",
      name: "autoplay",
      description:
        "Automatically play the background sound when a user enters.",
      type: "boolean",
      group: 'advanced'
    },
    {
      title: "Feed Enabled",
      name: "feedEnabled",
      description: "If toggled, enables showing the feed in the room.",
      type: "boolean",
      initialValue: false,
      group: 'advanced'
    },

    {
      title: "Show Feed on Launch",
      name: "showFeedOnLaunch",
      description: "If toggled, this room will show the feed by default.",
      type: "boolean",
      group: 'advanced'
    },
    {
      title: "Main area",
      name: "mainArea",
      description: "If toggled, the user will start in this room",
      type: "boolean",
      group: 'advanced'
    },
    {
      title: "Chat settings",
      name: "chatSettings",
      type: "object",
      fields: [
        {
          title: "Disable chat",
          name: "disableChat",
          description: "This will turn chat off in this room.",
          type: "boolean",
          initialValue: false,
        },
        {
          title: "Use Discord Chat",
          name: "useDiscord",
          description:
            "If toggled, this room will use Eyebeam's Discord chat instead of the default chat.",
          type: "boolean",
          initialValue: false,
        },
        {
          title: "Discord Channel ID",
          name: "discordChannelId",
          description:
            "The ID of the channel that should be used for this room's Discord chat",
          type: "string",
          hidden: ({ parent }) => !parent?.useDiscord,
        },
      ],
      group: 'advanced'
    },
        {
      title: "Restricted",
      description: "Only show this room to users who are logged in",
      name: "restricted",
      type: "boolean",
      hidden: ({ document }) => document?.mainArea,
      group: 'advanced'
    },

  ],
};
