import { useState, useEffect } from 'react';

function Spaces() {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpaces = async () => {
      setLoading(true);
      try {
        // Simulated API call
        const response = await new Promise(resolve => 
          setTimeout(() => resolve([
            { id: 1, name: 'Text Generation', description: 'Generate human-like text with AI', image: 'https://source.unsplash.com/random/800x600?ai' },
            { id: 2, name: 'Image Classification', description: 'Classify images using machine learning', image: 'https://source.unsplash.com/random/800x600?machine-learning' },
            { id: 3, name: 'Sentiment Analysis', description: 'Analyze sentiment in text data', image: 'https://source.unsplash.com/random/800x600?data' },
            { id: 4, name: 'Object Detection', description: 'Detect and locate objects in images', image: 'https://source.unsplash.com/random/800x600?object' },
            { id: 5, name: 'Language Translation', description: 'Translate text between languages', image: 'https://source.unsplash.com/random/800x600?language' },
            { id: 6, name: 'Speech Recognition', description: 'Convert spoken words to text', image: 'https://source.unsplash.com/random/800x600?speech' },
            { id: 7, name: 'Face Recognition', description: 'Identify and verify faces in images', image: 'https://source.unsplash.com/random/800x600?face' },
            { id: 8, name: 'Text Summarization', description: 'Generate concise summaries of long texts', image: 'https://source.unsplash.com/random/800x600?summary' },
            { id: 9, name: 'Chatbot', description: 'Create conversational AI interfaces', image: 'https://source.unsplash.com/random/800x600?chat' },
            { id: 10, name: 'Music Generation', description: 'Compose original music using AI', image: 'https://source.unsplash.com/random/800x600?music' },
          ]), 1000)
        );
        setSpaces(response);
      } catch (error) {
        console.error('Error fetching spaces:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpaces();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Explore Spaces</h2>
      {loading ? (
        <p className="text-center text-xl">Loading spaces...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space) => (
            <div key={space.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={space.image} alt={space.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{space.name}</h3>
                <p className="text-gray-600 mb-4">{space.description}</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300">
                  Try Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Spaces;
