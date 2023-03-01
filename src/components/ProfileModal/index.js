import './style.css';
import CloseIcon from '../../assets/close-icon.svg';

function ProfileModal({ open, handleClose }) {
    return (
        <>
            {open &&
                <div className='backdrop'>
                    <div className='modal'>
                        <img src={CloseIcon} alt='close' />
                        <h2>Editar Perfil</h2>

                        <form>
                            <div className='container-inputs'>
                                <label>Nome</label>
                                <input type='text' />
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default ProfileModal;