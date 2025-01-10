import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-purple-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">HF Spaces</Link>
        <div className="space-x-4">
          <Link to="/spaces" className="hover:text-purple-200 transition duration-300">Spaces</Link>
          <Link to="/about" className="hover:text-purple-200 transition duration-300">About</Link>
          <Link to="/signup" className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-purple-100 transition duration-300">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
