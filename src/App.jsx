import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Contact from './Pages/Contact'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Home from './Pages/Home'
import About from './Pages/About'
function App() {

  return (
    <>

    <BrowserRouter>
        <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
