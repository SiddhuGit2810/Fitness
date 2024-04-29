
import {BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import Login from './Login/Login';
import MainPage from './MainPage/MainPage';
import HomePage from './HomePage/HomePage';

import { EmailContext } from './Usecontext/UseContext';
import { useState } from 'react';





function App() {

  const [contextemail, setcontextemail] = useState("")

  // const nav=useNavigate()
  
  // const user=false
  return (

<EmailContext.Provider value={{contextemail,setcontextemail}} >

    <BrowserRouter>
      <Routes>

       
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={  <MainPage />} />
      </Routes>
    </BrowserRouter>

    </EmailContext.Provider>
  
   
  );
}

export default App;