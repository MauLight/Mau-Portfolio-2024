import { useEffect, useRef, useState } from 'react'
import { TitleText } from '../Common/TitleText'
import html2canvas from 'html2canvas'


const Home = () => {
  const [width, setWidth] = useState(1080)
  const [height, setHeight] = useState(1080)
  const printRef = useRef(null)

  useEffect(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    const w = width * 0.1
    const h = height * 0.1
    const gap = width * 0.03
    const ix = width * 0.17
    const iy = height * 0.17
    const off = width * 0.02
    let x, y

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i
        y = iy + (h + gap) * j

        ctx.beginPath()
        ctx.lineWidth = width * 0.01
        ctx.lineWidth = 6
        ctx.rect(x, y, w, h)
        ctx.stroke()

        if (Math.random() > 0.5) {
          ctx.beginPath()
          ctx.rect(x + off / 2, y + off / 2, w - off, h - off)
          ctx.stroke()
        }

      }
    }

  })

  const handleDownloadImage = async () => {
    const element = printRef.current
    if (element) {
      const canvas = await html2canvas(element)
      const data = canvas.toDataURL('image/png')
      const link = document.createElement('a')

      if ( typeof link.download === 'string') {
        link.href = data
        link.download = 'image.jpg'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        window.open(data)
      }
    }
  }

  return (
    <div className="min-h-screen h-full grid grid-cols-3">
      <div className="flex items-center gap-x-2 border">
        <TitleText text="M" />
        <TitleText text="Light" />
      </div>
      <canvas onClick={handleDownloadImage} ref={printRef} width={width} height={height} id='animation' className="" />
    </div>
  )
}

export default Home
