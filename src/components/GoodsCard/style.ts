import { theme } from '@styles/theme'
import { styled } from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const CardImageWrap = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`

export const PlaceholderWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & > svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CardTextWrap = styled.div`
  margin-top: 0.5em;
`

export const CardTitle = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;

  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.fontColor.black};
`

export const CardBedgeWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 0.5em;
`

export const CardPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  color: ${({ theme }) => theme.fontColor.black};
  letter-spacing: -0.025em;
  margin-top: 0.5em;
`
