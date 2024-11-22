import styled from 'styled-components'

export const AlarmWrap = styled.p`
  & > a {
    position: relative;
    display: block;
    float: right;
  }
`

export const NewAlarmPoint = styled.p`
  display: block;
  width: 5px;
  height: 5px;
  background-color: #ff3b30;
  border-radius: 50%;
  position: absolute;
  top: -4px;
  left: -4px;
`
