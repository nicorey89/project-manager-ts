import React from 'react'

export const RecoverPassword = () => {
  return (
    <> 
    <h1>Reestablecé tu contraseña</h1> 
 
    <form action="" >   
        <div> 
          <label htmlFor="password">Nueva contraseña</label> 
          <input  
            id="password" 
            type="password" 
            placeholder="Escribí tu nueva contraseña" 
            /> 
        </div> 
        <button 
          type="submit" 
        > 
          Guaradar tu contraseña 
        </button> 
    </form> 
    
  </>
  )
}