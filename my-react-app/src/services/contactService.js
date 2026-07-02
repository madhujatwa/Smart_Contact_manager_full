import apiClient from '../utils/apiClient';

export const addContact = (formData) =>
  apiClient.post('/contacts', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const getContacts = (page = 0, size = 10) =>
  apiClient.get(`/contacts?page=${page}&size=${size}`);

export const getContact = (id) => apiClient.get(`/contacts/${id}`);

export const updateContact = (id, formData) =>
  apiClient.put(`/contacts/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const deleteContact = (id) => apiClient.delete(`/contacts/${id}`);

export const searchContacts = (keyword, page = 0, size = 10) =>
  apiClient.get(`/contacts/search?keyword=${keyword}&page=${page}&size=${size}`);

export const toggleFavourite = (id) => apiClient.patch(`/contacts/${id}/favorite`);