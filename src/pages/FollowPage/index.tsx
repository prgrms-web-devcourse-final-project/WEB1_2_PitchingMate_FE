import PillButtonList from '@components/PillButtonList'
import { FollowBoxContainer, FollowPageWrap } from './style'
import FollowBox from './FollowBox'

const FollowPage = () => {
  return (
    <FollowPageWrap>
      <PillButtonList
        buttons={[
          { id: 'follower', text: '팔로워', disabled: false },
          { id: 'following', text: '팔로잉', disabled: false },
        ]}
        mode='radio'
        defaultSelected='follower'
      />
      <FollowBoxContainer>
        <FollowBox />
      </FollowBoxContainer>
    </FollowPageWrap>
  )
}

export default FollowPage
