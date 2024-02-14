import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Login} from '../pages/Login'
import {RecoverPassword} from '../pages/RecoverPassword'
import {ForgetPassword} from '../pages/ForgetPassword'
import {Register} from '../pages/Register'
import {Home} from "../pages/Home"

const App: React.FC = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "100vw"}}>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;