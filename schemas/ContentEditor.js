import React from "react"

// ICONS
import { MdImage } from "react-icons/md"

const noteRender = props => (
  <p style={{ fontSize: "0.8em" }}>{props.children}</p>
)

export default {
  type: "object",
  name: "contentEditor",
  options: { collapsible: false, collapsed: false },
  fields: [
    {
      title: "Content editor",
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
            {
              title: "Note",
              value: "note",
              blockEditor: {
                render: noteRender,
              },
            },
          ],
          marks: {
            decorators: [
              {
                title: "Strong",
                value: "strong",
              },
              {
                title: "Emphasis",
                value: "em",
              },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "string",
                  }
                ],
              },
            ],
          },
        },
        {
          type: "image",
          icon: MdImage,
          fields: [
            {
              title: "Caption",
              name: "caption",
              type: "simpleEditor",
              options: {
                isHighlighted: true,
              },
            },
            {
              name: "attribution",
              type: "string",
              title: "Attribution",
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
        {
          type: "videoBlock",
        },
        {
          type: "audioBlock",
        },
        {
          type: "embedBlock",
        },
      ],
    },
  ],
}
