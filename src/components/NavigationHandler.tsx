import { Menu, X } from 'lucide-react'

const NavigationHandler = () => {
  return (
    <button onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  )
}

export default NavigationHandler
