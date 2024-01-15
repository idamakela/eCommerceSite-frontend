import Link from 'next/link'

import Button from './Button'
import { ButtonVariants } from '@/utils/types'

interface Props {
  href: string
  classnames?: string
  variant?: ButtonVariants
  title: string
}

const NavLink = ({ href, classnames, variant, title }: Props) => {
  return (
    <Link href={href}>
      <Button variant={variant} className={classnames}>
        {title}
      </Button>
    </Link>
  )
}

export default NavLink
