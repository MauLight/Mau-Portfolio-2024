import { useState, type ReactNode } from 'react'
import axios from 'axios'
import { TitleText } from '../Common/TitleText'
import { useNavigate } from 'react-router'

export default function Contact(): ReactNode {

    const navigate = useNavigate()
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [sent, setSent] = useState<boolean>(false)


    async function sendEmailToDev(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault()
        try {
            const response = axios.post('https://mau-portfolio-backend.onrender.com', { name, email, message })
            console.log(response, 'This is the response.')
            setSent(true)
            setTimeout(() => {
                navigate('/')
            }, 3000)


        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            {
                sent ? (
                    <>
                        <TitleText text="Thanks!" />
                    </>
                )
                    :
                    (
                        <div className="grid grid-cols-2 gap-x-20">
                            <div className='w-[400px]'>
                                <h1 className='text-[2rem] font-medium tracking-tight leading-tight'>Let’s make your software not just better, but remarkable. Let’s build something your users love and take pride in.</h1>
                            </div>
                            <form onSubmit={sendEmailToDev} className="w-[200px] flex flex-col gap-y-2 pt-5 text-[0.9rem]">
                                <input value={name} type='text' onChange={({ target }) => { setName(target.value) }} className={`w-full h-9 bg-gray-50 rounded-[3px] border border-gray-300 ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500`} placeholder='Name' />
                                <input value={email} type='text' onChange={({ target }) => { setEmail(target.value) }} className={`w-full h-9 bg-gray-50 rounded-[3px] border border-gray-300 ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500`} placeholder='Email' />
                                <textarea value={message} onChange={({ target }) => { setMessage(target.value) }} className={`w-full h-20 bg-gray-50 rounded-[3px] border border-gray-300 ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500`} placeholder='Your message' />
                                <button type='submit' className={`w-full h-10 font-body text-[16px] text-[#ffffff] mt-1 uppercase bg-[#10100e] hover:bg-indigo-500 active:bg-[#10100e]`}>Submit</button>
                                <div className="flex justify-center items-center pt-2">
                                    <div className="w-full border-b border-gray-300"></div>
                                    <p className='text-[14px] font-body text-gray-500 px-5 uppercase'>thanks</p>
                                    <div className="w-full border-b border-gray-300"></div>
                                </div>
                            </form>
                        </div>
                    )
            }
        </div>
    )
}
