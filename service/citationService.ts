import apiClient from "./axios"

export const getCategories = () => apiClient.get('/api/v1/citations/categories')

export const charCount = (data: any) => apiClient.post('/api/v1/citations/char-count', data)

export const processPaper = (data: any) =>
    apiClient.post('/api/v1/citations/process-paper/', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

export const getCitationSuggestions = (data: any) => apiClient.post('/api/v1/citations/get-citation', data, {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
})

export const updateCitations = (data: any) => apiClient.post('/api/v1/citations/update-citations', data)

export const extractContent = (data: any) => apiClient.post('/api/v1/citations/extract-content', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
})
