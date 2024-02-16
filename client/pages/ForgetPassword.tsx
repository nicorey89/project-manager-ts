import {useState, useContext} from "react"; 
import { clienteAxios } from "../src/config/clientAxios"; 
import { Link } from "react-router-dom"; 
import Swal from "sweetalert2";
import { Header } from "./Header";
import AuthContext from "../src/context/AuthProvider";

export const ForgetPassword = () => {

  const [email, setEmail] = useState(""); 
  const { handleShowAlert} = useContext(AuthContext);

  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    if(!email){ 
      handleShowAlert("El email es obligatorio") 
      return null 
    } 
    try { 
      const {data} = await 
  clienteAxios.post(`/send-token`,{ 
        email 
      }); 
  
      Swal.fire({ 
        title: 'Revisá tu casilla de correo', 
        text : data.msg, 
        confirmButtonText: 'Entendido', 
      }) 
  
      setEmail("") 
  
    } catch (error) { 
      console.error(error); 
      handleShowAlert("mail invalido"); 
      setEmail("") 
    }
  } 
  return (
    <> 
    <Header />
    <div>
      <h1 > 
        Recupera tu acceso 
      </h1> 
 
      <form 
        onSubmit={handleSubmit} 
      > 
        <div> 
          <label htmlFor="email" > 
            Correo electrónico 
          </label> 
          <input 
            id="email" 
            type="email" 
            placeholder="Ingresá tu email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          /> 
        </div> 
        <button 
          type="submit" 
        > 
          Recuperar contraseña 
        </button> 
      </form> 
      <nav> 
        <Link 
          to={"/register"} 
        > 
        ¿No tenés una cuenta? Registrate 
        </Link> 
        <Link 
          to={"/"} 
        > 
          ¿Estás registrado? Iniciá sesión 
        </Link> 
      </nav>
      </div> 
    </>

  )
}
