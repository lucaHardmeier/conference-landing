import React, { useRef, type FC, type ReactNode } from "react"

const TicketWrapper: FC<{ ticketColor: string; children: ReactNode }> = ({
  ticketColor,
  children,
}) => {
  const ticketRef: React.Ref<HTMLDivElement> = useRef(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ticketRef?.current) return
    const { offsetX, offsetY } = e.nativeEvent
    const halfWidth = ticketRef.current.offsetWidth / 2
    const halfHeight = ticketRef.current.offsetHeight / 2
    const rotationX = ((offsetX - halfWidth) / halfWidth) * 10
    const rotationY = ((offsetY - halfHeight) / halfHeight) * 10
    ticketRef.current.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
  }
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ticketRef?.current) return
    ticketRef.current.style.transform = "rotateX(0deg) rotateY(0deg)"
  }

  const currentColor = ticketColor || null
  const transparentColor = currentColor ? currentColor + "55" : null
  const gradientColor = currentColor
    ? `linear-gradient(30deg, ${currentColor}44 0%, ${currentColor}f4 50%, ${currentColor}74 100%)`
    : null

  return (
    <div
      className={"ticketContainer"}
      ref={ticketRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ background: transparentColor || "transparent" }}
    >
      <div
        className={`flex h-100 ${"ticket"}`}
        style={{ background: gradientColor || "transparent" }}
      >
        {children}
      </div>
    </div>
  )
}

export default TicketWrapper
