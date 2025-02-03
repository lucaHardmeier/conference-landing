import { useCssHandles } from 'vtex.css-handles'
import { HANDLES } from '../handles'
import { AddToCartBtnProps } from '../interface'
import { usePixel } from 'vtex.pixel-manager'
import { useOrderItems } from 'vtex.order-items/OrderItems'
import Spinner from '@vtex/styleguide/lib/Spinner'
import { useState } from 'react'
import { usePagination } from '../../hooks/usePagination'

const AddToCartBtn: VTEXCustomComponent<AddToCartBtnProps> = ({ products, label = 'Agregar' }: AddToCartBtnProps) => {
  const { handles: css } = useCssHandles(HANDLES)
  const { addItems } = useOrderItems()
  const { push } = usePixel()
  const [loading, setLoading] = useState(false)
  const { setProductId } = usePagination()

  const handlePurchase = async () => {
    setLoading(true)
    const filteredProducts = products.filter(p => p.quantity > 0)
    const addToCartProducts = filteredProducts.map(p => ({ quantity: p.quantity, id: p.skuId, seller: '1' }))
    await addItems(addToCartProducts)
    push({
      id: 'add-to-cart-button',
      event: 'addToCart',
    })
    setProductId('')
    setLoading(false)
  }

  return (
    <button className={css.addToCartBtn} onClick={handlePurchase} disabled={loading}>
      {loading ? <Spinner /> : label}
    </button>
  )
}

export default AddToCartBtn
