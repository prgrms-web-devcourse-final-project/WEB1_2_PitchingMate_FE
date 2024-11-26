import styled from 'styled-components'
import { theme } from '@styles/theme'

export const NotificationPageContainer = styled.div``

export const PillButtonContainer = styled.div`
  margin: 0.5em 1.25em;
`

export const NotificationList = styled.ul`
  list-style: none;

  li {
    display: flex;
    align-items: flex-start;
    padding: 1em 1.25em;
    border-bottom: 1px solid ${theme.fontColor.cwhite};
    position: relative;
    background-color: ${theme.fontColor.white}; /* 기본 배경색 */

    &:hover {
      background-color: #f5f5f5;
    }

    &.read {
      background-color: ${theme.fontColor.cwhite}; /* 읽은 알림 배경색 */
    }

    .content {
      .message {
        font-size: ${theme.fontSize.medium};
        font-weight: ${theme.fontWeight.regular};
        margin: 0;
      }

      .time {
        font-size: ${theme.fontSize.small};
        color: ${theme.fontColor.black}66;
        margin: 4px 0 0;
      }
    }
  }
`
