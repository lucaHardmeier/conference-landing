import React, { useRef } from "react"
import { useCssHandles } from "vtex.css-handles"
import { HANDLES } from "./handles"

const TicketWrapper = ({ ticketColor, children }) => {
  const { handles: css } = useCssHandles(HANDLES)
  const ticketRef: React.Ref<HTMLDivElement> = useRef(null)

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

  const currentColor = ticketColor || null
  const transparentColor = currentColor ? currentColor + "55" : null
  const gradientColor = currentColor
    ? `linear-gradient(30deg, ${currentColor}44 0%, ${currentColor}f4 50%, ${currentColor}74 100%)`
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
        {children}
      </div>
    </div>
  )
}

export default TicketWrapper
