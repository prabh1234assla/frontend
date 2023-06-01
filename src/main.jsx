import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './js/Login.jsx'
import Signin from './js/Signin.jsx'
import PageNotFound from './js/PageNotFound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sigin' element={<Signin />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
  </BrowserRouter>
</React.StrictMode>
)
