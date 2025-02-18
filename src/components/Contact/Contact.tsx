import { useEffect, useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import * as yup from 'yup'

import Fallback from '../Common/Fallback'
import { yupResolver } from '@hookform/resolvers/yup'
import video from '@/assets/video/contact.webm'
import ErrorComponent from '../Common/ErrorComponent'

const recaptchaSiteKey = import.meta.env.VITE_GRECAPTCHA

interface GoogleReCaptcha {
    execute: (siteKey: string, options: { action: string }) => Promise<string>
    ready: (callback: () => void) => void
}

declare global {
    interface Window {
        grecaptcha: GoogleReCaptcha
    }
}

const contactSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    message: yup.string().required()
})

export default function Contact(): ReactNode {

    const navigate = useNavigate()
    const [{ isLoading, hasError, fulfilled }, setApiState] = useState<{ isLoading: boolean, hasError: boolean, fulfilled: boolean }>({
        isLoading: false,
        hasError: false,
        fulfilled: false
    })

    const { register, reset, handleSubmit, getValues, formState: { errors, isValid } } = useForm({
        defaultValues: {
            email: ''
        },
        resolver: yupResolver(contactSchema)
    })


    async function sendEmailToDev(token: string): Promise<void> {

        const { name, email, message } = getValues()
        try {

            setApiState(prev => ({
                ...prev,
                isLoading: true
            }))

            const { data } = await axios.post('https://symetria-contact.netlify.app/.netlify/functions/send-contact', { name, email, message, token })

            if (data.message) {

                setApiState(prev => ({
                    ...prev,
                    isLoading: false,
                    fulfilled: true
                }))

                reset()
                setTimeout(() => {
                    navigate('/')
                }, 4000)
            } else {
                setApiState(prev => ({
                    ...prev,
                    hasError: true
                }))
            }

            return
        } catch (error) {

            setApiState(prev => ({
                ...prev,
                hasError: true
            }))

            console.log(error)
        }
    }

    async function handleSubmitRecaptcha(): Promise<void> {
        if (!window.grecaptcha) {
            console.error('reCAPTCHA not available')
            return
        }

        try {
            const token = await window.grecaptcha.execute(recaptchaSiteKey, { action: 'contact_form' })
            await sendEmailToDev(token)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div className='w-full min-h-screen flex justify-center items-center'>
                {
                    hasError && (
                        <ErrorComponent />
                    )
                }
                {
                    !hasError && isLoading && (
                        <Fallback />
                    )
                }
                {
                    !hasError && !isLoading && fulfilled && (
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2,
                                    type: 'tween',
                                    ease: 'circOut'
                                }}
                            >
                                <div className="z-20 absolute w-screen h-screen top-0 left-0 flex justify-center items-center">
                                    <h1 className='text-[4rem] text-[#fff] text-balance font-heading'>{"I'll get back to you shortly."}</h1>
                                </div>
                                <div className='z-10 absolute top-0 left-0 w-screen h-screen bg-[#10100e] opacity-80'></div>
                                <video autoPlay loop muted src={video} className='z-0 absolute top-0 left-0 w-screen h-screen object-cover'></video>
                            </motion.div>
                        </AnimatePresence>
                    )
                }
                {
                    !isLoading && !fulfilled && (
                        (
                            <section className="grid grid-cols-2 gap-x-20">
                                <AnimatePresence>
                                    <motion.div
                                        key={1}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        exit={{ opacity: 0 }}
                                        className='w-[400px]'
                                    >
                                        <h1 className='text-[2rem] font-medium tracking-tight leading-tight'>Let’s make your software not just better, but remarkable. Let’s build something your users love and take pride in.</h1>
                                    </motion.div>
                                    <motion.div
                                        key={2}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.2 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <form
                                            onSubmit={handleSubmit(handleSubmitRecaptcha)}
                                            className="w-[200px] flex flex-col gap-y-2 pt-5 text-[0.9rem]"
                                        >
                                            <input {...register('name')} className={`w-full h-9 bg-gray-50 rounded-[3px] border ${errors.name ? 'border-red-500' : 'border-gray-300'} ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500 transition-color duration-200`} placeholder='Name' />
                                            <input {...register('email')} className={`w-full h-9 bg-gray-50 rounded-[3px] border ${errors.email ? 'border-red-500' : 'border-gray-300'} ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500 transition-color duration-200`} placeholder='Email' />
                                            <textarea {...register('message')} className={`w-full h-20 bg-gray-50 rounded-[3px] border ${errors.message ? 'border-red-500' : 'border-gray-300'} ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500 transition-color duration-200`} placeholder='Your message' />

                                            <Button isValid={isValid} />

                                            <div className="flex justify-center items-center pt-2">
                                                <div className="w-full border-b border-gray-300"></div>
                                                <p className='text-[14px] font-body text-gray-500 px-5 uppercase'>thanks</p>
                                                <div className="w-full border-b border-gray-300"></div>
                                            </div>
                                        </form>
                                    </motion.div>
                                </AnimatePresence>
                            </section>
                        )
                    )
                }
            </div>
        </>
    )
}


function Button({ isValid }: { isValid: boolean }) {

    const [status, setStatus] = useState<string>('active')
    const [clicked, setClicked] = useState<boolean>(false)

    useEffect(() => {
        if (!isValid && clicked) {
            setStatus('error')
            setClicked(false)
        }
    }, [clicked])

    return (
        <motion.button onClick={() => { setClicked(true) }} onHoverStart={() => { setStatus('hover') }} onHoverEnd={() => { setStatus('active') }} animate={status} className='relative'>
            <motion.div
                variants={{
                    active: {
                        scale: 1,
                        transition: {
                            delay: 0,
                            duration: 0.2
                        }
                    },
                    hover: {
                        scale: 1
                    }
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                    type: 'tween',
                    ease: 'circOut'
                }}
                className="absolute inset-0 bg-indigo-200">
            </motion.div>
            <motion.div
                initial={false}
                transition={{ duration: 0.5 }}
                variants={{
                    error: {
                        backgroundColor: '#EF4444',
                        borderColor: '#EF4444',
                        color: '#fff'
                    },
                    active: {
                        backgroundColor: '#10100e',
                        borderColor: '#10100e',
                        color: '#fff'
                    },
                    hover: {
                        scale: 1.01,
                        backgroundColor: '#6366F1',
                        borderColor: '#6366F1',
                        color: '#fff'

                    }
                }}
                className={`relative w-full h-10 flex justify-center items-center border-2 ${status === 'active' ? 'bg-[#10100e] text-[#fff]' : 'bg-indigo-500 text-[#fff]'}`}>
                <div className="flex items-center justify-center uppercase">
                    {
                        'Submit'
                    }
                </div>
            </motion.div>
        </motion.button>
    )
}