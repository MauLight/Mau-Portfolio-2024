import { RefObject, useEffect } from 'react'
import { useMotionValue, useSpring, frame } from 'framer-motion'

const spring = { damping: 10, stiffness: 100, restDelta: 0.001 }

export const useFollowPointer = (ref: RefObject<HTMLElement>) => {
  const xPoint = useMotionValue(0)
  const yPoint = useMotionValue(0)
  const x = useSpring(xPoint, spring)
  const y = useSpring(yPoint, spring)

  useEffect(() => {
    if (!ref.current) return
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!
      frame.read(() => {
        xPoint.set(clientX - element.offsetLeft),
          yPoint.set(clientY - element.offsetTop)
      })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [ref, xPoint, yPoint])
  return { x, y }
}