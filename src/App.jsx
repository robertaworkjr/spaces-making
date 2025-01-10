import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Spaces from './components/Spaces'
import About from './components/About'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-100">
        <nav className="bg-purple-600 text-white p-4">
          <ul className="flex justify-center space-x-4">
            <li><Link to="/" className="hover:text-purple-200">Home</Link></li>
            <li><Link to="/spaces" className="hover:text-purple-200">Spaces</Link></li>
            <li><Link to="/about" className="hover:text-purple-200">About</Link></li>
            <li><Link to="/signup" className="bg-white text-purple-600 px-3 py-1 rounded-full hover:bg-purple-100">Sign Up</Link></li>
            <li><Link to="/dashboard" className="hover:text-purple-200">Dashboard</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
