'use client'

import { useEffect } from 'react'
import ModalRoot from './Modal-root'
import { IFullModalProps } from './types'

const ConfirmModal = ({ children, options }: IFullModalProps) => {
  const { show, setShow } = options

  useEffect(() => {
    show == true
      ? (document.querySelector('body')!.style.overflow = 'hidden')
      : (document.querySelector('body')!.style.overflow = '')
    return () => {
      document.querySelector('body')!.style.overflow = ''
    }
  }, [show])

  return (
    <>
      <ModalRoot show={show}>
        <div className="flex justify-center items-center w-full h-full">
          <div
            className={`confirm-pan flex justify-center items-center w-full h-full overflow-hidden ${
              show ? 'active' : ''
            }`}
            onClick={(e) => e.target === e.currentTarget && setShow(false)}
          >
            {children}
          </div>
        </div>
      </ModalRoot>
    </>
  )
}

export default ConfirmModal
