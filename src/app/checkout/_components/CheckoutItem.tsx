import { X } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

import Button from '@/components/Button'
import defaultImg from '@/assets/mulyadi-ZnLprInKM7s-unsplash.jpg'

interface CheckoutItemProps {
  imgUrl?: string | StaticImageData
  imgAlt?: string
  title?: string
  price?: number
  handleOnClick?: () => void
}

const CheckoutItem = ({
  imgUrl = defaultImg,
  imgAlt = 'Not Found',
  title = 'Not Found',
  price = 99.99,
  handleOnClick,
}: CheckoutItemProps) => {
  return (
    <div className='flex w-full justify-between border-b-2 py-5'>
      <div className='flex gap-4'>
        <Image src={imgUrl} alt={imgAlt} height={150} />
        <h3 className='uppercase'>{title}</h3>
      </div>
      <div className='flex flex-col items-end justify-between'>
        <Button variant='ghost' onClick={handleOnClick}>
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
