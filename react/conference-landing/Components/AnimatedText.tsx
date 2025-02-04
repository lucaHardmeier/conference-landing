import { useEffect, useState } from "react"
import { useCssHandles } from "vtex.css-handles"

const AnimatedText: VTEXCustomComponent<{ text: string }> = ({ text }) => {
  const { handles: css } = useCssHandles(["animatedText", "cursor"])
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cursor, setCursor] = useState(false)

  useEffect(() => {
    let timeout

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, 100)
    } else {
      setCursor(true)
      timeout = setTimeout(() => {
        setCurrentIndex(0)
        setCurrentText("")
      }, 5000)
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, text])

  return (
    <h3 className={css.animatedText}>
      {currentText} {cursor && <strong className={css.cursor}>|</strong>}
    </h3>
  )
}

export default AnimatedText
