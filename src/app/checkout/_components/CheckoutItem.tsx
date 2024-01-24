'use client'

import { X } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

import Button from '@/components/Button'
import defaultImg from '@/assets/mulyadi-ZnLprInKM7s-unsplash.jpg'

interface CheckoutItemProps {
  id: string
  title?: string
  price?: number
  imgUrl?: string | StaticImageData
  imgAlt?: string
  height?: number
  width?: number
  handleOnClick: (id: string) => void
}

const CheckoutItem = ({
  id,
  title = 'Not Found',
  price = 99.99,
  imgUrl = defaultImg,
  imgAlt = 'Not Found',
  width,
  height = 150,
  handleOnClick,
}: CheckoutItemProps) => {
  return (
    <div className='flex w-full justify-between border-b-2 py-5'>
      <div className='flex gap-4'>
        <div className='overflow-hidden'>
          <Image
            src={imgUrl}
            alt={imgAlt}
            height={height}
            width={width}
            priority={true}
            className='max-h-[150px] w-auto object-contain'
          />
        </div>
        <h3 className='uppercase'>{title}</h3>
      </div>
      <div className='flex flex-col items-end justify-between'>
        <Button variant='ghost' onClick={() => handleOnClick(id)}>
          <X />
        </Button>
        <div>
          <p className='text-red-600'>£ 00.00</p>
          <p className='text-neutral-500 line-through'>£ {price}</p>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItem
