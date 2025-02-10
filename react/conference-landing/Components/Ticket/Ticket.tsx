import { useCssHandles } from "vtex.css-handles"
import { HANDLES } from "./handles"

import { useEffect, useState } from "react"
import type { TicketProps } from "../../interface"
import CruceLogo from "../../../assets/CruceLogo"
import UserIcon from "../../../assets/UserIcon"
import TicketWrapper from "./TicketWrapper"
import SponsorsList from "./SponsorsList"
import { useRenderSession } from "vtex.session-client"
const Ticket: VTEXCustomComponent<TicketProps> = ({ date, name, sponsorsList, themesList }) => {
  const { handles: css } = useCssHandles(HANDLES)
  const [index, setIndex] = useState(0)
  const { loading, session, error } = useRenderSession()

  console.log("session", { loading, session, error })

  useEffect(() => {
    if (themesList.length <= 1) return
    let timeout

    if (index < themesList.length) {
      timeout = setTimeout(() => {
        setIndex(prevIndex => prevIndex + 1)
      }, 6000)
    } else {
      setIndex(0)
    }

    return () => clearTimeout(timeout)
  }, [index, themesList])

  const currentTheme = themesList[index]
  const confDate = date && new Date(date)
  const formattedDate =
    confDate && confDate.toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" })
  const formattedTime =
    confDate && confDate.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit", hour12: false })

  // @ts-ignore
  const ticketId = loading || error ? "------" : session.namespaces.profile.id?.value?.slice(-6)

  return (
    <TicketWrapper ticketColor={currentTheme?.ticketColor}>
      <div className={`flex justify-center items-center ${css.ticketNumberContainer}`}>#{ticketId}</div>
      <div className={`flex justify-between relative ${css.ticketMainContent}`}>
        {currentTheme ? (
          <img src={currentTheme.img} alt={currentTheme.alt} className={`absolute ${css.themeLogo}`} />
        ) : (
          <></>
        )}
        <div className={`flex flex-column justify-between ${css.ticketLeftContent}`}>
          <div className={css.confInfo}>
            <h4 className={css.confTitle}>#{name}</h4>
            <div className={css.confPrice}>Evento gratuito</div>
          </div>
          <SponsorsList sponsorsList={sponsorsList} />
        </div>
        <div className={`flex flex-column justify-between items-end ${css.ticketRightContent}`}>
          <CruceLogo />
          {date ? (
            <div className={css.dateContainer}>
              <div className={css.confDate}>{formattedDate.replace(/de/g, "")}</div>
              <div className={css.confTime}>{formattedTime}</div>
            </div>
          ) : (
            <></>
          )}
          {loading || error ? (
            <></>
          ) : (
            <div className={css.emailContainer}>
              {/* @ts-ignore */}
              <UserIcon /> {session?.namespaces?.profile?.email?.value}
            </div>
          )}
        </div>
      </div>
    </TicketWrapper>
  )
}

export default Ticket
