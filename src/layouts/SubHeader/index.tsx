import { Link } from 'react-router-dom'
import {
  SubHeaderBox,
  SubHeaderComplete,
  SubHeaderLeft,
  SubHeaderMessageText,
  SubHeaderRight,
  SubHeaderText,
} from './style'

import Back from '@assets/icon/back.svg?react'
import Exit from '@assets/icon/delete_thin.svg?react'
import Logout from '@assets/icon/exit_line.svg?react'
import Alarm from '@components/Alarm'

interface SubHeaderPropsType {
  left: 'back' | 'exit' | 'message'
  center?: string
  right?: 'complete' | 'logout' | 'alarm'
}

const SubHeader = ({ left, center, right }: SubHeaderPropsType) => {
  const subHeaderLeft = () => {
    switch (left) {
      case 'back':
        return <Back />
      case 'exit':
        return <Exit />
      case 'message':
        return <SubHeaderMessageText>메시지</SubHeaderMessageText>
    }
  }

  const subHeaderRight = () => {
    switch (right) {
      case 'complete':
        return <SubHeaderComplete>완료</SubHeaderComplete>
      case 'logout':
        return <Logout />
      case 'alarm':
        return <Alarm />
      case null:
        break
    }
  }

  return (
    <SubHeaderBox>
      <SubHeaderLeft>
        <Link to='/'>{subHeaderLeft()}</Link>
      </SubHeaderLeft>
      <SubHeaderText>{center}</SubHeaderText>
      <SubHeaderRight>{subHeaderRight()}</SubHeaderRight>
    </SubHeaderBox>
  )
}

export default SubHeader
