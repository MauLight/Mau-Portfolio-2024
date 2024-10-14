import { useEffect, useState } from 'react'
import { BarLoader } from 'react-spinners'
import { TitleText } from './TitleText'

export const Loader = () => {
  const [visible, setVisible] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 2000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2210)
  }, [])

  return (
    <>
      {
        loading && (
          <div className={`absolute h-screen w-screen left-0 top-0 overflow-hidden flex flex-col justify-center items-center gap-y-2 ${!visible ? 'bg-transparent' : 'bg-[#fdefff]'} z-50 transition-all duration-200`}>
            <TitleText size='text-2xl' text="Loading" />
            <BarLoader color='#10100e' loading={loading} />
          </div>
        )
      }
    </>
  )
}
