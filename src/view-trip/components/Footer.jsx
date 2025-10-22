import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
          <a href="/" className="text-gray-300 hover:text-orange-500 transition-colors">Home</a>
          <Link to="/create-trip" className="text-gray-300 hover:text-orange-500 transition-colors">Create Trip</Link>
          <Link to="/my-trips" className="text-gray-300 hover:text-orange-500 transition-colors">My Trips</Link>
        </div>
        
        <div className="border-t border-gray-600 pt-6">
          <p className="text-gray-400 text-sm mb-2">
            © {new Date().getFullYear()} AI Trip Planner. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Made with ❤️ by Rishabh
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
