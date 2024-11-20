import { Link } from 'react-router-dom';

import Logo from '/public/PITCHING MATE.svg?react';
import Alarm from '@assets/icon/alarm.svg?react'

import { AlarmWrap, HeaderBox, LogoWrap } from './style';
const Header = () => {
  return (
    <HeaderBox>
      <LogoWrap>
        <Link to="/">
          <Logo />
        </Link>
      </LogoWrap>
      <AlarmWrap>
        <Link to="/">
          <Alarm />
        </Link>
      </AlarmWrap>
    </HeaderBox>
  );
};

export default Header;