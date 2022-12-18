
import './style.css';
import Logo from '../../assets/logo.svg'

function SignIn() {
  return (
    <div className='container-sign-in'>
      <img src={Logo} alt='logo' className='logo' />
      <div className='content-sign-in'>
        <div className='left'>
          <h1>Controle suas <span>finanças</span>,
            sem planilha chata.</h1>

          <h3>
            Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um clique de distância.
          </h3>
          <button
            className='btn-purple btn-big'
          >
            Cadastre-se
          </button>
        </div>
        <div className='right'>
          <form>
            <h2>Login</h2>
            <div className='container-inputs'>
              <label htmlFor='email'>E-mail</label>
              <input type='text' name='email' />
            </div>

            <div className='container-inputs'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' />
            </div>

            <button
              className='btn-purple btn-big'
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
