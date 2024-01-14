'use client' //TODO: pre-fetching data
import useSWR, { preload } from 'swr'
import Link from 'next/link'
import { getCategories } from '@/api/categories'
import { categoriesEndpoint as cacheKey } from '@/api/endpoints'

import Button from './Button'
import { Category } from '@/utils/types'

interface Props {
  classnames?: string
}

const NavLinks = ({ classnames }: Props) => {
  const {
    isLoading,
    error,
    data: { data = [] } = {} as { data: Category[] },
  } = useSWR(cacheKey, getCategories)

  return (
    <>
      {data?.map((category) => (
        <Link key={category.id} href={`/category/${category.attributes.slug}`}>
          <Button variant='ghost' className={classnames}>
            {category.attributes.slug}
          </Button>
        </Link>
      ))}
    </>
  )
}

export default NavLinks
