import { useCssHandles } from "vtex.css-handles"
import { HANDLES } from "../handles"
import { TicketProps } from "../interface"
import CruceLogo from "../../assets/CruceLogo"
import { useEffect, useState } from "react"

const Ticket: VTEXCustomComponent<TicketProps> = ({ date, name, sponsorsList, themesList }) => {
  const { handles: css } = useCssHandles(HANDLES)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (themesList.length <= 1) return
    let timeout

    if (index <= themesList.length) {
      timeout = setTimeout(() => {
        setIndex(prevIndex => prevIndex + 1)
      }, 4000)
    } else {
      setIndex(0)
    }

    return () => clearTimeout(timeout)
  }, [index, themesList])

  return (
    <div className={css.ticketContainer}>
      <div className={css.ticketNumberContainer}>#110799</div>
      <div className={css.ticketMainContent}>
        {themesList[index] ? <img src={themesList[index].img} alt={themesList[index].alt} /> : <></>}
        <div className={css.ticketLeftContent}>
          <div className={css.confInfo}>
            <h4 className={css.confTitle}>{name}</h4>
            <div className={css.confPrice}>Evento gratuito</div>
          </div>
          {sponsorsList.length ? (
            <div className={css.sponsorsContainer}>
              <div>Gracias a:</div>
              {sponsorsList.map(sponsor => (
                <img
                  src={sponsor.img}
                  alt={sponsor.alt}
                  title={sponsor.alt}
                  key={sponsor.img}
                  className={css.sponsorLogo}
                />
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className={css.ticketRightContent}>
          <CruceLogo />
          <div className={css.dateContainer}>{date}</div>
          <div>User</div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
