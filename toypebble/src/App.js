import './App.css';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Toys from './Components/Toys';
import ToysDetail from './Components/ToysDetail';
import PrivacyPolicy from './Components/privacyPolicy';
import Subscription from './Components/subscription'
import {HashRouter, Route, Routes } from 'react-router-dom';
import TermsCondition from './Components/termsCondition';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import OurStory from './Components/OurStory';
import Contact from './Components/Contact';
import Order from './Components/Order';

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Landing />} />   
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/toys" element={<Toys />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/forgotPassword' element={<ForgotPassword/>} />
      <Route path='/resetPassword' element={<ResetPassword/>} />
      <Route path='/toysdetail/:imageIndex' element={<ToysDetail />} />
      <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
      <Route path='/termsCondition' element={<TermsCondition/>} />
      <Route path='/ourStory' element={<OurStory/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/myOrders' element={<Order/>} />
      {/* other routes */}
    </Routes>
  </HashRouter>
  );
}

export default App;
