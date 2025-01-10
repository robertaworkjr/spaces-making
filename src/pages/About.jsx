function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Hugging Face Spaces</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Discover AI Apps</h3>
          <p className="text-gray-600 mb-4">Explore a wide range of AI-powered applications created by the community.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">Machine Learning</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Natural Language Processing</span>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">Computer Vision</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">No-Code Creation</h3>
          <p className="text-gray-600 mb-4">Build and deploy your own AI apps without writing a single line of code.</p>
          <div className="bg-purple-100 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">How it works:</h4>
            <ol className="list-decimal list-inside text-purple-700">
              <li>Choose a pre-trained model</li>
              <li>Customize inputs and outputs</li>
              <li>Deploy with one click</li>
            </ol>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Community Engagement</h3>
          <p className="text-gray-600 mb-4">Connect with AI enthusiasts, share your creations, and learn from others.</p>
          <div className="border-t border-b border-gray-200 py-4 my-4">
            <h4 className="font-semibold mb-2">Community Stats:</h4>
            <div className="flex justify-between">
              <span>Users: 100k+</span>
              <span>Spaces: 50k+</span>
              <span>Models: 10k+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
