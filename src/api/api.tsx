import axios from 'axios'
import { PhotosType, ProfileType } from '../redux/profile-reducer';
import { UserType } from '../redux/users-reducer';

export enum ResponceCodes {
    Success = 0,
    Error = 1
}
export enum ResponceCodeForCaptcha {
    NeedCaptcha = 10
}

type authUserResponseType = {
    data: {
        id: number
        login: string
        email: string
    }
    messages: Array<string>
    fieldErrors?: Array<string>
    resultCode: ResponceCodes
}
type loginUserResponseType = {
    data: {
        userId: number
    }
    messages: Array<string>
    resultCode: ResponceCodes | ResponceCodeForCaptcha
}
type getUsersResponceType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
type followUserResponceType = {
    data: {}
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: ResponceCodes
}
type unfollowUserResponceType = {
    data: {}
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: ResponceCodes
}
type logoutUserResponceType = {
    data: {}
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: ResponceCodes
}
type getCaptchaResponceType = {
    url: string
}
type changeStatusResponceType = {
    data: {}
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: ResponceCodes
}
type sendAvatarResponceType = {
    data: {
        photos: PhotosType
    }
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: ResponceCodes
}
type sendInfoResponceType = {
    data: {}
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: ResponceCodes
}
const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "9138b932-6739-4fbe-9f9b-99075b9836f5" }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return(
            axiosInstance.get<getUsersResponceType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => responce.data)
        )
    },
    unfollowUser(userId: number) {
        return(
            axiosInstance.delete<unfollowUserResponceType>(`follow/${userId}`)
            .then(responce => responce.data)
        )
    },
    followUser(userId: number) {
        return(
            axiosInstance.post<followUserResponceType>(`follow/${userId}`)
            .then(responce => responce.data)
        )
    },
    authUser(){
        return(
            axiosInstance.get<authUserResponseType>(`auth/me`)
            .then(responce => responce.data)
        )
    },
    loginUser(email: string, password: string, rememberMe: boolean, captcha: string){
        return(
            axiosInstance.post<loginUserResponseType>(`auth/login/`, { email, password, rememberMe, captcha })
            .then(responce => responce.data)
        )
    },
    logoutUser(){
        return(
            axiosInstance.delete<logoutUserResponceType>(`auth/login/`)
        )
    },
    getCaptcha(){
        return(
            axiosInstance.get<getCaptchaResponceType>(`security/get-captcha-url`)
            .then(responce => responce.data)
        )
    }
}
export const profileAPI = {
    getUserProfile(userId: number){
        return(
            axiosInstance.get<ProfileType>(`profile/${userId}`)
            .then(responce => responce.data)
        )
    },
    getStatus(userId: number){
        return(
            axiosInstance.get<string>(`profile/status/${userId}`)
            .then(responce => responce.data)
        )
    },
    changeStatus(statusText: string){
        return(
            axiosInstance.put<changeStatusResponceType>(`profile/status/`, { status: statusText })
            .then(responce => responce.data)
        )
    },
    sendAvatar(image: string){
        const formData = new FormData()
        formData.append("image", image)
        return(
            axiosInstance.put<sendAvatarResponceType>(`profile/photo/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        )
    },
    sendInfo(info: ProfileType){
        return(
            axiosInstance.put<sendInfoResponceType>(`profile/`, info)
        )
    },
}