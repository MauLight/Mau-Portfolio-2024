import { PriceCard } from '@/components/Common/PriceCard'
import { Switch } from '@/components/Common/Switch'
import { useState, type ReactElement } from 'react'

export const Pricing = (): ReactElement => {
  const[clicked, setClicked] = useState<boolean>(false)
  const handleClick = (): void => {
    setClicked(!clicked)
  }
  return (
    <div className='w-full h-full px-10 py-12'>
      {/* header */}
      <div className="flex justify-between">
        <h1 className='font-body text-[22px] text-[#40403e]'>Find the best plan for you.</h1>
        <div className="flex items-center gap-x-5">
          <p className='font-light text-[16px] text-[#40403e]'>Billed monthly</p>
          <Switch clicked={clicked} handleClick={handleClick} />
          <p className={`font-light text-[16px] ${clicked ? 'text-indigo-500' : 'text-[]#40403e'} transition-color duration-300`}>Billed anually</p>
        </div>
      </div>
      {/* body */}
      <div className="grid grid-cols-7 h-full">
        <div className="col-span-2 flex items-center py-5">
          <div className="w-full h-3/4 rounded-[15px]">
            <PriceCard size='sm' price={9.9} saved={61.2} percentage={34} title='Basic Plan' description='Get just enough functionalities to kickstart and strenghten your writing.' cta='Select Basic' />
          </div>
        </div>
        <div className="col-span-3 flex items-center py-5 px-7">
          <PriceCard price={14.9} saved={61.2} percentage={24} title='Professional Plan' description='Get all the functionalities you need, whenever you need them and let nothing stop you from writing.' cta='Select Professional' />
        </div>
        <div className="col-span-2 flex items-center py-5">
          <div className="w-full h-3/4 border border-[#40403e] rounded-[15px]">
            <PriceCard size='en' price={12.9} saved={61.2} percentage={28} title='Enterprise Plan' description='Perfect for educators who want to harness the full capabilities of our software in the classroom.' cta='Select Basic' />
          </div>
        </div>
      </div>
    </div>
  )
}
