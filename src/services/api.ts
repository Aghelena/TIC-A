import axios from 'axios';
import { RegisterFormData, LoginFormUser } from '../types/types';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

// Funções para interagir com a API
export const loginUser = async (loginData: LoginFormUser) => {
  const response = await api.get('/users');
  for (let entry of response.data)
    if (entry.email === loginData.email && entry.password === loginData.password) {
      return true;
    }
  return false;
};

export const registerUser = (userData: RegisterFormData) => {
  return api.post('/users', userData);
};

export const getProducts = () => api.get('/products');
export const getProductById = (id: string) => api.get(`/products/${id}`);
export const createProduct = (product: any) => api.post('/products', product);
export const updateProduct = (id: string, product: any) => api.put(`/products/${id}`, product);
export const deleteProduct = (id: string) => api.delete(`/products/${id}`);

export const getEvents = () => api.get('/events');
export const getEventsById = (id: string) => api.get(`/events/${id}`);
export const createEvents = (event: any) => api.post('/events', event);
export const updateEvents = (id: string, event: any) => api.put(`/events/${id}`, event);
export const deleteEvents = (id: string) => api.delete(`/events/${id}`);