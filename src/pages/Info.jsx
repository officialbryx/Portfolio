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
      {/* Divider */}
      <div className="w-full flex justify-center my-12">
        <div className="w-full max-w-4xl border-t border-gray-300"></div>
      </div>
      {/* Education Section */}
      <div className="max-w-6xl mx-auto px-6 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text */}
        <div>
          <div className="uppercase text-xs text-gray-400 tracking-widest mb-2">Education</div>
          <p className="text-gray-700 mb-4">Bachelor of Science in Computer Science, Example University, 2021-2025</p>
          <p className="text-gray-700 mb-4">Relevant coursework: Data Structures, Web Development, Machine Learning, Cloud Computing</p>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center">
          <img src="https://placehold.co/250x180?text=Education" alt="Education" className="rounded-xl opacity-70 shadow-lg object-cover w-full max-w-xs" />
        </div>
      </div>
      {/* Divider for Motivation */}
      <div className="w-full flex justify-center my-12">
        <div className="w-full max-w-4xl border-t border-gray-300"></div>
      </div>
      {/* Motivation Section */}
      <div className="max-w-6xl mx-auto px-6 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text */}
        <div>
          <div className="uppercase text-xs text-gray-400 tracking-widest mb-2">Motivation</div>
          <p className="text-gray-700 mb-4">I'm passionate about building technology that makes a difference. I love collaborating with creative people, learning new frameworks, and exploring the intersection of design and code.</p>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center">
          <img src="https://placehold.co/250x180?text=Motivation" alt="Motivation" className="rounded-xl opacity-70 shadow-lg object-cover w-full max-w-xs" />
        </div>
      </div>
      {/* Divider for Things I Love to Do */}
      <div className="w-full flex justify-center my-12">
        <div className="w-full max-w-4xl border-t border-gray-300"></div>
      </div>
      {/* Things I Love to Do Section */}
      <div className="max-w-6xl mx-auto px-6 mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text */}
        <div>
          <div className="uppercase text-xs text-gray-400 tracking-widest mb-2">Things I Love to Do</div>
          <ul className="list-disc list-inside">
            <li className="text-gray-700 mb-2">Exploring new programming languages</li>
            <li className="text-gray-700 mb-2">Designing user interfaces</li>
            <li className="text-gray-700 mb-2">Hiking and nature photography</li>
            <li className="text-gray-700 mb-2">Reading about AI and future tech</li>
            <li className="text-gray-700 mb-2">Volunteering for tech education</li>
          </ul>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center">
          <img src="https://placehold.co/250x180?text=Hobbies" alt="Things I Love to Do" className="rounded-xl opacity-70 shadow-lg object-cover w-full max-w-xs" />
        </div>
      </div>
    </div>
  );
}

export default Info;
