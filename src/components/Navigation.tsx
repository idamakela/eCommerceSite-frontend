import NavLinks from './NavLinks'
import { cn } from '@/utils/classnames'

interface Props {
  open: boolean
}

const Navigation = ({ open }: Props) => {
  return (
    <nav className={cn('mt-20 hidden flex-col gap-7', open && 'flex h-screen')}>
      <NavLinks />
    </nav>
  )
}

export default Navigation
