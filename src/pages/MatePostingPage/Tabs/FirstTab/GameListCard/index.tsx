import { GameCard, InputContainer } from './style'

interface GameListCardProps {
  isSelected: boolean
  setIsSelected: (isSelected: boolean) => void
}

const GameListCard = ({ isSelected, setIsSelected }: GameListCardProps) => {
  const handleChangeCheckbox = () => {
    setIsSelected(!isSelected)
  }

  return (
    <GameCard $isActive={isSelected}>
      <InputContainer>
        <input
          type='checkbox'
          id='match_id'
          onChange={handleChangeCheckbox}
        />
        <span>vs (상대팀)</span>
      </InputContainer>
      <p>장소</p>
      <p>00월 00일 00시</p>
    </GameCard>
  )
}

export default GameListCard
