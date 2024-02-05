import moment from "moment"
export default {
  name: 'feedItem',
  type: 'object',
  title: 'Post',
  fields: [
          {
            title: "Date",
            name: "title",
            type: "string",
            initialValue: moment(new Date().toISOString()).format("dddd, MMMM Do YYYY, HH:mm")
          },
          {
              title: "Date",
              name: "createdDate",
              type: "datetime",
              initialValue: (new Date()).toISOString(),
              validation: (Rule) => Rule.required(),
              hidden: true
            },
            {
              title: 'Content', 
              name: "content", 
              type: 'contentEditor'
            }
  ]
}
