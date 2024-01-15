import Image from 'next/image'
import Link from 'next/link'

import { ProductCard } from '@/utils/types'
import defaultImage from '../../public/mulyadi-ZnLprInKM7s-unsplash.jpg'

const Product = ({
  title = 'Not Found',
  price = 99.99,
  imgUrl = defaultImage,
  imgName = 'Image not found',
  slug = '/',
}: ProductCard) => {
  return (
    <>
      <Link href={slug} className='group/productCard'>
        <Image src={imgUrl} alt={imgName} height={500} priority={true} />
        <div className='transition-all duration-300 group-hover/productCard:pl-3'>
          <h4 className='pt-1 text-sm capitalize md:text-base'>{title}</h4>
          <p className='pt-1 text-xs md:text-sm'>{price}</p>
        </div>
      </Link>
    </>
  )
}

export default Product
