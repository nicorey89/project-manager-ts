import { clienteAxios } from '../src/config/clientAxios';
import Swal from 'sweetalert2';
import { Header } from './Header'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { FormEvent, useContext } from 'react';
import AuthContext from '../src/context/AuthProvider';
import { AxiosResponse } from 'axios';

export interface FormValuesRegister {
  name : string;
  email : string;
  password : string;
  password2 : string;
}

const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}/;


export const Register = () => {

  const {alert, handleShowAlert} = useContext(AuthContext);

  const { formValues, handleInputChange, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
  } as FormValuesRegister);
  
  const { name, email, password, password2 } = formValues as FormValuesRegister;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
       
    if ([name, email, password, password2].includes("")) {
      handleShowAlert("Todos los campos son obligatorios");
      return null
    }
    if (!exRegEmail.test(email)) {
      handleShowAlert("El email tiene un formato inválido");
      return null
    }

    if (password !== password2) {
      handleShowAlert("Las contraseñas no coinciden");
      return null
    }

    try {

      const {data} : AxiosResponse = await clienteAxios.post('/register',{
        name,
        email,
        password
      });

      Swal.fire({
        icon: 'info',
        title: 'Gracias por registrate!',
        text: data.msg
      });
      
            
            
    } catch (error) {
        console.log(error);
        handleShowAlert("error de respuesta");
    }

    reset()
  }

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