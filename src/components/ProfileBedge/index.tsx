import { ProfileImage, ProfileMyTeamWrap, ProfileWrap } from './style'

import DefaultProfile from '@assets/default/default_profile.svg?react'
import { kboTeamInfo } from '@utils/kboInfo'

interface ProfileBedgePropTypes {
  width: number
  height: number
  imageSrc?: string
  myTeam?: keyof typeof kboTeamInfo
}

const ProfileBedge = ({
  width,
  height,
  imageSrc,
  myTeam,
}: ProfileBedgePropTypes) => {
  const renderMyTeam = () => {
    const teamInfo = myTeam ? kboTeamInfo[myTeam] : kboTeamInfo['전체']
    return <teamInfo.logo />
  }

  return (
    <ProfileWrap
      width={width}
      height={height}
    >
      {imageSrc ? <ProfileImage src={imageSrc} /> : <DefaultProfile />}
      <ProfileMyTeamWrap>{renderMyTeam()}</ProfileMyTeamWrap>
    </ProfileWrap>
  )
}

export default ProfileBedge
