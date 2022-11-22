import './App.css';
import Home from './Componets/HomeApp/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
// import Navbar from './Componets/Header/Navbar';
import SeekerHome from './Componets/Seeker/SeekerHome';
import SeekerProfile from './Componets/Seeker/SeekerProfile';
import Dashboard from './Componets/Seeker/Dashboard';
import DonorsList from './Componets/Seeker/DonorsList';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='seeker-profile' element={<SeekerProfile/>}/>
            <Route path='home-seeker' element={<SeekerHome/>}/>
            <Route path='donor-list' element={<DonorsList/>}/>
      </Route>

    </Routes>
    
    </BrowserRouter>
      
    
  );
}

export default App;
