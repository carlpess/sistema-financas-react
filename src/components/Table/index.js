import DumpIcon from '../../assets/dump-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';
import ArrowUp from '../../assets/arrow-up.svg'
import ArrowDown from '../../assets/arrow-down.svg'
import './style.css';
import { useState } from 'react';

function Table() {
    const [asc, setAsc] = useState(true);

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
                <div className='table-row'>
                    <strong className='table-column-small content-date'>01/01/2022</strong>
                    <span className='table-column-medium'>Quarta</span>
                    <span className='table-column-big'>BAguio doido</span>
                    <span className='table-column-small'>alimento</span>
                    <strong className='table-column-small'>R$ 24,00</strong>
                    <div className='table-column-small'>
                        <img src={EditIcon} alt='edit' />
                        <img src={DumpIcon} alt='delete' />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Table;