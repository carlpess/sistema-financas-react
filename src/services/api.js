import axios from 'axios';

export default axios.create({
    baseURL: 'https://lively-dog-leg-warmers.cyclic.app',
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})