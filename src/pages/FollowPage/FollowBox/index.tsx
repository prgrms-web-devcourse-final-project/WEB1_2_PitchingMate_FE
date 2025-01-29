import ProfileBedge from '@components/ProfileBedge'
import { FollowBoxLeft, FollowBoxRight, FollowBoxWrap } from '../style'
import { Link } from 'react-router-dom'

import Message from '@assets/icon/chat.svg?react'
import UserAdd from '@assets/icon/user_add.svg?react'
import UserAdded from '@assets/icon/user_added.svg?react'
import { useState } from 'react'

interface FollowInfo {
  data: {
    memberId: number
    nickname: string
    imageUrl: string
    teamName: string
  }
}

const FollowBox = ({ data }: FollowInfo) => {
  const [isFollowed, setIsFollowed] = useState(true)

  return (
    <FollowBoxWrap>
      <FollowBoxLeft>
        <Link to={`/profile/${data.memberId}`}>
          <ProfileBedge
            width={3.125}
            height={3.125}
            imageSrc={data.imageUrl}
            myTeam={data.teamName}
          />
          <p>{data.nickname}</p>
        </Link>
      </FollowBoxLeft>
      {/* 채팅기능 관련으로 인해서 일단 주석처리 */}
      {/* <FollowBoxRight>
        <Link to={'/'}>
          <Message />
        </Link>
        {isFollowed ? (
          <Link to={'/'}>
            <UserAdded />
          </Link>
        ) : (
          <Link to={'/'}>
            <UserAdd />
          </Link>
        )}
      </FollowBoxRight> */}
    </FollowBoxWrap>
  )
}

export default FollowBox
