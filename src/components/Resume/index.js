import './style.css';
import { useEffect, useState } from 'react';
import { formatMoney } from '../../utils/formatters';
import { loadStatement } from '../../utils/requisitions';


function Resume({ transactions }) {
    const [statement, setStatement] = useState({
        in: 0,
        out: 0,
        balance: 0
    })

    useEffect(() => {
        async function getStatement() {
            const statement = await loadStatement();

            setStatement({ ...statement })
        }
        getStatement();
    }, [transactions])


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