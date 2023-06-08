import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Carousel from './components/Carousel';
import Community from './components/Community';


const App = () => {
  return (
    <>
    
      <Navbar />
      
      
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/Jobs" element={<Carousel/>} />

        <Route path="/Community" element={<Community/>} />        {/* Add more routes for other pages */}
      </Routes>

      
    
    </>
  );
};

export default App;
