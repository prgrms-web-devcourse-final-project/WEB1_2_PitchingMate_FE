import {
  NotificationPageContainer,
  NotificationList,
  PillButtonContainer,
} from './style'
import SubHeader from '@layouts/SubHeader'
import PillButtonList from '@components/PillButtonList'
import { useState } from 'react'

interface Notification {
  id: string
  category: string
  message: string
  time: string
  isRead: boolean // 읽음 여부
}

const NotificationPage = () => {
  const tabList = [
    { id: '1', text: '전체' },
    { id: '2', text: '메이트 찾기' },
    { id: '3', text: '굿즈 거래' },
    { id: '4', text: '일반 채팅' },
  ]

  const [selectedTab, setSelectedTab] = useState('1')

  // 알림 데이터 (isRead 추가)
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      category: '메이트 찾기',
      message: '직관 메이트 후기를 남겨주세요!',
      time: '2시간 전',
      isRead: false,
    },
    {
      id: '2',
      category: '굿즈 거래',
      message: '굿즈 거래 요청이 도착했습니다.',
      time: '1일 전',
      isRead: true,
    },
    {
      id: '3',
      category: '일반 채팅',
      message: '사용자에게 메시지가 도착했습니다.',
      time: '3시간 전',
      isRead: false,
    },
  ])

  // 필터링된 알림 목록
  const filteredNotifications =
    selectedTab === '1'
      ? notifications
      : notifications.filter(
          (n) =>
            n.category === tabList.find((tab) => tab.id === selectedTab)?.text,
        )

  // 알림 읽기 처리
  const handleRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)),
    )
  }

  return (
    <NotificationPageContainer>
      <SubHeader
        left='back'
        center='알림'
      />
      <PillButtonContainer>
        <PillButtonList
          buttons={tabList}
          mode='tab'
          defaultSelected={selectedTab}
          onSelect={(id) => setSelectedTab(id)}
        />
      </PillButtonContainer>
      <NotificationList>
        {filteredNotifications.map((notification) => (
          <li
            key={notification.id}
            className={notification.isRead ? 'read' : ''}
            onClick={() => handleRead(notification.id)}
          >
            <div className='content'>
              <p className='message'>{notification.message}</p>
              <p className='time'>{notification.time}</p>
            </div>
          </li>
        ))}
      </NotificationList>
    </NotificationPageContainer>
  )
}

export default NotificationPage
