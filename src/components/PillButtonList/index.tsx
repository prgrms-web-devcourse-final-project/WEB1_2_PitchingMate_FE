import { useState, useEffect } from 'react';
import { ListWrapper, ScrollWrapper } from './style';
import PillButton from '@components/PillButton';

interface PillButtonListProps {
  buttons: { id: string; text: string; disabled?: boolean }[]; // 버튼 데이터 배열
  mode: 'radio' | 'tab'; // 버튼 모드: 라디오 버튼 / 탭 버튼
  defaultSelected?: string; // 초기 선택 버튼 ID
  onSelect?: (id: string) => void; // 선택된 버튼 ID를 전달하는 콜백
}

const PillButtonList = ({
  buttons,
  mode,
  defaultSelected,
  onSelect,
}: PillButtonListProps) => {
  // 활성화 상태 관리
  const [selectedId, setSelectedId] = useState(() => {
    return (
      defaultSelected && !buttons.find((b) => b.id === defaultSelected)?.disabled
        ? defaultSelected
        : buttons.find((b) => !b.disabled)?.id || ''
    );
  });

  // 버튼이 변경될 때 상태 업데이트
  useEffect(() => {
    setSelectedId((prevSelected) => {
      const validDefault =
        defaultSelected && !buttons.find((b) => b.id === defaultSelected)?.disabled;
      const firstActive = buttons.find((b) => !b.disabled)?.id || '';
      return validDefault ? defaultSelected : firstActive !== prevSelected ? firstActive : prevSelected;
    });
  }, [buttons, defaultSelected]);

  // 버튼 클릭 핸들러
  const handleClick = (id: string) => {
    if (id === selectedId || buttons.find((b) => b.id === id)?.disabled) return;
    setSelectedId(id);
    onSelect?.(id); // 부모에 선택 전달
  };

  // Wrapper 컴포넌트 선택
  const WrapperComponent = mode === 'tab' ? ScrollWrapper : ListWrapper;

  return (
    <WrapperComponent>
      {buttons.map((button) => (
        <PillButton
          key={button.id}
          text={button.text}
          isSelected={selectedId === button.id}
          disabled={button.disabled}
          onClick={() => handleClick(button.id)}
        />
      ))}
    </WrapperComponent>
  );
};

export default PillButtonList;
