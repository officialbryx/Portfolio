import { useEffect, useState } from "react";

function Work() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Typing animation
    const text = "portfolio.init()";
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timeInterval);
      clearInterval(typingInterval);
    };
  }, []);

  const projects = [
    {
      title: "HireFlow",
      category: "AI • ML • NLP",
      year: "2025",
      description:
        "Advanced ATS leveraging JobBERT and XGBoost algorithms for intelligent resume screening and candidate ranking. Automates recruitment pipeline with ML-driven decision making.",
      tech: ["Python", "TensorFlow", "React", "Deepseek", "XGBoost", "BERT"],
      lines: "2,847",
      commits: "127",
      status: "active",
    },
    {
      title: "UnlockX",
      category: "Computer Vision • Security",
      year: "2025",
      description:
        "Facial recognition system using InsightFace algorithms for family reunification. Real-time face detection, authentication, and access control with advanced CV pipelines.",
      tech: ["Python", "OpenCV", "InsightFace", "PyQt5", "NumPy", "Threading"],
      lines: "1,923",
      commits: "89",
      status: "stable",
    },
    {
      title: "Ward",
      category: "AI • Computer Vision",
      year: "2025",
      description:
        "Real-time face detection and recognition system with ArcFace integration. Features live video analysis, highlight recording, and visibility change detection.",
      tech: ["Python", "OpenCV", "InsightFace", "PIL", "NumPy", "Threading"],
      lines: "1,456",
      commits: "67",
      status: "beta",
    },
    {
      title: "Moon Hey Hotpot POS",
      category: "Desktop App • Database",
      year: "2024",
      description:
        "Full-stack POS system with inventory management. Built with PyQt5 for restaurant operations, featuring order processing and analytics dashboard.",
      tech: ["Python", "PyQt5", "MySQL", "pandas", "matplotlib", "SQL"],
      lines: "3,201",
      commits: "156",
      status: "deployed",
    },
  ];

  const statusColors = {
    active: "text-green-400",
    stable: "text-blue-400",
    beta: "text-yellow-400",
    deployed: "text-purple-400",
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-8">
        <div
          className="max-w-4xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            opacity: Math.max(0, 1 - scrollY / 1000),
          }}
        >
          {/* Terminal Window */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-8">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400">bash</span>
            </div>
            <div className="p-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">$</span>
                  <span className="text-white">
                    cd /home/developer/projects
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">$</span>
                  <span className="text-white">ls -la</span>
                </div>
                <div className="text-gray-400 text-sm ml-4">
                  <div>drwxr-xr-x 4 dev dev 4096 Jan 15 2025 hireflow/</div>
                  <div>drwxr-xr-x 3 dev dev 4096 Jan 12 2025 unlockx/</div>
                  <div>drwxr-xr-x 2 dev dev 4096 Jan 10 2025 ward/</div>
                  <div>drwxr-xr-x 5 dev dev 4096 Dec 20 2024 pos-system/</div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">$</span>
                  <span className="text-white">{typedText}</span>
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </div>
          </div>

          {/* ASCII Art Title */}
          <div className="text-center mb-8">
            <pre className="text-white text-xs md:text-sm leading-tight">
              {`
    ███▄ ▄███▓▓██   ██▓    ██▓███   ▒█████   ██▀███  ▄▄▄█████▓  █████▒▒█████   ██▓     ██▓ ▒█████  
   ▓██▒▀█▀ ██▒ ▒██  ██▒   ▓██░  ██▒▒██▒  ██▒▓██ ▒ ██▒▓  ██▒ ▓▒▓██   ▒▒██▒  ██▒▓██▒    ▓██▒▒██▒  ██▒
   ▓██    ▓██░  ▒██ ██░   ▓██░ ██▓▒▒██░  ██▒▓██ ░▄█ ▒▒ ▓██░ ▒░▒████ ░▒██░  ██▒▒██░    ▒██▒▒██░  ██▒
   ▒██    ▒██   ░ ▐██▓░   ▒██▄█▓▒ ▒▒██   ██░▒██▀▀█▄  ░ ▓██▓ ░ ░▓█▒  ░▒██   ██░▒██░    ░██░▒██   ██░
   ▒██▒   ░██▒  ░ ██▒▓░   ▒██▒ ░  ░░ ████▓▒░░██▓ ▒██▒  ▒██▒ ░ ░▒█░   ░ ████▓▒░░██████▒░██░░ ████▓▒░
   ░ ▒░   ░  ░   ██▒▒▒    ▒▓▒░ ░  ░░ ▒░▒░▒░ ░ ▒▓ ░▒▓░  ▒ ░░    ▒ ░   ░ ▒░▒░▒░ ░ ▒░▓  ░░▓  ░ ▒░▒░▒░ 
   ░  ░      ░ ▓██ ░▒░    ░▒ ░       ░ ▒ ▒░   ░▒ ░ ▒░    ░     ░       ░ ▒ ▒░ ░ ░ ▒  ░ ▒ ░  ░ ▒ ▒░ 
   ░      ░    ▒ ▒ ░░     ░░       ░ ░ ░ ▒    ░░   ░   ░       ░ ░   ░ ░ ░ ▒    ░ ░    ▒ ░░ ░ ░ ▒  
          ░    ░ ░                    ░ ░     ░                       ░ ░      ░  ░ ░      ░ ░     
               ░ ░                                                                                  
`}
            </pre>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Projects", value: "4+", symbol: ">" },
              { label: "Languages", value: "10+", symbol: "{}" },
              { label: "Commits", value: "400+", symbol: "#" },
              { label: "Lines", value: "10k+", symbol: "//" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center border border-gray-700 rounded p-4 hover:border-gray-500 transition-colors"
              >
                <div className="text-2xl mb-1">{stat.symbol}</div>
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="text-center">
            <div className="animate-bounce mb-2">
              <div className="mx-auto w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              // scroll down to see projects
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-500">// </span>
              Featured Projects
            </h2>
            <div className="text-gray-400 text-sm">
              $ git log --oneline --graph --all
            </div>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 bg-gray-900/50"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Terminal */}
                  <div className="flex-1">
                    <div className="bg-black border border-gray-700 rounded-lg overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-xs text-gray-400">
                          {project.title.toLowerCase()}.py
                        </span>
                      </div>
                      <div className="p-4 h-64 overflow-hidden">
                        <div className="space-y-1 text-sm">
                          <div className="text-gray-500"># {project.title}</div>
                          <div className="text-gray-500">
                            # {project.description.substring(0, 60)}...
                          </div>
                          <div className="text-gray-500">
                            # Status: {project.status}
                          </div>
                          <div className="mt-4">
                            <span className="text-purple-400">import</span>{" "}
                            <span className="text-white">numpy</span>{" "}
                            <span className="text-purple-400">as</span>{" "}
                            <span className="text-white">np</span>
                          </div>
                          <div>
                            <span className="text-purple-400">from</span>{" "}
                            <span className="text-white">sklearn</span>{" "}
                            <span className="text-purple-400">import</span>{" "}
                            <span className="text-white">model_selection</span>
                          </div>
                          <div className="mt-2">
                            <span className="text-purple-400">class</span>{" "}
                            <span className="text-yellow-400">
                              {project.title.replace(/\s+/g, "")}
                            </span>
                            <span className="text-white">:</span>
                          </div>
                          <div className="ml-4">
                            <span className="text-purple-400">def</span>{" "}
                            <span className="text-blue-400">__init__</span>
                            <span className="text-white">(self):</span>
                          </div>
                          <div className="ml-8">
                            <span className="text-white">self.status = </span>
                            <span className="text-green-400">
                              "{project.status}"
                            </span>
                          </div>
                          <div className="ml-8">
                            <span className="text-white">self.lines = </span>
                            <span className="text-orange-400">
                              {project.lines}
                            </span>
                          </div>
                          <div className="ml-4 mt-2">
                            <span className="text-purple-400">def</span>{" "}
                            <span className="text-blue-400">execute</span>
                            <span className="text-white">(self):</span>
                          </div>
                          <div className="ml-8">
                            <span className="text-purple-400">return</span>{" "}
                            <span className="text-green-400">
                              "Project initialized successfully"
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <span>{project.category}</span>
                          <span>•</span>
                          <span>{project.year}</span>
                          <span>•</span>
                          <span className={statusColors[project.status]}>
                            ● {project.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center border border-gray-700 rounded p-2">
                        <div className="text-green-400 font-bold">
                          {project.lines}
                        </div>
                        <div className="text-gray-400">Lines</div>
                      </div>
                      <div className="text-center border border-gray-700 rounded p-2">
                        <div className="text-blue-400 font-bold">
                          {project.commits}
                        </div>
                        <div className="text-gray-400">Commits</div>
                      </div>
                      <div className="text-center border border-gray-700 rounded p-2">
                        <div className="text-purple-400 font-bold">
                          {project.tech.length}
                        </div>
                        <div className="text-gray-400">Tech</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm text-gray-400 mb-2">
                        $ npm list --depth=0
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-sm text-gray-300 hover:border-gray-500 transition-colors font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-800 rounded-full h-1">
                      <div
                        className={`h-1 bg-white rounded-full transition-all duration-500 ${
                          hoveredProject === index ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
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
