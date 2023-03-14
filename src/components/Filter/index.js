import { useEffect, useState } from 'react';
import './style.css';
import FilterIcon from '../../assets/filter-icon.svg'
import Chip from '../Chip';
import { loadCategories, loadTransactions } from '../../utils/requisitions';

function Filter({ transactions, setTransactions }) {
    const [open, setOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    async function handleClearFilter() {
        const localCategories = [...categories];

        localCategories.forEach((categ) =>
            categ.checked = false
        )

        setCategories([...localCategories]);

        const allTransactions = await loadTransactions();
        setTransactions([...allTransactions]);
    }

    async function handleApplyFilters() {
        const localTransactions = await loadTransactions();
        setTransactions([...localTransactions]);
        const categoriesCheckedId = [];

        categories.forEach((categ) => {
            if (categ.checked) {
                categoriesCheckedId.push(categ.id);
            }
        });

        if (!categoriesCheckedId.length) {
            return;
        }

        const filteredTransactions = localTransactions.filter(
            (transaction) => categoriesCheckedId.includes(transaction.categoria_id)
        );

        setTransactions([...filteredTransactions]);

    }

    useEffect(() => {
        async function getCategories() {
            const allCategories = await loadCategories();

            allCategories.forEach(categ => {
                categ.checked = false;
            });

            setCategories([...allCategories])
        }

        if (open) {
            getCategories();
        }
    }, [open])

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
                        {categories.map((categ) => (
                            <Chip
                                key={categ.id}
                                title={categ.descricao}
                                checked={categ.checked}
                                id={categ.id}
                                categories={categories}
                                setCategories={setCategories}
                            />
                        ))}
                    </div>
                    <div className='container-filter-btns'>
                        <button
                            className='btn-white btn-small'
                            onClick={handleClearFilter}
                        >
                            Limpar Filtros
                        </button>
                        <button
                            className='btn-purple btn-small'
                            onClick={handleApplyFilters}
                        >
                            Aplicar Filtros
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Filter;