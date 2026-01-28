import type { FC } from "react"
import type { Sponsor } from "../../types/interface"

const SponsorsList: FC<{ sponsorsList: Sponsor[] }> = ({ sponsorsList }) => {
  if (!sponsorsList.length) return <></>

  return (
    <div className={"sponsorsContainer"}>
      <div className={"sponsorsLabel"}>Gracias a:</div>
      <div className={"sponsorsLogos"}>
        {sponsorsList.map((sponsor) => (
          <img src={sponsor.img} alt={sponsor.alt} title={sponsor.alt} key={sponsor.img} className={"sponsorLogo"} />
        ))}
      </div>
    </div>
  )
}

export default SponsorsList
