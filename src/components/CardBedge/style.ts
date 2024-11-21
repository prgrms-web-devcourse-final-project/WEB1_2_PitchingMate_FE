import styled from 'styled-components'

export const Bedge = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 4px 10px;
  color: ${({ theme }) => theme.fontColor.white};
  background-color: ${({ theme }) => theme.fontColor.navy};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.medium};
`
