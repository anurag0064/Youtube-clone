
import Home from './pages/Home'
import Signup from './pages/Signup'
import  Login from './pages/Login'
import  Trending from './pages/Trending'
import  Forget from './pages/Forget'
import  Videopage from './pages/Videopage'
import  ChannelPage from './pages/ChannelPage'
import  Createvideo from './pages/createvideo'
import VerifyRegister from './pages/VerifyRegister'
import VerifyLogin from './pages/VerifyLogin'


import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    
      <Router>
      <Routes>
       <Route path="/" element={<Home/>}/> 
       <Route path="/Trending" element={<Trending/>}/>    
       <Route path="/VerifyRegister" element={<VerifyRegister/>}/>    
       <Route path="/VerifyLogin" element={<VerifyLogin/>}/>    
       <Route path="/Signup" element={<Signup/>}/> 
       <Route path="/Login" element={<Login/>}/> 
       <Route path="/Forget" element={<Forget/>}/> 
       <Route path="/Videopage/:id" element={<Videopage/>}/> 
       <Route path="/:channel" element={<ChannelPage/>}/> 
       <Route path="/Createvideo" element={<Createvideo/>}/> 
     

      </Routes>
      </Router>
      </> 
  );
}  

export default App;


