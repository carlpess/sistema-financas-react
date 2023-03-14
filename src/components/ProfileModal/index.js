import './style.css';
import CloseIcon from '../../assets/close-icon.svg';

function ProfileModal({ open, handleClose }) {
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

                        <form>
                            <div className='container-inputs'>
                                <label>Nome</label>
                                <input type='text' />
                            </div>
                            <div className='container-inputs'>
                                <label>E-mail</label>
                                <input type='email' />
                            </div>
                            <div className='container-inputs'>
                                <label>Senha</label>
                                <input type='password' />
                            </div>
                            <div className='container-inputs'>
                                <label>Confirmação de Senha</label>
                                <input type='password' />
                            </div>

                            <button className='btn-purple btn-medium'>Confirmar</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default ProfileModal;