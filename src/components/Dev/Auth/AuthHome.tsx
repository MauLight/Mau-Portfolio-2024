import { useState, type ReactElement } from 'react'
import { SocialAuth } from './SocialAuth'
import { SocialAuthCode } from './SocialAuthCode'
import { TechAuth } from './TechAuth'


const AuthHome = (): ReactElement => {
  const [authOneDisplay, setAuthOneDisplay] = useState({ preview: true, code: false })

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center gap-y-20 pt-32 pb-20 px-10'>
      <div className="w-full flex flex-col gap-y-1">
        <div className="flex gap-x-2 justify-end px-5">
          <button onClick={() => { setAuthOneDisplay({ preview: true, code: false })}} className={`text-[14px] font-light ${authOneDisplay.preview ? 'text-indigo-500' : 'text-gray-600'} py-2`}>Preview</button>
          <button onClick={() => { setAuthOneDisplay({ preview: false, code: true })}} className={`text-[14px] font-light ${authOneDisplay.code ? 'text-indigo-500' : 'text-gray-600'} py-2`}>Code</button>
        </div>
        <div className="w-full h-[700px] border rounded-[20px]">
          {
            authOneDisplay.preview ? <SocialAuth /> : null
          }
          {
            authOneDisplay.code ? <SocialAuthCode /> : null
          }
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <div className="flex gap-x-2 justify-end px-5">
          <button onClick={() => { setAuthOneDisplay({ preview: true, code: false })}} className={`text-[14px] font-light ${authOneDisplay.preview ? 'text-indigo-500' : 'text-gray-600'} py-2`}>Preview</button>
          <button onClick={() => { setAuthOneDisplay({ preview: false, code: true })}} className={`text-[14px] font-light ${authOneDisplay.code ? 'text-indigo-500' : 'text-gray-600'} py-2`}>Code</button>
        </div>
        <div className="w-full h-[700px] border rounded-[20px]">
          {
            authOneDisplay.preview ? <TechAuth /> : null
          }
          {
            authOneDisplay.code ? <SocialAuthCode /> : null
          }
        </div>
      </div>
    </div>
  )
}

export default AuthHome