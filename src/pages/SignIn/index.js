
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './style.css';
import api from '../../services/api';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!email || !password) {
        return;
      }

      const response = await api.post('/login', {
        email,
        senha: password
      });

      console.log(response)


      navigate('/main');
    } catch (error) {
      console.log(error)
    }
  }

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
            onClick={() => navigate('/sign-up')}
          >
            Cadastre-se
          </button>
        </div>
        <div className='right'>
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className='container-inputs'>
              <label htmlFor='email'>E-mail</label>
              <input
                type='text'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='container-inputs'>
              <label htmlFor='password'>Senha</label>
              <input
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
