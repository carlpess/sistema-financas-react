import { useEffect, useState } from 'react';
import AddTransactionModal from '../../components/AddTransactionModal';
import Filter from '../../components/Filter';
import Header from '../../components/Header';
import ProfileModal from '../../components/ProfileModal';
import Resume from '../../components/Resume';
import Table from '../../components/Table';
import './style.css';
import { loadTransactions } from '../../utils/requisitions';
import EditTransactionModal from '../../components/EditTransactionModal';

function Main() {
    const [openModalProfile, setOpenModalProfile] = useState(false);
    const [OpenAddTransactionModal, setOpenAddTransactionModal] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [currentItemEdit, setCurrentItemEdit] = useState(null);


    useEffect(() => {
        async function getTransactions() {
            const allTransactions = await loadTransactions();

            setTransactions([...allTransactions]);
        }

        getTransactions();
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
                            <Filter
                                transactions={transactions}
                                setTransactions={setTransactions}
                            />
                            <Table
                                transactions={transactions}
                                setTransactions={setTransactions}
                                setOpenEditModal={setOpenEditModal}
                                setCurrentItemEdit={setCurrentItemEdit}
                            />
                        </div>
                        <div className='container-right'>
                            <Resume
                                transactions={transactions}
                            />
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
                setTransactions={setTransactions}
            />

            <EditTransactionModal
                open={openEditModal}
                handleClose={() => setOpenEditModal(false)}
                setTransactions={setTransactions}
                currentItemEdit={currentItemEdit}
            />

            <ProfileModal
                open={openModalProfile}
                handleClose={() => setOpenModalProfile(false)}
            />
        </div>
    )
}

export default Main;