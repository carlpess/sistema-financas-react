import api from '../services/api';
import { getItem } from './storage';



export async function loadCategories() {
    let token = '';
    token = getItem('token');

    try {
        const response = await api.get('/categoria', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
    }
}

export async function loadTransactions() {
    let token = '';
    token = getItem('token');

    try {
        const response = await api.get('/transacao', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
    }
}

export async function loadStatement() {
    let token = '';
    token = getItem('token');

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
    }
}

export async function loadUserProfile() {
    let token = '';
    token = getItem('token');

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
    }
}