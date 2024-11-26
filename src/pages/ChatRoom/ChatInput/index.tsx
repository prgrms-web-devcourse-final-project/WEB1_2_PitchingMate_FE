import { ChatInputContainer } from './style'

import UpIcon from '@assets/icon/up_black.svg?react'
import SendIcon from '@assets/icon/message_send.svg?react'
const ChatInput = () => {
  return (
    <ChatInputContainer>
      <button>
        <UpIcon />
      </button>
      <input
        type='text'
        placeholder='메시지를 입력해주세요.'
      />
      <button>
        <SendIcon />
      </button>
    </ChatInputContainer>
  )
}

export default ChatInput
