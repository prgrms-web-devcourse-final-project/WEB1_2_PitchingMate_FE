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
import { ReactNode, useEffect, useState } from 'react'
import { FollowServiceDataContnet } from '@typings/db'
import { useInView } from 'react-intersection-observer'
import { RefContainer } from '@styles/globalStyle'
import Spinner from '@components/Spinner'

const FOLLOWER = '1'
const FOLLOWING = '2'

const FollowPage = () => {
  const { id } = useParams()
  const [currentFollowType, setCurrentFollowType] = useState(FOLLOWER)
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  const decideFollowType = (followType: string) => {
    if (followType === '1') {
      return 'followings'
    } else {
      return 'followers'
    }
  }

  // 팔로우 리스트 쿼리문
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY.FOLLOWER_LIST, currentFollowType],
      queryFn: ({ pageParam }) =>
        followService.getFollowList(
          Number(id),
          pageParam,
          decideFollowType(currentFollowType),
        ),
      initialPageParam: 0,
      getNextPageParam: (lastPage: any) => {
        return lastPage.hasNext ? lastPage.pageNumber + 1 : undefined
      },
    })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  if (!data) return null

  const { pages: followData } = data

  const flatFollowList = followData.flatMap((page) => page.content)

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
          {flatFollowList && flatFollowList.length !== 0 ? (
            renderFollowBox(flatFollowList)
          ) : (
            <NoFollowBox>팔로워가 없습니다</NoFollowBox>
          )}
        </FollowBoxContainer>
      </FollowPageWrap>
      {hasNextPage && (
        <RefContainer ref={ref}>
          {isFetchingNextPage && <Spinner />}
        </RefContainer>
      )}
    </>
  )
}

export default FollowPage
