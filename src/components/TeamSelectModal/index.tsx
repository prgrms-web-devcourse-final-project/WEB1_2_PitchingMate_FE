import { useRef, useState } from 'react'
import * as TeamStyle from './style'
import { theme } from '@styles/theme'
import DownIcon from '@assets/icon/down.svg?react'

interface Team {
  name: string // 팀 이름
  color: string // 팀 색상
}

const TEAM_LIST: Team[] = [
  { name: '키움', color: theme.teams.kiwoom },
  { name: '두산', color: theme.teams.doosan },
  { name: '롯데', color: theme.teams.lotte },
  { name: '삼성', color: theme.teams.samsung },
  { name: '한화', color: theme.teams.hanwha },
  { name: 'KIA', color: theme.teams.kia },
  { name: 'LG', color: theme.teams.lg },
  { name: 'SSG', color: theme.teams.ssg },
  { name: 'NC', color: theme.teams.nc },
  { name: 'KT', color: theme.teams.kt },
]

export default function TeamSelectModal() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [selectedTeam, setSelectedTeam] = useState<string>('팀 선택') // 선택된 팀 상태

  const openModal = () => {
    dialogRef.current?.showModal() // 모달 열기
  }

  const closeModal = () => {
    dialogRef.current?.close() // 모달 닫기
  }

  const handleTeamSelect = (name: string) => {
    setSelectedTeam(name) // 선택된 팀 상태 업데이트
    closeModal() // 모달 닫기
  }

  return (
    <div>
      {/* 선택된 팀 이름 표시 */}
      <TeamStyle.TeamSelectButton onClick={openModal}>
        {selectedTeam}
        <DownIcon />
      </TeamStyle.TeamSelectButton>

      <TeamStyle.TeamDialog
        ref={dialogRef}
        onClose={closeModal}
      >
        <h2>마이팀 선택</h2>
        <TeamStyle.AllButton onClick={() => handleTeamSelect('전체')}>
          전체
        </TeamStyle.AllButton>
        <TeamStyle.TeamList>
          {TEAM_LIST.map((team) => (
            <TeamStyle.TeamButton
              key={team.name}
              color={team.color}
              onClick={() => handleTeamSelect(team.name)} // 클릭 시 팀 선택
            >
              {team.name}
            </TeamStyle.TeamButton>
          ))}
        </TeamStyle.TeamList>
      </TeamStyle.TeamDialog>
    </div>
  )
}
