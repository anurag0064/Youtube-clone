import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/auth/login/Login';
import AuthRoutes from './pages/route/authroute/Authroute';
import ScreenRoutes from './pages/route/screenroute/Screenroute';
import Home from './pages/screen/home/Home';
import Trending from './pages/screen/trending/Trending';
import Videopage from './pages/screen/videopage/Videopage';
import Channelpage from './pages/screen/channelpage/ChannelPage';
import Register from './pages/auth/register/Register';
import Forgot from './pages/auth/forgot/Forgot';
import VerifyLogin from './pages/auth/verifylogin/VerifyLogin';
import VerifyRegister from './pages/auth/verifyregister/VerifyRegister';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthRoutes />}>
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register/>}/>
          <Route path='/auth/forgot' element={<Forgot />} />
          <Route path='/auth/verifylogin' element={<VerifyLogin />} />
          <Route path='/auth/verifyregister' element={<VerifyRegister />} />
        </Route>
        </Routes >
        <Routes>
        <Route path="/" element={<ScreenRoutes />}>
          <Route index element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/videopage/:id" element={<Videopage />} />
          <Route path="/:channel" element={<Channelpage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


