import { useState } from 'react'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage';
import Verify from './pages/Verify';
import DashBoard from './pages/DashBoard';

function App() {
  

  return (
    <>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="verify-login" element={<Verify />} />
          <Route path="/dashboard" element={<DashBoard />}/>
        </Routes>
    </>
  )
}

export default App
