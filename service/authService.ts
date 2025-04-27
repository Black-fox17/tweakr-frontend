import axios from "axios"

export const register = (data: any) => axios.post('/api/v1/auth/register', data)
export const login = (data: any) => axios.post('/api/v1/auth/login', data)
export const logout = () => axios.post('/api/v1/auth/logout')
export const loginWithGoogle = (data: any) => axios.post('/api/v1/auth/google', data)
export const googleCallback = () => axios.get('/api/v1/auth/callback/google')
