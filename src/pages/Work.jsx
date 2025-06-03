import { useEffect, useState } from "react";

function Work() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "HireFlow",
      category: "AI, LLM, Machine Learning",
      year: "2025",
      description:
        "An advanced Applicant Tracking System (ATS) that leverages machine learning algorithms (JobBERT and XGBoost) to revolutionize the recruitment process. This intelligent system automates resume screening, candidate ranking, and shortlisting, enabling organizations to make data-driven hiring decisions efficiently.",
      tech: ["Python", "Deepseek", "React", "TensorFlow"],
      gradient: "from-blue-400 via-teal-400 to-green-400",
      bgColor: "bg-blue-600/10",
      accentColor: "text-blue-400",
      icon: "🤖",
    },
    {
      title: "UnlockX - Family Reunification Platform",
      category: "Computer Vision, Security, Face Recognition",
      year: "2025",
      description:
        "A sophisticated facial recognition security system built for family reunification and access control. The application uses advanced computer vision algorithms (InsightFace) to detect, analyze and match faces in real-time. It features family registration, face-based authentication, unknown face tracking, and a comprehensive family status monitoring system.",
      tech: [
        "Python",
        "PyQt5",
        "OpenCV",
        "InsightFace",
        "NumPy",
        "Face Recognition",
        "Threading",
      ],
      gradient: "from-red-400 via-pink-400 to-purple-400",
      bgColor: "bg-red-600/10",
      accentColor: "text-red-400",
      icon: "👥",
    },
    {
      title: "Ward",
      category: "AI, Computer Vision, Face Recognition",
      year: "2025",
      description:
        "An advanced face detection and recognition system that captures and analyzes video feeds in real-time. The system uses deep learning models for face detection, ArcFace for face recognition, and includes features like highlight recording based on visibility changes. It supports both live camera feeds and screen capture.",
      tech: [
        "Python",
        "OpenCV",
        "InsightFace",
        "NumPy",
        "PIL (Python Imaging Library)",
      ],
      gradient: "from-purple-400 via-indigo-400 to-blue-400",
      bgColor: "bg-purple-600/10",
      accentColor: "text-purple-400",
      icon: "👁️",
    },
    {
      title: "Moon Hey Hotpot POS & Inventory System",
      category: "Restaurant Management, Point of Sale, Inventory Management",
      year: "2024",
      description:
        "The Point of Sales (POS) with Inventory System is a software solution designed to improve a company's restaurant operations such as managing inventory and processing orders. The software is specifically built to meet the company's needs with several essential modules tailored to support its operations.",
      tech: ["Python", "PyQt5", "MySQL", "pandas", "matplotlib"],
      gradient: "from-green-400 via-emerald-400 to-teal-400",
      bgColor: "bg-green-600/10",
      accentColor: "text-green-400",
      icon: "🍲",
    },
  ];

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-96 h-96 pointer-events-none z-0 opacity-30"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: `radial-gradient(circle, rgba(147, 197, 253, 0.1) 0%, rgba(167, 139, 250, 0.05) 50%, transparent 70%)`,
          transition: "left 0.1s ease-out, top 0.1s ease-out",
        }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10 overflow-hidden">
        {/* Interactive Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full gap-4 p-8">
            {Array.from({ length: 96 }, (_, i) => (
              <div
                key={i}
                className="border border-blue-400/20 rounded hover:bg-blue-400/10 hover:border-blue-400/40 transition-all duration-500 cursor-pointer"
                style={{
                  animationDelay: `${i * 0.02}s`,
                  animation: `fadeInScale 2s ease-in-out ${i * 0.02}s both`,
                }}
              />
            ))}
          </div>
        </div>

        <div
          className="text-center transform transition-all duration-1000 relative z-20"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: Math.max(0, 1 - scrollY / 1000),
          }}
        >
          {/* Main Title with Interactive Effects */}
          <div className="relative mb-12">
            <h2 className="text-7xl md:text-9xl font-thin leading-none relative cursor-default">
              <span
                className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:via-blue-400 hover:to-purple-400 transition-all duration-1000 transform hover:scale-105"
                onMouseEnter={(e) => {
                  e.target.style.textShadow =
                    "0 0 30px rgba(147, 197, 253, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.textShadow = "none";
                }}
              >
                My
              </span>
              <span
                className="block text-gray-300 hover:bg-gradient-to-r hover:from-green-400 hover:via-teal-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent transition-all duration-700 transform hover:scale-105"
                onMouseEnter={(e) => {
                  e.target.style.textShadow =
                    "0 0 30px rgba(52, 211, 153, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.textShadow = "none";
                }}
              >
                Work
              </span>
            </h2>

            {/* Floating Code Symbols */}
            <div className="absolute inset-0 pointer-events-none">
              {["<", ">", "{", "}", "(", ")", ";", "="].map((symbol, i) => (
                <span
                  key={i}
                  className="absolute text-blue-400/30 text-2xl font-mono animate-pulse"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${20 + (i % 3) * 30}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${2 + i * 0.3}s`,
                  }}
                >
                  {symbol}
                </span>
              ))}
            </div>

            {/* Orbiting Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-96 h-96">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="absolute inset-0 border border-blue-400/30 rounded-full animate-spin"
                      style={{
                        animationDuration: `${20 + i * 10}s`,
                        animationDirection: i % 2 === 0 ? "normal" : "reverse",
                        transform: `scale(${0.3 + i * 0.2})`,
                      }}
                    >
                      <div
                        className={`absolute w-3 h-3 bg-gradient-to-r ${
                          i === 0
                            ? "from-blue-400 to-purple-400"
                            : i === 1
                            ? "from-green-400 to-teal-400"
                            : "from-pink-400 to-red-400"
                        } rounded-full`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Description */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-gray-400 text-xl leading-relaxed">
              A collection of projects that reflect my passion for{" "}
              <span
                className="text-blue-400 font-medium cursor-pointer hover:text-blue-300 transition-colors duration-300 relative group"
                onMouseEnter={(e) => {
                  e.target.style.textShadow =
                    "0 0 10px rgba(59, 130, 246, 0.8)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.textShadow = "none";
                }}
              >
                technology
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>{" "}
              and{" "}
              <span
                className="text-purple-400 font-medium cursor-pointer hover:text-purple-300 transition-colors duration-300 relative group"
                onMouseEnter={(e) => {
                  e.target.style.textShadow =
                    "0 0 10px rgba(147, 51, 234, 0.8)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.textShadow = "none";
                }}
              >
                innovation
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </p>
          </div>

          {/* Interactive Stats */}
          <div className="flex justify-center space-x-12 mb-16">
            {[
              {
                number: "4+",
                label: "Projects",
                icon: "🚀",
                color: "text-blue-400",
              },
              {
                number: "10+",
                label: "Technologies",
                icon: "⚡",
                color: "text-purple-400",
              },
              {
                number: "2+",
                label: "Years",
                icon: "🎯",
                color: "text-green-400",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center cursor-pointer group transform hover:scale-110 transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter =
                    "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "none";
                }}
              >
                <div
                  className="text-3xl mb-2 animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {stat.icon}
                </div>
                <div
                  className={`text-3xl font-bold ${stat.color} group-hover:text-white transition-colors duration-300`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-bounce">
              <div className="w-8 h-12 border-2 border-gray-600 rounded-full flex justify-center relative overflow-hidden group cursor-pointer hover:border-blue-400 transition-colors duration-300">
                <div className="w-1.5 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse group-hover:from-green-400 group-hover:to-teal-400 transition-all duration-300" />
              </div>
            </div>
            <p className="text-gray-500 text-sm animate-pulse">
              Scroll to explore
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInScale {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen py-32 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h3 className="text-5xl font-thin mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
          </div>

          <div className="space-y-40">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`flex flex-col lg:flex-row items-center gap-20 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } group`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Visual */}
                <div className="flex-1 relative z-10">
                  <div
                    className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-3xl relative overflow-hidden cursor-pointer transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 shadow-2xl ${project.bgColor} group-hover:shadow-4xl`}
                    style={{
                      boxShadow:
                        hoveredProject === index
                          ? `0 25px 50px -12px ${
                              project.accentColor.includes("blue")
                                ? "rgba(59, 130, 246, 0.3)"
                                : project.accentColor.includes("red")
                                ? "rgba(239, 68, 68, 0.3)"
                                : project.accentColor.includes("purple")
                                ? "rgba(147, 51, 234, 0.3)"
                                : "rgba(34, 197, 94, 0.3)"
                            }`
                          : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    <div className="absolute inset-0 bg-gray-900/70 group-hover:bg-gray-900/50 transition-all duration-500" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center transform transition-all duration-500 group-hover:scale-110">
                        <div className="text-6xl mb-4 animate-bounce">
                          {project.icon}
                        </div>
                        <div className="w-20 h-20 border-2 border-white/30 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-300">
                          <svg
                            className="w-8 h-8 transform group-hover:rotate-45 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                          Explore Project
                        </p>
                      </div>
                    </div>

                    {/* Corner Decorations */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-white/40 rounded-full" />
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/30 rounded-full" />
                  </div>

                  {/* Enhanced Tech Display */}
                  {hoveredProject === index && (
                    <div className="absolute -inset-8 pointer-events-none">
                      {/* Tech Stack Orbit */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-80 h-80">
                          {project.tech.slice(0, 6).map((tech, techIndex) => {
                            const angle = techIndex * 60 * (Math.PI / 180);
                            const radius = 120;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            return (
                              <div
                                key={tech}
                                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500`}
                                style={{
                                  left: `calc(50% + ${x}px)`,
                                  top: `calc(50% + ${y}px)`,
                                  animationDelay: `${techIndex * 0.1}s`,
                                }}
                              >
                                <div
                                  className={`px-4 py-2 ${
                                    project.bgColor
                                  } border-2 ${project.accentColor.replace(
                                    "text-",
                                    "border-"
                                  )} rounded-full text-sm ${
                                    project.accentColor
                                  } backdrop-blur-md shadow-lg transform hover:scale-110 transition-all duration-300 font-medium`}
                                >
                                  {tech}
                                  <div
                                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 rounded-full animate-pulse`}
                                  />
                                </div>
                              </div>
                            );
                          })}

                          {/* Central Tech Count */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div
                              className={`w-16 h-16 ${
                                project.bgColor
                              } border-2 ${project.accentColor.replace(
                                "text-",
                                "border-"
                              )} rounded-full flex items-center justify-center backdrop-blur-md`}
                            >
                              <span
                                className={`text-xl font-bold ${project.accentColor}`}
                              >
                                {project.tech.length}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tech Stack Panel */}
                      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-96">
                        <div
                          className={`${
                            project.bgColor
                          } backdrop-blur-md rounded-2xl p-6 border ${project.accentColor.replace(
                            "text-",
                            "border-"
                          )} shadow-2xl`}
                        >
                          <h5
                            className={`text-lg font-medium ${project.accentColor} mb-4 text-center`}
                          >
                            Tech Stack
                          </h5>
                          <div className="grid grid-cols-3 gap-3">
                            {project.tech.map((tech, techIndex) => (
                              <div
                                key={tech}
                                className="text-center p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
                                style={{
                                  animationDelay: `${techIndex * 0.05}s`,
                                }}
                              >
                                <div className="text-xs text-gray-300 font-mono">
                                  {tech}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="flex-1 space-y-8 relative">
                  <div className="flex items-center space-x-4 text-sm">
                    <span className={`${project.accentColor} font-medium`}>
                      {project.category}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 font-mono">
                      {project.year}
                    </span>
                  </div>

                  <h4
                    className={`text-5xl font-thin ${project.accentColor} group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500`}
                  >
                    {project.title}
                  </h4>

                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-400/50 hover:text-blue-400 hover:bg-blue-400/5 transition-all duration-300 cursor-default transform hover:scale-105 backdrop-blur-sm"
                        style={{
                          animationDelay: `${techIndex * 0.1}s`,
                          transition: `all 0.3s ease ${techIndex * 0.05}s`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Progress Bar Animation */}
                  <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${
                        project.gradient
                      } rounded-full transform transition-all duration-1000 ${
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

      {/* Footer Section */}
      <section className="py-20 px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-3xl font-thin mb-6 text-gray-300">
            Ready to build something amazing together?
          </h4>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Let's Connect
          </button>
        </div>
      </section>
    </div>
  );
}

export default Work;
