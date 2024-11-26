import styled from 'styled-components'

export const CardContainer = styled.div<{ $isUserChat: boolean }>`
  width: 100%;

  display: flex;
  justify-content: ${({ $isUserChat }) => ($isUserChat ? 'flex-end' : null)};

  font-size: ${({ theme }) => theme.fontSize.large};
`
export const CardContent = styled.div`
  display: flex;
  gap: 5px;
`

export const ContentWrapper = styled.div<{ $isUserChat: boolean }>`
  margin-top: 8px;
  display: flex;
  gap: 5px;
  align-items: flex-end;

  flex-direction: ${({ $isUserChat }) => ($isUserChat ? 'row-reverse' : null)};

  & > p:last-child {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`

export const ContentText = styled.p<{ $isUserChat: boolean }>`
  max-width: 230px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;

  color: ${({ theme, $isUserChat }) =>
    $isUserChat ? theme.fontColor.cwhite : theme.fontColor.navy};
  background-color: ${({ theme, $isUserChat }) =>
    $isUserChat ? theme.fontColor.navy : theme.fontColor.cwhite};
`
