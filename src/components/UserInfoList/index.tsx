import FuckingBat from '@assets/icon/baseball.svg?react'

import { DescriptionContainer, ProfileContainer } from './style'
import ProfileBedge from '@components/ProfileBedge'

const UserInfoList = () => {
  return (
    <DescriptionContainer>
      <ProfileContainer>
        <ProfileBedge
          width={30}
          height={30}
          isChat={true}
        />
        <p>빌터</p>
      </ProfileContainer>
      <p>
        0.300
        <FuckingBat />
      </p>
    </DescriptionContainer>
  )
}

export default UserInfoList
