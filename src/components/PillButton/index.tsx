import { ButtonWrapper } from './style';

interface PillButtonProps {
  text: string;
  isSelected: boolean; // 선택 상태
  disabled?: boolean; // 비활성화 상태
  onClick: () => void; // 클릭 이벤트 핸들러
}

const PillButton = ({ text, isSelected, disabled = false, onClick }: PillButtonProps) => {
  return (
    <ButtonWrapper
      isSelected={isSelected}
      onClick={disabled ? undefined : onClick} // 비활성화 상태에서는 클릭 비활성화
      disabled={disabled}
    >
      {text}
    </ButtonWrapper>
  );
};

export default PillButton;
