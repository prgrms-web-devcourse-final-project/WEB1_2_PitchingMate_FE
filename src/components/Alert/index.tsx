import { useRef } from 'react'
import { AlertButtonWrap, AlertDialog, AlertNotice } from './style'
import GlobalButton from '@components/GlobalButton'

interface AlertPropTypes {
  title: string
  notice: string
  actionText: string
  cancelText?: string
}

const Alert = ({ title, notice, actionText, cancelText }: AlertPropTypes) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const openModal = () => {
    dialogRef.current?.showModal() // 모달 열기
  }

  const closeModal = (e: React.MouseEvent) => {
    if (e.target === dialogRef.current) {
      dialogRef.current?.close() // 모달 닫기
    }
  }

  return (
    <div>
      <p onClick={openModal}>열기</p>
      <AlertDialog
        ref={dialogRef}
        onClick={closeModal}
      >
        <h2>{title || '알럿 타이틀'}</h2>
        <AlertNotice>{notice || '알럿 명시 내용'}</AlertNotice>
        <AlertButtonWrap>
          <GlobalButton
            $isNavy={true}
            text={actionText}
          />
          <GlobalButton
            text={cancelText}
            onClick={closeModal}
          />
        </AlertButtonWrap>
      </AlertDialog>
    </div>
  )
}

export default Alert
