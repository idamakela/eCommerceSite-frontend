import Link from 'next/link'

import Button from './Button'
import { ButtonVariants } from '@/utils/types'

interface Props {
  href: string
  classnames?: string
  variant?: ButtonVariants
  children: string
}

const NavLink = ({ href, classnames, variant, children }: Props) => {
  return (
    <Link href={href}>
      <Button variant={variant} className={classnames}>
        {children}
      </Button>
    </Link>
  )
}

export default NavLink
