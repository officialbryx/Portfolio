import React, { useState } from "react";

function Info() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-6 py-20 items-start">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col items-start mb-12 md:mb-0">
          <div className="uppercase text-s font-bold text-gray-400 tracking-widest -top-30">
            Let that fog settle ...
          </div>
          <h1 className="text-8xl md:text-8xl font-bold text-black text-justify leading-none mb-4">
            Bryan
            <br />
            Tiamzon
          </h1>
          <div className="text-7xl font-semibold text-black mb-1">ᜊ᜔ᜍ᜔ᜌᜈ᜔</div>
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
          <div className="w-full relative">
            {/* Left side images for manual positioning */}
            <img
              src="/IMG_4117 Medium.png"
              alt="Info Image 1"
              className="rounded-xl shadow-lg object-cover w-70 h-80 md:w-70 md:h-80 absolute top-13 right-225"
            />
            <img
              src="/IMG_5046 3 Medium.png"
              alt="Info Image 2"
              className="rounded-xl shadow-lg object-cover w-70 h-110 md:w-70 md:h-110 absolute top-23 right-150"
            />
            <div className="uppercase text-s font-bold text-gray-400 tracking-widest mb-5 mt-10">
              Info
            </div>
            <p className="text-gray-700 mb-4">
              I'm an undergraduate computer science student at the Technological
              Institute of the Philippines, graduating in August 2025.
            </p>
            <p className="text-gray-700 mb-4">
              Ever since I discovered programming, I've been fascinated not just
              by what code can build, but by how it can help people in everyday
              life. For me, writing software isn't only about solving technical
              problems—it's about understanding human needs and designing tools
              that genuinely make a difference.
            </p>
            <p className="text-gray-700 mb-4">
              I've always enjoyed exploring how technology can bridge gaps,
              simplify tasks, and bring people closer together. Whether I'm
              learning a new framework, experimenting with AI models, or
              sketching out ideas for an interface, what drives me is the
              thought that someone, somewhere, might benefit from what I create.
            </p>
            <p className="text-gray-700">
              At the heart of it all, I see computer science as more than just
              logic and algorithms—it's a creative field where empathy matters
              just as much as technical skill. As I keep learning and growing, I
              hope to craft solutions that feel intuitive, human-centered, and
              meaningful.
            </p>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="w-full flex justify-center my-12">
        <div className="w-full max-w-6xl border-t border-gray-300"></div>
      </div>
      {/* Education Section */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-24 items-start">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col mb-12 md:mb-0">
          <div className="-ml-70">
            <div className="uppercase text-s font-bold text-gray-400 tracking-widest mb-5 mt-10">
              Education
            </div>
            <p className="text-black text-2xl font-extrabold">
              Technological Institute of the Philippines
            </p>
            <p className="text-gray-700 text-2xl font-extrabold mb-2">
              College of Computer Studies
            </p>
            <p className="text-gray-700 mb-4">2021 - 2025</p>
            <p className="text-gray-700">
              Bachelor of Science in Computer Science (BSCS)
            </p>
            <p className="text-gray-700 mb-4">Cum Laude</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col items-start">
          <img
            src="/bryantiamzon.JPG"
            alt="Education"
            className="rounded-xl opacity-100 shadow-lg object-cover w-[400px] h-[400px]"
          />
        </div>
      </div>

      {/* Divider for Experience */}
      <div className="w-full flex justify-center my-12">
        <div className="w-full max-w-6xl border-t border-gray-300"></div>
      </div>

      {/* Experience Section - Apple Aesthetic */}
      <div className="max-w-6xl mx-auto px-6 my-20">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 ease-out group">
          {/* Left: Company Logo */}
          <div className="md:w-1/3 p-12 flex justify-center items-center bg-gradient-to-br from-gray-50 to-white">
            <div className="w-32 h-32 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img
                src="/aic.jpg"
                alt="Ateneo Innovation Center"
                className="w-24 h-24 object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Right: Experience Details */}
          <div className="md:w-2/3 p-12 flex flex-col justify-center">
            <div className="uppercase text-xs font-medium text-gray-400 tracking-wider mb-3">
              Experience
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-black-600 transition-colors duration-300">
              Software Engineer Intern
            </h2>
            <div className="text-xl text-gray-600 font-medium mb-2">
              Ateneo Innovation Center
            </div>
            <div className="text-gray-500 text-sm mb-8">
              February 2025 – May 2025
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={openModal}
                className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 group/button"
              >
                View More
                <svg
                  className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-6 rounded-t-3xl flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Software Engineering Intern
                </h3>
                <p className="text-gray-600">Ateneo Innovation Center</p>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Overview */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Overview
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  During my internship at Ateneo Innovation Center, I
                  contributed to cutting-edge projects that focused on creating
                  impactful digital solutions. I worked closely with a
                  multidisciplinary team to develop user-centered applications
                  that addressed real-world challenges.
                </p>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Achievements
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Frontend Development
                    </h5>
                    <p className="text-gray-700 text-sm">
                      Built responsive user interfaces using React and Tailwind
                      CSS, focusing on accessibility and user experience.
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Team Collaboration
                    </h5>
                    <p className="text-gray-700 text-sm">
                      Collaborated with engineers, designers, and product
                      managers in an agile environment to deliver high-quality
                      solutions.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Performance Optimization
                    </h5>
                    <p className="text-gray-700 text-sm">
                      Improved application performance by optimizing component
                      rendering and implementing efficient state management.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Accessibility Focus
                    </h5>
                    <p className="text-gray-700 text-sm">
                      Enhanced application accessibility by implementing ARIA
                      labels, keyboard navigation, and screen reader
                      compatibility.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Tailwind CSS",
                    "JavaScript",
                    "Git",
                    "Figma",
                    "Agile",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Divider for Motivation */}
      <div className="w-full flex justify-center my-12">
        <div className="w-full max-w-6xl border-t border-gray-300"></div>
      </div>
      {/* Motivation Section */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-24 items-start">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col mb-12 md:mb-0">
          <div className="-ml-25">
            <img
              src="motivation.jpg"
              alt="Motivation"
              className="rounded-xl shadow-lg object-cover w-[500px] h-[300px]"
            />
          </div>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col items-start">
          <div className="uppercase text-s font-bold text-gray-400 tracking-widest mb-5 mt-10">
            Motivation
          </div>
          <p className="text-gray-700 mb-4">
            I'm passionate about building technology that makes a difference. I
            love collaborating with creative people, learning new frameworks,
            and exploring the intersection of design and code.
          </p>
        </div>
      </div>

      {/* Divider for Things I Love to Do */}
      <div className="w-full flex justify-center my-12">
        <div className="w-full max-w-6xl border-t border-gray-300"></div>
      </div>
      {/* Things I Love to Do Section */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-24 items-start mb-20">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col mb-12 md:mb-0">
          <div className="-ml-70">
            <div className="uppercase text-s font-bold text-gray-400 tracking-widest mb-5 mt-40">
              Things I Love to Do
            </div>
            <p className="text-black text-3xl font-extrabold">
              Listening to Music
            </p>
            <p className="text-black text-3xl font-extrabold">
              Hanging out with friends
            </p>
            <p className="text-black text-3xl font-extrabold">
              Play Video Games
            </p>
          </div>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col items-start">
          <div className="relative w-[600px] h-[300px]">
            <img
              src="/IMG_3471.jpeg"
              alt="Things I Love to Do"
              className="absolute top-50 left-70 rounded-xl shadow-lg object-cover w-[500px] h-[300px]"
            />
            <img
              src="/N_-MfI-4.jpg"
              alt="Things I Love to Do 2"
              className="absolute top-0 left-0 rounded-xl shadow-lg object-cover w-[250px] h-[420px]"
            />
          </div>
        </div>
      </div>
      <div className="h-70"></div>
    </div>
  );
}

export default Info;
