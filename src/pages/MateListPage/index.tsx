import TeamSelectSection from '@components/TeamSelectSection'
import React, { useRef } from 'react'
import {
  FilterModalButton,
  FilterSelectOptionWrap,
  FilterWrap,
  TeamSelectWrap,
} from './style'

import PillButton from '@components/PillButton'
import BottomModal from '@components/BottomModal'
import useTeamDialog from '@hooks/useTeamDialog'
import MateFilterOptions from './MateFilterOptions'
import MateCard from '@components/MateCard'

const MateListPage = () => {
  const { bottomModalRef, handleClickSelectButton } = useTeamDialog()

  return (
    <section>
      <TeamSelectWrap>
        <TeamSelectSection />
      </TeamSelectWrap>
      <FilterWrap>
        <FilterModalButton>
          <PillButton
            text='필터'
            onClick={handleClickSelectButton}
          />
        </FilterModalButton>
        <FilterSelectOptionWrap>
          <p>20대</p>
          <p>남자</p>
        </FilterSelectOptionWrap>
      </FilterWrap>
      <div>
        <MateCard />
        <MateCard />
        <MateCard />
        <MateCard />
        <MateCard />
        <MateCard />
        <MateCard />
        <MateCard />
      </div>
      <BottomModal ref={bottomModalRef}>
        <MateFilterOptions />
      </BottomModal>
    </section>
  )
}

export default MateListPage
