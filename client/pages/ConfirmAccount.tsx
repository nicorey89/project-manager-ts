import React, {useEffect, useState} from 'react'
import { clienteAxios } from "../src/config/clientAxios"
import {Link, useParams, useNavigate} from 'react-router-dom'
import {Alert} from '../components/Alert'
import Swal from 'sweetalert2'

export const ConfirmAccount = async () => {
  const params = useParams(); 
  const {token} = params;
  const [alert, setAlert] = useState({});

  const navigate = useNavigate();
  const handleShowAlert = (msg) => {
    setAlert({ 
      msg 
    });
  }
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
      <div>
      </div>

    </>
  )
}
