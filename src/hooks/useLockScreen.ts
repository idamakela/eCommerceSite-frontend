import { useEffect } from 'react'

const useLockScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = '0'
      document.body.style.bottom = '0'
      document.body.style.left = '0'
      document.body.style.right = '0'
    } else {
      document.body.style.overflowY = 'scroll'
      document.body.style.position = 'relative'
    }

    return () => {
      document.body.style.overflowY = 'scroll'
      document.body.style.position = 'relative'
    }
  }, [isOpen])
}

export { useLockScroll }
