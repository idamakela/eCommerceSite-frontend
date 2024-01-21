'use client'

import { useEffect } from 'react'
import useSWR, { preload } from 'swr'
import { usePathname } from 'next/navigation'

import NavLink from './NavLink'
import NavLinks from './NavLinks'
import { useNavigation } from '@/hooks/useNavigation'
import { useLockScroll } from '@/hooks/useLockScreen'
import { getNavigation as fetcher } from '@/api/categories'
import { categoriesEndpoint as cacheKey } from '@/api/endpoints'

const Navigation = () => {
  const { error, isLoading, data } = useSWR(cacheKey, fetcher)
  const { open, setOpen } = useNavigation()
  const pathname = usePathname()
  useLockScroll(open)

  useEffect(() => {
    preload(cacheKey, fetcher)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname, setOpen])

  // TODO: error handling
  // TODO: isLoading handling

  return (
    <>
      {open && (
        <nav className='h-nav mt-[5.5rem] flex flex-col gap-y-7 bg-white'>
          <NavLink
            href='/category/products'
            variant={'filled'}
            classnames='w-full'
          >
            all products
          </NavLink>
          <div className='flex flex-col gap-y-7 overflow-x-hidden overflow-y-scroll pb-7 lg:flex-row lg:justify-evenly'>
            {data && <NavLinks data={data} />}
          </div>
        </nav>
      )}
    </>
  )
}

export default Navigation
