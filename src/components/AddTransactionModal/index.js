import './style.css';
import CloseIcon from '../../assets/close-icon.svg';
import { useState } from 'react';

function AddTransactionModal({ open, handleClose }) {
    const [option, setOption] = useState('in');

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

                        <form>
                            <div className='container-inputs'>
                                <label>Valor</label>
                                <input type='Number' />
                            </div>
                            <div className='container-inputs'>
                                <label>Categoria</label>
                                <select>
                                    <option>Selecione...</option>
                                    <option>categoria 1</option>
                                    <option>categoria 2</option>
                                </select>
                            </div>
                            <div className='container-inputs'>
                                <label>Data</label>
                                <input type='text' />
                            </div>
                            <div className='container-inputs'>
                                <label>Descrião</label>
                                <input type='text' />
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