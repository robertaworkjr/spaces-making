import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Hugging Face Spaces
      </h1>
      <p className="text-lg text-gray-700 max-w-md text-center mb-6">
        Explore AI-powered applications and create your own without code.
      </p>
      <Link to="/signup" className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300">
        Get Started
      </Link>
    </div>
  )
}

export default Home
