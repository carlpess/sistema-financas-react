import './style.css';
import Profile from '../../assets/profile-icon.svg';
import Logo from '../../assets/logo.svg';
import LogOut from '../../assets/logout-icon.svg';


function Header() {
    return (
        <header>
            <img src={Logo} alt='logo' />
            <div className='container-log-out'>
                <div className='profile-area'>
                    <img src={Profile} alt='profile' />
                    <strong>NOME AQUI</strong>
                </div>
                <img src={LogOut} alt='logout' className='log-out' />
            </div>
        </header>
    )
}

export default Header;