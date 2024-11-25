import { GameButton, GameButtonContainer, GameSection } from './style'

import GameList from '../GameList'

import { useState } from 'react'

const GameButtonList = ({ currentTeam }: { currentTeam: string | null }) => {
  const [currentWeek, setCurrentWeek] = useState<number | null>(null)
  const [isSelected, setIsSelected] = useState<boolean>(false)

  const handleClickGameButton = (index: number) => {
    setCurrentWeek(index)
  }

  return (
    <GameSection>
      <label htmlFor='match_id'>다가오는 경기</label>

      {currentTeam && (
        <GameButtonContainer>
          {/* 추후 로직 처리 에정 */}
          {Array.from({ length: 4 }).map((_, index) => (
            <GameButton
              key={index}
              type='button'
              onClick={() => handleClickGameButton(index)}
              $isActive={currentWeek === index}
            >{`11월 ${index + 1}주차`}</GameButton>
          ))}
        </GameButtonContainer>
      )}

      <GameList
        currentWeek={currentWeek}
        currentTeam={currentTeam}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
    </GameSection>
  )
}

export default GameButtonList
