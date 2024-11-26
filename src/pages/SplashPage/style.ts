import { theme } from '@styles/theme'
import styled from 'styled-components'

export const SplashWrap = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${theme.fontColor.navy};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SplashImage = styled.div`
  width: 90px;
  height: 85px;
  & > svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
