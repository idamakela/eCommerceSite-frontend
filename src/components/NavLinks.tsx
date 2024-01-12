'use client' //TODO: pre-fetching data
import useSWR from 'swr'
import Link from 'next/link'
import { getCategories, categoriesEndpoint as cacheKey } from '@/api/categories'

import Button from './Button'
import type { ICategories } from '@/utils/types'

interface Props {
  classnames?: string
}

const NavLinks = ({ classnames }: Props) => {
  const {
    isLoading,
    error,
    data: categories,
  } = useSWR<ICategories>(cacheKey, getCategories)

  return (
    <>
      {categories?.map((category) => (
        <Link key={category.id} href={`/category/${category.slug}`}>
          <Button variant='ghost' className={classnames}>
            {category.category}
          </Button>
        </Link>
      ))}
    </>
  )
}

export default NavLinks
