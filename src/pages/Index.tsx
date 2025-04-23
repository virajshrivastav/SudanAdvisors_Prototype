
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import ClientCarousel from "@/components/home/ClientCarousel";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Initialize scroll reveal
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <Hero />
      <Services />
      <ClientCarousel />
      
      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Partner with BrightPath Advisors to navigate complex challenges and unlock your organization's full potential.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-teal text-navy font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-all"
          >
            Start Your Journey
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
