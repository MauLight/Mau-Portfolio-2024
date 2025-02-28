import CryptoJS from 'crypto-js'
import { toast } from 'react-toastify'
const cloudinaryApiSecret = import.meta.env.VITE_CLOUDINARY_APISECRET

export const degToRad = (deg: number) => deg * Math.PI / 180
export const randRange = (min: number, max: number) => Math.random() * (max - min) + min

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === 'top' ? 10 : direction === 'down' ? -10 : 0,
      opacity: 0,
      x: direction === 'left' ? 10 : direction === 'right' ? -10 : 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.5,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }
}

export function generateSignature(params: Record<string, any>): string {
  const sortedParams = Object.keys(params).sort().map(key => `${key}=${params[key]}`).join('&')
  const stringToSign = `${sortedParams}${cloudinaryApiSecret}`
  const hash = CryptoJS.SHA1(stringToSign)

  return hash.toString(CryptoJS.enc.Hex)
}

export function handleCopyToClipboard(text: string, message: string) {
  navigator.clipboard.writeText(text)
  toast.success(message)
}
