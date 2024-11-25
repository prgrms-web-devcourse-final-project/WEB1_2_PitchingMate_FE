import { GameListPlaceholder } from './style'
import GameListCard from '../GameListCard'

interface GameListProps {
  currentWeek: number | null
  currentTeam: string | null
  isSelected: boolean
  setIsSelected: (isSelected: boolean) => void
}
const GameList = ({
  currentWeek,
  currentTeam,
  isSelected,
  setIsSelected,
}: GameListProps) => {
  if (currentTeam === null) {
    return <GameListPlaceholder>응원팀을 선택해주세요.</GameListPlaceholder>
  }

  if (currentWeek === null) {
    return <GameListPlaceholder>경기 주차를 선택해주세요.</GameListPlaceholder>
  }

  return (
    <GameListCard
      isSelected={isSelected}
      setIsSelected={setIsSelected}
    />
  )
}

export default GameList
