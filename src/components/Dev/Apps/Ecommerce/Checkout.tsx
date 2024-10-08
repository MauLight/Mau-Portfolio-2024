import { Dispatch, SetStateAction, useEffect, useState, type ReactElement } from 'react'
import { CheckoutCard } from './CheckoutCard'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { CheckSummary } from './CheckSummary'
import { ProductProps } from './types'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/functions'
import { PaymentForm } from './PaymentForm'

interface CheckoutProps {
    cart: ProductProps[]
    setCart: Dispatch<SetStateAction<ProductProps[]>>
    setStep: Dispatch<SetStateAction<number>>
    handleAddQuantity: (id: string) => void
    handleMinusQuantity: (id: string) => void
    handleRemoveProduct: (id: string) => void
}

export const Checkout = ({ cart, setCart, setStep, handleAddQuantity, handleMinusQuantity, handleRemoveProduct } : CheckoutProps): ReactElement => {
  const [readyToPay, setReadyToPay] = useState<boolean>(false)
  const [paymentConfirmed, setPaymentConfirmed] = useState<boolean>(false)
  const numberOfProducts = cart.reduce((acc, item) => acc + item.quantity, 0)
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const vat = Math.floor(((total/100) * 19))
  const totalWithVat = total + vat

  useEffect(() => {
    if (paymentConfirmed) {
      setTimeout(() => {
        setStep(1)
        setCart([])
        setPaymentConfirmed(false)
      }, 5000)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentConfirmed])

  return (
    <div className={`w-full h-full flex flex-col justify-center px-5 overflow-y-scroll transition-color duration-200 ${paymentConfirmed ? 'animated-background bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : readyToPay ? 'bg-[#10100e]' : 'gap-y-10'}`}>
      {
        !paymentConfirmed && (
          <div className="flex flex-col gap-y-5">
            <div className="flex justify-between items-start">
              <motion.h1
                variants={fadeIn('bottom', 0.1)}
                initial={'hidden'}
                whileInView={'show'}
                className={`uppercase aktiv text-9xl ${readyToPay ? 'text-[#ffffff]' : 'text-[#10100e]'}`}>{readyToPay ? 'checkout' : 'your cart'}</motion.h1>
              <XMarkIcon onClick={() => { setStep(1) }} className='w-6 text-[#2E3D49] font-accent hover:rotate-90 hover:text-[#EA0C1D] transition-all duration-200' />
            </div>
            {
              !readyToPay && (
                <div>
                  <p className='aktivLight text-2xl text-[#10100e] uppercase'>{`total ${cart.length} items`}</p>
                  <p className='aktivLight text-2xl text-[#10100e] uppercase'>Your products are not reserved until payment is complete</p>
                </div>
              )
            }
          </div>
        )
      }

      <>
        {
          !paymentConfirmed && (
            <>
              {
                readyToPay ? (
                  <PaymentForm cart={cart} totalWithVat={totalWithVat} setReadyToPay={setReadyToPay} setPaymentConfirmed={setPaymentConfirmed} />
                )
                  :
                  (
                    <div className="relative grid grid-cols-4 gap-x-5 overflow-y-scroll scrollbar-hide">
                      <div className="col-span-3">
                        {
                          cart.map((product, i) => (
                            <CheckoutCard handleMinusQuantity={handleMinusQuantity} handleAddQuantity={handleAddQuantity} handleRemoveProduct={handleRemoveProduct} product={product} key={i} />
                          ))
                        }
                      </div>
                      <div className="col-span-1">
                        <CheckSummary setReadyToPay={setReadyToPay} numberOfProducts={numberOfProducts} total={total} taxes={vat} totalWithTaxes={totalWithVat} />
                      </div>
                    </div>
                  )
              }
            </>
          )
        }
      </>
      <>
        {
          paymentConfirmed && (
            <div className="flex flex-col justify-center items-center gap-y-1">
              <h1 className='aktiv uppercase text-7xl text-[#10100e] antialiased'>
            Thank you!
              </h1>
              <p className='text-2xl text-[#10100e] antialiased'> Your payment has been confirmed.</p>
            </div>
          )
        }
      </>
    </div>
  )
}
