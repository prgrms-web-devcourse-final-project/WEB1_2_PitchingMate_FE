import { theme } from '@styles/theme'
import styled from 'styled-components'

export const NavWrap = styled.nav`
  background-color: ${theme.fontColor.white};
  border-top: 1px solid ${({ theme }) => theme.border};
  width: 100%;
  height: 60px;

  position: sticky;
  bottom: 0;
  left: 0%;
  z-index: 98;
`

export const NavUl = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavList = styled.li`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > a {
    display: block;
    width: 100%;
    height: 100%;

    & > svg {
      margin: 0 auto;
    }
  }
`

export const NavText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 300;
  color: ${({ theme }) => theme.fontColor.black};

  margin-top: 0.375em;
  text-align: center;
`
