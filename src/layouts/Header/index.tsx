import { Link } from 'react-router-dom'
import { HeaderBox, LogoWrap } from './style'
import Logo from '/public/PITCHING MATE.svg?react'
import Alarm from '@components/Alarm'
const Header = () => {
  return (
    <HeaderBox>
      <LogoWrap>
        <Link to='/'>
          <Logo />
        </Link>
      </LogoWrap>
      <Alarm />
    </HeaderBox>
  )
}

export default Header
