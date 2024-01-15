import Link from 'next/link'
import useSWR from 'swr'

import Button from './Button'
import { CategoryAndSubcategory } from '@/utils/types'

interface Props {
  classnames?: string
  endpoint: string
  fetcher: () => void
}

const NavLinks = ({ classnames, endpoint, fetcher }: Props) => {
  const {
    isLoading,
    error,
    data: { data = [] } = {} as { data: CategoryAndSubcategory[] },
  } = useSWR(endpoint, fetcher)

  // TODO: error handling
  // TODO: isLoading handling

  return (
    <>
      {data?.map((item) => (
        <Link key={item.id} href={`/${endpoint}/${item.attributes.slug}`}>
          <Button variant='ghost' className={classnames}>
            {item.attributes.title}
          </Button>
        </Link>
      ))}
    </>
  )
}

export default NavLinks
