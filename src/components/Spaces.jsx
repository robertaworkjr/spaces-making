import React from 'react'

function Spaces() {
  const spaces = [
    { id: 1, name: 'Text Generation', description: 'Generate human-like text with AI' },
    { id: 2, name: 'Image Classification', description: 'Classify images using machine learning' },
    { id: 3, name: 'Sentiment Analysis', description: 'Analyze sentiment in text data' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Spaces</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spaces.map((space) => (
          <div key={space.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{space.name}</h3>
            <p className="text-gray-600 mb-4">{space.description}</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300">
              Try Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Spaces
