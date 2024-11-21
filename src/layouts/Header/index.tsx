import { Link } from 'react-router-dom'

import Logo from '/public/PITCHING MATE.svg?react'
import Alarm from '@assets/icon/alarm.svg?react'

import { AlarmWrap, HeaderBox, LogoWrap, NewAlarmPoint } from './style'
import { useState } from 'react'
const Header = () => {
  const [newAlarmStatus, setNewAlarmStatus] = useState(true)

  return (
    <HeaderBox>
      <LogoWrap>
        <Link to='/'>
          <Logo />
        </Link>
      </LogoWrap>
      <AlarmWrap>
        <Link to='/'>
          {newAlarmStatus ? <NewAlarmPoint /> : null}
          <Alarm />
        </Link>
      </AlarmWrap>
    </HeaderBox>
  )
}

export default Header
