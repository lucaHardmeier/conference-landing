import { useCssHandles } from "vtex.css-handles"
import { HANDLES } from "../handles"
import { TicketProps } from "../interface"
import CruceLogo from "../../assets/CruceLogo"
import { useEffect, useRef, useState } from "react"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import type { OrderForm as OrderFormType } from "vtex.checkout-graphql"
import UserIcon from "../../assets/UserIcon"

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
      }, 6000)
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
    ticketRef.current.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
  }
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ticketRef) return
    ticketRef.current.style.transform = "rotateX(0deg) rotateY(0deg)"
  }

  const { orderForm } = useOrderForm()
  const { clientProfileData, userProfileId } = orderForm as OrderFormType

  const currentTheme = themesList[index]
  const currentColor = currentTheme?.ticketColor || null
  const transparentColor = currentColor ? currentColor + "55" : null
  const gradientColor = currentColor
    ? `linear-gradient(35deg, ${currentColor}44 0%, ${currentColor}f4 50%, ${currentColor}74 100%)`
    : null

  return (
    <div
      className={css.ticketContainer}
      ref={ticketRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ background: transparentColor }}
    >
      <div className={`flex h-100 ${css.ticket}`} style={{ background: gradientColor }}>
        <div className={`flex justify-center items-center ${css.ticketNumberContainer}`}>
          #{userProfileId?.slice(-6)}
        </div>
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
            {sponsorsList.length ? (
              <div className={css.sponsorsContainer}>
                <div className={css.sponsorsLabel}>Gracias a:</div>
                <div className={css.sponsorsLogos}>
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
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className={`flex flex-column justify-between items-end ${css.ticketRightContent}`}>
            <CruceLogo />
            <div className={css.dateContainer}>{date}</div>
            {clientProfileData?.email && (
              <div className={css.emailContainer}>
                <UserIcon /> {clientProfileData.email}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
