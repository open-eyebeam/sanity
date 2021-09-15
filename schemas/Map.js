// CUSTOM INPUT
import LoadGrid from "../components/LoadGrid"

// ICONS
import {
  MdMap
} from "react-icons/md"

export default {
  title: "Map",
  name: "map",
  type: "document",
  icon: MdMap,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Main map texture",
      description: "4000x4000 pixel png",
      name: "mainImage",
      type: "image",
      validation: Rule => Rule.required(),
    },
    {
      title: "Pathfinding grid",
      description: "400x400 pixel png",
      name: "pathfindingGrid",
      type: "image",
      validation: Rule => Rule.required(),
    },
    {
      title: "Load grid",
      name: "fetch",
      type: "string",
      inputComponent: LoadGrid,
    },
  ],
}
