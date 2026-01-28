import { useEffect, useState, type FC } from "react"
import type { TicketProps } from "../../types/interface"
import CruceLogo from "../../assets/CruceLogo"
import UserIcon from "../../assets/UserIcon"
import TicketWrapper from "./TicketWrapper"
import SponsorsList from "./SponsorsList"

const Ticket: FC<TicketProps> = ({ date, name, sponsorsList, themesList }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (themesList.length <= 1) return
    let timeout: any

    if (index < themesList.length) {
      timeout = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1)
      }, 6000)
    } else {
      setIndex(0)
    }

    return () => clearTimeout(timeout)
  }, [index, themesList])

  const currentTheme = themesList[index]
  const confDate = date && new Date(date)
  const formattedDate =
    confDate &&
    confDate.toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  const formattedTime =
    confDate &&
    confDate.toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })

  const ticketId = 6046542

  return (
    <TicketWrapper ticketColor={currentTheme?.ticketColor}>
      <div
        className={`flex justify-center items-center ${"ticketNumberContainer"}`}
      >
        #{ticketId}
      </div>
      <div className={`flex justify-between relative ${"ticketMainContent"}`}>
        {currentTheme ? (
          <img
            src={currentTheme.img}
            alt={currentTheme.alt}
            className={`absolute ${"themeLogo"}`}
          />
        ) : (
          <></>
        )}
        <div
          className={`flex flex-column justify-between ${"ticketLeftContent"}`}
        >
          <div className={"confInfo"}>
            <h4 className={"confTitle"}>#{name}</h4>
            <div className={"confPrice"}>Evento gratuito</div>
          </div>
          <SponsorsList sponsorsList={sponsorsList} />
        </div>
        <div
          className={`flex flex-column justify-between items-end ${"ticketRightContent"}`}
        >
          <CruceLogo />
          {date ? (
            <div className={"dateContainer"}>
              <div className={"confDate"}>
                {formattedDate?.replace(/de/g, "")}
              </div>
              <div className={"confTime"}>{formattedTime}</div>
            </div>
          ) : (
            <></>
          )}
          <div className={"emailContainer"}>
            <UserIcon />
          </div>
        </div>
      </div>
    </TicketWrapper>
  )
}

export default Ticket
