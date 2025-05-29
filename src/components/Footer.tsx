
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-[#041f99] mb-4">
                Engelland Construction
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your construction solution since 2006. We provide great craftsmanship, quality products and sensible prices for all your construction needs in Central Kansas.
              </p>
              <p className="text-gray-400 text-sm">
                Licensed • Insured • Experienced
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "Home", id: "home" },
                  { name: "About", id: "about" },
                  { name: "Services", id: "services" },
                  { name: "Projects", id: "projects" },
                  { name: "Contact", id: "contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.id);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-gray-300 hover:text-[#041f99] transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>New Home Construction</li>
                <li>Remodeling & Additions</li>
                <li>Cabinets & Flooring</li>
                <li>Siding & Windows</li>
                <li>Insurance Claims</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {currentYear} Engelland Construction. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
