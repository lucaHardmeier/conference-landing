import { useEffect, useRef, useState, type FC } from "react"

const getRandomNumber = (maxNum: number) => Math.random() * (maxNum + 1)

interface Stars {
  width: number
  height: number
  opacity: number
  top: number
  left: number
}

const StarsGenerator: FC<{ amount: number }> = ({ amount }) => {
  const [stars, setStars] = useState<Stars[]>([])
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    let starsBundle = [] as Stars[]
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

  const moveStars = () => {
    setStars((prevStars) =>
      prevStars.map((star) => {
        if (star.left < 0 - star.width) {
          return {
            ...star,
            left: 101,
            top: getRandomNumber(100),
          }
        }
        return { ...star, left: star.left - star.opacity / 3 }
      }),
    )
    animationFrameRef.current = requestAnimationFrame(moveStars)
  }

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(moveStars)
    return () => {
      if (animationFrameRef?.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  return (
    <div className="starsGenerator">
      <div className="starsContainer">
        {stars.map(({ width, height, opacity, top, left }) => (
          <div className={"star"} style={{ width, height, opacity, top: `${top}%`, left: `${left}%` }}></div>
        ))}
      </div>
    </div>
  )
}

export default StarsGenerator
