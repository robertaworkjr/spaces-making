import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Explore and Create with Hugging Face Spaces</h1>
      <p className="text-lg md:text-xl mb-8 text-center max-w-2xl">Discover AI-powered apps, create without code, and join a community of innovators.</p>
      <Link to="/signup" className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">
        Get Started
      </Link>
    </div>
  );
}

export default Home;
