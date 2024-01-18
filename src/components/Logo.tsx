import Image from 'next/image'
import Link from 'next/link'

import { getLogo } from '@/api/single-types'

const Logo = async () => {
  const data = await getLogo()

  return (
    <Link href='/' className='flex w-fit items-center justify-center gap-2'>
      <Image
        src={data?.data?.attributes?.img.data.attributes.url}
        alt='logo'
        width={24}
        height={24}
        blurDataURL={data?.data?.attributes?.img.data.attributes.mime}
      />
      <h2 className='font-header font-semibold uppercase'>
        {data?.data?.attributes?.name}
      </h2>
    </Link>
  )
}

export default Logo
