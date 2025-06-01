import { useState } from "react";

// Import all images from assets folder
import kitchenImage1 from "../assets/Kitchen 1.jpg";
import kitchenImage2 from "../assets/Kitchen 2.jpg";
import kitchenImage3 from "../assets/Kitchen 3.png";
import houseImage1 from "../assets/House 1.jpg";
import houseImage2 from "../assets/House 2.jpg";
import backyardImage from "../assets/Backyard 1.jpg";
import beforeAfter1 from "../assets/Before-After-1.png";
import beforeAfter2 from "../assets/Before-After-2-1.png";
import beforeAfterSmall1 from "../assets/before-and-after-01.jpg";
import beforeAfterSmall2 from "../assets/before-and-after-02.jpg";
import ramp from "../assets/Ramp-scaled.jpg";
import laundryCloset from "../assets/Laundry-clst-scaled.jpg";
import langvardtRamp from "../assets/Langvardt-Ramp-scaled.jpg";
import extToAddon from "../assets/Ext.-to-addon-scaled.jpg";
import closet from "../assets/Clst-scaled.jpg";
import bedroom from "../assets/Bedrm-scaled.jpg";
import bedToRamp from "../assets/Bed-to-ramp-scaled.jpg";
import bedToMainHouse from "../assets/Bed-to-Main-house-scaled.jpg";
import bedToBath from "../assets/Bed-to-bath-scaled.jpg";
import adaSinkPot2 from "../assets/ADA-sink-pot2-scaled.jpg";
import adaSinkPot from "../assets/ADA-sink-pot-scaled.jpg";
import adaShower from "../assets/ADA-shower-scaled.jpg";
import adaShower2 from "../assets/ADA-shower-2-scaled.jpg";
import adaBath from "../assets/ADA-bath-scaled.jpg";
import refurbishedFloor from "../assets/Refurbished-floor-scaled.jpg";
import windowsHQ from "../assets/Windows-HQ-scaled.jpg";

const galleryImages = [
  { src: kitchenImage1, alt: "Modern kitchen with custom cabinetry" },
  { src: houseImage1, alt: "Custom-built family home exterior" },
  { src: kitchenImage2, alt: "Elegant kitchen remodel with island" },
  { src: beforeAfter1, alt: "Before and after home transformation" },
  { src: houseImage2, alt: "Custom home exterior with landscape" },
  { src: kitchenImage3, alt: "Kitchen renovation with premium finishes" },
  { src: backyardImage, alt: "Backyard design with outdoor living space" },
  { src: beforeAfter2, alt: "Before and after remodeling project" },
  { src: beforeAfterSmall1, alt: "Before and after comparison" },
  { src: beforeAfterSmall2, alt: "Home renovation before and after" },
  { src: ramp, alt: "Accessibility ramp installation" },
  { src: laundryCloset, alt: "Custom laundry closet design" },
  { src: langvardtRamp, alt: "Langvardt accessibility ramp" },
  { src: extToAddon, alt: "Exterior to addition transition" },
  { src: closet, alt: "Custom closet organization system" },
  { src: bedroom, alt: "Bedroom renovation" },
  { src: bedToRamp, alt: "Bedroom to ramp accessibility" },
  { src: bedToMainHouse, alt: "Bedroom connection to main house" },
  { src: bedToBath, alt: "Bedroom to bathroom remodel" },
  { src: adaSinkPot2, alt: "ADA compliant sink installation" },
  { src: adaSinkPot, alt: "Accessible sink features" },
  { src: adaShower, alt: "ADA compliant shower" },
  { src: adaShower2, alt: "Accessible shower design" },
  { src: adaBath, alt: "ADA bathroom renovation" },
  { src: refurbishedFloor, alt: "Refurbished hardwood flooring" },
  { src: windowsHQ, alt: "High-quality window installation" },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;

  // Calculate the current page's images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const openModal = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextPage = () => {
    setCurrentPage(current => Math.min(current + 1, totalPages));
    window.scrollTo({ top: document.getElementById('gallery')?.offsetTop || 0, behavior: 'smooth' });
  };

  const prevPage = () => {
    setCurrentPage(current => Math.max(current - 1, 1));
    window.scrollTo({ top: document.getElementById('gallery')?.offsetTop || 0, behavior: 'smooth' });
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: document.getElementById('gallery')?.offsetTop || 0, behavior: 'smooth' });
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#041f99]">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-[#041f99] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of custom homes, remodeling projects, and transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentImages.map((image, index) => (
              <div 
                key={indexOfFirstImage + index} 
                className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full bg-gradient-to-t from-black to-transparent">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#041f99] text-white hover:bg-blue-700'} transition-colors duration-300`}
            >
              Previous
            </button>
            
            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                <button
                  key={pageNumber}
                  onClick={() => goToPage(pageNumber)}
                  className={`w-10 h-10 rounded-full ${currentPage === pageNumber ? 'bg-[#041f99] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} flex items-center justify-center transition-colors duration-300`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
            
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#041f99] text-white hover:bg-blue-700'} transition-colors duration-300`}
            >
              Next
            </button>
          </div>
          
          <div className="text-center mt-4 text-gray-500">
            Page {currentPage} of {totalPages} ({galleryImages.length} images)
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="w-full object-contain max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}; 