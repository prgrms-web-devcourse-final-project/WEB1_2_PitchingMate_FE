import { ChatType } from '@pages/ChatPage'
import styled from 'styled-components'

interface ChatCardContainerProps {
  $chatType: ChatType | null
}

export const ChatCardContainer = styled.div<ChatCardContainerProps>`
  height: calc(100% - 99px);
  overflow-y: auto;
  padding: 20px;

  height: ${({ $chatType }) => $chatType === '메이트' && 'calc(100% - 231px)'};
  height: ${({ $chatType }) => $chatType === '굿즈' && 'calc(100% - 223px)'};
`
