import { Dispatch, SetStateAction, type ReactElement } from 'react'
import { CheckoutCard } from './CheckoutCard'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { CheckSummary } from './CheckSummary'

interface CheckoutProps {
    cart: { id: string, price: number, title: string, discount: number, image: string }[]
    setStep: Dispatch<SetStateAction<number>>
    handleRemoveProduct: (id: string) => void
}

export const Checkout = ({ cart, setStep, handleRemoveProduct } : CheckoutProps): ReactElement => {

  const numberOfProducts = cart.length
  const total = cart.reduce((acc, item) => acc + item.price, 0)
  const vat = ((total/100) * 19)
  const totalWithVat = total + vat

  console.log(vat)

  return (
    <div className="w-full h-full min-h-[700px] flex flex-col justify-center gap-y-10 px-5 overflow-y-scroll">
      <div className="flex flex-col gap-y-5">
        <div className="flex justify-between items-start">
          <h1 className='uppercase aktiv text-9xl text-[#10100e]'>your cart</h1>
          <XMarkIcon onClick={() => { setStep(1) }} className='w-6 text-[#2E3D49] font-accent hover:rotate-90 hover:text-[#EA0C1D] transition-all duration-200' />
        </div>
        <div>
          <p className='aktivLight text-2xl text-[#10100e] uppercase'>{`total ${cart.length} items`}</p>
          <p className='aktivLight text-2xl text-[#10100e] uppercase'>Your products are not reserved until payment is complete</p>
        </div>
      </div>

      {/* CheckoutCard */}
      <div className="grid grid-cols-4 gap-x-5 overflow-y-auto">
        <div className="col-span-3">
          {
            cart.map((product, i) => (
              <CheckoutCard handleRemoveProduct={handleRemoveProduct} product={product} key={i} />
            ))
          }
        </div>
        <CheckSummary numberOfProducts={numberOfProducts} total={total} taxes={vat} totalWithTaxes={totalWithVat} />
      </div>
    </div>
  )
}
