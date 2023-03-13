import { useEffect, useState } from 'react';
import AddTransactionModal from '../../components/AddTransactionModal';
import Filter from '../../components/Filter';
import Header from '../../components/Header';
import ProfileModal from '../../components/ProfileModal';
import Resume from '../../components/Resume';
import Table from '../../components/Table';
import './style.css';
import api from '../../services/api';
import { getItem } from '../../utils/storage';

function Main() {
    const [openModalProfile, setOpenModalProfile] = useState(false);
    const [OpenAddTransactionModal, setOpenAddTransactionModal] = useState(false);
    const [transactions, setTransactions] = useState([]);

    const token = getItem('token');

    async function loadTransactions() {
        try {
            const response = await api.get('/transacao', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log(response)

            setTransactions([...response.data])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadTransactions();
    }, [])

    return (
        <div className='container-main'>
            <Header
                handleEditProfile={() => setOpenModalProfile(true)}
            />

            <section>
                <div className='width-limit'>
                    <div className='container-data'>
                        <div className='container-left'>
                            <Filter />
                            <Table
                                transactions={transactions}
                            />
                        </div>
                        <div className='container-right'>
                            <Resume />
                            <button
                                className='btn-purple btn-medium'
                                onClick={() => setOpenAddTransactionModal(true)}
                            >
                                Adicionar Registro
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <AddTransactionModal
                open={OpenAddTransactionModal}
                handleClose={() => setOpenAddTransactionModal(false)}
            />

            <ProfileModal
                open={openModalProfile}
                handleClose={() => setOpenModalProfile(false)}
            />
        </div>
    )
}

export default Main;