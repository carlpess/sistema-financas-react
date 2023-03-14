import { useState } from 'react';
import './style.css';
import FilterIcon from '../../assets/filter-icon.svg'
import Chip from '../Chip';

function Filter() {
    const [open, setOpen] = useState(false);

    return (
        <div className='cotainer-filter'>
            <button onClick={() => setOpen(!open)} className='btn-filter'>
                <img src={FilterIcon} alt='filtrar' />
                Filtrar
            </button>

            {open &&
                <div className='filters-body'>
                    <strong>Categoria</strong>

                    <div className='container-categories'>
                        <Chip title='filter' checked />
                        <Chip title='filter' />
                    </div>
                    <div className='container-filter-btns'>
                        <button className='btn-white btn-small'>Limpar Filtros</button>
                        <button className='btn-purple btn-small'>Aplicar Filtros</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Filter;