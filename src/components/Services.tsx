
import { Home, Hammer, Shield, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "New Homes",
    subtitle: "Experience",
    description: "Engelland Construction will help you start from scratch. Building from the ground up may seem intimidating, but with the help from our whole team, the process will flow easily. We can help you find building ground, create custom floor plans, and build the home of your dreams.",
    features: ["Custom Floor Plans", "Site Selection", "Ground-up Construction", "Dream Home Design"]
  },
  {
    icon: Hammer,
    title: "Cabinets & Flooring",
    subtitle: "Quality",
    description: "Engelland Construction provides premium cabinetry that is locally and custom built. Our installation process is carefully executed by mindfully creating drafted plans and skilled employees who install them. We also offer custom shelving for pantries and closets, that each customer can help design.",
    features: ["Custom Cabinetry", "Premium Flooring", "Luxury Vinyl & Tile", "Hardwood & Carpet"]
  },
  {
    icon: Shield,
    title: "Siding & Windows",
    subtitle: "Trusted",
    description: "Engelland Construction's crew provides ultimate service for all exterior needs. We will give you with the best options that will withstand the Kansas weather. Our professionals are knowledgeable of what options of products will work best to fit your needs.",
    features: ["Weather-Resistant Siding", "Energy-Efficient Windows", "Exterior Solutions", "Kansas Weather Ready"]
  },
  {
    icon: CheckCircle,
    title: "Insurance Claims",
    subtitle: "Accuracy",
    description: "When disaster strikes, Engelland Construction is there for you. We pride ourselves in working closely with your insurance agent and making sure you get your needs met. We specialize in wind, hail, fire, water, and earthquake damage.",
    features: ["Wind & Hail Damage", "Fire & Water Damage", "Insurance Coordination", "Quick Response"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#041f99]">Services</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-[#041f99] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From custom homes to remodeling projects, we deliver exceptional craftsmanship with attention to detail.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#041f99]/20"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                      <div className="bg-[#041f99]/10 rounded-xl p-3 sm:p-4 mb-3 sm:mb-0 sm:mr-4 group-hover:bg-[#041f99] transition-all duration-300">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-[#041f99] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="text-center sm:text-left">
                        <div className="text-sm font-semibold text-[#041f99] uppercase tracking-wide">
                          {service.subtitle}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#041f99] mr-2 flex-shrink-0" />
                          <span className="text-gray-600 text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="h-2 bg-gradient-to-r from-[#041f99] to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
