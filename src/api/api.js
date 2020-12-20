import * as axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "9138b932-6739-4fbe-9f9b-99075b9836f5" }
});

const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return(
            axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => responce.data)
        )
    },
    unfollowUser(id) {
        return(
            axiosInstance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(responce => responce.data)
        )
    },
    followUser(id) {
        return(
            axiosInstance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(responce => responce.data)
        )
    },
    getUserProfile(userId){
        return(
            axiosInstance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(responce => responce.data)
        )
    },
    authUser(){
        return(
            axiosInstance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then(responce => responce.data)
        )
    }
}

export default usersAPI