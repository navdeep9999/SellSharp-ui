import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWork from './components/HowItWork'

import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <HowItWork />
              <Testimonial />
              <Pricing />
              <Footer />
            </>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
