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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer relative h-[500px]"
                onClick={() => setModalProject(project)}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Full Card Background Image */}
                <div
                  className={`h-full bg-gradient-to-br ${project.color} flex items-center justify-center relative`}
                >
                  <div className="text-8xl opacity-20">{project.image}</div>

                  {/* Text Overlay */}
                  <div className="absolute top-6 left-6 right-6">
                    <h3 className="text-2xl font-bold mb-2 text-white tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-sm font-medium leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Hover overlay with + button */}
                  <div
                    className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredProject === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
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
