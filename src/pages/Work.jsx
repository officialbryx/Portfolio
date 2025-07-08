import { useEffect, useState } from "react";

function Work() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(0);

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
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-[.012em] leading-[1.42] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
              Explore the projects.
            </h2>
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
            </div>
          </div>

          {/* Featured Project */}
          <div className="max-w-5xl mx-auto mb-20">
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
      </section>

      {/* All Projects Grid */}
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
  );
}

export default Work;
