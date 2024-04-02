import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import FormHooks from './components/Hooks/FormHooks'
import ShowUserName from './components/ShowUserName/ShowUserName'
import ConditionalRender from './components/ConditionalRender/ConditionalRender'
import { useState } from 'react'
function App() {
  const [users, setUser] = useState([
    {active: true, userName:'Cleston'},
    {active: true, userName:'Kenji'},
    {active: true, userName:'Maruyama'},
    {active: false, userName:'Felipe'},
    {active: true, userName:'Moretti'},
  ])
  return (
    <>
    <NavBar></NavBar>
    <Form></Form>
    <Footer></Footer>
    <FormHooks></FormHooks>
    <ConditionalRender></ConditionalRender>
    <ShowUserName list = {users}></ShowUserName>
    </>
  )
}

export default App
