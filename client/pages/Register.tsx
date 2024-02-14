import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { clienteAxios } from '../src/config/clientAxios';
import Swal from 'sweetalert2';
import { Header } from './Header'

interface FormValues {
  name: string;
  email: string;
  password: string;
  password2: string;
}

export const Register: React.FC = () => {
  const [alert, setAlert] = useState<{ msg: string }>({ msg: '' });
  const [sending, setSending] = useState<boolean>(false);

  const { formValues, handleInputChange, reset } = useForm<FormValues>({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formValues;

  const handleShowAlert = (msg: string) => {
    setAlert({ msg });
    setTimeout(() => {
      setAlert({ msg: '' });
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ([name, email, password, password2].includes('')) {
      handleShowAlert('Todos los campos son obligatorios');
      return;
    }

    const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}/;
    if (!exRegEmail.test(email)) {
      handleShowAlert('El email tiene un formato inválido');
      return;
    }

    if (password !== password2) {
      handleShowAlert('Las contraseñas no coinciden');
      return;
    }

    try {
      setSending(true);

      const { data } = await clienteAxios.post('/register', {
        name,
        email,
        password
      });

      setSending(false);

      Swal.fire({
        icon: 'info',
        title: 'Gracias por registrate!',
        text: data.msg
      });

      reset();
    } catch (error) {
      console.error(error);
      handleShowAlert(error.response.data.msg);
      reset();
    }
  };

  return (
    <>
      <Header/>
      <h1>Creá tu cuenta</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Ingresá tu nombre"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Ingresá tu email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            placeholder="Ingrese su contraseña"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password2">Confirma tu contraseña</label>
          <input
            id="password2"
            type="password"
            name="password2"
            value={password2}
            placeholder="Ingrese su contraseña"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Crear cuenta</button>
      </form>
      <nav>
        <Link to={'/login'}>¿Estás registrado? Iniciá sesión</Link>
      </nav>
      {alert.msg && <div>{alert.msg}</div>}
    </>
  );
};