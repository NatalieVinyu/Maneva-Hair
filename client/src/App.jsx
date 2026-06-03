import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Booking from './components/Booking'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App