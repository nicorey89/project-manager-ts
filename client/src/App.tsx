import { Routes, Route } from 'react-router-dom'
import {Login} from '../pages/Login'
import {ForgetPassword} from '../pages/ForgetPassword'
import {Register} from '../pages/Register'
import AuthProvider from './context/AuthProvider'
import { AuthLayout } from "../layouts/AuthLayout"
import { NotFound } from "../pages/NotFound"

function App() {

  return (
  <AuthProvider>
    <Routes>
      <Route path='/' element={<AuthLayout/>}>
          <Route index element={<Login/>}/>
          <Route path='/registrar' element={<Register/>}/>
          <Route path='*' element={<NotFound/>}></Route>
          <Route path='olvide-password' element={<ForgetPassword/>}/>
      </Route>
    </Routes>
  </AuthProvider>
  )
}

export default App