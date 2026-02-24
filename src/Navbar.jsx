import { Menu, X, Github, Linkedin, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "experience", label: "Experience" },
  { href: "testimonials", label: "Testimonials" },
];

const socialLinks = [
  { href: "https://github.com/Shijan-Pias", icon: <Github size={20} />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/shijan-pias/", icon: <Linkedin size={20} />, label: "LinkedIn" },
  { href: "https://www.instagram.com/pias._sp10?igsh=cDlkMzJ4NTU1b2tt", icon: <Instagram size={20} />, label: "Instagram" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          SP<span className="text-primary">.</span>
        </a>

        {/* Desktop Middle Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={`#${link.href}`}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Social Links */}
        <div className="hidden md:flex items-center gap-5">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in border-t border-muted/10">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  href={`#${link.href}`}
                  key={index}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground py-2 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center gap-6 pt-4 mt-2 border-t border-muted/20">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};