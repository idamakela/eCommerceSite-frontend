'use client'

import { Menu, X } from 'lucide-react'

import { useNavigation } from '@/hooks/useNavigation'

const NavigationHandler = () => {
  const { open, toggleOpen } = useNavigation()

  return <button onClick={toggleOpen}>{open ? <X /> : <Menu />}</button>
}

export default NavigationHandler
