import { type ReactNode } from 'react'
import { SocialApp } from './Social/ScreenApp'
import { EcommerceHome } from './Ecommerce/EcommerceHome'
import { motion } from 'framer-motion'
import Wizard from './Onboarding/Wizard'
import IndividualProduct from './Products/IndividualProduct'

const childVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.2, visualDuration: 1 }
  },
  hidden: {
    y: 10,
    opacity: 0
  }
}

const AppHome = (): ReactNode => {

  return (

    <FadeinContainer>
      <>
        <motion.div key={1} variants={childVariants} className="w-full h-auto border rounded-[20px] overflow-hidden">
          <IndividualProduct />
        </motion.div>

        <motion.div key={2} variants={childVariants} className="w-full h-[700px] border rounded-[20px] overflow-hidden">
          <Wizard />
        </motion.div>

        <motion.div key={3} variants={childVariants} className="w-full h-[700px] border rounded-[20px] overflow-hidden">
          <SocialApp />
        </motion.div>

        <motion.div key={4} variants={childVariants} className="w-full h-[700px] border rounded-[20px] overflow-hidden">
          <EcommerceHome />
        </motion.div>
      </>
    </FadeinContainer>


  )
}

export default AppHome

function FadeinContainer({ children }: { children: ReactNode }): ReactNode {

  const containerVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 1 }
    },
    hidden: {
      y: 100,
      opacity: 0,
      transition: { staggerChildren: 1, staggerDirection: -1 }
    }
  }

  return (
    <motion.div
      className='w-full min-h-screen flex flex-col justify-center items-center gap-y-20 pt-32 pb-20 px-10'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      {
        children
      }
    </motion.div>
  )
}
