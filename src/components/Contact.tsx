
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact <span className="text-[#041f99]">Us Today</span>
            </h2>
            <div className="w-24 h-1 bg-[#041f99] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engelland Construction would love to have you reach out with any questions you might have or want to schedule an appointment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#041f99] focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#041f99] focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#041f99] focus:border-transparent transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#041f99] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="new-home">New Home Construction</option>
                      <option value="remodeling">Remodeling</option>
                      <option value="addition">Home Addition</option>
                      <option value="cabinets">Cabinets & Flooring</option>
                      <option value="exterior">Siding & Windows</option>
                      <option value="insurance">Insurance Claims</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Project Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#041f99] focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-[#041f99] hover:bg-[#041f99]/90 text-white py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Free Quote
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Or email us directly at{" "}
                  <a
                    href="mailto:office.engellandconstruction@gmail.com"
                    className="text-[#041f99] hover:underline font-medium"
                  >
                    office.engellandconstruction@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#041f99]/10 rounded-lg p-3 mr-4">
                    <MapPin className="w-6 h-6 text-[#041f99]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      615 N. Main St.<br />
                      Hutchinson, KS, United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#041f99]/10 rounded-lg p-3 mr-4">
                    <Phone className="w-6 h-6 text-[#041f99]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">(620) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#041f99]/10 rounded-lg p-3 mr-4">
                    <Mail className="w-6 h-6 text-[#041f99]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">office.engellandconstruction@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#041f99]/10 rounded-lg p-3 mr-4">
                    <Clock className="w-6 h-6 text-[#041f99]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps - Full Width */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.7267985966554!2d-97.92944268464934!3d38.061023379701234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87a689d12ca2c775%3A0xd4b1ed67b7a8e2a8!2s615%20N%20Main%20St%2C%20Hutchinson%2C%20KS%2067501!5e0!3m2!1sen!2sus!4v1635789456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
