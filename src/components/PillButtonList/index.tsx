import { useEffect, useState } from 'react';
import { ListWrapper, ScrollWrapper } from './style';
import PillButton from '@components/PillButton';

// PillButtonList 컴포넌트의 props 타입 정의
interface PillButtonListProps {
  buttons: { id: string; text: string; disabled?: boolean }[]; // 버튼 데이터 배열
  mode: 'radio' | 'tab'; // 버튼 모드: 라디오 버튼 / 탭 버튼
  defaultSelected?: string; // 초기 선택 버튼 ID (선택 사항)
  onSelect?: (id: string) => void; // 선택된 버튼 ID를 전달하는 콜백
}

const PillButtonList = ({
  buttons,
  mode,
  defaultSelected,
  onSelect,
}: PillButtonListProps) => {
  // 기본 선택 버튼 ID 계산
  // - `defaultSelected`가 주어졌고, 해당 버튼이 활성화된 경우 기본값으로 사용
  // - 그렇지 않으면, 버튼 목록에서 첫 번째 활성화된 버튼을 기본값으로 설정
  const initialSelected =
    defaultSelected && !buttons.find((button) => button.id === defaultSelected)?.disabled
      ? defaultSelected
      : buttons.find((button) => !button.disabled)?.id || ''; // 비활성화되지 않은 첫 버튼 ID

  // 선택된 버튼의 ID를 상태로 관리
  const [selectedId, setSelectedId] = useState(initialSelected);

  // 컴포넌트가 렌더링되거나 `defaultSelected` 또는 `buttons`가 변경될 때 실행
  useEffect(() => {
    // `defaultSelected`가 유효하고 활성화된 버튼인지 확인
    const validDefault =
      defaultSelected && !buttons.find((button) => button.id === defaultSelected)?.disabled;

    // `defaultSelected`가 유효하지 않으면 첫 번째 활성화된 버튼을 선택
    const fallback = buttons.find((button) => !button.disabled)?.id || '';
    setSelectedId(validDefault ? defaultSelected : fallback); // 선택 상태 업데이트
  }, [defaultSelected, buttons]);

  // 버튼 클릭 핸들러
  const handleClick = (id: string) => {
    if (id === selectedId) return; // 이미 선택된 버튼이면 동작하지 않음
    setSelectedId(id); // 선택된 버튼의 ID 업데이트
    if (onSelect) onSelect(id); // 부모 컴포넌트로 선택된 버튼 ID 전달
  };

  // 모드에 따라 다른 Wrapper 컴포넌트 선택
  const WrapperComponent = mode === 'tab' ? ScrollWrapper : ListWrapper;

  return (
    <WrapperComponent>
      {/* 버튼 목록 렌더링 */}
      {buttons.map((button) => (
        <PillButton
          key={button.id} // 고유 키 설정
          text={button.text} // 버튼 텍스트
          isSelected={selectedId === button.id} // 선택 상태 전달
          disabled={button.disabled} // 비활성화 상태 전달
          onClick={() => handleClick(button.id)} // 클릭 이벤트 핸들러
        />
      ))}
    </WrapperComponent>
  );
};

export default PillButtonList;
