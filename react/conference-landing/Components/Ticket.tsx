import { useCssHandles } from "vtex.css-handles"
import { HANDLES } from "../handles"
import { TicketProps } from "../interface"
import CruceLogo from "../../assets/CruceLogo"
import { useEffect, useRef, useState } from "react"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import type { OrderForm as OrderFormType } from "vtex.checkout-graphql"

const Ticket: VTEXCustomComponent<TicketProps> = ({ date, name, sponsorsList, themesList }) => {
  const { handles: css } = useCssHandles(HANDLES)
  const [index, setIndex] = useState(0)
  const ticketRef: React.Ref<HTMLDivElement> = useRef(null)

  useEffect(() => {
    if (themesList.length <= 1) return
    let timeout

    if (index < themesList.length) {
      timeout = setTimeout(() => {
        setIndex(prevIndex => prevIndex + 1)
      }, 4000)
    } else {
      setIndex(0)
    }

    return () => clearTimeout(timeout)
  }, [index, themesList])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ticketRef) return
    const { offsetX, offsetY } = e.nativeEvent
    const halfWidth = ticketRef.current.offsetWidth / 2
    const halfHeight = ticketRef.current.offsetHeight / 2
    const rotationX = ((offsetX - halfWidth) / halfWidth) * 10
    const rotationY = ((offsetY - halfHeight) / halfHeight) * 10
    console.log("mouseover", { offsetX, offsetY, halfHeight, halfWidth, rotationX })
    ticketRef.current.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
  }

  const { orderForm } = useOrderForm()
  const { clientProfileData } = orderForm as OrderFormType

  return (
    <div
      className={css.ticketContainer}
      ref={ticketRef}
      onMouseMove={handleMouseMove}
      style={{ backgroundColor: themesList[index] ? themesList[index].ticketColor : "" }}
    >
      <div className={css.ticket}>
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
            {clientProfileData?.email && <div>{clientProfileData.email}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
