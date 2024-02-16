import { Header } from "./Header"
import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <div >
      <Header />
      <h1>Página <span>no encontrada</span></h1>
      <nav className="text-center">
        <Link className='block text-center my-5 text-slate-500 uppercase text-sm'to="/">Volver al inicio</Link>
      </nav>
    </div>
  )
}

