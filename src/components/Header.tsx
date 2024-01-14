'use client'
// TODO: if there are more categories than header desktop view allows, expand option should exist. 
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMediaQuery } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import { Menu, Ratio, ShoppingBag, X } from 'lucide-react'

import Navigation from './Navigation'
import NavLinks from './NavLinks'
import { cn } from '@/utils/classnames'

const Header = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const md = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed left-0 top-0 w-full bg-transparent p-8 font-header',
        open && 'bg-white',
      )}
    >
      <div className='flex items-center justify-between'>
        <div className='flex gap-2'>
          <Link href='/'>
            <Ratio />
          </Link>
          {!md && (
            <nav className='ml-8 flex gap-5'>
              <NavLinks classnames='text-sm' />
            </nav>
          )}
        </div>
        <div className='flex gap-2'>
          <Link href='/checkout'>
            <ShoppingBag />
          </Link>
          {md && (
            <button onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          )}
        </div>
      </div>
      {md && <Navigation open={open} />}
    </header>
  )
}

export default Header
