import axios from 'axios'
import {
  ApiAuthMeResponseType,
  ApiFollowResponseType,
  ApiGetUsersResponseType,
  ApiLoginResponseType,
  ApiLogoutResponseType,
  ApiProfileResponseType,
  ApiStatusPostResponse,
} from '../types/types'

const apiInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'b4ddf7e6-b243-4906-b631-828bf878521a',
  },
  withCredentials: true,
})

export const usersAPI = {
  getUsers(
    currentPage: number = 1,
    pageSize: number = 8
  ): Promise<ApiGetUsersResponseType> {
    return apiInstance
      .get<ApiGetUsersResponseType>(
        `users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => response.data)
  },
  followUser(
    userId: number
  ): Promise<void | ApiFollowResponseType> {
    return apiInstance
      .post<ApiFollowResponseType>(`follow/${userId}`)
      .then((response) => {
        response.data
      })
  },
  unFollowUser(
    userId: any
  ): Promise<ApiFollowResponseType> {
    return apiInstance
      .delete<ApiFollowResponseType>(`follow/${userId}`)
      .then((response) => response.data)
  },
}

export const authAPI = {
  getUserData(): Promise<ApiAuthMeResponseType> {
    return apiInstance
      .get<ApiAuthMeResponseType>(`auth/me`)
      .then((response) => response.data)
  },
  login(
    email: string,
    password: string,
    rememberMe: boolean
  ): Promise<ApiLoginResponseType> {
    return apiInstance
      .post<ApiLoginResponseType>(`auth/login`, {
        email,
        password,
        rememberMe,
      })
      .then((response) => response.data)
  },
  logout(): Promise<ApiLogoutResponseType> {
    return apiInstance
      .post<ApiLogoutResponseType>(`auth/logout`)
      .then((response) => response.data)
  },
}

export const profilesAPI = {
  getUserProfile(
    userId: number
  ): Promise<ApiProfileResponseType> {
    return apiInstance
      .get<ApiProfileResponseType>(`profile/${userId}`)
      .then((response) => response.data)
  },
  getUserStatus(userId: number): Promise<string | void> {
    return apiInstance
      .get<string>(`profile/status/${userId}`)
      .then((response) => {
        response.data
      })
  },
  async setUserStatus(
    status: string
  ): Promise<ApiStatusPostResponse> {
    const response =
      await apiInstance.put<ApiStatusPostResponse>(
        `profile/status`,
        { status }
      )
    return response.data
  },
}
