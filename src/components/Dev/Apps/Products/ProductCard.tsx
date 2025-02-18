import { useState, type ReactElement } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ProductProps } from '@/utils/types'

const currentTemplate = {
  title: 'modern',
  preview: 'https://res.cloudinary.com/maulight/image/upload/v1737986959/modern.png',
  topbar: {
    container: 'fixed w-full flex justify-center z-50',
    scrollA: 'h-[50px] w-full min-[1440px]:w-web px-3 rounded-[10px]',
    scrollB: 'bg-[#10100e] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70',
    text: 'text-[#ffffff] hover:text-indigo-500 transition-color duration-200',
    search: 'w-[250px] relative h-10'
  },
  hero: {
    layout: 'relative h-[900px] w-full overflow-hidden',
    image: 'h-full grid grid-cols-3 overflow-hidden'
  },
  product: {
    layout: 'flex gap-x-5 bg-[#ffffff] p-10',
    title: 'text-[1.5rem] min-[500px]:text-[2.5rem] font-light text-sym_gray-600 text-balance uppercase',
    button: 'h-10 px-2 mt-5 uppercase text-[#ffffff] transition-all duration-200 bg-[#10100e] hover:bg-indigo-500 active:bg-[#10100e]',
    video: true
  },
  card: {
    layout: 'grid grid-cols-1 sm:grid-cols-2 min-[1440px]:grid-cols-3',
    card: 'h-[700px] col-span-1 overflow-hidden',
    image: 'h-[530px]',
    textLayout: 'w-full h-[230px] absolute bottom-5 flex justify-between items-start px-5 z-10 transition-all duration-300 text-[1rem] min-[400px]:text-[22px] uppercase antialiazed text-[#ffffff] leading-tight',
    gradient: true
  }
}

export const ProductCard = ({ product }: { product: ProductProps }): ReactElement => {

  const { pathname } = useLocation()
  const isCollection = !pathname.includes('product')

  const [wishListed] = useState<boolean>(false)

  const handleWishList = async (id: string) => {
    console.log(id)
    //setWishListed(true)
  }

  function getPercentage() {
    const percentage = product.discount
    const price = product.price
    const discount = percentage ? (percentage / 100) * price : 0
    return (price - discount)
  }

  return (
    <section className={`group relative ${pathname === '/collection' ? 'h-[460px]' : currentTemplate.card ? currentTemplate.card.card : 'h-[700px] col-span-1 overflow-hidden'}`}>

      <div className={currentTemplate.card ? currentTemplate.card.image : 'h-full'}>
        <img key={product.id} src={product.image} alt="product" className="h-full object-cover" />
      </div>

      {
        isCollection && (
          <div className={currentTemplate.card ? currentTemplate.card.textLayout : "w-full px-5 z-10 transition-all duration-300 text-[1rem] min-[400px]:text-[22px] uppercase antialiazed text-[#ffffff] leading-tight"}>
            <Link to={`/product/${product.id}`} className="flex flex-col">
              <h1 aria-label={product.title} className=''>{product.title}</h1>
              <div className="flex gap-x-2">
                <p className='text-[16px] uppercase antialiazed'>{`${getPercentage()}$`}</p>
                {
                  product.discount !== undefined && product.discount > 0 && (
                    <p className='text-[12px] uppercase antialiazed text-gray-100 line-through'>{`${product.price}$`}</p>
                  )
                }
              </div>
            </Link>
            <div className="flex items-center gap-x-5">
              <button aria-label='wishlist' onClick={() => { handleWishList(product.id as string) }}>
                {
                  wishListed ? (
                    <i className="fa-solid fa-heart text-indigo-500"></i>
                  )
                    :
                    (
                      <i className="fa-solid fa-heart text-[#ffffff]"></i>
                    )
                }
              </button>
              <button aria-label='add to cart' onClick={() => { }} className='h-[50px] w-[50px] antialiased rounded-full bg-gray-900 border-t border-sym_gray-300 shadow-sm shadow-sym_gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 flex justify-center items-center cursor-pointer text-[#ffffff] hover:text-indigo-500'>
                <i className="fa-solid fa-sm fa-cart-plus"></i>
              </button>
            </div>
          </div>
        )
      }
      {
        currentTemplate.card && currentTemplate.card.gradient && (
          <div className='w-full h-[530px] absolute top-0 left-0 bg-gradient-to-t from-[#10100e] to-transparent opacity-30'></div>
        )
      }
      <Link to={`/product/${product.id}`} className="absolute top-0 left-0 w-full  bg-[#10100e] opacity-0 group-hover:opacity-30 z-10 transition-all duration-200"></Link>
    </section>
  )
}
