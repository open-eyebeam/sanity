import React from "react"

export default {
    title: "Area",
    name: "area",
    type: "document",
    // __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
    fields: [
      {
        title: "Title",
        name: "title",
        type: "string",
        validation: Rule => Rule.required(),
      },
      {
        title: "Area index",
        name: "areaIndex",
        description: "Do not edit",
        type: "number",
        validation: Rule => Rule.required(),
      },
      {
        title: "Color",
        name: "color",
        type: "colors",
        options: {
          borderradius: {
            outer: "100%",
            inner: "100%"
          },
          list: [
            { title: "Red", value: "#FF0000" },
            { title: "Green", value: "#00FF00" },
            { title: "Blue", value: "#0000FF" },
            { title: "Yellow", value: "#FFFF00" },
            { title: "Magenta", value: "#FF00FF" },
            { title: "Cyan", value: "#00FFFF" },
            { title: "Purple", value: "#880088" },
            { title: "Turquoise", value: "#008888" }
          ]
        }
      },
      {
        title: "Information card",
        name: "informationCard",
        type: "reference",
        to: [{ type: "card" }],
      },
      {
        title: "Video room",
        name: "videoRoom",
        type: "string",
        options: {
          list: [
            { title: "Main", value: "main" },
            { title: "Support", value: "support" },
          ],
        },
      },
      {
        title: "Audio room",
        name: "audioRoom",
        type: "string",
        options: {
          list: [
            { title: "1", value: "1" },
            { title: "2", value: "2" },
            { title: "3", value: "3" },
            { title: "4", value: "4" },
            { title: "5", value: "5" },
            { title: "6", value: "6" },
            { title: "7", value: "7" },
          ],
        },
      },
      {
        title: "Text room",
        name: "textRoom",
        type: "string",
        options: {
          list: [
            { title: "1", value: "1" },
            { title: "2", value: "2" },
            { title: "3", value: "3" },
            { title: "4", value: "4" },
          ],
        },
      },
      {
        title: "Area description (Metadata)",
        name: "metaDescription",
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
      {
        title: "Slug",
        name: "slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 200,
        },
        validation: (Rule) => Rule.required(),
      },
    ],
    preview: {
        select: {
          title: "title",
          videoRoom: "videoRoom",
          audioRoom: "audioRoom",
          textRoom: "textRoom",
          color: "color",
        },
        prepare(selection) {
          const { title, videoRoom, audioRoom, textRoom, color } = selection
            const settings = (videoRoom ? videoRoom.toUpperCase() : '×') + ' / ' + (audioRoom ? audioRoom : '×')  + ' / ' + (textRoom ? textRoom : '×') 

            const divStyle = {
                backgroundColor: color,
                height: "100%",
                width: "100%",
                borderRadius: '100%'
              };

            const ColorIcon = () => <div style={divStyle}/>
              
          return {
            title: title,
            subtitle: settings,
            media: ColorIcon
          }
        },
      },
  }
  