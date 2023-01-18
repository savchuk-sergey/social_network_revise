type ServerMessages = Array<string>
type ServerCodes = 1 | 0
type StringOrNull = string | null

export type UserType = {
  name: string | null
  id: number | null
  uniqueUrlName: string | null
  photos: PhotoType
  status: string | null
  followed: boolean
}

export type ApiGetUsersResponseType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

export type PhotoType = {
  small: string | null
  large: string | null
}

export type ApiFollowResponseType = {
  resultCode: ServerCodes
  messages: ServerMessages
  data: Object
}

export type ApiAuthMeResponseType = {
  resultCode: ServerCodes
  messages: ServerMessages
  data: {
    id: number
    email: string
    login: string
  }
}

export type ApiLoginResponseType = {
  resultCode: ServerCodes
  messages: ServerMessages
  data: {
    userId: number
  }
}

export type ApiLogoutResponseType = {
  resultCode: ServerCodes
  messages: ServerMessages
  data: Object
}

export type ApiProfileType = {
  aboutMe: StringOrNull
  contacts: {
    facebook: StringOrNull
    website: StringOrNull
    vk: StringOrNull
    twitter: StringOrNull
    instagram: StringOrNull
    youtube: StringOrNull
    github: StringOrNull
    mainLink: StringOrNull
  }
  lookingForAJob: boolean
  lookingForAJobDescription: StringOrNull
  fullName: string
  userId: number
  photos?: PhotoType
}

export type ApiStatusPostResponse = {
  data: unknown
  messages: ServerMessages
  fieldsErrors: ServerMessages
  resultCode: ServerCodes
}
