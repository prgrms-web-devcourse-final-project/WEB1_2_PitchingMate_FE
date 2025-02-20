import { FollowServiceApiResponse, PostFollowingResponse } from '@typings/db'
import fetchApi from './ky'

const followService = {
  deleteFollowUser: async (memberId: number) => {
    const response = await fetchApi
      .delete<PostFollowingResponse>(`profile/follow/${memberId}`)
      .json()

    return response.data
  },
  postFollowUser: async (memberId: number) => {
    const response = await fetchApi
      .post<PostFollowingResponse>(`profile/follow/${memberId}`)
      .json()

    return response.data
  },
  getFollowList: async (memberId: number, page: number, type: string) => {
    const response = await fetchApi
      .get<FollowServiceApiResponse>(
        `profile/${memberId}/${type}?page=${page}&size=3`,
      )
      .json()

    return response.data
  },
  /* getFollowerList: async (memberId: number, page: number) => {
    const response = await fetchApi
      .get<FollowServiceApiResponse>(
        `profile/${memberId}/followers?page=${page}&size=5`,
      )
      .json()

    return response.data
  }, */
}

export default followService
