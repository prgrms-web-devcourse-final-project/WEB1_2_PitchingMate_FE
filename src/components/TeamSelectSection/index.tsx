import { useState } from 'react'
import { TeamSelectContainer, Card } from './style'
import { kboTeamList, kboTeamInfo } from '@utils/kboInfo'

const TeamSelectSection = () => {
  const [currentTeam, setCurrentTeam] = useState('')

  const handleTeamChange = (team: string) => {
    setCurrentTeam(team)
  }

  return (
    <TeamSelectContainer>
      {kboTeamList.map((team) => (
        <TeamCard
          key={team}
          team={team}
          currentTeam={currentTeam}
          onHandleTeamChange={handleTeamChange}
        />
      ))}
    </TeamSelectContainer>
  )
}

interface TeamCardProps {
  team: string
  currentTeam: string
  onHandleTeamChange: (team: string) => void
}

const TeamCard = ({ team, currentTeam, onHandleTeamChange }: TeamCardProps) => {
  const Logo = kboTeamInfo[team].logo
  const isSelected = currentTeam === team

  return (
    <Card
      onClick={() => onHandleTeamChange(team)}
      $isselected={isSelected}
    >
      <Logo
        width={50}
        height={50}
      />
    </Card>
  )
}

export default TeamSelectSection
