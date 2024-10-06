import { type ReactElement } from 'react'
import mock1 from '@/assets/apps/mock_1.png'
import { EcommerceCard } from '@/components/Common/EcommerceCard'

export const EcommerceHome = (): ReactElement => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className="h-full grid grid-cols-3">
        <EcommerceCard image={mock1} title='A vintage sunset' price={1200} discount={1440} handleCart={() => {}} />
        <div className="col-span-1">
          <img src={mock1} alt="mock1" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1">
          <img src={mock1} alt="mock1" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}
