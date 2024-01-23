import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import defaultImage from '@/assets/mulyadi-ZnLprInKM7s-unsplash.jpg'

interface Props {
  title?: string
  slug?: string
  price?: number
  imgUrl?: string | StaticImageData
  imgName?: string
  blurDataURL?: string
  height?: number
  width?: number
}

const ProductCard = ({
  title = 'Not Found',
  price = 99.99,
  imgUrl = defaultImage,
  imgName = 'Image not found',
  slug = '/product/not-found',
  blurDataURL,
  height = 500,
  width = 200,
}: Props) => {
  return (
    <>
      <Link href={`/product/${slug}`} className='group/productCard flex flex-col'>
        <div className='max-h-72 flex-grow'>
          <Image
            src={imgUrl}
            alt={imgName}
            height={height}
            width={width}
            blurDataURL={blurDataURL}
            priority={true}
            className='h-full w-full object-cover'
          />
        </div>

        <div className='transition-all duration-300 group-hover/productCard:pl-3'>
          <h4 className='pt-1 text-sm capitalize md:text-base'>{title}</h4>
          <p className='pt-1 text-xs md:text-sm'>{price}</p>
        </div>
      </Link>
    </>
  )
}

export default ProductCard
