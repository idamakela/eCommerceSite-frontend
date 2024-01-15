import { SWRConfig } from 'swr'
import { getCategories } from '@/api/categories'
import { categoriesEndpoint, subcategoriesEndpoint } from '@/api/endpoints'

import NavLink from './NavLink'
import NavLinks from './NavLinks'
import { cn } from '@/utils/classnames'
import { getSubcategories } from '@/api/subcategories'
import { CategoryAndSubcategoryRes } from '@/utils/types'

export async function getStaticProps() {
  const category: CategoryAndSubcategoryRes = await getCategories()
  const subcategory: CategoryAndSubcategoryRes = await getSubcategories()

  if (
    categoriesEndpoint !== '/api/categories' ||
    subcategoriesEndpoint !== '/api/subcategories'
  ) {
    return console.log('build fetch fallback error')
  }

  return {
    props: {
      fallback: {
        '/api/categories': category,
        '/api/subcategories': subcategory,
      },
    },
  }
}
interface Props {
  open: boolean
  category?: CategoryAndSubcategoryRes
  subcategory?: CategoryAndSubcategoryRes
}

const Navigation = ({ open, category, subcategory }: Props) => {
  return (
    <SWRConfig value={{ fallback: { category, subcategory } }}>
      <nav
        className={cn(
          'mt-20 hidden auto-rows-max grid-cols-2 gap-y-7',
          open && 'grid h-screen',
        )}
      >
        <div className='col-span-2'>
          <NavLink
            href='/category/products'
            variant={'filled'}
            classnames='w-full'
          >
            all products
          </NavLink>
        </div>
        <div className='row-start-2 flex flex-col gap-7'>
          <NavLinks
            cachekey={categoriesEndpoint}
            fetcher={getCategories}
            endpoint={'category'}
          />
        </div>

        {/* <div className='row-start-2 flex flex-col gap-7'>
          <NavLinks
            cachekey={subcategoriesEndpoint}
            fetcher={getSubcategories}
            endpoint={'subcategory'}
          />
        </div> */}
      </nav>
    </SWRConfig>
  )
}

export default Navigation
