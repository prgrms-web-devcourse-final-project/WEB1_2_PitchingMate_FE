import { theme } from '@styles/theme'
import styled from 'styled-components'

export const GoodsSection = styled.section`
  padding: 20px;
`

export const GoodsRecordBoxWrap = styled.div`
  padding: 1em;
  border: 1px solid #eee;
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 20px;
`

export const GoodsImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`

export const GoodsRecordTextWrap = styled.div`
  width: calc(100% - (100px + 20px));
`

export const GoodsRecordTitle = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;

  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.fontColor.black};
`

export const GoodsRecordPrice = styled.p`
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.fontColor.black};
  margin-top: 0.5em;
`

export const GoodsInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 5px;
  margin-top: 0.5em;

  font-size: ${theme.fontSize.small};
  font-weight: ${theme.fontWeight.regular};
  color: ${theme.fontColor.black};
`
