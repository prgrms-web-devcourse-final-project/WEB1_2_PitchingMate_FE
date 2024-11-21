import { NavList, NavText, NavUl, NavWrap } from './style'

import HomeIcon from '@assets/icon/nav_home.svg?react'
import FindIcon from '@assets/icon/nav_find.svg?react'
import TradeIcon from '@assets/icon/nav_trade.svg?react'
import ChatIcon from '@assets/icon/nav_chat.svg?react'
import UserIcon from '@assets/icon/nav_user.svg?react'
import { Link } from 'react-router-dom'

const GlobalNav = () => {
  return (
    <NavWrap>
      <NavUl>
        <NavList>
          <Link to='/'>
            <HomeIcon />
            <NavText>홈</NavText>
          </Link>
        </NavList>

        <NavList>
          <Link to='/'>
            <FindIcon />
            <NavText>메이트 찾기</NavText>
          </Link>
        </NavList>

        <NavList>
          <Link to='/'>
            <TradeIcon />
            <NavText>굿즈거래</NavText>
          </Link>
        </NavList>

        <NavList>
          <Link to='/'>
            <ChatIcon />
            <NavText>채팅</NavText>
          </Link>
        </NavList>

        <NavList>
          <Link to='/'>
            <UserIcon />
            <NavText>마이</NavText>
          </Link>
        </NavList>
      </NavUl>
    </NavWrap>
  )
}

export default GlobalNav
