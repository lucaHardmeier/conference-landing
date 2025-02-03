import { HANDLES } from "./handles"
import type { ConferenceProps } from "./interface"
import { useCssHandles } from "vtex.css-handles"

const ConferenceLanding: VTEXCustomComponent<ConferenceProps> = ({
  name,
  description,
  date,
  themesLists,
}: ConferenceProps) => {
  const { handles: css } = useCssHandles(HANDLES)

  return <div></div>
}

export default ConferenceLanding

ConferenceLanding.defaultProps = {
  name: "CRUCEConf",
  description: "Disfrutá de increíbles charlas con expertos de la industria, sorteos",
  date: "",
  themesLists: [
    {
      img: "6053",
      alt: "React",
      ticketColor: "",
    },
  ],
}

ConferenceLanding.schema = {
  title: "Landing de conferencia",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Nombre de la conferencia",
      default: "CRUCEConf",
    },
    description: {
      type: "string",
      title: "Descripción de la conferencia",
      widget: {
        "ui:widget": "textarea",
      },
      default: "Disfrutá de increíbles charlas con expertos de la industria, sorteos",
    },
    date: {
      title: "Fecha de la conferencia",
      type: "string",
      widget: {
        "ui:widget": "datetime",
      },
    },
    themesList: {
      title: "Lista de temas",
      type: "array",
      default: [],
      items: {
        type: "object",
        title: "Tema de ticket",
        properties: {
          img: {
            type: "string",
            title: "Imágendel ticket",
            widget: {
              "ui:widget": "image-uploader",
            },
          },
          alt: {
            type: "string",
            title: "Nombre del logo",
            default: "React",
          },
          ticketColor: {
            title: "Color del ticket",
            type: "string",
            widget: {
              "ui:widget": "color",
            },
          },
        },
      },
    },
  },
}
