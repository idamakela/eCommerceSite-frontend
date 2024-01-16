import useSWR from 'swr'

import NavLink from './NavLink'
import { CategoryAndSubcategory } from '@/utils/types'

interface Props {
  classnames?: string
  cachekey: string
  fetcher: () => void
  endpoint: 'category' | 'subcategory'
}

const NavLinks = ({ classnames, cachekey, fetcher, endpoint }: Props) => {
  const {
    isLoading,
    error,
    data: { data = [] } = {} as { data: CategoryAndSubcategory[] },
  } = useSWR(cachekey, fetcher)

  // TODO: error handling
  // TODO: isLoading handling
  // ERROR: endpoint is incorrect to frontend

  return (
    <>
      {data?.map((item) => (
        <NavLink
          key={item.id}
          href={`/${endpoint}/${item.attributes.slug}`}
          variant={'underline'}
          classnames={classnames}
        >
          {item.attributes.title}
        </NavLink>
      ))}
    </>
  )
}

export default NavLinks
