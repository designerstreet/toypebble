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

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Landing />} />   
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/toys" element={<Toys />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/toysdetail/:imageIndex' element={<ToysDetail />} />
      <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
      <Route path='/termsCondition' element={<TermsCondition/>} />
      {/* other routes */}
    </Routes>
  </HashRouter>
  );
}

export default App;
