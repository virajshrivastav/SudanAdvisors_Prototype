
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MessageSquare, User } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Contact Hero */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Ready to transform your business? Get in touch with our consultants for a personalized strategy.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-teal bg-opacity-20 p-3 rounded-full mr-4">
                    <Mail size={24} className="text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-1">Email</h3>
                    <p className="text-gray-700 mb-2">For general inquiries:</p>
                    <a href="mailto:info@brightpath.com" className="text-teal hover-underline">
                      info@brightpath.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal bg-opacity-20 p-3 rounded-full mr-4">
                    <Phone size={24} className="text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-1">Phone</h3>
                    <p className="text-gray-700 mb-2">Monday to Friday, 9am to 6pm:</p>
                    <a href="tel:+15551234567" className="text-teal hover-underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal bg-opacity-20 p-3 rounded-full mr-4">
                    <MessageSquare size={24} className="text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-1">Live Chat</h3>
                    <p className="text-gray-700 mb-2">Available on weekdays:</p>
                    <button className="text-teal hover-underline">
                      Start a conversation
                    </button>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal bg-opacity-20 p-3 rounded-full mr-4">
                    <User size={24} className="text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-1">Schedule a Meeting</h3>
                    <p className="text-gray-700 mb-2">Book a consultation:</p>
                    <a href="#" className="text-teal hover-underline">
                      View availability
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold text-navy mb-4">Office Locations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">New York</h4>
                    <p className="text-gray-700">
                      123 Business Ave, <br />
                      New York, NY 10001
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">San Francisco</h4>
                    <p className="text-gray-700">
                      456 Tech Boulevard, <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="bg-gray-300 w-full h-80 rounded-lg">
            {/* Google Maps would be implemented here in a real project */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-600">Interactive map would be embedded here</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
