import styled from 'styled-components'
import { theme } from '@styles/theme'

export const MatchUpContainer = styled.div<{
  homeColor: string
  awayColor: string
}>`
  padding: 1.25em;
  background: ${({ homeColor, awayColor }) =>
    `linear-gradient(90deg, ${homeColor} 0%, ${awayColor} 100%)`};
  color: ${theme.fontColor.white}; /* 텍스트가 잘 보이도록 설정 */
`

export const GameDatetimeLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: ${theme.fontSize.medium};
  color: ${theme.fontColor.white};
`

export const TeamVersus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  font-size: 18px;
  font-weight: ${theme.fontWeight.bold};

  & > div {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  & > div > svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  span {
    font-size: ${theme.fontSize.xlarge};
  }
`

export const LocationWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
  font-size: ${theme.fontSize.medium};
`

export const UpdateInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.fontColor.white};
`

export const Weather = styled.div`
  font-size: ${theme.fontSize.medium};
  color: ${theme.fontColor.white};
`
