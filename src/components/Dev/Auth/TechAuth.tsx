import { type ReactElement } from 'react'

export const TechAuth = (): ReactElement => {
  return (
    <div className="w-full h-full flex justify-center overflow-hidden">
      <div className="w-full grid grid-cols-3 px-10">
        <div className="col-span-1 flex justify-center items-center">
          <div className="w-full min-h-[400px] flex flex-col gap-y-5">
            <h1 className='text-[22px] font-body text-gray-800'>Sign in to TechApp</h1>
            <div className="grid grid-cols-4 gap-x-2">
              <div className="h-10 col-span-1 flex items-center justify-center gap-x-1 border">
                <i className="fa-brands fa-github"></i>
                <span className='text-gray-600 font-light text-[14px]'>Github</span>
              </div>
              <div className="h-10 col-span-1 flex items-center justify-center gap-x-1 border">
                <i className="fa-brands fa-gitlab"></i>
                <span className='text-gray-600 font-light text-[14px]'>Gitlab</span>
              </div>
              <div className="h-10 col-span-1 flex items-center justify-center gap-x-1 border">
                <i className="fa-brands fa-bitbucket"></i>
                <span className='text-gray-600 font-light text-[14px]'>Bitbucket</span>
              </div>
              <div className="h-10 col-span-1 flex items-center justify-center gap-x-1 border">
                <i className="fa-brands fa-google"></i>
                <span className='text-gray-600 font-light text-[14px]'>Google</span>
              </div>
            </div>
            <p className='text-light text-gray-600 text-center'>or</p>
            <div className="flex flex-col gap-y-1">
              <span className='text-[14px] font-light text-gray-600'>Email</span>
              <input placeholder='your@email.com' type='text' className='h-10 border border-gray-200 px-3 text-[15px] font-light' />
            </div>
            <div className="flex flex-col gap-y-1">
              <span className='text-[14px] font-light text-gray-600'>Password</span>
              <input placeholder='correct horse battery staple' type='password' className='h-10 border border-gray-200 px-3 text-[15px] font-light' />
            </div>
            <button className='h-[60px] w-20 px-2 border'>Sign in</button>
            <div className="flex flex-col gap-y-1 pt-2">
              <div className="flex gap-x-1">
                <p className='font-light text text-gray-500'>Need an account?</p>
                <a href="#" className='text-indigo-500 font-light underline'>Sign up</a>
              </div>
              <div className="flex gap-x-1">
                <p className='font-light text text-gray-500'>Forgot your password?</p>
                <a href="#" className='text-indigo-500 font-light underline'>Reset it</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 border"></div>
      </div>
    </div>
  )
}
