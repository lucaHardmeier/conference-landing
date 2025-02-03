import type { ProductConfig, MagazineProps, Space } from "./interface"
import PaginationProvider from "../context/PaginationContext"
import Navbar from "./Components/Navbar/Navbar"
import EmblaCarousel from "./Components/EmblaCarousel/EmblaCarousel"
import PageBrowser from "./Components/PageBrowser/PageBrowser"
import { useCssHandles } from "vtex.css-handles"
import { useCallback, useEffect, useState } from "react"
import WishlistPopup from "./Components/WishlistPopup"

const CatalogMagazineContainer: VTEXCustomComponent<MagazineProps> = ({
  spacesList,
  Logo,
  HeaderRightOps,
}: MagazineProps) => {
  const { handles: css } = useCssHandles(["digitalMagazine"])

  const [modal, setModal] = useState("")
  useEffect(() => {
    const loginMessageShowed = sessionStorage.getItem("loginMessageShowed")
    const isAuthenticated = sessionStorage.getItem("wishlist_isAuthenticated")
    if (loginMessageShowed !== "true" && isAuthenticated !== "true") {
      sessionStorage.setItem("loginMessageShowed", "true")
      setModal("session")
    }
  }, [])

  const MemoizedHeaderComponent = useCallback(HeaderRightOps, [])
  const MemoizedLogoComponent = useCallback(Logo, [])

  const formattedSpacesConf: null | Space[] = !spacesList
    ? null
    : spacesList
        .filter(s => s.img)
        .map<Space>(space => {
          const productConfig = space.productConfig.reduce<ProductConfig[]>((acc, cur) => {
            const { skuId, x, y, emoji } = cur
            if (!skuId.trim()) return acc
            const formattedEmoji = emoji?.trim() || ""
            const formattedX = x < 8 ? 8 : x > 92 ? 92 : x
            const formattedY = y < 5 ? 5 : y > 95 ? 95 : y
            return [...acc, { skuId, axes: { x: formattedX, y: formattedY }, emoji: formattedEmoji }]
          }, [])
          return { ...space, productConfig }
        })

  if (!formattedSpacesConf || !formattedSpacesConf.length) return <div className="no-render-sbs"></div>

  const categoryNames = [...new Set(spacesList?.map(space => space.category))]
  let orderedSpacesList: Space[] = []
  categoryNames.forEach(name => {
    orderedSpacesList = [...orderedSpacesList, ...formattedSpacesConf.filter(space => space.category === name)]
  })

  return (
    <PaginationProvider categoryNames={categoryNames} spacesList={orderedSpacesList} setModal={setModal}>
      <div className={css.digitalMagazine}>
        <Navbar>
          <MemoizedLogoComponent />
          <MemoizedHeaderComponent />
        </Navbar>
        <EmblaCarousel />
        <PageBrowser />
        <WishlistPopup setModal={setModal} modal={modal} />
      </div>
    </PaginationProvider>
  )
}

export default CatalogMagazineContainer

CatalogMagazineContainer.defaultProps = {
  spacesList: [
    {
      category: "Cocina",
      img: "",
      externalLink: {
        isActive: false,
        ctaText: "Ver más",
        url: "/ceramica",
      },
      productConfig: [
        {
          skuId: "6053",
          x: 50,
          y: 50,
          emoji: "",
        },
      ],
    },
  ],
}

CatalogMagazineContainer.schema = {
  title: "Landing de conferencia",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Nombre de la conferencia",
      default: "CRUCEConf",
    },
    description: {
      type: "string",
      title: "Descripción de la conferencia",
      widget: {
        "ui:widget": "textarea",
      },
      default: "Disfrutá de increíbles charlas con expertos de la industria, sorteos",
    },
    transmision: {
      type: "string",
      title: "Web donde se transmite",
      default: "twitch.tv/e-cruce",
    },
    date: {
      title: "Fecha de la conferencia",
      type: "string",
      widget: {
        "ui:widget": "datetime",
      },
    },
  },
}
