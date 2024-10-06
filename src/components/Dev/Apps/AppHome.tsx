import { useState, type ReactElement } from 'react'
import { SocialApp } from './Social/SocialApp'
import { EcommerceHome } from './Ecommerce/EcommerceHome'


const AppHome = (): ReactElement => {
  const [authOneDisplay, setAuthOneDisplay] = useState({ preview: true, code: false })
  const [authTwoDisplay, setAuthTwoDisplay] = useState({ preview: true, code: false })
  const [authThreeDisplay, setAuthThreeDisplay] = useState({ preview: true, code: false })
  const [authFourDisplay, setAuthFourDisplay] = useState({ preview: true, code: false })

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center gap-y-20 pt-32 pb-20 px-10'>
      <div className="w-full flex flex-col gap-y-1">
        <div className="flex gap-x-2 justify-end px-5">
          <button onClick={() => { setAuthOneDisplay({ preview: true, code: false })}} className={`text-[14px] font-light ${authOneDisplay.preview ? 'text-indigo-500' : 'text-gray-600'} py-2`}>Preview</button>
          <button onClick={() => { setAuthOneDisplay({ preview: false, code: true })}} className={`text-[14px] font-light ${authOneDisplay.code ? 'text-indigo-500' : 'text-gray-600'} py-2`}>Code</button>
        </div>
        <div className="w-full h-[700px] border rounded-[20px] overflow-hidden">
          {
            authOneDisplay.preview ? <SocialApp /> : null
          }
          {
            authOneDisplay.code ? <div>hey</div> : null
          }
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <div className="flex gap-x-2 justify-end px-5">
          <button onClick={() => { setAuthTwoDisplay({ preview: true, code: false })}} className={`text-[14px] font-light ${authTwoDisplay.preview ? 'text-indigo-500' : 'text-gray-600'} py-2`}>Preview</button>
          <button onClick={() => { setAuthTwoDisplay({ preview: false, code: true })}} className={`text-[14px] font-light ${authTwoDisplay.code ? 'text-indigo-500' : 'text-gray-600'} py-2`}>Code</button>
        </div>
        <div className="w-full h-[700px] border rounded-[20px] overflow-hidden">
          {
            authTwoDisplay.preview ? <EcommerceHome /> : null
          }
          {
            authTwoDisplay.code ? <div>hey</div> : null
          }
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <div className="flex gap-x-2 justify-end px-5">
          <button onClick={() => { setAuthThreeDisplay({ preview: true, code: false })}} className={`text-[14px] font-light ${authThreeDisplay.preview ? 'text-indigo-500' : 'text-gray-600'} py-2`}>Preview</button>
          <button onClick={() => { setAuthThreeDisplay({ preview: false, code: true })}} className={`text-[14px] font-light ${authThreeDisplay.code ? 'text-indigo-500' : 'text-gray-600'} py-2`}>Code</button>
        </div>
        <div className="w-full h-[700px] border rounded-[20px] overflow-hidden">
          {
            authThreeDisplay.preview ? <div>hey</div> : null
          }
          {
            authThreeDisplay.code ? <div>hey</div> : null
          }
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <div className="flex gap-x-2 justify-end px-5">
          <button onClick={() => { setAuthFourDisplay({ preview: true, code: false })}} className={`text-[14px] font-light ${authFourDisplay.preview ? 'text-indigo-500' : 'text-gray-600'} py-2`}>Preview</button>
          <button onClick={() => { setAuthFourDisplay({ preview: false, code: true })}} className={`text-[14px] font-light ${authFourDisplay.code ? 'text-indigo-500' : 'text-gray-600'} py-2`}>Code</button>
        </div>
        <div className="w-full h-[700px] border rounded-[20px] overflow-hidden">
          {
            authFourDisplay.preview ? <div>hey</div>: null
          }
          {
            authFourDisplay.code ? <div>hey</div> : null
          }
        </div>
      </div>
    </div>
  )
}

export default AppHome