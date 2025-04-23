
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" 
        }}
      >
        <div className="absolute inset-0 bg-navy bg-opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Guiding Your Growth
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
            Partner with BrightPath Advisors to navigate complex business challenges and unlock your organization's full potential.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-teal text-navy font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-all"
          >
            Get in Touch
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
