import styled from 'styled-components'

export const Bedge = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0.25em 0.625em;
  color: ${({ theme }) => theme.fontColor.white};
  background-color: ${({ theme }) => theme.fontColor.navy};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.medium};
`
