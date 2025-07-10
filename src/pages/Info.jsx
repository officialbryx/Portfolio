import React from "react";

function Info() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-6 py-20 items-start">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col items-start mb-12 md:mb-0">
          <h1 className="text-7xl md:text-8xl font-bold text-gray-700 leading-none mb-4">
            Bryan<br />Tiamzon
          </h1>
          <div className="text-3xl font-semibold text-gray-600 mb-1">ᜊ᜔ᜍ᜔ᜌᜈ᜔</div>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col items-start w-full">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8 w-full">
            <img src="https://placehold.co/200x200?text=Img+1" alt="Placeholder 1" className="rounded-xl opacity-70 shadow-lg object-cover w-full h-32 md:h-40" />
            <img src="https://placehold.co/200x200?text=Img+2" alt="Placeholder 2" className="rounded-xl opacity-70 shadow-lg object-cover w-full h-32 md:h-40" />
            <img src="https://placehold.co/200x200?text=Img+3" alt="Placeholder 3" className="rounded-xl opacity-70 shadow-lg object-cover w-full h-32 md:h-40" />
            <img src="https://placehold.co/200x200?text=Img+4" alt="Placeholder 4" className="rounded-xl opacity-70 shadow-lg object-cover w-full h-32 md:h-40" />
          </div>
          {/* Info Section */}
          <div className="w-full">
            <div className="uppercase text-xs text-gray-400 tracking-widest mb-2">Info</div>
            <p className="text-gray-700 mb-4">
              I’m an undergraduate student at the University of California, Berkeley studying Architecture and graduating in May 2024.
            </p>
            <p className="text-gray-700 mb-4">
              For a long time, I’ve been designing spaces that people can enjoy strolling around, always striving to curate an engaging human experience as they navigate the built environment. Throughout this journey, I’ve been curious about understanding human interaction to build more intuitive things — there are many complexities in human relationships with nature and architecture with so much still to explore.
            </p>
            <p className="text-gray-700">
              During my sophomore year, I decided to shift my career towards designing for people in computing spaces because of a desire to work at larger and faster scales. While computing and architecture slowly evolve, still, at the heart of these disciplines are what makes design valuable – it improves people’s lives holistically through emotion, functionality, and aesthetics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
