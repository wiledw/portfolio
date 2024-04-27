import React from 'react'
import "./App.css";
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About';
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'

import Contact from "./components/Contact/Contact"
import Footer from './components/Footer/Footer'
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <>
    <Header/>
    <Toaster position='top-center' toastOptions={{duration: 2000}}/>


    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
    </>
  )
}

export default App

