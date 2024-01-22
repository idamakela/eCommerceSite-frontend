'use client'

import { useEffect } from 'react'
import useSWR, { preload } from 'swr'
import { useRouter } from 'next/navigation'

import Button from './Button'
import NavLinks from './NavLinks'
import { useNavigation } from '@/hooks/useNavigation'
import { useLockScroll } from '@/hooks/useLockScreen'
import { getNavigation as fetcher } from '@/api/categories'
import { categoriesEndpoint as cacheKey } from '@/api/endpoints'

const Navigation = () => {
  const { error, isLoading, data } = useSWR(cacheKey, fetcher)
  const { open, setOpen } = useNavigation()
  const router = useRouter()
  useLockScroll(open)

  useEffect(() => {
    preload(cacheKey, fetcher)
  }, [])

  const handleRouting = (category?: string, subcategory?: string) => {
    if (category) {
      router.push(`/category/${category}`)
    }

    if (category && subcategory) {
      router.push(`/category/${category}?subcategory=${subcategory}`)
    }

    setOpen(false)
  }
  // TODO: error handling
  // TODO: isLoading handling

  return (
    <>
      {open && (
        <nav className='h-nav mt-[5.5rem] flex flex-col gap-y-7 bg-white'>
          <Button
            onClick={() => handleRouting('products')}
            variant='filled'
            className='w-full'
          >
            all products
          </Button>
          <div className='flex flex-col gap-y-7 overflow-x-hidden overflow-y-scroll pb-7 lg:flex-row lg:justify-evenly'>
            {data && <NavLinks data={data} handleRouting={handleRouting} />}
          </div>
        </nav>
      )}
    </>
  )
}

export default Navigation
