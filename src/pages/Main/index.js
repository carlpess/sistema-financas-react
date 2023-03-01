import { useState } from 'react';
import Header from '../../components/Header';
import ProfileModal from '../../components/ProfileModal';
import Resume from '../../components/Resume';
import Table from '../../components/Table';
import './style.css';

function Main() {
    const [openModalProfile, setOpenModalProfile] = useState(false);

    return (
        <div className='container-main'>
            <Header
                handleEditProfile={() => setOpenModalProfile(true)}
            />

            <section>
                <div className='width-limit'>
                    <button>Filtrar</button>
                    <div className='container-data'>
                        <Table />
                        <div className='container-right'>
                            <Resume />
                            <button className='btn-purple btn-medium'>Adicionar Registro</button>
                        </div>
                    </div>
                </div>
            </section>

            <ProfileModal
                open={openModalProfile}
                handleClose={() => setOpenModalProfile(false)}
            />
        </div>
    )
}

export default Main;