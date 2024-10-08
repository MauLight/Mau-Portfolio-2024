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

  const handleClick = (product: ProductProps): void => {
    setCart([...cart, product])
    if (step === 1) setStep(2)
  }

  return (
    <>
      {
        step === 1 ? (
          <div className='relative w-full h-full flex flex-col justify-center items-center overflow-y-scroll'>
            {/* topbar */}
            <TopBar />
            <div className="w-full h-full overflow-scroll scrollbar-hide flex flex-col">
              {/* banner */}
              <Banner product={bannerItems[0]} handleClick={handleClick} />
              <BannerCollection />
              {/* <div className="w-full grid grid-cols-4">
          <CardGroupTop images={[cat_3, cat_2, cat_4]} />
          <CardGroupBottom images={[cat_2, cat_3, cat_4]} />
          <CardGroupTop images={[cat_3, cat_2, cat_4]} />
          <CardGroupBottom images={[cat_2, cat_3, cat_4]} />
        </div> */}
              <div className="grid grid-cols-3">
                {
                  products.length > 0 && products.map((product, i) => (
                    <EcommerceCard key={i} product={product} handleClick={handleClick} />
                  ))
                }
              </div>
              <div className="w-full min-h-20 bg-[#10100e]"></div>
            </div>
          </div>
        )
          :
          (
            <Checkout cart={cart} setStep={setStep} />
          )
      }
    </>
  )
}
