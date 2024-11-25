import { QuestionSection, SelectButton } from './style'

import { useRef, useState } from 'react'

import DownIcon from '@assets/icon/down.svg?react'

import BottomModal from '@components/BottomModal'
import BottomModalOption from './BottomModalOption'
import GameButtonList from './GameButtonList'

const FirstTab = () => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null)

  const bottomModalRef = useRef<HTMLDialogElement>(null)

  const handleClickSelectButton = () => {
    bottomModalRef.current?.showModal()
  }

  const handleCloseModal = (team: string) => {
    setSelectedTeam(team)
    bottomModalRef.current?.close()
  }

  return (
    <>
      <QuestionSection>
        {/* 응원팀 선택 */}
        <label htmlFor='team'>응원팀 선택</label>
        <SelectButton onClick={handleClickSelectButton}>
          <p>{selectedTeam ? selectedTeam : '팀 선택'}</p>
          <DownIcon />
        </SelectButton>
      </QuestionSection>

      {/* 다가오는 경기 목록 */}
      <GameButtonList currentTeam={selectedTeam} />

      {/* 응원팀 선택 모달 */}
      <BottomModal ref={bottomModalRef}>
        <BottomModalOption onClose={handleCloseModal} />
      </BottomModal>
    </>
  )
}

export default FirstTab
