import { useState } from 'react';
import './style.css';
import FilterIcon from '../../assets/filter-icon.svg'

function Filter({ }) {
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

                    <div>

                    </div>
                </div>
            }
        </div>
    )
}

export default Filter;