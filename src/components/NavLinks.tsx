'use client'

import { useMediaQuery } from 'usehooks-ts'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, ChevronUp } from 'lucide-react'

import Button from './Button'
import { cn } from '@/utils/classnames'
import { Navigation, Subcategory } from '@/utils/types'

interface Props {
  data: Navigation[] | Subcategory[]
  category?: string
  level?: number
  handleRouting: (category?: string, subcategory?: string) => void
}

const NavLinks = ({ data, category, level = 0, handleRouting }: Props) => {
  const [openParents, setOpenParents] = useState<string[]>([])
  const pathname = usePathname()
  const lg = useMediaQuery('(min-width: 1024px)')

  const handleCategory = (title: string) => {
    if (openParents.includes(title)) {
      setOpenParents(openParents.filter((item) => item !== title))
    } else {
      setOpenParents([...openParents, title])
    }
  }

  useEffect(() => {
    setOpenParents([])
  }, [pathname])

  return (
    <>
      {data?.map((item: Navigation | Subcategory) => (
        <div key={item.id} className='flex flex-col gap-y-7 lg:min-w-32'>
          {level === 0 ? (
            <Button
              variant='underline'
              className={cn('pl-6 text-left', openParents.includes(item.title) && 'border-black')}
              onClick={handleCategory && (() => handleCategory(item.title))}
            >
              <div className='flex gap-2'>
                {item.title}
                {openParents.includes(item.title) ? (
                  lg ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )
                ) : lg ? (
                  <ChevronDown />
                ) : (
                  <ChevronRight />
                )}
              </div>
            </Button>
          ) : (
            <Button
              onClick={() => handleRouting(category, item.slug)}
              variant='underline'
              className='w-full text-left'
            >
              {item.title}
            </Button>
          )}

          {'subcategories' in item && openParents.includes(item.title) && (
            <div className='ml-12 flex flex-col gap-y-7 lg:m-0'>
              <Button
                // href={`/category/${item.slug}`}
                onClick={() => handleRouting(item.slug)}
                variant='underline'
                className='w-full text-left'
              >
                all products
              </Button>
              <NavLinks
                data={item.subcategories}
                category={item.slug}
                level={level + 1}
                handleRouting={handleRouting}
              />
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default NavLinks
