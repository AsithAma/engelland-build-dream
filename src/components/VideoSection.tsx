import { useEffect } from "react";

export const VideoSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#041f99]">Process</span>
            </h2>
            <div className="w-24 h-1 bg-[#041f99] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we bring your vision to life with quality craftsmanship and attention to detail.
            </p>
          </div>
          
          <div style={{padding:"56.25% 0 0 0", position:"relative", borderRadius:"1rem", overflow:"hidden"}}>
            <iframe 
              src="https://player.vimeo.com/video/402983207?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
              style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} 
              title="Engelland HomeBuild">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}; 