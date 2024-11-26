import { SplashImage, SplashWrap } from './style'

import Best from '@assets/character/character-best.svg?react'
import Logo from '@assets/logo/logo_white.svg?react'

const SplashPage = () => {
  return (
    <SplashWrap>
      <SplashImage>
        <Best />
      </SplashImage>
      <Logo />
    </SplashWrap>
  )
}

export default SplashPage
