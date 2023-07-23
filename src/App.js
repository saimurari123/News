import React, { useState } from 'react'
// import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Newdata from './pages/Newdata';
import {BrowserRouter ,Route, Routes} from "react-router-dom";
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/sports' exact element={<Newdata cat="sports"/>}/>
                <Route path='/entertainment' exact element={<Newdata cat="entertainment"/>}/>
                <Route path='/technology' exact element={<Newdata cat="technology"/>}/>
                <Route path='/business' exact element={<Newdata cat="business"/>}/>
                <Route path='/movies' exact element={<Newdata cat="movies"/>}/>
                <Route path='/science' exact element={<Newdata cat="science"/>}/>
                <Route path='/education' exact element={<Newdata cat="education"/>}/>
                <Route path='/employment' exact element={<Newdata cat="employment"/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App