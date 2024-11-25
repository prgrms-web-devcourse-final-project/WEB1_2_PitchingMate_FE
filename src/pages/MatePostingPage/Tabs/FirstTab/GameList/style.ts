import styled from 'styled-components'

export const GameListPlaceholder = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.fontColor.cwhite};
  color: ${({ theme }) => theme.fontColor.navy};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.semi};
`
