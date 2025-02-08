import { useState, type ReactElement } from 'react'
import { EcommerceCard } from '@/components/Common/EcommerceCard'
import { TopBar } from './TopBar'
import { Banner } from './Banner'
import { BannerCollection } from './BannerCollection'
import { Checkout } from './Checkout'
import { bannerItems, products } from './utils'
import { ProductProps } from './types'

export const EcommerceHome = (): ReactElement => {
  const [step, setStep] = useState<number>(1)
  const [cart, setCart] = useState<ProductProps[]>([])

  const handleAddProduct = (product: ProductProps): void => {
    const productId = product.id
    const productExists = cart.find((product) => product.id === productId)
    if (productExists) {
      const newCart = cart.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 }
        }
        return product
      })
      setCart(newCart)
      if (step === 1) setStep(2)
      return
    }
    setCart([...cart, product])
    if (step === 1) setStep(2)
  }

  const handleRemoveProduct = (id: string): void => {
    setCart(cart.filter((product) => product.id !== id))
  }

  const handleAddQuantity = (id: string): void => {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 }
      }
      return product
    })
    setCart(newCart)
  }

  const handleMinusQuantity = (id: string): void => {
    const newCart = cart.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 }
      }
      return product
    })
    setCart(newCart)
  }

  return (
    <>
      {
        step === 1 && (
          <div className='relative w-full h-full flex flex-col justify-center items-center overflow-y-scroll'>
            {/* topbar */}
            <TopBar setStep={setStep} cart={cart} />
            <div className="w-full h-full overflow-scroll scrollbar-hide flex flex-col">
              {/* banner */}
              <Banner product={bannerItems[0]} handleAddProduct={handleAddProduct} />
              <BannerCollection />
              <div className="grid grid-cols-3">
                {
                  products.length > 0 && products.map((product, i) => (
                    <EcommerceCard key={i} product={product} handleAddProduct={handleAddProduct} />
                  ))
                }
              </div>
              <div className="w-full min-h-20 bg-[#10100e]"></div>
            </div>
          </div>
        )
      }
      {
        step === 2 && (
          <Checkout cart={cart} setCart={setCart} setStep={setStep} handleAddQuantity={handleAddQuantity} handleMinusQuantity={handleMinusQuantity} handleRemoveProduct={handleRemoveProduct} />
        )
      }
    </>
  )
}
