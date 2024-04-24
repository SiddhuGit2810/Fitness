
import {BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import Login from './Login/Login';
import MainPage from './MainPage/MainPage';
import HomePage from './HomePage/HomePage';



function App() {

  // const nav=useNavigate()
  
  const user=false
  return (



    <BrowserRouter>
      <Routes>

       
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={  <MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;