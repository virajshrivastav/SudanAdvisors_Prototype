
import { useEffect, useRef, useState } from "react";

// Mock client data
const clients = [
  { id: 1, name: "Acme Corp", logo: "https://placehold.co/200x80/eee/999?text=ACME" },
  { id: 2, name: "Global Tech", logo: "https://placehold.co/200x80/eee/999?text=GLOBALTECH" },
  { id: 3, name: "Innovate Inc", logo: "https://placehold.co/200x80/eee/999?text=INNOVATE" },
  { id: 4, name: "Future Systems", logo: "https://placehold.co/200x80/eee/999?text=FUTURE" },
  { id: 5, name: "Nexus Partners", logo: "https://placehold.co/200x80/eee/999?text=NEXUS" },
  { id: 6, name: "Strategic Solutions", logo: "https://placehold.co/200x80/eee/999?text=STRATEGIC" },
  { id: 7, name: "Elite Enterprises", logo: "https://placehold.co/200x80/eee/999?text=ELITE" },
  { id: 8, name: "Vision Corp", logo: "https://placehold.co/200x80/eee/999?text=VISION" },
];

const ClientCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let startTime: number | null = null;
    
    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      if (!isPaused && carouselRef.current) {
        const elapsed = timestamp - startTime;
        carouselRef.current.scrollLeft += 0.5; // Adjust speed here
        
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }
      }
      
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Double the clients to create infinite scroll effect
  const allClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-12">Trusted by Industry Leaders</h2>
        
        <div 
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div 
            ref={carouselRef}
            className="flex space-x-12 py-4"
            style={{ width: `${allClients.length * 200}px` }}
          >
            {allClients.map((client, index) => (
              <div 
                key={`${client.id}-${index}`}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
