import axios from 'axios'

export const createSubscription = (data: any) => axios.post('/api/v1/subscription/subscriptions', data)
export const updateSubscription = (id: string, data: any) =>
    axios.patch(`/api/v1/subscription/subscriptions/${id}`, data)
export const getSingleSubscription = (id: string) =>
    axios.get(`/api/v1/subscription/subscriptions/${id}`)
export const getUserSubscriptions = () => axios.get('/api/v1/subscription/subscriptions/user')
