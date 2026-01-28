import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "tachyons"
import "./index.css"
import ConferenceLanding from "./ConferenceLanding"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConferenceLanding />
  </StrictMode>,
)
