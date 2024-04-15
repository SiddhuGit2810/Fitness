
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './Login/Login';
import MainPage from './MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;