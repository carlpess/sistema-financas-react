import './style.css';
import CloseIcon from '../../assets/close-icon.svg';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { getItem, setItem } from '../../utils/storage';
import { loadUserProfile } from '../../utils/requisitions';
import Notify from '../Notify';

const defaultForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function ProfileModal({ open, handleClose }) {
    const token = getItem('token');
    const [form, setForm] = useState({ ...defaultForm });
    const [openNotify, setOPenNotify] = useState(false);
    const [textNotify, setTextNotify] = useState('');

    function handleChangeForm({ target }) {
        setForm({ ...form, [target.name]: target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            if (form.password !== form.confirmPassword) {
                setOPenNotify(true);
                setTextNotify('As senhas não coincidem');
                return;
            }

            await api.patch('/usuario', {
                nome: form.name,
                email: form.email,
                senha: form.password
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setItem('userName', form.name);

            handleClose();
            setForm({ ...defaultForm });
        } catch (error) {
        }
    }

    useEffect(() => {
        async function getUserProfile() {
            const profile = await loadUserProfile();
            if (open) {
                setForm({ ...profile });
            }
        }

        getUserProfile();
    }, [open])

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
                        <h2>Editar Perfil</h2>

                        <form onSubmit={handleSubmit}>
                            <div className='container-inputs'>
                                <label>Nome</label>
                                <input
                                    name='name'
                                    type='text'
                                    value={form.name}
                                    onChange={handleChangeForm}
                                    required
                                />
                            </div>
                            <div className='container-inputs'>
                                <label>E-mail</label>
                                <input
                                    name='email'
                                    type='email'
                                    value={form.email}
                                    onChange={handleChangeForm}
                                    required
                                />
                            </div>
                            <div className='container-inputs'>
                                <label>Senha</label>
                                <input
                                    name='password'
                                    type='password'
                                    value={form.password}
                                    onChange={handleChangeForm}
                                    required
                                />
                                <span>*Senha deve conter no minímo 8 caracteres</span>
                            </div>
                            <div className='container-inputs'>
                                <label>Confirmação de Senha</label>
                                <input
                                    name='confirmPassword'
                                    type='password'
                                    value={form.confirmPassword}
                                    onChange={handleChangeForm}
                                    required
                                />
                            </div>

                            <button className='btn-purple btn-medium'>Confirmar</button>
                        </form>
                    </div>
                </div>
            }
            <Notify
                handleClose={() => setOPenNotify(false)}
                open={openNotify}
                text={textNotify}
            />
        </>
    )
}

export default ProfileModal;