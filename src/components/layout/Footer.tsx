import { Link } from "react-router-dom";
import { Mail, Phone, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-display text-xl font-bold text-white">Sudan</span>
              <span className="font-display text-xl text-teal">Advisors</span>
            </div>
            <p className="text-sm text-gray-300">
              Guiding businesses through strategic transformation with tailored solutions and actionable insights.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-teal transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-teal transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="hover:text-teal transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-teal transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#strategy" className="hover:text-teal transition-colors">Strategy</Link></li>
              <li><Link to="/services#operations" className="hover:text-teal transition-colors">Operations</Link></li>
              <li><Link to="/services#digital" className="hover:text-teal transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} /> <span>info@brightpath.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} /> <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageSquare size={16} /> <span>Live Chat</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 BrightPath Advisors. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-teal transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-teal transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-teal transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
