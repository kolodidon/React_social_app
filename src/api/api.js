import * as axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "9138b932-6739-4fbe-9f9b-99075b9836f5" }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return(
            axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => responce.data)
        )
    },
    unfollowUser(userId) {
        return(
            axiosInstance.delete(`follow/${userId}`)
            .then(responce => responce.data)
        )
    },

    followUser(userId) {
        return(
            axiosInstance.post(`follow/${userId}`)
            .then(responce => responce.data)
        )
    },
    authUser(){
        return(
            axiosInstance.get(`auth/me`)
            .then(responce => responce.data)
        )
    },
    loginUser(email, password, rememberMe, captcha){
        return(
            axiosInstance.post(`auth/login/`, { email, password, rememberMe, captcha })
            .then(responce => responce.data)
        )
    },
    logoutUser(){
        return(
            axiosInstance.delete(`auth/login/`)
        )
    },
    getCaptcha(){
        return(
            axiosInstance.get(`security/get-captcha-url`)
            .then(responce => responce.data)
        )
    }
}
export const profileAPI = {
    getUserProfile(userId){
        return(
            axiosInstance.get(`profile/${userId}`)
            .then(responce => responce.data)
        )
    },
    getStatus(userId){
        return(
            axiosInstance.get(`profile/status/${userId}`)
            .then(responce => responce.data)
        )
    },
    changeStatus(statusText){
        return(
            axiosInstance.put(`profile/status/`, { status: statusText })
            .then(responce => responce.data)
        )
    },
    sendAvatar(image){
        const formData = new FormData()
        formData.append("image", image)
        return(
            axiosInstance.put(`profile/photo/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        )
    },
    sendInfo(info){
        return(
            axiosInstance.put(`profile/`, { 
                "aboutMe": info.aboutMe,
                "contacts": {
                    facebook: info.facebook,
                    github: info.github,
                    instagram: info.instagram,
                    mainLink: info.mainLink,
                    twitter: info.twitter,
                    vk: info.vk,
                    website: info.website,
                    youtube: info.youtube
                },
                "lookingForAJob": info.lookingForAJob,
                "lookingForAJobDescription": info.lookingForAJobDescription,
                "fullName": info.fullName
            })
        )
    },
}