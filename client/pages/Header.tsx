import { Link } from "react-router-dom"

export const Header = () => {

  
  return (
    <div style={{background: "black", width: "100vw", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h1 style={{ justifyContent: "space-around", padding: 10, display: "flex", marginRight: 20 }}>Home</h1>
        <div style={{ justifyContent: "space-around", padding: 10, display: "flex", marginRight: 20 }}>
        <Link to={"/"} style={{padding:20}}>Home</Link>
        <Link to={"/register"} style={{padding:20}}>registrate</Link>
        <Link to={"/login"} style={{padding:20}}>Inicia Sesion</Link>
        </div>
    </div>

  )
}
