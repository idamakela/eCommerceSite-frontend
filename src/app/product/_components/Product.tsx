'use client'

import { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import Button from '@/components/Button'
import defaultImage from '@/assets/mulyadi-ZnLprInKM7s-unsplash.jpg'
import { useCheckout } from '@/hooks/useCheckout'
import { toast } from 'sonner'

interface Props {
  title?: string
  desc?: string
  price?: number
  imgUrl?: string | StaticImageData
  imgAlt?: string
  height?: number
  width?: number
  blurDataURL?: string
  paramId?: string
  image?: string
}

const Product = ({
  title = 'Not Found',
  desc = 'The product you are trying to find could not be found.',
  price = 99.99,
  imgUrl = defaultImage,
  imgAlt = 'Not Found',
  width = 600,
  height = 300,
  blurDataURL,
  paramId = 'not-found',
  image,
}: Props) => {
  const [disable, setDisable] = useState(false)
  const { products, setProducts, setImages } = useCheckout()

  const handleOnClick = () => {
    if (!products.includes(paramId) && image) {
      setProducts(paramId)
      setImages({ id: paramId, image })
      toast.success('Added item to your shopping cart')
    }
  }

  useEffect(() => {
    if (!products.includes(paramId)) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }, [paramId, products, setDisable])

  return (
    <>
      <div className='h-full'>
        <Image
          src={imgUrl}
          alt={imgAlt}
          height={height}
          width={width}
          priority={true}
          blurDataURL={blurDataURL}
          className='w-full max-w-[425px] object-cover lg:h-svh lg:w-auto lg:max-w-max'
        />
      </div>
      <div className='my-5 max-w-[490px] p-8 lg:w-[490px]'>
        <h1 className='font-header text-xl font-semibold uppercase md:text-2xl'>{title}</h1>
        <p className='mt-5'>{desc}</p>
        <Button
          onClick={handleOnClick}
          disabled={disable}
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

export default Product
