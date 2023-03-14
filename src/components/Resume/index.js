import './style.css';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { getItem } from '../../utils/storage'
import { formatMoney } from '../../utils/formatters';


function Resume() {
    const [statement, setStatement] = useState({
        in: 0,
        out: 0,
        balance: 0
    })
    const token = getItem('token');

    async function loadStatement() {
        try {
            const response = await api.get('/transacao/extrato', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const { entrada, saida } = response.data;

            setStatement({
                in: entrada,
                out: saida,
                balance: entrada - saida
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadStatement();
    }, [])


    return (
        <div className='container-resume'>
            <h1>Resumo</h1>

            <div className='line-resume'>
                <span>Entradas</span>
                <span className='in'>{formatMoney(statement.in)}</span>
            </div>

            <div className='line-resume'>
                <span>Saídas</span>
                <span className='out'>{formatMoney(statement.out)}</span>
            </div>

            <div className='horizontal-line'></div>

            <div className='line-resume'>
                <h3>Saldo</h3>
                <span className='resume'>{formatMoney(statement.balance)}</span>
            </div>
        </div>
    )
}

export default Resume;