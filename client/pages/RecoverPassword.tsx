import {useState, useEffect} from 'react'
import {Link, useParams, useNavigate } from 'react-router-dom'
import { clienteAxios } from "../src/config/clientAxios"
import {Alert} from '../components/Alert'
import Swal from 'sweetalert2'

export const RecoverPassword = () => {

  const [alert, setAlert] = useState({}); 
  const [tokenChecked, setTokenChecked] = useState(false); 
  const [password, setPassword] = useState(""); 
  const [changePassword, setChangePassword] = useState(false);

  const {token} = useParams() 
  const navigate = useNavigate();

  const handleShowAlert = (msg) => { 
    setAlert({ 
      msg 
    }); 
 
    setTimeout(() => { 
      setAlert({}); 
    }, 3000); 
  }

  useEffect(() => { 
 
    const checkToken =  async () => { 
      try { 
         
        const {data} = await clienteAxios.get(`/reset-password?
token=${token}`); 
        setTokenChecked(true) 
         
      } catch (error) { 
        console.log(error.response); 
        handleShowAlert(error.response?.data.msg) 
      } 
    } 
 
    checkToken() 
    
  }, []);

  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    
    if(!password) { 
      handleShowAlert('El password es requerido') 
      return null 
    } 
 
    try { 
      const {data} = await clienteAxios.post(`/reset-password?token=${token}`,
{ 
        password 
      }); 
   
      Swal.fire({ 
        icon: 'info', 
        title: 'Contraseña reseteada!', 
        text: data.msg, 
        confirmButtonText : "Iniciá sesión", 
        allowOutsideClick : false 
      }).then(result => { 
        if(result.isConfirmed){ 
          setPassword(""); 
          navigate('/') 
        } 
      })  
    } catch (error) { 
      console.error(error) 
      handleShowAlert(error.response?.data.msg) 
      setPassword(""); 
 
    } 
 
  }

  return (
    <> 
    <h1> 
      Reestablecé tu contraseña 
    </h1> 
   
    { 
    alert.msg && <Alert {...alert}/> 
  } 
  {
    tokenChecked ? 
    ( 
      <> 
      <form action=""  noValidate onSubmit={handleSubmit}>   
      <div className="my-5"> 
        <label htmlFor="password" >Nueva contraseña</label> 
        <input  
          id="password" 
          type="password" 
          placeholder="Escribí tu nueva contraseña" 
          name={password} 
          onChange={(e) => setPassword(e.target.value)} 
          /> 
      </div> 
      <button 
        type="submit" 
      > 
        Resetear contraseña 
      </button> 
  </form> 
       </> 
    ) 
    : 
    <nav className="md:flex md:justify-between"> 
    <Link 
      to={"/register"} 
      className=" text-sky-700 block text-center my-3 text-sm uppercase " 

    > 
      ¿No tenés una cuenta? Registrate 
    </Link> 
    <Link 
      to={"/login"} 
      className=" text-sky-700 block text-center my-3 text-sm uppercase " 

    > 
      ¿Estás registrado? Iniciá sesión 
    </Link> 
  </nav> 
  } 
  </>
  )
}
