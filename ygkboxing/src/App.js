import Navbar from './navbar';
import About from './pages/about';
import Schedule from './pages/schedule';
import Membership from './pages/memberships';
import Home from './pages/home';
import './App.css';
import {Route, Routes} from 'react-router-dom';

export default function App() {
  return( 
    <>
    <Navbar/>
    <div className = "container" >
    <Routes>
      <Route path = "/home" element = {<Home/>}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/schedule" element = {<Schedule/>}/>
      <Route path = "/memberships" element = {<Membership/>}/>
    </Routes>   
    </div>
    </>
  )
}