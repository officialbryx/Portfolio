import React, { useState } from "react";

function Info() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="min-h-screen bg-white flex flex-col justify-center select-none"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-6 py-20 items-start">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col items-start mb-12 md:mb-0">
          <div className="uppercase text-s font-bold text-gray-400 tracking-widest -top-30">
            Hi! My name is
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
              className="rounded opacity shadow-lg object-cover w-70 h-80 md:w-55 md:h-80 absolute top-4 select-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <img
              src="/IMG_7719 Medium.png"
              alt="Placeholder 2"
              className="rounded  shadow-lg object-cover w-70 h-120 md:w-70 md:h-120 absolute right-8 bottom-20 select-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <img
              src="/IMG_5793.jpg"
              alt="Placeholder 3"
              className="rounded  shadow-lg object-cover w-70 h-80 md:w-120 md:h-50 absolute left-135 bottom-70 select-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <img
              src="/IMG_5760.jpg"
              alt="Placeholder 4"
              className="rounded  shadow-lg object-cover w-70 h-70 md:w-50 md:h-60 absolute left-135 top-30 select-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          {/* Info Section */}
          <div className="w-full relative">
            {/* Left side images for manual positioning */}
            <img
              src="/IMG_4117 Medium.png"
              alt="Info Image 1"
              className="rounded  shadow-lg object-cover w-70 h-80 md:w-70 md:h-80 absolute top-13 right-225 select-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <img
              src="/IMG_5046 3 Medium.png"
              alt="Info Image 2"
              className="rounded  shadow-lg object-cover w-70 h-110 md:w-70 md:h-110 absolute top-23 right-150 select-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <div className="uppercase text-s font-bold text-gray-400 tracking-widest mb-5 mt-10">
              Info
            </div>
            <p className="text-gray-700 mb-4">
              I'm an undergraduate computer science student at the Technological
              Institute of the Philippines, graduating in August 2025. I
              currently reside in Taguig.
            </p>
            <p className="text-gray-700 mb-4">
              Ever since I discovered programming, I've been captivated by both
              the things that code can create and the ways that it can benefit
              people in their daily lives. I believe that producing software
              involves more than just addressing technical problems, but it also
              involves understanding human needs and creating solutions that
              really have an impact.
            </p>
            <p className="text-gray-700 mb-4">
              I've always liked examining the ways in which technology can bring
              to people, improve tasks, and overcome obstacles. The idea that my
              work may help someone, somewhere, motivates me whether I'm
              learning a new framework, tinkering with models based on machine
              learning or AI, or developing interface ideas.
            </p>
            <p className="text-gray-700">
              Fundamentally, I believe that computer science is a creative field
              where empathy is equally as important as technical competence, and
              it goes beyond logic and algorithms. I want to develop solutions
              that is meaningful as I continue to learn and develop.
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
            <p className="text-gray-700 mb-4">
              August 2021 - August 2025 (Expected)
            </p>
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
            className="rounded  shadow-lg object-cover w-[400px] h-[400px] select-none"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>

      {/* Divider for Experience */}
      <div className="w-full flex justify-center my-12">
        <div className="w-full max-w-6xl border-t border-gray-300"></div>
      </div>

      {/* Experience Section - Apple Aesthetic */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-24 items-start">
        {/* Left Column - Title and Role */}
        <div className="md:w-1/2 flex flex-col mb-12 md:mb-0">
          <div className="-ml-70">
            <div className="uppercase text-s font-bold text-gray-400 tracking-widest mb-5 mt-10">
              Experience
            </div>
            <h2 className="text-4xl font-bold text-black mb-3">
              Software Engineer Intern
            </h2>
            <p className="text-2xl text-gray-600 mb-2">
              Ateneo Innovation Center
            </p>
            <p className="text-gray-500 mb-6">February 2025 – May 2025</p>
            <button
              onClick={openModal}
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-all duration-300 ease-out transform hover:scale-105"
            >
              Learn More
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="w-full md:w-[400px] h-90 bg-white rounded-2xl flex items-center justify-center">
            <img
              src="/aic.jpg"
              alt="Ateneo Innovation Center"
              className="rounded w-full max-h-full object-contain p-4 select-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 border-b border-gray-100 px-8 py-6 rounded-t-3xl flex items-center justify-between">
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

              {/* Experience Gallery */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-6">
                  Experience Gallery
                </h4>

                {/* First Image and Context */}
                <div className="mb-8">
                  <div className="mb-4 bg-gray-50 rounded-2xl p-4">
                    <img
                      src="/interns.jpg"
                      alt="Experience Image 1"
                      className="w-full object-contain rounded-xl select-none"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                    />
                  </div>
                  <p className="text-gray-700 text-center">
                    My Internship Team
                  </p>
                </div>

                {/* Second Image and Context */}
                <div className="mb-8">
                  <div className="mb-4 bg-gray-50 rounded-2xl p-4">
                    <img
                      src="/present1.jpg"
                      alt="Experience Image 2"
                      className="w-full object-contain rounded-xl select-none"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                    />
                  </div>
                  <p className="text-gray-700 text-center">
                    Explaining the "UnlockX" project to the operations manager.
                  </p>
                </div>

                {/* Third Image and Context */}
                <div className="mb-8">
                  <div className="mb-4 bg-gray-50 rounded-2xl p-4">
                    <img
                      src="/present2.jpg"
                      alt="Experience Image 3"
                      className="w-full object-contain rounded-xl select-none"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                    />
                  </div>
                  <p className="text-gray-700 text-center">
                    Showcasing the functionality of the "Ward" project that can
                    recognize and detect registered faces.
                  </p>
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Achievements
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center mb-4">
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
                      Face Recognition Development
                    </h5>
                    <p className="text-gray-700 text-sm">
                      Developed a lightweight desktop face recognition system in
                      Python using PyQt5, OpenCV, and DeepFace, enabling secure
                      user login and registration.
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center mb-4">
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
                      Collaborated with field experts and fellow Ateneans to
                      design, test, and refine the face recognition system.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-purple-100 rounded flex items-center justify-center mb-4">
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
                      Performance optimization
                    </h5>
                    <p className="text-gray-700 text-sm">
                      Applied multithreading to keep real‑time face verification
                      fast and responsive without freezing the interface.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-orange-100 rounded flex items-center justify-center mb-4">
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
                      Managed and organized user data securely
                    </h5>
                    <p className="text-gray-700 text-sm">
                      Implemented automated capture, naming, and storage of face
                      data to support accurate verification.
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
                    "Python",
                    "PyQT",
                    "PyTorch",
                    "GitHub",
                    "Figma",
                    "Raspberry Pi 5",
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
              className="rounded  shadow-lg object-cover w-[500px] h-[300px] select-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
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
              className="absolute top-50 left-70 rounded  shadow-lg object-cover w-[500px] h-[300px] select-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <img
              src="/N_-MfI-4.jpg"
              alt="Things I Love to Do 2"
              className="absolute top-0 left-0 rounded  shadow-lg object-cover w-[250px] h-[420px] select-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>
      <div className="h-70"></div>
    </div>
  );
}

export default Info;
