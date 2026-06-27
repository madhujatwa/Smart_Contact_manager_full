import apiClient from '../utils/apiClient';

export const loginUser = (data) => apiClient.post('/users/login', data);

export const registerUser = (data) => apiClient.post('/users/register', data);

export const getProfile = () => apiClient.get('/users/profile');

export const updateProfile = (data) => apiClient.put('/users/profile', data);