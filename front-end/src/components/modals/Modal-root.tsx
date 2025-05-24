'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { IModalRootProps } from './types'

const ModalRoot = ({ children, show }: IModalRootProps) => {
  // for first render and read document
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return mounted && show
    ? createPortal(
        <div
          className={`fixed top-0 left-1/2 z-999 w-full h-full bg-black/[0.5] -translate-x-1/2 overflow-hidden duration-200
            ${show ? 'opacity-100 visible ' : 'opacity-0 invisible delay-300'}`}
        >
          {children}
        </div>,
        document.querySelector('#modal-root')!
      )
    : null
}

export default ModalRoot
