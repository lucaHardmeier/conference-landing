import { useCallback } from "react"
import { HANDLES } from "./handles"
import type { ConferenceProps, Sponsor, Theme } from "./interface"
import { useCssHandles } from "vtex.css-handles"
import AnimatedText from "./Components/AnimatedText"
import Ticket from "./Components/Ticket"

const ConferenceLanding: VTEXCustomComponent<ConferenceProps> = ({
  name,
  description,
  date,
  themesList = [] as Theme[],
  sponsorsList = [] as Sponsor[],
  HeroTitle,
}) => {
  const { handles: css } = useCssHandles(HANDLES)
  const MemoizedTitleComponent = useCallback(HeroTitle, [])

  return (
    <div className={css.conferenceLanding}>
      <MemoizedTitleComponent />
      <AnimatedText text={description} />
      <Ticket name={name} date={date} sponsorsList={sponsorsList} themesList={themesList} />
    </div>
  )
}

export default ConferenceLanding

ConferenceLanding.defaultProps = {
  name: "CRUCEConf",
  description:
    "Disfrutá de increíbles charlas con expertos de la industria, sorteos exclusivos y una experiencia llena de innovación e inspiración  🚀",
  date: "",
  sponsorsList: [
    {
      img: "",
      alt: "Vtex",
    },
  ],
  themesList: [
    {
      img: "",
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
    sponsorsList: {
      title: "Lista de sponsors",
      type: "array",
      default: [],
      items: {
        type: "object",
        title: "Sponsor",
        properties: {
          alt: {
            type: "string",
            title: "Nombre",
            default: "React",
          },
          img: {
            type: "string",
            title: "Logo",
            widget: {
              "ui:widget": "image-uploader",
            },
          },
        },
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
            title: "Imágen del ticket",
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
