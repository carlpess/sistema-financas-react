import api from '../services/api';
import { getItem } from './storage';

const token = getItem('token');

export async function loadCategories() {
    try {
        const response = await api.get('/categoria', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export async function loadTransactions() {
    try {
        const response = await api.get('/transacao', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        console.log(error)
    }
}