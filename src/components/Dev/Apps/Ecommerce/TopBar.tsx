import Hamburger from 'hamburger-react'
import { Dispatch, SetStateAction, type ReactElement } from 'react'
import { ProductProps } from './types'

export const TopBar = ({ cart, setStep } : { cart: ProductProps[], setStep: Dispatch<SetStateAction<number>> }): ReactElement => {
  const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0)
  return (
    <div className="absolute top-0 h-[50px] w-full bg-transparent z-20">
      <div className="flex h-full w-full justify-between items-center px-20">
        <div className="block">
          <h1 className='neue-bold leading-none text-[18px] text-[#ffffff] antialiased'>eMOTIONs</h1>
        </div>
        <div className="flex items-center gap-x-2">
          <i onClick={() => { setStep(2) }} className="relative fa-solid fa-lg text-[#ffffff] fa-cart-shopping cursor-pointer">
            {
              totalItems > 0 && (
                <span className="absolute -top-4 -right-2 w-4 h-4 bg-indigo-500 rounded-full flex justify-center items-center text-[10px] text-[#ffffff]">{totalItems}</span>
              )
            }
          </i>
          <Hamburger color='#ffffff' size={25} direction='left' />
        </div>
      </div>
    </div>
  )
}
