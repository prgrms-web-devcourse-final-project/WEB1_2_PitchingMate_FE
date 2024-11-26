import { forwardRef } from 'react'
import { AlertButtonWrap, AlertDialog, AlertNotice } from './style'
import GlobalButton from '@components/GlobalButton'

interface AlertPropTypes {
  title: string
  notice: string
  actionText: string
  cancelText?: string
  ref: React.RefObject<HTMLDialogElement>
}

const Alert = forwardRef<HTMLDialogElement, AlertPropTypes>(
  ({ title, notice, actionText, cancelText }, ref) => {
    if (!ref || !('current' in ref)) return null

    const closeModal = (e: React.MouseEvent) => {
      e.stopPropagation()
      ref.current?.close() // 모달 닫기
    }

    return (
      <AlertDialog
        ref={ref}
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
    )
  },
)

export default Alert
