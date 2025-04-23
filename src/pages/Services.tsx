
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Briefcase, Settings, ChartBar, ArrowDown, ArrowUp } from "lucide-react";

// Service detail type
type Service = {
  id: string;
  title: string;
  icon: React.ElementType;
  shortDescription: string;
  fullDescription: string;
  image: string;
};

const Services = () => {
  // State to track which service descriptions are expanded
  const [expandedServices, setExpandedServices] = useState<string[]>([]);

  // Toggle service description expansion
  const toggleService = (serviceId: string) => {
    setExpandedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId) 
        : [...prev, serviceId]
    );
  };

  // Service data
  const services: Service[] = [
    {
      id: "strategy",
      title: "Strategy",
      icon: Briefcase,
      shortDescription: "Develop forward-thinking strategies to position your organization for sustained success in evolving markets.",
      fullDescription: `Our strategy consulting services help organizations chart a clear path forward in complex and competitive environments. 
      
      We combine deep industry knowledge with proven methodologies to create tailored strategies that drive growth, increase market share, and create sustainable competitive advantages.
      
      Our approach includes comprehensive market analysis, competitor benchmarking, capability assessment, and strategic roadmapping, all aligned with your organization's unique vision and goals.`,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: "operations",
      title: "Operations",
      icon: Settings,
      shortDescription: "Optimize your operational framework for maximum efficiency, scalability, and competitive advantage.",
      fullDescription: `Our operations consulting transforms how your business works from the inside out. We identify inefficiencies, streamline processes, and implement performance management systems that drive measurable results.
      
      From supply chain optimization and resource allocation to quality management and continuous improvement frameworks, we help you build operations that scale with your business.
      
      Our team brings expertise in lean methodologies, Six Sigma, agile practices, and other proven frameworks to enhance your operational excellence.`,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: "digital",
      title: "Digital Transformation",
      icon: ChartBar,
      shortDescription: "Harness emerging technologies to drive innovation, enhance customer experiences, and future-proof your business.",
      fullDescription: `Digital transformation is no longer optional in today's business landscape. Our digital transformation services help organizations leverage technology to reinvent business models, customer experiences, and operational processes.
      
      We guide clients through technology assessment, digital roadmap creation, and implementation of solutions across cloud computing, data analytics, artificial intelligence, automation, and customer-facing platforms.
      
      Our holistic approach ensures technology investments align with business objectives while building the capabilities and culture needed to sustain digital innovation.`,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  return (
    <Layout>
      {/* Services Hero */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Comprehensive consulting solutions designed to transform your business and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`${index > 0 ? 'mt-24' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image column - order changes based on index */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>

                {/* Content column */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-navy text-white p-2 rounded-full mr-4">
                      <service.icon size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-navy">{service.title}</h2>
                  </div>

                  <p className="text-lg text-gray-700 mb-6">{service.shortDescription}</p>
                  
                  <button 
                    onClick={() => toggleService(service.id)}
                    className="flex items-center text-teal font-medium hover:underline mb-4"
                  >
                    {expandedServices.includes(service.id) ? (
                      <>
                        <span>Show Less</span>
                        <ArrowUp size={16} className="ml-2" />
                      </>
                    ) : (
                      <>
                        <span>Learn More</span>
                        <ArrowDown size={16} className="ml-2" />
                      </>
                    )}
                  </button>

                  {expandedServices.includes(service.id) && (
                    <div className="mt-4 text-gray-700 space-y-4 animate-fade-in">
                      {service.fullDescription.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
