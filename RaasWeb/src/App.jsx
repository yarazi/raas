import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import RaasInfoPage from './components/RaasInfoPage/RaasInfoPage'

function App() {

  
  const phonenumber = import.meta.env.VITE_SUPPORT_PHONE;
  const message = import.meta.env.VITE_QUICK_LINK_MESSAGE;

  return (
    <>
    <RaasInfoPage phonenumber={phonenumber} message={message} />
    </>
  )
}

export default App
