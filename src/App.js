import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Front from './Component/Pages/Front';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AboutUs from './Component/AboutUs/aboutus';
import Test from './Component/Test/Test';
import Login from './Component/Login/login';




function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar></Navbar>
  
      <Routes>
        <Route path='/' element = {<Front/>}/>
        <Route path='/aboutus' element = {<AboutUs/>}/>
        <Route path='/test' element = {<Test/>}/>
        <Route path='/login' element = {<Login/>}/>
      </Routes>
    </BrowserRouter>
    
    
    
   </div>
  );
}

export default App;
