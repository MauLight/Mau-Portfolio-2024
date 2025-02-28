import { RefObject, useEffect } from 'react'
import { useMotionValue, useSpring, frame } from 'framer-motion'
import { useLocation } from 'react-router'

const spring = { damping: 10, stiffness: 100, restDelta: 0.001 }

export const useFollowPointer = (ref: RefObject<HTMLElement>) => {
  const xPoint = useMotionValue(0)
  const yPoint = useMotionValue(0)
  const x = useSpring(xPoint, spring)
  const y = useSpring(yPoint, spring)

  const { pathname } = useLocation()

  useEffect(() => {
    if (!ref.current || pathname.length > 1) return
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!
      frame.read(() => {
        xPoint.set(clientX - element.offsetLeft - 100),
          yPoint.set(clientY - element.offsetTop)
      })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [ref, xPoint, yPoint, pathname])
  return { x, y }
}