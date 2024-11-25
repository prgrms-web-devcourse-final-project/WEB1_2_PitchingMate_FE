import styled from 'styled-components'

export const GameCard = styled.div<{ $isActive?: boolean }>`
  width: 100%;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme, $isActive }) =>
    $isActive ? theme.fontColor.cwhite : theme.fontColor.black};
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.fontColor.navy : null};
`

export const InputContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;

  & input[type='checkbox'] {
    display: block;
    appearance: checkbox;
    width: 20px;
    height: 20px;

    accent-color: ${({ theme }) => theme.fontColor.navy};
  }
`
