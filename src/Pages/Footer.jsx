import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">Shijan Piyesh</h2>
          <p className="text-gray-400 text-sm">
            Web Developer • MERN Stack • Passionate Coder
          </p>
        </div>

        {/* Middle Section (Quick Links) */}
        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/about" className="hover:text-blue-400 transition">About</a>
          <a href="/skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="/projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Right Section (Social Links) */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/Shijan-Pias"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shijan-pias-222b39315/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shijanpiyesh@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Shijan Piyesh — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
