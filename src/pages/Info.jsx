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
          {/* Custom Staggered Images - User will adjust positions manually */}
          <div className="relative w-full h-72 md:h-96 mb-8">
            <img
              src="/unnamed.jpg"
              alt="Placeholder 1"
              className="rounded-xl opacity-70 shadow-lg object-cover w-70 h-80 md:w-55 md:h-80 absolute top-4"
            />
            <img
              src="/IMG_7719 Medium.png"
              alt="Placeholder 2"
              className="rounded-xl opacity-70 shadow-lg object-cover w-70 h-120 md:w-70 md:h-120 absolute right-8 bottom-20"
            />
            <img
              src="/IMG_5793.jpg"
              alt="Placeholder 3"
              className="rounded-xl opacity-70 shadow-lg object-cover w-70 h-80 md:w-120 md:h-50 absolute left-135 bottom-70"
            />
            <img
              src="/IMG_5760.jpg"
              alt="Placeholder 4"
              className="rounded-xl opacity-70 shadow-lg object-cover w-70 h-70 md:w-50 md:h-60 absolute left-135 top-30"
            />
          </div>
          {/* Info Section */}
          <div className="w-full">
            <div className="uppercase text-xs text-gray-400 tracking-widest mb-2">Info</div>
            <p className="text-gray-700 mb-4">
              I’m an undergraduate computer science student at the Technological Institute of the Philippines, graduating in August 2025.
            </p>
            <p className="text-gray-700 mb-4">
              Ever since I discovered programming, I’ve been fascinated not just by what code can build, but by how it can help people in everyday life. For me, writing software isn’t only about solving technical problems—it’s about understanding human needs and designing tools that genuinely make a difference.
            </p>
            <p className="text-gray-700 mb-4">
              I’ve always enjoyed exploring how technology can bridge gaps, simplify tasks, and bring people closer together. Whether I’m learning a new framework, experimenting with AI models, or sketching out ideas for an interface, what drives me is the thought that someone, somewhere, might benefit from what I create.
            </p>
            <p className="text-gray-700">
              At the heart of it all, I see computer science as more than just logic and algorithms—it’s a creative field where empathy matters just as much as technical skill. As I keep learning and growing, I hope to craft solutions that feel intuitive, human-centered, and meaningful.
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
          <p className="text-gray-700 mb-4">Technological Institute of the Philippines - Quezon City</p>
          <p className="text-gray-700 mb-4">2021-2025</p>
          <p className="text-gray-700 mb-4">Bachelor of Science in Computer Science (BSCS) | Cum Laude</p>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center">
          <img src="/tipqccampus.jpg" alt="Education" className="rounded-xl opacity-70 shadow-lg object-cover w-full max-w-xs" />
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
          <img src="/IMG_5046 2.png" alt="Things I Love to Do" className="rounded-xl opacity-70 shadow-lg object-cover w-full max-w-xs" />
        </div>
      </div>
    </div>
  );
}

export default Info;
