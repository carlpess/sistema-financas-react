
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './style.css';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import Notify from '../../components/Notify';

const defaultForm = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ ...defaultForm });
  const [openNotify, setOPenNotify] = useState(false);
  const [textNotify, setTextNotify] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (form.password !== form.confirmPassword) {
        setOPenNotify(true);
        setTextNotify('As senhas não coincidem');
        return;
      }

      await api.post('/usuario', {
        nome: form.name,
        email: form.email,
        senha: form.password
      });

      setForm({ ...defaultForm });
      navigate('/');
    } catch (error) {
      setOPenNotify(true);
      setTextNotify(error.response.data);
    }
  }

  function handleChangeForm({ target }) {
    setForm({ ...form, [target.name]: target.value })
  }

  return (
    <div className='container-sign-up'>
      <img src={Logo} alt='logo' className='logo' />
      <div className='content-sign-up'>
        <div>
          <form onSubmit={handleSubmit}>
            <h2>Cadastre-se</h2>
            <div className='container-inputs'>
              <label htmlFor='name'>Nome</label>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChangeForm}
              />
            </div>

            <div className='container-inputs'>
              <label htmlFor='email'>E-mail</label>
              <input
                type='text'
                name='email'
                value={form.email}
                onChange={handleChangeForm}
              />
            </div>

            <div className='container-inputs'>
              <label htmlFor='password'>Senha</label>
              <input
                type='password'
                name='password'
                value={form.password}
                onChange={handleChangeForm}
              />
              <span>*Senha deve conter no minímo 8 caracteres</span>
            </div>

            <div className='container-inputs'>
              <label htmlFor='confirm-password'>Confirmação de senha</label>
              <input
                type='password'
                name='confirmPassword'
                value={form.confirmPassword}
                onChange={handleChangeForm}
              />
            </div>

            <button
              className='btn-purple btn-big'
            >
              Cadastrar
            </button>
            <Link to='/'>Já tem cadastro? Clique aqui!</Link>
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

export default SignUp;
