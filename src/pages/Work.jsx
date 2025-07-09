import { useEffect, useState } from "react";

function Work() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(0);
  const [modalProject, setModalProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "HireFlow",
      tagline: "Intelligence meets recruitment",
      category: "AI Platform",
      year: "2025",
      description:
        "Revolutionary ATS platform that transforms hiring with advanced AI. JobBERT and XGBoost algorithms automatically screen and rank candidates, making recruitment effortless and precise.",
      features: [
        "AI-powered resume screening",
        "Intelligent candidate ranking",
        "Automated pipeline management",
        "Real-time analytics dashboard",
      ],
      tech: ["Python", "TensorFlow", "React", "XGBoost", "BERT"],
      metrics: {
        accuracy: "94%",
        speed: "10x faster",
        satisfaction: "4.8/5",
      },
      status: "Available Now",
      color: "from-blue-500 to-purple-600",
      image: "🤖",
    },
    {
      title: "UnlockX",
      tagline: "Security redefined",
      category: "Security System",
      year: "2025",
      description:
        "Advanced facial recognition system designed for family reunification and secure access control. Powered by InsightFace technology for unparalleled accuracy and speed.",
      features: [
        "Real-time face detection",
        "Secure authentication",
        "Family reunification tools",
        "Advanced privacy protection",
      ],
      tech: ["Python", "OpenCV", "InsightFace", "PyQt5", "NumPy"],
      metrics: {
        accuracy: "99.7%",
        speed: "< 100ms",
        security: "Military-grade",
      },
      status: "Available Now",
      color: "from-green-500 to-teal-600",
      image: "🔐",
    },
    {
      title: "Ward",
      tagline: "Vision that never sleeps",
      category: "Surveillance AI",
      year: "2025",
      description:
        "Intelligent surveillance system with real-time face detection and recognition. Features advanced video analysis, automatic highlight recording, and smart alerts.",
      features: [
        "24/7 monitoring",
        "Smart highlight recording",
        "Visibility change detection",
        "Instant notifications",
      ],
      tech: ["Python", "OpenCV", "InsightFace", "PIL", "Threading"],
      metrics: {
        uptime: "99.9%",
        detection: "Real-time",
        alerts: "Instant",
      },
      status: "Coming Soon",
      color: "from-orange-500 to-red-600",
      image: "👁️",
    },
    {
      title: "Moon Hey Hotpot POS",
      tagline: "Restaurant management perfected",
      category: "Business Solution",
      year: "2024",
      description:
        "Complete point-of-sale system designed for modern restaurants. Streamlines operations with inventory management, order processing, and comprehensive analytics.",
      features: [
        "Intuitive order management",
        "Real-time inventory tracking",
        "Customer analytics",
        "Staff performance insights",
      ],
      tech: ["Python", "PyQt5", "MySQL", "pandas", "matplotlib"],
      metrics: {
        efficiency: "40% faster",
        accuracy: "99.9%",
        satisfaction: "4.9/5",
      },
      status: "Available Now",
      color: "from-purple-500 to-pink-600",
      image: "🍲",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col bg-white">
        {/* Text Content Above Video */}
        <div className="flex items-center justify-between px-8 md:px-16 lg:px-24 pt-15 pb-25">
          <div className="flex-1">
            <h1 className="text-black leading-none text-7xl font-medium tracking-tight">
              Projects
            </h1>
          </div>

          <div className="flex-1 flex justify-end">
            <div className="max-w-md">
              <p className="text-black text-2xl leading-tight font-semibold tracking-wide">
                Building practical tools,
              </p>
              <p className="text-black text-2xl leading-tight font-semibold tracking-wide">
                one line of code at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Video Below Text - Takes remaining space */}
        <div className="h-[680px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/sf24.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-12 items-center px-8 md:px-16 lg:px-24 pt-15 pb-15">
            <div className="col-span-6">
              <h2 className="text-black leading-none text-7xl font-medium tracking-tight whitespace-nowrap">
                Get to know Projects.
              </h2>
            </div>

            <div className="col-span-6 flex justify-end">
              <a
                href="https://github.com/officialbryx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-black rounded-full hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
              >
                <svg
                  className="w-6 h-6 text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-white font-semibold tracking-[.012em] leading-[1.42] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif] transition-colors duration-300">
                  View More on GitHub
                </span>
              </a>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-50 mb-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-[#f5f5f7] rounded-[28px] overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-500 cursor-pointer relative h-[650px] w-[350px]"
                onClick={() => setModalProject(project)}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Full Card Background Image */}
                <div
                  className={`h-full bg-gradient-to-br ${project.color} flex items-center justify-center relative rounded-[28px]`}
                >
                  {project.title === "HireFlow" && (
                    <>
                      {/* Background Image for HireFlow */}
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-30 rounded-[28px]"
                        style={{
                          backgroundImage: `url('data:image/jpeg;base64,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')`,
                        }}
                      ></div>
                    </>
                  )}

                  {/* Text Overlay */}
                  <div className="absolute top-7 left-7 right-7">
                    <h3 className="text-[21px] font-semibold mb-2 text-white tracking-tight leading-[1.19] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-[14px] font-normal leading-[1.43] tracking-tight font-['SF_Pro_Text','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Bottom right + button - always visible */}
                  <div className="absolute bottom-7 right-7">
                    <div className="w-11 h-11 bg-[#333336] hover:bg-[#37373a] active:bg-[#2f2f32] rounded-full flex items-center justify-center transition-colors duration-200">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close button */}
            <button
              onClick={() => setModalProject(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
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

            {/* Expand button */}
            <button className="absolute top-6 right-20 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10">
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>

            <div className="grid lg:grid-cols-2">
              {/* Left side - Image */}
              <div
                className={`h-96 lg:h-full bg-gradient-to-br ${modalProject.color} flex items-center justify-center`}
              >
                <div className="text-8xl">{modalProject.image}</div>
              </div>

              {/* Right side - Content */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-500 mb-2 tracking-wide">
                    {modalProject.category} • {modalProject.year}
                  </div>
                  <h2 className="text-4xl font-semibold mb-4 tracking-tight">
                    {modalProject.title}
                  </h2>
                  <p className="text-xl text-gray-600 font-semibold mb-6">
                    {modalProject.tagline}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    {modalProject.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                  <div className="space-y-3">
                    {modalProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(modalProject.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-semibold text-black mb-1">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 uppercase font-semibold">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {modalProject.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status and Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        modalProject.status === "Available Now"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    ></div>
                    <span className="text-sm text-gray-600 font-medium">
                      {modalProject.status}
                    </span>
                  </div>
                  <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                    View Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Legacy sections - keeping for reference */}
      <div className="hidden">
        {/* Project Navigator */}
        <div className="flex justify-center mb-10">
          <div className="flex space-x-2 bg-gray-100 rounded-full p-1">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(index)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 tracking-[.012em] leading-[1.42] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif] ${
                  selectedProject === index
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>{" "}
        </div>

        {/* Featured Project */}
        <div className="max-w-5xl mx-auto mb-20 hidden">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <div className="mb-8">
                  <div className="text-sm font-semibold text-gray-500 mb-2 tracking-[.012em] leading-[1.42] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                    {projects[selectedProject].category} •{" "}
                    {projects[selectedProject].year}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-semibold mb-4 tracking-[.012em] leading-[1.42] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-xl text-gray-600 font-semibold mb-6 tracking-[.012em] leading-[1.42] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                    {projects[selectedProject].tagline}
                  </p>
                  <p className="text-gray-700 leading-[1.42] mb-8 font-normal tracking-[.012em] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                    {projects[selectedProject].description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  {Object.entries(projects[selectedProject].metrics).map(
                    ([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-semibold text-black mb-1 tracking-[.012em] leading-[1.42] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-[.012em] font-semibold font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                          {key}
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        projects[selectedProject].status === "Available Now"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    ></div>
                    <span className="text-sm text-gray-600 font-normal tracking-[.012em] leading-[1.42] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                      {projects[selectedProject].status}
                    </span>
                  </div>
                  <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors tracking-[.012em] leading-[1.42] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                    View Code
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 p-12 lg:p-16 flex items-center justify-center">
                <div
                  className={`w-64 h-64 rounded-3xl bg-gradient-to-br ${projects[selectedProject].color} flex items-center justify-center shadow-2xl`}
                >
                  <div className="text-white text-center">
                    <div className="text-6xl font-thin mb-2">
                      {projects[selectedProject].title.charAt(0)}
                    </div>
                    <div className="text-sm font-semibold opacity-90 tracking-[.012em] leading-[1.42] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                      {projects[selectedProject].category}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Projects Grid - Hidden for now */}
      <div className="hidden">
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-[.012em] leading-[1.42] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                Portfolio Overview
              </h2>
              <p className="text-xl text-gray-600 font-semibold tracking-[.012em] leading-[1.42] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                Explore my complete collection of coding projects
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                      >
                        <div className="text-white text-xl font-light">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 font-normal tracking-[.012em] leading-[1.42] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                          {project.category}
                        </div>
                        <div className="text-xs text-gray-400 font-normal tracking-[.012em] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                          {project.year}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold mb-2 tracking-[.012em] leading-[1.42] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 font-semibold tracking-[.012em] leading-[1.42] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                      {project.tagline}
                    </p>
                    <p className="text-gray-700 text-sm leading-[1.42] mb-6 font-normal tracking-[.012em] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                      {project.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="text-sm text-gray-600 font-normal tracking-[.012em] leading-[1.42] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {project.tech.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded font-normal tracking-[.012em] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded font-normal tracking-[.012em] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                      <div
                        className={`w-2 h-2 rounded-full ${
                          project.status === "Available Now"
                            ? "bg-green-500"
                            : "bg-yellow-500"
                        }`}
                      ></div>
                    </div>

                    <div className="mt-4 w-full bg-gray-200 rounded-full h-px">
                      <div
                        className={`h-px bg-gradient-to-r ${
                          project.color
                        } rounded-full transition-all duration-700 ${
                          hoveredProject === index ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Work;
