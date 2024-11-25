import styled from 'styled-components'

import { QuestionSection } from '../style'

export const GameSection = styled(QuestionSection)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const GameButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const GameButton = styled.button<{ $isActive?: boolean }>`
  width: fit-content;
  padding: 8px 16px;
  border-radius: 9999px;

  color: ${({ theme, $isActive }) =>
    $isActive ? theme.fontColor.cwhite : theme.fontColor.navy};
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.fontColor.navy : theme.fontColor.cwhite};
`
