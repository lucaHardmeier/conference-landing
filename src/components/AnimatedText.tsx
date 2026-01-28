import { useEffect, useState, type FC } from "react"

const AnimatedText: FC<{ text: string }> = ({ text }) => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cursor, setCursor] = useState(false)

  useEffect(() => {
    let timeout

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, 70)
    } else {
      setCursor(true)
      timeout = setTimeout(() => {
        setCurrentIndex(0)
        setCurrentText("")
        setCursor(false)
      }, 6000)
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, text])

  return (
    <h3 className={`ml-auto mr-auto ${"animatedText"}`}>
      {currentText} {cursor && <strong className={"cursor"}>|</strong>}
    </h3>
  )
}

export default AnimatedText
