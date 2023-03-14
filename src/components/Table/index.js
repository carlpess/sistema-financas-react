import DumpIcon from '../../assets/dump-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';
import ArrowUp from '../../assets/arrow-up.svg'
import ArrowDown from '../../assets/arrow-down.svg'
import './style.css';
import { useState } from 'react';
import Confirm from '../Confirm';
import { formatDate, formatMoney, formatWeekDay } from '../../utils/formatters';

function Table({ transactions }) {
    const [asc, setAsc] = useState(true);
    const [openConfirm, setOpenConfirm] = useState(false);

    function handleDeleteItem() {
        setOpenConfirm(false);
    }

    return (
        <div className='container-table'>
            <div className='table-head'>
                <div
                    className='table-column-small content-date date-column'
                    onClick={() => setAsc(!asc)}
                >
                    <strong >Data</strong>
                    <img src={asc ? ArrowUp : ArrowDown} alt='order' />
                </div>
                <strong className='table-column-medium'>Dia da semana</strong>
                <strong className='table-column-big'>Descrição</strong>
                <strong className='table-column-small'>Categoria</strong>
                <strong className='table-column-small'>Valor</strong>
                <div className='table-column-small'></div>
            </div>

            <div className='table-body'>
                {transactions.map((transaction) => (
                    <div className='table-row' key={transaction.id}>
                        <strong className='table-column-small content-date'>
                            {formatDate(transaction.data)}
                        </strong>
                        <span className='table-column-medium'>
                            {formatWeekDay(transaction.data)}
                        </span>
                        <span className='table-column-big'>
                            {transaction.descricao}
                        </span>
                        <span className='table-column-small'>
                            {transaction.categoria_nome}
                        </span>
                        <strong
                            className={`${transaction.tipo === 'entrada' ? 'positive' : 'negative'} values table-column-small`}
                        >
                            {formatMoney(transaction.valor)}
                        </strong>
                        <div className='table-column-small action-buttons'>
                            <img src={EditIcon} alt='edit' />
                            <img
                                src={DumpIcon}
                                alt='delete'
                                onClick={() => setOpenConfirm(true)}
                            />
                        </div>
                        <Confirm
                            open={openConfirm}
                            handleConfirm={handleDeleteItem}
                            handleClose={() => setOpenConfirm(false)}
                        />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Table;