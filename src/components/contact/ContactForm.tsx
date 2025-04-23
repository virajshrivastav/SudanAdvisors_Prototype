
import { useState, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  company: string;
  size: string;
  needs: string;
  message: string;
};

type FormStep = 1 | 2 | 3 | 4;

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  company: "",
  size: "",
  needs: "",
  message: "",
};

const ContactForm = () => {
  const [formStep, setFormStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const { toast } = useToast();

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const nextStep = () => {
    // Validate current step
    if (formStep === 1 && (!formData.name || !formData.email)) {
      toast({
        title: "Required Fields",
        description: "Please enter your name and email to continue.",
        variant: "destructive",
      });
      return;
    }

    if (formStep === 2 && !formData.company) {
      toast({
        title: "Required Field",
        description: "Please enter your company name to continue.",
        variant: "destructive",
      });
      return;
    }

    if (formStep === 3 && !formData.needs) {
      toast({
        title: "Required Field",
        description: "Please select your primary need to continue.",
        variant: "destructive",
      });
      return;
    }

    const nextFormStep = (formStep + 1) as FormStep;
    if (nextFormStep <= 4) {
      setFormStep(nextFormStep);
    }
  };

  const prevStep = () => {
    const prevFormStep = (formStep - 1) as FormStep;
    if (prevFormStep >= 1) {
      setFormStep(prevFormStep);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success
      setIsCompleted(true);
      toast({
        title: "Form Submitted Successfully!",
        description: "Thank you for reaching out. We'll be in touch soon.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isCompleted) {
    return (
      <div className="text-center py-12 px-6 bg-white rounded-lg shadow-lg">
        <div className="mb-6 inline-flex items-center justify-center bg-teal bg-opacity-20 p-4 rounded-full">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-teal" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-navy mb-2">Thanks, {formData.name}!</h3>
        <p className="text-lg mb-6 text-gray-700">We'll be in touch with you shortly.</p>
        <button
          onClick={() => {
            setFormData(INITIAL_DATA);
            setFormStep(1);
            setIsCompleted(false);
          }}
          className="px-6 py-3 bg-navy text-white rounded-md hover:bg-opacity-90 transition-all"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <form onSubmit={handleSubmit}>
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map(step => (
              <div 
                key={step} 
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  formStep >= step ? 'bg-teal text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="relative h-2 bg-gray-200 rounded-full">
            <div 
              className="absolute top-0 left-0 h-full bg-teal rounded-full transition-all duration-300" 
              style={{ width: `${(formStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Personal Info */}
        <div className={formStep === 1 ? 'block' : 'hidden'}>
          <h2 className="text-2xl font-bold text-navy mb-6">Tell us about yourself</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal focus:border-transparent"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
        </div>

        {/* Step 2: Company Info */}
        <div className={formStep === 2 ? 'block' : 'hidden'}>
          <h2 className="text-2xl font-bold text-navy mb-6">About your company</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name*
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => updateFormData("company", e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal focus:border-transparent"
                placeholder="Your company name"
                required
              />
            </div>
            <div>
              <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                Company Size
              </label>
              <select
                id="size"
                value={formData.size}
                onChange={(e) => updateFormData("size", e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal focus:border-transparent"
              >
                <option value="">Select company size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="501+">501+ employees</option>
              </select>
            </div>
          </div>
        </div>

        {/* Step 3: Needs */}
        <div className={formStep === 3 ? 'block' : 'hidden'}>
          <h2 className="text-2xl font-bold text-navy mb-6">Your consulting needs</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="needs" className="block text-sm font-medium text-gray-700 mb-2">
                What's your primary need?*
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["Strategy", "Operations", "Digital Transformation"].map(need => (
                  <div 
                    key={need}
                    onClick={() => updateFormData("needs", need)}
                    className={`
                      p-4 border rounded-md cursor-pointer transition-all
                      ${formData.needs === need 
                        ? 'border-teal ring-2 ring-teal bg-teal bg-opacity-5' 
                        : 'hover:border-gray-400'
                      }
                    `}
                  >
                    <div className="font-medium">{need}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Message */}
        <div className={formStep === 4 ? 'block' : 'hidden'}>
          <h2 className="text-2xl font-bold text-navy mb-6">Additional details</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                How can we help you?
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => updateFormData("message", e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal focus:border-transparent"
                placeholder="Tell us more about your project or inquiry..."
                rows={4}
              />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-between">
          {formStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 border border-navy text-navy rounded-md hover:bg-navy hover:bg-opacity-5 transition-all"
            >
              Back
            </button>
          )}
          
          {formStep < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="ml-auto px-6 py-2 bg-navy text-white rounded-md hover:bg-opacity-90 transition-all flex items-center"
            >
              Next Step <ArrowRight className="ml-2" size={16} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="ml-auto px-6 py-2 bg-teal text-navy font-medium rounded-md hover:bg-opacity-90 transition-all flex items-center"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
              {!isSubmitting && <ArrowRight className="ml-2" size={16} />}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
