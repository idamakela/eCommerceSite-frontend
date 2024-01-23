import Image from 'next/image'

import { getLogo } from '@/api/single-types'

type DataRes = {
  data: {
    attributes: {
      name: string
      img: {
        data: {
          attributes: {
            url: string
            mime: string
          }
        }
      }
    }
  }
}

const Logo = async () => {
  const { data }: DataRes = await getLogo()

  return (
    <div className='flex w-fit items-center justify-center gap-2'>
      <Image
        src={data?.attributes.img.data.attributes.url}
        alt='logo'
        width={24}
        height={24}
        blurDataURL={data?.attributes.img.data.attributes.mime}
      />
      <h2 className='font-header font-semibold uppercase'>{data?.attributes.name}</h2>
    </div>
  )
}

export default Logo
