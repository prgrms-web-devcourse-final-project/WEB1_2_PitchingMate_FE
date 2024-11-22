import { Link } from 'react-router-dom'
import { AlarmWrap, NewAlarmPoint } from './style'
import { useState } from 'react'
import AlarmIcon from '@assets/icon/alarm.svg?react'

const Alarm = () => {
  const [newAlarmStatus, setNewAlarmStatus] = useState(true)
  return (
    <AlarmWrap>
      <Link to='/'>
        {newAlarmStatus ? <NewAlarmPoint /> : null}
        <AlarmIcon></AlarmIcon>
      </Link>
    </AlarmWrap>
  )
}

export default Alarm
