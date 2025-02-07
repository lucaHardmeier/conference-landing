import { useEffect, useState } from "react"
import { useCssHandles } from "vtex.css-handles"

const getRandomNumber = maxNum => Math.random() * (maxNum + 1)

const StarsGenerator: VTEXCustomComponent<{ amount: number }> = ({ amount }) => {
  const { handles: css } = useCssHandles(["starsGenerator", "starsContainer", "star"])
  const [stars, setStars] = useState([])

  useEffect(() => {
    let starsBundle = []
    for (let i = 0; i < amount; i++) {
      const dimensions = getRandomNumber(3)
      starsBundle.push({
        width: dimensions,
        height: dimensions,
        opacity: getRandomNumber(1),
        top: getRandomNumber(100),
        left: getRandomNumber(100),
      })
    }
    setStars(starsBundle)
  }, [amount])

  return (
    <div className={css.starsGenerator}>
      <div className={css.starsContainer}>
        {stars.map(({ width, height, opacity, top, left }) => (
          <div className={css.star} style={{ width, height, opacity, top: `${top}%`, left: `${left}%` }}></div>
        ))}
      </div>
    </div>
  )
}

export default StarsGenerator
