import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import ServicePage from './Components/ServicePage';
import Navbar from './Components/Navbar';
import ContactUs from './Components/ContactUs';
import CareerPage from './Components/CareerPage';
// import FormFill from './Components/FormFill';

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='service' element={<ServicePage/>}></Route>
        <Route path='contactUs' element={<ContactUs/>}></Route>
        <Route path='careerpage' element={<CareerPage/>}></Route>

        {/* <Route path='fomrFill' Component={<FormFill/>}></Route> */}

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
