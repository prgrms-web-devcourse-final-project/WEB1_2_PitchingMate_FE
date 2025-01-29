import PillButtonList from '@components/PillButtonList'
import {
  FollowBoxContainer,
  FollowButtonWrap,
  FollowPageWrap,
  NoFollowBox,
} from './style'
import FollowBox from './FollowBox'
import SubHeader from '@layouts/SubHeader'
import { useParams } from 'react-router-dom'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@apis/queryClient'
import followService from '@apis/followService'
import { ReactNode, useState } from 'react'
import { FollowServiceDataContnet } from '@typings/db'

const FOLLOWER = '1'
const FOLLOWING = '2'

const FollowPage = () => {
  const { id } = useParams()
  const [currentFollowType, setCurrentFollowType] = useState(FOLLOWER)

  // 팔로잉 리스트 쿼리문
  const {
    data: followingList,
    fetchNextPage: fetchFollowingNextPage,
    hasNextPage: hasFollowingNextPage,
    isFetchingNextPage: isFetchingFollowingNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.FOLLOWING_LIST, id],
    queryFn: ({ pageParam }) =>
      followService.getFollowingList(Number(id), pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage: any) => {
      return lastPage.hasNext ? lastPage.pageNumber + 1 : undefined
    },
  })

  // 팔로워 리스트 쿼리문
  const {
    data: followerList,
    fetchNextPage: fetchFollowerNextPage,
    hasNextPage: hasFollowerNextPage,
    isFetchingNextPage: isFetchingFollowerNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.FOLLOWER_LIST, id],
    queryFn: ({ pageParam }) =>
      followService.getFollowerList(Number(id), pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage: any) => {
      return lastPage.hasNext ? lastPage.pageNumber + 1 : undefined
    },
  })

  if (!followerList) return null
  if (!followingList) return null

  const { pages: followerPages } = followerList
  const { pages: followingPages } = followingList

  const flatFollowerList = followerPages.flatMap((page) => page.content)
  const flatFollowingList = followingPages.flatMap((page) => page.content)

  const renderFollowBox: (params: FollowServiceDataContnet[]) => ReactNode = (
    list,
  ) => {
    return list.map((data, index) => (
      <FollowBox
        data={data}
        key={index}
      />
    ))
  }

  return (
    <>
      <SubHeader
        left='back'
        center='팔로잉 팔로우 목록'
      />
      <FollowPageWrap>
        <FollowButtonWrap>
          <PillButtonList
            buttons={[
              { id: '1', text: '팔로워', disabled: false },
              { id: '2', text: '팔로잉', disabled: false },
            ]}
            mode='radio'
            defaultSelected={currentFollowType}
            onSelect={setCurrentFollowType}
          />
        </FollowButtonWrap>
        <FollowBoxContainer>
          {currentFollowType === '1' ? (
            flatFollowerList && flatFollowerList.length !== 0 ? (
              renderFollowBox(flatFollowerList)
            ) : (
              <NoFollowBox>팔로워가 없습니다</NoFollowBox>
            )
          ) : flatFollowingList && flatFollowingList.length !== 0 ? (
            renderFollowBox(flatFollowingList)
          ) : (
            <NoFollowBox>팔로잉하는 사람이 없습니다</NoFollowBox>
          )}
        </FollowBoxContainer>
      </FollowPageWrap>
    </>
  )
}

export default FollowPage
