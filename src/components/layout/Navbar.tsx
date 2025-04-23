import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className={`font-display text-2xl font-bold ${isScrolled || mobileMenuOpen ? "text-navy" : "text-white"}`}>
            Sudan
          </span>
          <span className={`font-display text-2xl ${isScrolled || mobileMenuOpen ? "text-teal" : "text-white"}`}>
            Advisors
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className={`hover-underline ${isScrolled ? "text-navy" : "text-white"}`}>Home</Link>
          <Link to="/services" className={`hover-underline ${isScrolled ? "text-navy" : "text-white"}`}>Services</Link>
          <Link to="/case-studies" className={`hover-underline ${isScrolled ? "text-navy" : "text-white"}`}>Case Studies</Link>
          <Link to="/contact" className={`hover-underline ${isScrolled ? "text-navy" : "text-white"}`}>Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-lg">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className="block text-navy hover:text-teal"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="block text-navy hover:text-teal"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/case-studies" 
                className="block text-navy hover:text-teal"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block text-navy hover:text-teal"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
