import { motion } from 'framer-motion'

interface FlipLinkProps { children: string, href: string, textSize: string, fontColor: string, onClick?: () => void }

export const FlipLink = ({ children, href, textSize, fontColor, onClick }: FlipLinkProps) => {
  const DURATION = 0.25
  const STAGGER = 0.025
  return (
    <motion.a
      initial='initial'
      whileHover='hover'
      href={href}
      onClick={onClick}
      className={`relative block overflow-hidden whitespace-nowrap ${textSize} ${fontColor} uppercase font-body z-20`}
      style={{
        lineHeight: 0.94
      }}
    >
      <div
      >
        {children.split('').map((l, i) => <motion.span
          className='inline-block'
          variants={{
            initial: { y: 0 },
            hover: { y: '-100%' }
          }}
          transition={{
            duration: DURATION,
            ease: 'easeInOut',
            delay: i * STAGGER
          }}
          key={i}>{l}</motion.span>)}
      </div>
      <div
        className='absolute inset-0'
      >
        {children.split('').map((l, i) => <motion.span
          className='inline-block'
          variants={{
            initial: { y: '100%' },
            hover: { y: 0 }
          }}
          transition={{
            duration: DURATION,
            ease: 'easeInOut',
            delay: i * STAGGER
          }}
          key={i}>{l}</motion.span>)}
      </div>
    </motion.a>
  )
}