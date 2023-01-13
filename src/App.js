import React from 'react';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Award from './Pages/Award';
import Project from './Pages/Project';
import Activity from './Pages/Activity';
import Contact from './Pages/Contact';





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Award' element={<Award />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Activity' element={<Activity />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
