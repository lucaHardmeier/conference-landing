import React from "react"
import { HANDLES } from "./handles"
import { useCssHandles } from "vtex.css-handles"

const SponsorsList = ({ sponsorsList }) => {
  const { handles: css } = useCssHandles(HANDLES)

  if (!sponsorsList.length) return <></>

  return (
    <div className={css.sponsorsContainer}>
      <div className={css.sponsorsLabel}>Gracias a:</div>
      <div className={css.sponsorsLogos}>
        {sponsorsList.map(sponsor => (
          <img src={sponsor.img} alt={sponsor.alt} title={sponsor.alt} key={sponsor.img} className={css.sponsorLogo} />
        ))}
      </div>
    </div>
  )
}

export default SponsorsList
