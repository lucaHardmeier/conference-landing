import { ComponentType, Dispatch, SetStateAction } from 'react'

export interface ProductImg {
  imageUrl: string
  imageId: string
  imageText: string
}

export interface Product {
  productId: string
  productReference: string
  skuId: string
  name: string
  brand: string
  refactoredDesc: string
  linkText: string
  priceSavings: number
  sellingPrice: number
  sellingPriceText: string
  listPrice: number
  listPriceText: string
  measurementUnit: string
  unitMultiplier: number
  categoryTree: string[]
  bestInstallment: {
    NumberOfInstallments: number
    Value: number
    InterestRate: number
  }
  productClusters: {
    id: string
    name: string
  }
  images: ProductImg[]
  axes: {
    y: number
    x: number
  }
  emoji: string
}

export interface ProductConfig {
  skuId: string
  axes: {
    y: number
    x: number
  }
  emoji: string
}

export interface ExternalLink {
  isActive: boolean
  ctaText: string
  url: string
}

export interface Space {
  category: string
  img: string
  externalLink: ExternalLink
  productConfig: ProductConfig[]
}

export interface MagazineProps {
  spacesList: [
    {
      category: string
      img: string
      externalLink: ExternalLink
      productConfig: [
        {
          skuId: string
          y: number
          x: number
          emoji: string
        }
      ]
    }
  ]
  HeaderRightOps?: ComponentType
  Logo?: ComponentType
}
export interface ShopBySpaceProps {
  spacesList: Space[]
  categoryNames: string[]
}

export interface CartProduct extends Product {
  id: string
  quantity: number
}
export interface AddToCartBtnProps {
  products: CartProduct[]
  label?: string
}
export interface ProductsProps {
  products: Product[]
}
export interface ModalProps {
  products: Product[]
  modal: boolean
  setModal: Dispatch<SetStateAction<boolean>>
}
export interface ModalTriggerProps {
  products: Product[]
  setModal: Dispatch<SetStateAction<boolean>>
  setSelectedProductId: Dispatch<SetStateAction<string>>
}

export interface ImgProps {
  images: ProductImg[]
  isModal?: boolean
}
export interface CategorySectionProps {
  categoryName: string
  categorySpaces: Space[]
  setCurrentCategories: Dispatch<SetStateAction<object>>
}
export interface InteractiveImgProps {
  productsConfig: ProductConfig[]
  img: string
  externalLink: ExternalLink
  category: string
}
export interface ProductDotProps {
  product: Product
  bought: boolean
  containerSize: {
    width: number
    height: number
  }
}
export interface ProductCardProps {
  active: boolean
  isSmall: boolean
  product: Product
  containerSize: {
    width: number
    height: number
  }
  pxPositionX: number
  pxPositionY: number
  dotRadius: number
}
export interface StepperProps {
  quantityHandler: CallableFunction
  quantity: number
  unitMultiplier: number
  measurementUnit: string
}
export interface SummaryItemProps {
  product: Product
  setCart: Dispatch<SetStateAction<CartProduct[]>>
  cart: CartProduct[]
}
