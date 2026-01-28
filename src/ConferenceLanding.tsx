import AnimatedText from "./components/AnimatedText"
import Ticket from "./components/Ticket/Ticket"
import StarsGenerator from "./components/StarsGenerator"

const ConferenceLanding = () => {
  const name = "CRUCEConf"
  const description =
      "Disfrutá de increíbles charlas con expertos de la industria, sorteos exclusivos y una experiencia llena de innovación e inspiración  🚀",
    sponsorsList = [
      {
        img: "",
        alt: "Vtex",
      },
    ]
  const themesList = [
    {
      img: "",
      alt: "React",
      ticketColor: "#c1c1c1",
    },
  ]
  const date = new Date()

  return (
    <div className="conferenceLanding">
      <StarsGenerator amount={100} />
      <AnimatedText text={description} />
      <Ticket name={name} date={date} sponsorsList={sponsorsList} themesList={themesList} />
    </div>
  )
}

export default ConferenceLanding
