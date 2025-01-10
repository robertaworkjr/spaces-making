function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Hugging Face Spaces</h3>
            <p>Empowering the AI community to build, share, and discover amazing applications.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-300">Home</a></li>
              <li><a href="#" className="hover:text-purple-300">Spaces</a></li>
              <li><a href="#" className="hover:text-purple-300">About</a></li>
              <li><a href="#" className="hover:text-purple-300">Sign Up</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-300">Twitter</a></li>
              <li><a href="#" className="hover:text-purple-300">GitHub</a></li>
              <li><a href="#" className="hover:text-purple-300">Discord</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 Hugging Face Spaces. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
