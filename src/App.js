import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Accommodation from './pages/Accommodation'
import Header from './components/Header'
import Error from './pages/Error'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
       <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Accommodation/:id" element={<Accommodation />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App