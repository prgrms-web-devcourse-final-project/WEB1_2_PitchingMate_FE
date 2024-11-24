import { useState } from 'react'
import { ButtonWrapper } from './style'

interface PillButtonProps {
  defaultSelected?: boolean // 기본 상태: 선택 여부
  text: string // 버튼에 표시할 텍스트
  disabled?: boolean // 기본 비활성화 상태
}

const PillButton = ({
  defaultSelected = false,
  text,
  disabled = false,
}: PillButtonProps) => {
  const [isSelected, setIsSelected] = useState(defaultSelected)
  const [isDisabled, setIsDisabled] = useState(disabled)

  const handleClick = () => {
    if (isDisabled) return // 비활성화 상태에서는 클릭하지 않음
    setIsSelected((prev) => !prev) // 선택 전/후 상태 토글
  }

  return (
    <ButtonWrapper
      isSelected={isSelected}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {text}
    </ButtonWrapper>
  )
}

export default PillButton
