import React from 'react'
import { BrowserRouter,Route, Routes,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import PaidServices from './components/PaidServices';
import Notfound from './components/Notfound';
import Dynamic from './components/Dynamic'
const App = () => {
  return ( <>
    
      <BrowserRouter>
        <Menu/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/Services/paid' element={<PaidServices/>} />
        <Route path='/:id' element={<Dynamic/>} />
        <Route path='*' element={<Notfound/>} />
           
      </Routes>
      </BrowserRouter>
    
  </>)
}

export default App;