import React, { ReactElement, useEffect, useState } from 'react'
import { SummaryCard } from './SummaryCard'
import { ProductProps } from './types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaPayment } from '@/utils/auth'
import { RotatingLines } from 'react-loader-spinner'

interface PaymentFormProps {
    cart: ProductProps[]
    totalWithVat: number
    setReadyToPay: React.Dispatch<React.SetStateAction<boolean>>
    setPaymentConfirmed: React.Dispatch<React.SetStateAction<boolean>>
}

const cardTypes = {
  visa: /^4/,
  mastercard: /^5[1-5]/,
  amex: /^3[47]/
}

export const PaymentForm = ({ cart, totalWithVat, setReadyToPay, setPaymentConfirmed } : PaymentFormProps) => {
  const { register, reset, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      email: ''
    },
    resolver: yupResolver(schemaPayment)
  })

  const [cardNumber, setCardNumber] = useState<string>('')
  const [cardType, setCardType] = useState<ReactElement>(<i className='fa-solid fa-credit-card'></i>)
  const [expirationDate, setExpirationDate] = useState<string>('')
  const [deleteDate, setDeleteDate] = useState<boolean>(false)

  const [confirmPayment, setConfirmPayment] = useState<boolean>(false)

  const getCardType = (num: string) => {
    if (cardTypes.visa.test(num)) {
      setCardType(<i className='fa-brands fa-cc-visa'></i>)
      return
    }
    if (cardTypes.mastercard.test(num)) {
      setCardType(<i className='fa-brands fa-cc-mastercard'></i>)
      return
    }
    if (cardTypes.amex.test(num)) {
      setCardType(<i className='fa-brands fa-cc-amex'></i>)
      return
    }
    else setCardType(<i className='fa-solid fa-credit-card'></i>)
  }

  const handleExpirationDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.value.length === 2 && !deleteDate) {
      const stringArray = [... e.target.value]
      stringArray.splice(2, 0, '/')
      setExpirationDate(stringArray.join(''))
    } else {
      setExpirationDate(e.target.value)
    }

  }

  const handleSubmitForm = () => {
    setConfirmPayment(true)
    setTimeout(() => {
      reset()
      setPaymentConfirmed(true)
      setConfirmPayment(false)
    }, 5000)
  }

  useEffect(() => {
    getCardType(cardNumber)
    cardNumber.length > 0 && setValue('cardNumber', cardNumber, { shouldValidate: true })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardNumber])

  useEffect(() => {
    expirationDate.length > 0 && setValue('expDate', expirationDate, { shouldValidate: true })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expirationDate])

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        setDeleteDate(true)
      } else {
        setDeleteDate(false)
      }
    })
  })

  return (
    <div className="w-full flex justify-between">
      <div className="flex flex-col gap-y-10 w-1/2 py-10 overflow-y-scroll">
        <div className="flex gap-x-5">
          <h1 className='text-[#ffffff] aktivLight text-[38px] uppercase'>Total</h1>
          <h1 className='text-[#ffffff] aktiv text-[38px] uppercase'>{totalWithVat}$</h1>
        </div>
        <div className="flex flex-col">
          {
            cart.map((product, i) => (
              <SummaryCard product={product} key={i} />
            ))
          }
        </div>
      </div>
      <form onSubmit={handleSubmit(handleSubmitForm)} className={`flex flex-col gap-y-4 w-[400px] rounded-[20px] min-h-[400px] ${Object.keys(errors).length === 0 ? 'pt-8' : 'pt-0'}`}>
        <div className="flex flex-col">
          <label className='text-[#ffffff] font-aktiv text-[12px]' htmlFor="email">Email</label>
          <input {...register('email')} id='email' type="email" className='h-8 border bg-transparent text-[#ffffff] px-2 ring-0 focus:ring-0 focus:outline-none' />
          {
            errors.email !== undefined && errors.email.message !== undefined ? <small className='text-red-500'>{errors.email.message[0].toUpperCase() + errors.email.message.slice(1)}</small> : null
          }
        </div>

        <div className="relative flex flex-col">
          <label className='text-[#ffffff] font-aktiv text-[12px]' htmlFor="card">Card information</label>
          <input {...register('cardNumber')} onChange={({ target }) => { setCardNumber(target.value) }} id='card' type="text" className='h-8 border bg-transparent text-[#ffffff] pl-8 ring-0 focus:ring-0 focus:outline-none' />
          <input name="chrome-autofill-dummy1" className='hidden' disabled/>
          <input name="chrome-autofill-dummy2" className='hidden' disabled/>
          <div className="grid grid-cols-2">
            <input {...register('expDate')} placeholder='(mm/yy)' maxLength={5} value={expirationDate} onChange={(e) => { handleExpirationDate(e) }} type="text" className='h-8 border-l border-b bg-transparent text-[#ffffff] px-2 ring-0 focus:ring-0 focus:outline-none' />
            <input {...register('cvc')} placeholder='cvc' maxLength={3} type="text" className='h-8 border-x border-b bg-transparent text-[#ffffff] px-2 ring-0 focus:ring-0 focus:outline-none' />
          </div>
          <div className="absolute top-6 left-2 text-[#ffffff]">
            {cardType}
          </div>
          {
            errors.cardNumber !== undefined && errors.cardNumber.message !== undefined ? <small className='text-red-500'>{errors.cardNumber.message[0].toUpperCase() + errors.cardNumber.message.slice(1)}</small> : null
          }
          {
            errors.expDate !== undefined && errors.expDate.message !== undefined ? <small className='text-red-500'>{errors.expDate.message[0].toUpperCase() + errors.expDate.message.slice(1)}</small> : null
          }
          {
            errors.cvc !== undefined && errors.cvc.message !== undefined ? <small className='text-red-500'>{errors.cvc.message[0].toUpperCase() + errors.cvc.message.slice(1)}</small> : null
          }
        </div>

        <div className="flex flex-col">
          <label className='text-[#ffffff] font-aktiv text-[12px]' htmlFor="holder">Cardholder name</label>
          <input id='holder' type="text" {...register('cardHolder')} className='h-8 border bg-transparent text-[#ffffff] px-2 ring-0 focus:ring-0 focus:outline-none' />
          {
            errors.cardHolder !== undefined && errors.cardHolder.message !== undefined ? <small className='text-red-500'>{errors.cardHolder.message[0].toUpperCase() + errors.cardHolder.message.slice(1)}</small> : null
          }
        </div>
        <div className="flex flex-col">
          <label className='text-[#ffffff] font-aktiv text-[12px]' htmlFor="holder">Country or region</label>
          <input {...register('country')} id='holder' type="text" className='h-8 border bg-transparent text-[#ffffff] px-2 ring-0 focus:ring-0 focus:outline-none' />
          <input {...register('zip')} placeholder='zip' id='holder' type="text" className='h-8 border-x border-b bg-transparent text-[#ffffff] px-2 ring-0 focus:ring-0 focus:outline-none' />
          {
            errors.country !== undefined && errors.country.message !== undefined ? <small className='text-red-500'>{errors.country.message[0].toUpperCase() + errors.country.message.slice(1)}</small> : null
          }
          {
            errors.zip !== undefined && errors.zip.message !== undefined ? <small className='text-red-500'>{errors.zip.message[0].toUpperCase() + errors.zip.message.slice(1)}</small> : null
          }
        </div>
        <div className="flex flex-col">
          <button type='submit' className='h-8 flex justify-center items-center bg-[#ffffff] hover:bg-indigo-500 active:bg-[#ffffff] px-2 uppercase text-[#10100e] mt-3 transition-all duration-200'>
            {
              confirmPayment ? (
                <RotatingLines
                  width="18"
                  strokeColor='#10100e'
                />
              ):(
                'Pay'
              )
            }
          </button>
          <button type='button' onClick={() => { setReadyToPay(false) }} className='h-8 hover:bg-red-600 active:bg-transparent px-2 uppercase text-[#ffffff] mt-3 transition-all duration-200 text-[12px] text-right'>Cancel</button>
        </div>
      </form>
    </div>
  )
}
