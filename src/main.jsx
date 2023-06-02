import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './jsx/Login.jsx'
import Signin from './jsx/Signin.jsx'
import PageNotFound from './jsx/PageNotFound.jsx'
import ForgotPassword from './jsx/ForgotPassword.jsx'
import ResetPassword from './jsx/ResetPassword.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sigin' element={<Signin />} />
        <Route path='/forgot' element={<ForgotPassword />} />
        <Route path='/reset' element={<ResetPassword />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
  </BrowserRouter>
</React.StrictMode>
)
