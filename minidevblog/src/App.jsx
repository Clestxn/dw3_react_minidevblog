import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { userAuthentication } from './hooks/userAuthentication'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import loading from './assets/Loading.gif'



function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = userAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [auth])
  if(loadingUser) {
    return (<div className='container loading'><img src={loading} alt="Gif Loading User" width="120px" height="120px"/></div>)
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App