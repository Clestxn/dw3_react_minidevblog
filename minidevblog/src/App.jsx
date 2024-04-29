import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { userAuthenticaton } from './hooks/userAuthentication'

import Login from './pages/Login/Login'

function App(){
  const [user, setUser] = useState(undefined)
  const { auth } = userAuthenticaton()

  return (
    <>
    <Login></Login>
    </>
  )
}

export default App