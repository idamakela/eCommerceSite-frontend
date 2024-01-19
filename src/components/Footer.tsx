import Link from 'next/link'

import Logo from './Logo'
import { getFooter } from '@/api/single-types'

const Footer = async () => {
  const data = await getFooter()

  return (
    <footer className='flex flex-col items-center bg-neutral-400 px-3'>
      <h3 className='pb-5 pt-14 font-header font-medium uppercase'>
        {data?.data?.attributes?.title}
      </h3>
      <p className='text-center text-xs'>{data?.data?.attributes?.desc}</p>
      <div className='pb-14 pt-28'>
        <Link href='/'>
          <Logo />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
