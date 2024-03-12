import Home from './pages/screen/home/Home'
import Register from './pages/auth/register/Register'
import Login from './pages/auth/login/Login'
import Trending from './pages/screen/trending/Trending'
import Forgot from './pages/auth/forgot/Forgot'
import Videopage from './pages/screen/videopage/Videopage'
import Channelpage from './pages/screen/channelpage/ChannelPage'
import Createvideo from './pages/screen/createvideo/Createvideo'
import VerifyLogin from './pages/auth/verifylogin/VerifyLogin'
import VerifyRegister from './pages/auth/verifyregister/VerifyRegister'


import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    
      <Router>
      <Routes>
       <Route path="/" element={<Home/>}/> 
       <Route path="/trending" element={<Trending/>}/>    
       <Route path="/verifyregister" element={<VerifyRegister/>}/>    
       <Route path="/verifylogin" element={<VerifyLogin/>}/>    
       <Route path="/register" element={<Register/>}/> 
       <Route path="/login" element={<Login/>}/> 
       <Route path="/forgot" element={<Forgot/>}/> 
       <Route path="/videopage/:id" element={<Videopage/>}/> 
       <Route path="/:channel" element={<Channelpage/>}/> 
       <Route path="/createvideo" element={<Createvideo/>}/> 
      </Routes>
      </Router>
      </> 
  );
}  

export default App;


