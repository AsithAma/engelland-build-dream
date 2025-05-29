
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Modern Custom Home",
    category: "New Construction",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Beautiful custom home with modern amenities"
  },
  {
    id: 2,
    title: "Kitchen Remodel",
    category: "Remodeling",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Complete kitchen renovation with premium finishes"
  },
  {
    id: 3,
    title: "Bathroom Addition",
    category: "Addition",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Luxury bathroom addition with accessible features"
  },
  {
    id: 4,
    title: "Exterior Siding",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Weather-resistant siding installation"
  },
  {
    id: 5,
    title: "Custom Cabinetry",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted custom cabinets and storage solutions"
  },
  {
    id: 6,
    title: "Home Addition",
    category: "Addition",
    image: "https://images.unsplash.com/photo-1597047084897-51e81819e8d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Seamless home addition with wheelchair accessibility"
  }
];

const categories = ["All", "New Construction", "Remodeling", "Addition", "Exterior", "Interior"];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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

          {/* Modal for project details would go here */}
          {selectedProject && (
            <div 
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Project Details</h3>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-gray-600">
                    Detailed project information would be displayed here with additional images and specifications.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
