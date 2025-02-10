import { type ReactElement } from 'react'
import { motion } from 'framer-motion'

const About = (): ReactElement => {

  // const [width] = useState(900)
  // const [height] = useState(700)

  // useEffect(() => {
  //   const canvas = document.getElementById('animation') as HTMLCanvasElement
  //   if (canvas) {
  //     canvas.width = width * devicePixelRatio
  //     canvas.height = height * devicePixelRatio

  //     canvas.style.setProperty('width', `${width}px`)
  //     canvas.style.setProperty('height', `${height}px`)

  //     const ctx = canvas.getContext('2d')
  //     if (ctx) {
  //       requestAnimationFrame(drawFrame)

  //       let frame = 0
  //       function drawFrame(ts: number) {
  //         ts /= 1000

  //         if (ctx) {
  //           //* Clear the previous frame
  //           ctx.clearRect(0, 0, canvas.width, canvas.height)

  //           const gradient = ctx.createLinearGradient(0, 0, 500, 0)
  //           gradient?.addColorStop(0, 'red')
  //           gradient?.addColorStop(1, 'pink')

  //           ctx.fillStyle = gradient
  //           ctx.fillRect(100, 100, frame, 500)

  //           //* Circle
  //           const cX = 1000
  //           const cY = 400
  //           const cRadius = 50
  //           const startAngle = 0
  //           const endAngle = ts * 2

  //           ctx.strokeStyle = '#10100e'
  //           ctx.beginPath()
  //           ctx.arc(cX, cY, cRadius, startAngle, endAngle)
  //           ctx.lineWidth = 4
  //           ctx.stroke()

  //           //* Quadratic curve
  //           ctx.lineWidth = 2
  //           ctx.strokeStyle = '#6366F1'
  //           ctx.beginPath()
  //           ctx.moveTo(900, 400)
  //           ctx.quadraticCurveTo(1000, 500, 1100, 400)

  //           ctx.stroke()

  //           ctx.lineWidth = 2
  //           ctx.strokeStyle = '#6366F1'
  //           ctx.beginPath()
  //           ctx.moveTo(900, 400)
  //           ctx.quadraticCurveTo(1000, 300, 1100, 400)
  //           ctx.stroke()

  //         }

  //         //console.log(frame, 'the frame')
  //         //frame = frame > 500 ? 0 : frame + 5
  //         requestAnimationFrame(drawFrame)
  //       }

  //     }
  //   }
  // })

  return (
    <div className='w-full pt-32 pb-10 flex flex-col justify-center items-center gap-y-20'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className='w-[900px] h-[700px] rounded-[12px] overflow-hidden'
      >
        <iframe title='about' src="https://drive.google.com/file/d/1X17JPFMm0A09eonmj0AqkqHmkHsiMU98/preview" className='w-full h-full' allow="autoplay"></iframe>
      </motion.div>
      {/* <div className="w-full flex flex-col justify-center items-center border">
        <canvas className='border border-red-500' width={width} height={height} id='animation' />
      </div> */}
    </div>
  )
}

export default About
