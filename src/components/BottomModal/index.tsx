import React, { useRef } from 'react'
import { ModalDialog } from './style'

interface ModalPropTypes {
  children: React.ReactNode
}

const BottomModal = ({ children }: ModalPropTypes) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openModal = () => {
    dialogRef.current?.showModal()
  }

  const closeModal = () => {
    dialogRef.current?.close()
  }

  return (
    <div>
      <p onClick={openModal}>예시</p>
      <ModalDialog
        ref={dialogRef}
        onClick={(e) => {
          e.target === dialogRef.current && closeModal()
        }}
      >
        {children}
      </ModalDialog>
    </div>
  )
}

export default BottomModal
