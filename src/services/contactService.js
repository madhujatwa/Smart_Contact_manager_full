import api from "./api";

// ================= GET ALL CONTACTS =================

export const getAllContacts = async (email) => {

  const response = await api.get(`/api/contacts/user/${email}`);

  return response.data;

};

// ================= GET CONTACT BY ID =================

export const getContactById = async (id) => {

  const response = await api.get(`/api/contacts/${id}`);

  return response.data;

};

// ================= ADD CONTACT =================

export const addContact = async (contact) => {

  const response = await api.post(`/api/contacts`, contact);

  return response.data;

};

// ================= UPDATE CONTACT =================

export const updateContact = async (id, contact) => {

  const response = await api.put(`/api/contacts/${id}`, contact);

  return response.data;

};

// ================= DELETE CONTACT =================

export const deleteContact = async (id) => {

  const response = await api.delete(`/api/contacts/${id}`);

  return response.data;

};

// ================= UPLOAD IMAGE =================

export const uploadImage = async (id, file) => {

  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post(
    `/api/contacts/${id}/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;

};

// ================= TOGGLE FAVORITE =================

export const toggleFavorite = async (id) => {

  const response = await api.put(`/api/contacts/${id}/favorite`);

  return response.data;

};