
import { useEffect, useRef } from "react";
import { Settings, Briefcase, ChartBar } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    const services = document.querySelectorAll('.service-card-animate');
    services.forEach((service) => {
      observer.observe(service);
    });

    return () => {
      services.forEach((service) => {
        observer.unobserve(service);
      });
    };
  }, []);

  return (
    <section className="py-20 bg-light-gray" ref={servicesRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Core Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We help organizations transform and grow through strategic consulting services
            tailored to your unique challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Strategy Card */}
          <div className="service-card service-card-animate scroll-reveal">
            <div className="bg-navy text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Briefcase size={24} />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-3">Strategy</h3>
            <p className="text-gray-700 mb-6">
              Develop forward-thinking strategies to position your organization for sustained success in evolving markets.
            </p>
            <Link 
              to="/services#strategy" 
              className="inline-flex items-center text-teal font-medium hover-underline"
            >
              Learn More
            </Link>
          </div>

          {/* Operations Card */}
          <div className="service-card service-card-animate scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-navy text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Settings size={24} />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-3">Operations</h3>
            <p className="text-gray-700 mb-6">
              Optimize your operational framework for maximum efficiency, scalability, and competitive advantage.
            </p>
            <Link 
              to="/services#operations" 
              className="inline-flex items-center text-teal font-medium hover-underline"
            >
              Learn More
            </Link>
          </div>

          {/* Digital Transformation Card */}
          <div className="service-card service-card-animate scroll-reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="bg-navy text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <ChartBar size={24} />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-3">Digital Transformation</h3>
            <p className="text-gray-700 mb-6">
              Harness emerging technologies to drive innovation, enhance customer experiences, and future-proof your business.
            </p>
            <Link 
              to="/services#digital" 
              className="inline-flex items-center text-teal font-medium hover-underline"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
