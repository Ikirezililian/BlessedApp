import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Donation from './pages/Donation';
import Services from './pages/Services';
import Locations from './pages/Locations';
import BibleListening from './pages/BibleListening';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Home.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/services" element={<Services />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/bible-listening" element={<BibleListening />} />
    </Routes>
  </Router>
);

export default App;
