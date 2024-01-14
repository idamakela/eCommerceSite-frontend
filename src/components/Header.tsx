'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, Ratio, ShoppingBag, X } from 'lucide-react'

import Navigation from './Navigation'
import { cn } from '@/utils/classnames'

const Header = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

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
        <Link href='/'>
          <Ratio />
        </Link>
        <div className='flex gap-2'>
          <Link href='/checkout'>
            <ShoppingBag />
          </Link>
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <Navigation open={open} />
    </header>
  )
}

export default Header
