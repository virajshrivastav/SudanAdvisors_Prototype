
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { ArrowRight, ChartBar, FileText } from "lucide-react";
import { Link } from "react-router-dom";

// Types
type Testimonial = {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
};

type Stat = {
  id: number;
  value: string;
  label: string;
  icon: React.ElementType;
};

type CaseStudy = {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  testimonials: Testimonial[];
  stats: Stat[];
};

const CaseStudies = () => {
  const [activeStudy, setActiveStudy] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  // Sample case studies data
  const caseStudies: CaseStudy[] = [
    {
      id: "global-tech",
      title: "Digital Transformation for Global Tech Manufacturer",
      client: "TechCorp Industries",
      industry: "Manufacturing",
      challenge: "Facing increasing competition and eroding margins, TechCorp needed to modernize their operations and create new digital revenue streams.",
      solution: "Implemented an end-to-end digital transformation strategy including IoT sensors, predictive maintenance systems, and a new digital services platform.",
      result: "Increased operational efficiency, reduced downtime by 40%, and created a new SaaS offering that now generates 15% of total revenue.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      testimonials: [
        {
          id: 1,
          quote: "BrightPath helped us reinvent our business model for the digital age. Their strategic guidance and hands-on implementation support were invaluable.",
          author: "Sarah Johnson",
          position: "CTO",
          company: "TechCorp Industries"
        },
        {
          id: 2,
          quote: "The team at BrightPath exceeded our expectations. They quickly understood our complex challenges and delivered solutions that transformed our business.",
          author: "Michael Chen",
          position: "CEO",
          company: "TechCorp Industries"
        }
      ],
      stats: [
        { id: 1, value: "+40%", label: "Efficiency Gain", icon: ChartBar },
        { id: 2, value: "3", label: "Month Implementation", icon: FileText },
        { id: 3, value: "15%", label: "New Revenue Streams", icon: ChartBar },
      ]
    },
    {
      id: "financial-services",
      title: "Strategic Repositioning for Financial Services Firm",
      client: "Capital Partners LLC",
      industry: "Financial Services",
      challenge: "Declining market share due to outdated service offerings and emerging fintech competitors targeting their core customer base.",
      solution: "Comprehensive market analysis, customer segmentation, and development of new service offerings with supporting technology platforms.",
      result: "Recaptured 12% market share within 18 months and increased customer satisfaction scores by 30%.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
      testimonials: [
        {
          id: 1,
          quote: "BrightPath's strategic insights helped us identify new market opportunities and reimagine our service offering. The results speak for themselves.",
          author: "David Wilson",
          position: "Managing Director",
          company: "Capital Partners LLC"
        },
        {
          id: 2,
          quote: "Working with BrightPath transformed how we approach our business. They brought clarity to complex challenges and pragmatic solutions.",
          author: "Jennifer Roberts",
          position: "Head of Strategy",
          company: "Capital Partners LLC"
        }
      ],
      stats: [
        { id: 1, value: "+12%", label: "Market Share Recovery", icon: ChartBar },
        { id: 2, value: "18", label: "Months to Results", icon: FileText },
        { id: 3, value: "+30%", label: "Customer Satisfaction", icon: ChartBar },
      ]
    }
  ];

  // Function to handle case study switching
  const handleCaseStudyChange = (index: number) => {
    if (index === activeStudy) return;
    setIsFlipping(true);
    setTimeout(() => {
      setActiveStudy(index);
      setActiveTestimonial(0);
      setIsFlipping(false);
    }, 250);
  };

  // Current case study
  const currentStudy = caseStudies[activeStudy];

  // Function to change testimonial
  const changeTestimonial = (direction: 'next' | 'prev') => {
    const total = currentStudy.testimonials.length;
    if (direction === 'next') {
      setActiveTestimonial((activeTestimonial + 1) % total);
    } else {
      setActiveTestimonial((activeTestimonial - 1 + total) % total);
    }
  };

  return (
    <Layout>
      {/* Case Studies Hero */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Real-world success stories showcasing how we help clients overcome challenges and achieve remarkable results.
          </p>
        </div>
      </section>

      {/* Case Study Navigation */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => handleCaseStudyChange(index)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeStudy === index 
                    ? "bg-navy text-white" 
                    : "bg-white text-navy hover:bg-gray-200"
                }`}
              >
                {study.client}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-250 ${isFlipping ? 'animate-paper-flip' : ''}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img
                  src={currentStudy.image}
                  alt={currentStudy.client}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <span className="text-teal font-medium">{currentStudy.industry}</span>
                <h2 className="text-3xl font-bold text-navy mt-2 mb-4">{currentStudy.title}</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-bold text-navy mb-1">Challenge</h3>
                    <p>{currentStudy.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Solution</h3>
                    <p>{currentStudy.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Result</h3>
                    <p>{currentStudy.result}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Slider */}
            <div className="bg-gray-100 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-navy mb-6 text-center">Client Testimonial</h3>
              
              <div className="max-w-3xl mx-auto">
                <div className="relative min-h-[200px]">
                  {currentStudy.testimonials.map((testimonial, index) => (
                    <div 
                      key={testimonial.id}
                      className={`absolute w-full transition-all duration-500 ${
                        index === activeTestimonial 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-full'
                      }`}
                    >
                      <blockquote className="text-xl text-gray-700 italic text-center mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="text-center">
                        <p className="font-bold text-navy">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial Navigation */}
                {currentStudy.testimonials.length > 1 && (
                  <div className="flex justify-center mt-6 space-x-4">
                    <button 
                      onClick={() => changeTestimonial('prev')}
                      className="px-4 py-2 bg-navy text-white rounded-md hover:bg-opacity-90"
                    >
                      Previous
                    </button>
                    <button 
                      onClick={() => changeTestimonial('next')}
                      className="px-4 py-2 bg-navy text-white rounded-md hover:bg-opacity-90"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentStudy.stats.map(stat => (
                <div key={stat.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="inline-flex items-center justify-center bg-teal bg-opacity-20 p-3 rounded-full mb-4">
                    <stat.icon size={24} className="text-navy" />
                  </div>
                  <h3 className="text-3xl font-bold text-navy mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="mb-6 space-x-4">
                <a 
                  href="#" 
                  className="inline-flex items-center bg-navy text-white font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-all"
                >
                  <FileText className="mr-2" size={20} />
                  Download Full Case Study
                </a>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center text-teal hover-underline font-medium"
              >
                Discuss your project with us
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
