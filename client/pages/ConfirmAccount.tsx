import React, {useEffect, useContext} from 'react'
import { clienteAxios } from "../src/config/clientAxios"
import {Link, useParams, useNavigate} from 'react-router-dom'
import {Alert} from '../components/Alert'
import Swal from 'sweetalert2'
import AuthContext from "../src/context/AuthProvider"
import {Header} from "./Header" 

export const ConfirmAccount = async () => {
  const params = useParams(); 
  const {token} = params;

  const navigate = useNavigate();

  const {alert, handleShowAlert} = useContext(AuthContext);

  useEffect(() => { 
     
    const confirmAccount = async () => { 
        try { 
          const url = `/auth/checked?token=${token}`; 
          const { data } = await clienteAxios.get(url); 
   
          Swal.fire({ 
            title: 'Felicitaciones', 
            text : "Tu registración se ha completado con éxito", 
            confirmButtonText: 'Iniciá sesión', 
          }).then((result) => { 
            if (result.isConfirmed) { 
              navigate('/') 
            }  
          }) 
   
        } catch (error) { 
          console.error(error.response); 
          handleShowAlert(error.response.data.msg); 
        } 
      }; 
   
      confirmAccount(); 
    }, []);

  return (
    <>
    <Header />
    <div>
    {alert.msg && ( 
      <div> 
          <> 
            <Alert {...alert} /> 
            <nav> 
              <Link 
                to={"/register"} 
              >              ¿No tenés una cuenta? Registrate 
              </Link> 
              <Link 
                to={"/"} 
              > 
                ¿Estás registrado? Iniciá sesión 
              </Link> 
            </nav> 
          </> 
      </div> 
  )} 

      <h1>
        Confirma tu cuenta
      </h1>
      </div>

    </>
  )
}
