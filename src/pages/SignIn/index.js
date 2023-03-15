
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './style.css';
import api from '../../services/api';
import { getItem, setItem } from '../../utils/storage'
import Notify from '../../components/Notify';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openNotify, setOPenNotify] = useState(false);
  const [textNotify, setTextNotify] = useState('');

  useEffect(() => {
    const token = getItem('token');

    if (token) {
      navigate('/main')
    }
  }, [navigate])

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

      const { usuario, token } = response.data;

      setItem('token', token);
      setItem('userId', usuario.id);
      setItem('userName', usuario.nome);
      navigate('/main');
    } catch (error) {
      setOPenNotify(true);
      setTextNotify(error.response.data);
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

      <Notify
        handleClose={() => setOPenNotify(false)}
        open={openNotify}
        text={textNotify}
      />
    </div>
  );
}

export default SignIn;
