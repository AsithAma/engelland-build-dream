
export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Who <span className="text-[#041f99]">We Are</span>
            </h2>
            <div className="w-24 h-1 bg-[#041f99] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2006, Engelland Construction has been providing customers in the Central Kansas area with exceptional custom homes and remodels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Experience & Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Owner, Matt Engelland, received his Associates Degree in Construction Science at Flint Hills Technical College and carries a Class A contractor's license as well. Engelland Construction is an overall versatile company, that is willing to work with our customer's ideas and budgets.
              </p>
              
              <h4 className="text-2xl font-semibold text-[#041f99] mt-8 mb-4">
                What Sets Us Apart
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We specialize in custom homes, house additions, kitchen and bathroom remodels, insurance claims, all exterior home needs, and even commercial projects. When you choose Engelland Construction, you'll work with our entire team, from our estimators to our design team; we are with you every step of the way.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Our customers are our top priority! Engelland Construction prides their work through skillful carpentry, quality materials, personable customer service and knowledgeable experience and craftsmanship.
              </p>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Construction team at work"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041f99]/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border-l-4 border-[#041f99]">
                <div className="text-3xl font-bold text-[#041f99]">18+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 border-l-4 border-[#041f99]">
                <div className="text-3xl font-bold text-[#041f99]">500+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
