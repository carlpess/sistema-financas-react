import Header from '../../components/Header';
import Resume from '../../components/Resume';
import Table from '../../components/Table';
import './style.css';

function Main() {
    return (
        <div className='container-main'>
            <Header />

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
        </div>
    )
}

export default Main;