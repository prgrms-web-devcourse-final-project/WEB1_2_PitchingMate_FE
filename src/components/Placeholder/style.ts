import styled from 'styled-components'

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.fontColor.black};
  border-radius: 4px;

  & p {
    color: ${({ theme }) => theme.fontColor.white};
    font-size: ${({ theme }) => theme.fontSize.large};
    text-align: center;
  }
`
