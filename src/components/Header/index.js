import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import LogOut from '../../assets/logout-icon.svg';
import Profile from '../../assets/profile-icon.svg';
import './style.css';


function Header() {
    const navigate = useNavigate();

    function handleLogOut() {
        navigate('/');
    }



    return (
        <header>
            <div className='width-limit content-header'>
                <img src={Logo} alt='logo' />
                <div className='container-log-out'>
                    <div className='profile-area'>
                        <img src={Profile} alt='profile' />
                        <strong>NOME AQUI</strong>
                    </div>
                    <img
                        src={LogOut}
                        alt='logout'
                        className='log-out'
                        onClick={handleLogOut}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;