import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left side name */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Pias<span className="text-gray-900">.dev</span>
        </Link>

        {/* Right side links (desktop) */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/skills" className="hover:text-blue-600 transition">Skills</Link>
          <Link to="/projects" className="hover:text-blue-600 transition">Projects</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <Link to="/" onClick={toggleMenu} className="hover:text-blue-600 transition">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-blue-600 transition">About</Link>
            <Link to="/skills" onClick={toggleMenu} className="hover:text-blue-600 transition">Skills</Link>
            <Link to="/projects" onClick={toggleMenu} className="hover:text-blue-600 transition">Projects</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-blue-600 transition">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
