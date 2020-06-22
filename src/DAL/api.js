import * as axios from 'axios'

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY": "dfa7ba6d-ffa7-442f-a308-54584e93775b",
	},
});


export let getUsers = (e=1, c=20) => {
	
	return instance.get(`users?page=${e}&count=${c}`).then(res => {
		return res.data
	})
}


export let logIn = () => {
	
	return instance.get(`auth/me`).then(res => {
		return res.data
	})
}


export let unFollow = (id) => {
	
	return instance.delete(`follow/${id}`).then(res => {
		return res.data
	})
}


export let Follow = (id) => {
	
	return instance.post(`follow/${id}`).then(res => {
		return res.data
	})
}



export let profileInformation = (id) => {
	
	return instance.get(`profile/${id}`).then(res => {
          
          return res.data
    })
}