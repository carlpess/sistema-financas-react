import './style.css';
import CloseIcon from '../../assets/close-icon.svg';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { getItem } from '../../utils/storage';
import { loadCategories, loadTransactions } from '../../utils/requisitions';

const defaultForm = {
    value: '',
    category: {
        id: '',
        name: '',
    },
    date: '',
    description: ''
}


function AddTransactionModal({ open, handleClose, setTransactions }) {
    const token = getItem('token');
    const [option, setOption] = useState('out');
    const [categories, setCategories] = useState([]);
    const [form, setForm] = useState({ ...defaultForm });

    function handleChangeForm({ target }) {
        setForm({ ...form, [target.name]: target.value })
    }

    function handleChangeSelect({ target }) {
        const currentCategory = categories.find((categ) =>
            categ.descricao === target.value);

        if (!currentCategory) {
            return;
        }

        setForm({ ...form, category: { id: currentCategory.id, name: currentCategory.descricao } })
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const [year, month, day] = form.date.split('-')

        try {
            await api.post('/transacao', {
                tipo: option === 'in' ? 'entrada' : 'saida',
                descricao: form.description,
                valor: (form.value) * 100,
                data: new Date(`${month}-${day}-${year}`),
                categoria_id: form.category.id
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            handleClose();
            setForm({ ...defaultForm });

            const allTransactions = await loadTransactions();
            setTransactions([...allTransactions]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        async function getCategories() {
            const allCategories = await loadCategories();

            setCategories([...allCategories]);
        }

        getCategories();
    });

    return (
        <>
            {open &&
                <div className='backdrop'>
                    <div className='modal'>
                        <img
                            className='close-button'
                            src={CloseIcon}
                            alt='close'
                            onClick={handleClose}
                        />
                        <h2>Adicionar Registro</h2>

                        <div className='container-option'>
                            <button
                                className={`${option === 'out'
                                    ? 'option-off'
                                    : 'option-in'}
                                btn-big`}
                                onClick={() => setOption('in')}
                            >
                                Entrada
                            </button>
                            <button
                                className={`${option === 'in'
                                    ? 'option-off'
                                    : 'option-out'} 
                                btn-big`}
                                onClick={() => setOption('out')}
                            >
                                Saída
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className='container-inputs'>
                                <label>Valor</label>
                                <input
                                    name='value'
                                    type='number'
                                    value={form.value}
                                    onChange={handleChangeForm}
                                    required
                                />
                            </div>
                            <div className='container-inputs'>
                                <label>Categoria</label>
                                <select
                                    name='category'
                                    value={form.category.name}
                                    onChange={handleChangeSelect}
                                    required
                                >
                                    <option>Selecione...</option>
                                    {categories.map((categ) => (
                                        <option
                                            key={categ.id}
                                            value={categ.descricao}
                                        >
                                            {categ.descricao}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='container-inputs'>
                                <label>Data</label>
                                <input
                                    name='date'
                                    type='date'
                                    value={form.date}
                                    onChange={handleChangeForm}
                                    required
                                />
                            </div>
                            <div className='container-inputs'>
                                <label>Descrião</label>
                                <input
                                    name='description'
                                    type='text'
                                    value={form.description}
                                    onChange={handleChangeForm}
                                    required
                                />
                            </div>

                            <button className='btn-purple btn-medium'>Confirmar</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default AddTransactionModal;