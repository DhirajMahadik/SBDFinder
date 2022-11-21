import './App.css';
import Home from './Componets/HomeApp/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Componets/Header/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>

    </Routes>
    
    </BrowserRouter>
      
    
  );
}

export default App;
