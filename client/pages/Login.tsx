import { Header } from './Header'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Header />
      <div style={{border: "1px solid black",display: "flex",flexDirection:"column", justifyContent:"center", alignItems:"center",width:500, height: 500, margin:20}}>
      <h1>Iniciá sesión</h1>
      <form style={{padding: 20 , display: "flex",flexDirection:"column",width: 300, justifyContent: "center", alignItems: "center"}}>
        <div style={{padding: 20}}>
        <div style={{display: "flex",flexDirection:"column", justifyContent:"center",width: 300}}>
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            placeholder="Ingrese su email"
          />
        </div>
        <div style={{display: "flex",flexDirection:"column", justifyContent:"center",width: 300}}>
          <label
            htmlFor="password"
          >
            Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Ingrese su contraseña"
          />
        </div>
        </div>
        <div style={{width: 300, justifyContent: "center", alignItems: "center"}}>
        <button
          type="submit"
        >
          Iniciar sessión
        </button>
        </div>
      </form>
      <nav style={{display: "flex",flexDirection:"column", justifyContent:"center", alignItems:"center", height: 400}}>
        <Link to={'/register'}
        >
          ¿No tenés una cuenta? Registrate
        </Link>
        <Link
          to={'/forget-password'}
        >
          Olvidé mi password
        </Link>
      </nav>
      </div>
    </div>

  )
}
