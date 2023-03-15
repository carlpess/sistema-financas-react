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

export async function loadStatement() {
    try {
        const response = await api.get('/transacao/extrato', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const { entrada, saida } = response.data;

        return ({
            in: entrada,
            out: saida,
            balance: entrada - saida
        });
    } catch (error) {
        console.log(error)
    }
}

export async function loadUserProfile() {
    try {
        const response = await api.get('/usuario', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const { nome, email } = response.data;

        return ({
            name: nome,
            email,
            password: '',
            confirmPassword: ''
        });
    } catch (error) {
        console.log(error);
    }
}