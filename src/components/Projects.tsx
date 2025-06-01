import { useState } from "react";
import { X, Calendar, MapPin, DollarSign, Clock, User, Phone, Mail } from "lucide-react";

// Import images
import modernHome from "../assets/House 1.jpg";
import kitchenRemodel from "../assets/Kitchen 1.jpg";
import bathroomAddition from "../assets/ADA-bath-scaled.jpg";
import exteriorSiding from "../assets/Windows-HQ-scaled.jpg";
import customCabinetry from "../assets/Kitchen 2.jpg";
import homeAddition from "../assets/Langvardt-Ramp-scaled.jpg";

// Additional gallery images
import kitchen2 from "../assets/Kitchen 2.jpg";
import kitchen3 from "../assets/Kitchen 3.png";
import bathroom2 from "../assets/ADA-shower-scaled.jpg";
import bathroom3 from "../assets/ADA-sink-pot-scaled.jpg";
import homeExt from "../assets/Ext.-to-addon-scaled.jpg";
import bedroom from "../assets/Bedrm-scaled.jpg";
import ramp from "../assets/Ramp-scaled.jpg";
import laundry from "../assets/Laundry-clst-scaled.jpg";
import backyard from "../assets/Backyard 1.jpg";
import house2 from "../assets/House 2.jpg";
import beforeAfter1 from "../assets/Before-After-1.png";
import beforeAfter2 from "../assets/Before-After-2-1.png";

const projects = [
  {
    id: 1,
    title: "Modern Custom Home",
    category: "New Construction",
    image: modernHome,
    description: "Beautiful custom home with modern amenities",
    details: {
      location: "Hutchinson, KS",
      size: "3,500 sq ft",
      bedrooms: 4,
      bathrooms: 3,
      duration: "8 months",
      completed: "March 2024",
      budget: "$450,000",
      client: "The Johnson Family",
      features: [
        "Open concept living space",
        "Gourmet kitchen with custom cabinetry",
        "Master suite with walk-in closet",
        "Covered outdoor living area",
        "Energy-efficient windows and insulation",
        "Smart home technology integration"
      ],
      gallery: [
        modernHome,
        house2,
        backyard
      ]
    }
  },
  {
    id: 2,
    title: "Kitchen Remodel",
    category: "Remodeling",
    image: kitchenRemodel,
    description: "Complete kitchen renovation with premium finishes",
    details: {
      location: "McPherson, KS",
      size: "400 sq ft",
      bedrooms: 0,
      bathrooms: 0,
      duration: "6 weeks",
      completed: "January 2024",
      budget: "$85,000",
      client: "Sarah Mitchell",
      features: [
        "Custom maple cabinetry",
        "Quartz countertops",
        "Stainless steel appliances",
        "Subway tile backsplash",
        "Pendant lighting over island",
        "Hardwood flooring"
      ],
      gallery: [
        kitchenRemodel,
        kitchen2,
        kitchen3
      ]
    }
  },
  {
    id: 3,
    title: "Bathroom Addition",
    category: "Addition",
    image: bathroomAddition,
    description: "Luxury bathroom addition with accessible features",
    details: {
      location: "Newton, KS",
      size: "120 sq ft",
      bedrooms: 0,
      bathrooms: 1,
      duration: "4 weeks",
      completed: "November 2023",
      budget: "$35,000",
      client: "Robert & Mary Davis",
      features: [
        "Walk-in shower with grab bars",
        "Comfort height toilet",
        "Vanity with storage",
        "Tile flooring with heated elements",
        "Exhaust fan with timer",
        "Accessible doorway"
      ],
      gallery: [
        bathroomAddition,
        bathroom2,
        bathroom3
      ]
    }
  },
  {
    id: 4,
    title: "Exterior Siding",
    category: "Exterior",
    image: exteriorSiding,
    description: "Weather-resistant siding installation",
    details: {
      location: "Salina, KS",
      size: "2,800 sq ft",
      bedrooms: 0,
      bathrooms: 0,
      duration: "3 weeks",
      completed: "October 2023",
      budget: "$28,000",
      client: "Thomas Anderson",
      features: [
        "Vinyl siding installation",
        "Insulation upgrade",
        "Trim work and fascia",
        "Gutters and downspouts",
        "Storm damage repair",
        "Color coordination consultation"
      ],
      gallery: [
        exteriorSiding,
        homeExt,
        backyard
      ]
    }
  },
  {
    id: 5,
    title: "Custom Cabinetry",
    category: "Interior",
    image: customCabinetry,
    description: "Handcrafted custom cabinets and storage solutions",
    details: {
      location: "Great Bend, KS",
      size: "Various rooms",
      bedrooms: 0,
      bathrooms: 0,
      duration: "5 weeks",
      completed: "February 2024",
      budget: "$45,000",
      client: "Jennifer Wilson",
      features: [
        "Custom kitchen cabinets",
        "Built-in entertainment center",
        "Closet organization systems",
        "Bathroom vanities",
        "Crown molding and trim",
        "Hardware selection and installation"
      ],
      gallery: [
        customCabinetry,
        kitchen3,
        beforeAfter1
      ]
    }
  },
  {
    id: 6,
    title: "Home Addition",
    category: "Addition",
    image: homeAddition,
    description: "Seamless home addition with wheelchair accessibility",
    details: {
      location: "Hutchinson, KS",
      size: "800 sq ft",
      bedrooms: 1,
      bathrooms: 1,
      duration: "10 weeks",
      completed: "December 2023",
      budget: "$120,000",
      client: "Jane Langvardt",
      features: [
        "Wheelchair accessible entrance",
        "Bedroom with accessible features",
        "Full bathroom with safety features",
        "Laundry room with front-load units",
        "Walk-in closet",
        "Ramp with handrails"
      ],
      gallery: [
        homeAddition,
        ramp,
        bedroom
      ]
    }
  }
];

const categories = ["All", "New Construction", "Remodeling", "Addition", "Exterior", "Interior"];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const currentProject = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#041f99]">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-[#041f99] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check out some of our recent projects and work! Each project showcases our commitment to quality and attention to detail.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#041f99] text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-[#041f99]/10 hover:text-[#041f99]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm font-semibold text-blue-200 mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
                
                <div className="absolute top-4 right-4 bg-[#041f99] text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Details
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Project Details Modal */}
          {selectedProject && currentProject && (
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <div 
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {currentProject.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="bg-[#041f99]/10 text-[#041f99] px-3 py-1 rounded-full font-medium">
                          {currentProject.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {currentProject.details.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {currentProject.details.completed}
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Image Gallery */}
                  <div className="mb-8">
                    <div className="aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
                      <img
                        src={currentProject.details.gallery[selectedImageIndex]}
                        alt={`${currentProject.title} - Image ${selectedImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex gap-3 justify-center">
                      {currentProject.details.gallery.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                            selectedImageIndex === index 
                              ? 'border-[#041f99] shadow-md' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <DollarSign className="w-8 h-8 text-[#041f99] mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{currentProject.details.budget}</div>
                      <div className="text-sm text-gray-600">Total Budget</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <Clock className="w-8 h-8 text-[#041f99] mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{currentProject.details.duration}</div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <MapPin className="w-8 h-8 text-[#041f99] mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{currentProject.details.size}</div>
                      <div className="text-sm text-gray-600">Size</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <User className="w-8 h-8 text-[#041f99] mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">{currentProject.details.client}</div>
                      <div className="text-sm text-gray-600">Client</div>
                    </div>
                  </div>

                  {/* Project Details Grid */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Project Description */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h4>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {currentProject.description}. This project showcases our commitment to quality craftsmanship and attention to detail, delivering exceptional results that exceed our clients' expectations.
                      </p>
                      
                      {/* Room Details */}
                      {(currentProject.details.bedrooms > 0 || currentProject.details.bathrooms > 0) && (
                        <div className="bg-[#041f99]/5 rounded-xl p-4">
                          <h5 className="font-semibold text-gray-900 mb-2">Room Configuration</h5>
                          <div className="flex gap-4 text-sm text-gray-600">
                            {currentProject.details.bedrooms > 0 && (
                              <span>{currentProject.details.bedrooms} Bedrooms</span>
                            )}
                            {currentProject.details.bathrooms > 0 && (
                              <span>{currentProject.details.bathrooms} Bathrooms</span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Features List */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {currentProject.details.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#041f99] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="bg-gradient-to-r from-[#041f99] to-blue-600 rounded-xl p-6 text-white text-center">
                    <h4 className="text-xl font-semibold mb-2">Interested in a Similar Project?</h4>
                    <p className="text-blue-100 mb-4">
                      Contact Engelland Construction today for a free consultation and quote.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a 
                        href="tel:+1234567890" 
                        className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Call Us
                      </a>
                      <a 
                        href="mailto:office.engellandconstruction@gmail.com" 
                        className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
