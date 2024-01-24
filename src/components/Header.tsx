import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

import Logo from './Logo'
import Navigation from './Navigation'
import NavigationHandler from './NavigationHandler'

const Header = () => {
  return (
    <>
      <header className='fixed left-0 top-0 w-full bg-transparent px-3 py-8 font-header md:p-8'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Logo />
          </Link>
          <div className='flex items-end gap-2'>
            <Link
              href={'/products/products'}
              className='hidden mr-2 border-b-2 border-transparent bg-transparent font-body text-sm font-semibold uppercase text-black transition duration-300 hover:border-black md:block'
            >
              products
            </Link>
            <Link href='/checkout'>
              <ShoppingBag />
            </Link>
            <NavigationHandler />
          </div>
        </div>
      </header>
      <Navigation />
    </>
  )
}

export default Header
