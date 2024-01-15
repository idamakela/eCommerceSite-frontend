import Image, { StaticImageData } from 'next/image'

import defaultImage from '@/assets/mulyadi-ZnLprInKM7s-unsplash.jpg'
import Button from '@/components/Button'

interface ProductPageProps {
  title: string
  desc: string
  price: number
  imgUrl: string | StaticImageData
  imgAlt: string
  handleOnClick: () => void
}

const ProductPage = ({
  title = 'Not Found',
  desc = 'The product you are trying to find could not be found.',
  price = 99.99,
  imgUrl = defaultImage,
  imgAlt = 'Not Found',
  handleOnClick,
}: ProductPageProps) => {
  return (
    <>
      <div className='h-full'>
        <Image
          src={imgUrl}
          alt={imgAlt}
          height={600}
          priority={true}
          className='lg:h-svh lg:w-auto'
        />
      </div>
      <div className='my-5 p-8'>
        <h1 className='font-header text-xl font-semibold uppercase md:text-2xl'>
          {title}
        </h1>
        <p className='mt-5'>{desc}</p>
        <Button
          onClick={handleOnClick}
          className='mt-16 flex w-full justify-between'
        >
          <span>add to cart</span>
          <span>£ {price}</span>
        </Button>
        <p className='pt-1 text-right text-xs font-extralight text-neutral-500'>
          All items are free in checkout
        </p>
      </div>
    </>
  )
}

export default ProductPage
