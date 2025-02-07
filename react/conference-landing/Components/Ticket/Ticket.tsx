import { useCssHandles } from "vtex.css-handles"
import { HANDLES } from "./handles"

import { useEffect, useState } from "react"
import type { TicketProps } from "../../interface"
import type { OrderForm as OrderFormType } from "vtex.checkout-graphql"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import CruceLogo from "../../../assets/CruceLogo"
import UserIcon from "../../../assets/UserIcon"
import TicketWrapper from "./TicketWrapper"
import SponsorsList from "./SponsorsList"

const Ticket: VTEXCustomComponent<TicketProps> = ({ date, name, sponsorsList, themesList }) => {
  const { handles: css } = useCssHandles(HANDLES)
  const [index, setIndex] = useState(0)
  const { orderForm } = useOrderForm()
  const { clientProfileData, userProfileId } = orderForm as OrderFormType

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

  return (
    <TicketWrapper ticketColor={currentTheme?.ticketColor}>
      <div className={`flex justify-center items-center ${css.ticketNumberContainer}`}>#{userProfileId?.slice(-6)}</div>
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
          {clientProfileData?.email && (
            <div className={css.emailContainer}>
              <UserIcon /> {clientProfileData.email}
            </div>
          )}
        </div>
      </div>
    </TicketWrapper>
  )
}

export default Ticket
