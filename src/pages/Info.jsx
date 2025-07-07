import { useEffect, useState, useRef } from "react";

function Info() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSkill, setActiveSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const heroRef = useRef(null);

  const roles = ["Full Stack Developer", "Data Scientist"];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Background effect
  useEffect(() => {
    // Simple background effect setup
    const handleResize = () => {
      // Window resize handling if needed
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mousePos]);

  // Typewriter effect with glitch
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let i = 0;
    let isDeleting = false;

    const typeInterval = setInterval(
      () => {
        if (!isDeleting && i < currentRole.length) {
          setTypedText(currentRole.slice(0, i + 1));
          i++;
        } else if (!isDeleting && i === currentRole.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        } else if (isDeleting && i > 0) {
          setTypedText(currentRole.slice(0, i - 1));
          i--;
        } else {
          isDeleting = false;
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearInterval(typeInterval);
  }, [currentRoleIndex]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    setTimeout(() => setIsVisible(true), 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(timeInterval);
    };
  }, []);

  const skills = [
    {
      name: "React & Next.js",
      level: 90,
      description:
        "Advanced proficiency in modern React development with hooks, context, and Next.js framework",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      level: 85,
      description:
        "Strong experience with type-safe JavaScript development and large-scale applications",
      category: "Language",
    },
    {
      name: "Node.js & APIs",
      level: 88,
      description:
        "Comprehensive backend development, REST APIs, and microservices architecture",
      category: "Backend",
    },
    {
      name: "Python & AI",
      level: 82,
      description:
        "Advanced Python programming with machine learning and data science capabilities",
      category: "Language",
    },
    {
      name: "DevOps & Cloud",
      level: 75,
      description: "Docker, Kubernetes, AWS, and CI/CD pipeline implementation",
      category: "Infrastructure",
    },
    {
      name: "Database Design",
      level: 80,
      description:
        "PostgreSQL, MongoDB, Redis, and database optimization strategies",
      category: "Database",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/bryantiamzon",
      icon: "⌘",
      cmd: "git clone portfolio.git",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/bryantiamzon",
      icon: "⚡",
      cmd: "connect --professional",
    },
    {
      name: "Portfolio",
      href: "https://bryantiamzon.dev",
      icon: "◉",
      cmd: "curl -X GET /portfolio",
    },
    {
      name: "Resume",
      href: "/resume.pdf",
      icon: "⚙",
      cmd: "cat resume.pdf",
    },
  ];

  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Ateneo Innovation Center",
      period: "Feb 2025 - May 2025",
      description:
        "Architecting scalable web applications using React and Node.js, implementing microservices architecture, and optimizing database queries for high-performance systems.",
      tech: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative z-10 pt-16"
      >
        <div
          className={`text-center transform transition-all duration-2000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          {/* Name Display */}
          <div className="mb-8 relative">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-none tracking-wider relative">
              <span className="inline-block hover:scale-110 transition-all duration-700 cursor-default text-white hover:text-white filter hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                BRYAN
              </span>
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-wider">
              <span className="inline-block hover:scale-110 transition-all duration-700 cursor-default text-white hover:text-white filter hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                TIAMZON
              </span>
            </h1>
          </div>

          {/* Typewriter Role */}
          <div className="mb-8 h-12 flex items-center justify-center">
            <span className="text-xl md:text-2xl font-mono text-white/80">
              {">"} {typedText}
              <span className="animate-pulse text-white">_</span>
            </span>
          </div>

          {/* Status Line */}
          <div className="mb-12 text-center">
            <div className="inline-block border border-white/20 rounded px-4 py-2 bg-black/50 backdrop-blur-sm">
              <div className="flex items-center gap-4 text-sm font-mono">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  STATUS: ONLINE
                </span>
                <span className="text-white/40">|</span>
                <span>MODE: DEVELOPER</span>
                <span className="text-white/40">|</span>
                <span>LOCATION: TAGUIG_CITY</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group px-8 py-4 bg-white text-black font-mono font-bold transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 border-2 border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <span className="flex items-center gap-2">
                ./view_projects.sh
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  {">"}
                </span>
              </span>
            </button>

            <button className="group px-8 py-4 bg-transparent text-white font-mono font-bold transition-all duration-300 transform hover:scale-105 border-2 border-white hover:bg-white hover:text-black">
              <span className="flex items-center gap-2">contact --init</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-xs font-mono text-white/60">
                [SCROLL_TO_EXPLORE]
              </span>
              <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center relative">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen py-32 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Terminal Header */}
          <div className="mb-12 font-mono text-sm text-white/60">
            <div className="border border-white/20 rounded-t bg-black/50 backdrop-blur-sm p-4">
              <div className="flex items-center justify-between">
                <span>bryan@terminal:~/about$ cat profile.txt</span>
                <span>[EXECUTING...]</span>
              </div>
            </div>
          </div>

          <div className="border border-white/20 rounded-b bg-black/50 backdrop-blur-sm p-8">
            <div className="grid md:grid-cols-[60%_40%] gap-12 items-center">
              <div className="space-y-6">
                <div className="font-mono text-sm text-white/60 mb-4">
                  <span className="text-green-400">INFO:</span> Loading
                  developer profile...
                </div>

                <div className="space-y-4 text-white/90 font-mono text-sm leading-relaxed">
                  <p>
                    <span className="text-white/60">{">"}</span> Bryan is a
                    passionate Computer Science student specializing in{" "}
                    <span className="text-white font-bold">
                      full-stack development
                    </span>{" "}
                    and
                    <span className="text-white font-bold">
                      system architecture
                    </span>
                    .
                  </p>

                  <p>
                    <span className="text-white/60">{">"}</span> When not
                    crafting code, you'll find him diving into technical
                    documentation, exploring new frameworks, optimizing
                    algorithms, or contributing to open-source projects.
                  </p>

                  <p>
                    <span className="text-white/60">{">"}</span> His passion for
                    clean code and efficient solutions drives him to constantly
                    push the boundaries of what's possible in software
                    development.
                  </p>
                </div>

                <div className="mt-6">
                  <div className="text-white/60 text-sm mb-3 font-mono">
                    CORE_COMPETENCIES:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "System Design",
                      "Algorithm Optimization",
                      "Database Architecture",
                      "API Development",
                    ].map((skill, i) => (
                      <div
                        key={i}
                        className="text-xs font-mono border border-white/20 px-3 py-1 bg-black/50"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="border border-white/20 p-4 bg-black/50 backdrop-blur-sm">
                  <div className="text-xs font-mono text-white/60 mb-2">
                    PROFILE_IMAGE.JPG
                  </div>
                  <img
                    src="/bryantiamzon.JPG"
                    alt="Bryan Tiamzon"
                    className="w-full aspect-[3/4] object-cover rounded border border-white/10 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="text-xs font-mono text-white/40 mt-2">
                    Resolution: 300x300 | Status: ACTIVE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 font-mono text-sm text-white/60">
            <div className="border border-white/20 rounded-t bg-black/50 backdrop-blur-sm p-4">
              <div className="flex items-center justify-between">
                <span>bryan@terminal:~/skills$ ls -la</span>
                <span>[LISTING_SKILLS...]</span>
              </div>
            </div>
          </div>

          <div className="border border-white/20 rounded-b bg-black/50 backdrop-blur-sm p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group border border-white/10 p-6 bg-black/30 hover:bg-black/50 hover:border-white/20 transition-all duration-300"
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-mono text-sm text-white/60">
                      {skill.category}
                    </div>
                    <div className="text-xs font-mono text-white/40">
                      [{skill.level}%]
                    </div>
                  </div>

                  <h3 className="text-white font-mono font-bold mb-3">
                    {skill.name}
                  </h3>

                  <div className="mb-4">
                    <div className="h-1 bg-white/20 rounded overflow-hidden">
                      <div
                        className="h-full bg-white transition-all duration-1000 ease-out"
                        style={{
                          width:
                            activeSkill === index ? `${skill.level}%` : "0%",
                        }}
                      />
                    </div>
                  </div>

                  <p className="text-xs font-mono text-white/60 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 font-mono text-sm text-white/60">
            <div className="border border-white/20 rounded-t bg-black/50 backdrop-blur-sm p-4">
              <div className="flex items-center justify-between">
                <span>bryan@terminal:~/experience$ git log --oneline</span>
                <span>[LOADING_HISTORY...]</span>
              </div>
            </div>
          </div>

          <div className="border border-white/20 rounded-b bg-black/50 backdrop-blur-sm p-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-white/20 pl-8 pb-8 relative"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-white rounded-full transform -translate-x-[9px] animate-pulse"></div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-white/40">
                      commit {Math.random().toString(36).substr(2, 7)}
                    </span>
                    <span className="text-xs font-mono text-green-400 px-2 py-1 border border-green-400/20 bg-green-400/10">
                      {exp.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-mono font-bold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-white/80 font-mono">{exp.company}</p>
                  <p className="text-sm font-mono text-white/60">
                    {exp.period}
                  </p>

                  <p className="text-sm font-mono text-white/80 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-mono border border-white/20 bg-black/50 text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center px-8 relative z-10">
        <div className="text-center max-w-4xl">
          <div className="border border-white/20 rounded-b bg-black/50 backdrop-blur-sm p-12">
            <p className="text-lg md:text-xl mb-12 font-mono text-white/80 leading-relaxed max-w-2xl mx-auto">
              Contact me
            </p>

            <a
              href="mailto:bryxph@gmail.com"
              className="inline-block text-2xl md:text-3xl font-mono font-bold mb-12 transition-all duration-500 transform hover:scale-110 px-8 py-4 border-2 border-white bg-zinc-950 text-white hover:bg-white hover:text-zinc-950"
            >
              bryxph@gmail.com
            </a>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 border border-white/20 bg-black/30 hover:bg-black/50 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-3 font-mono text-white group-hover:animate-pulse">
                    {link.icon}
                  </div>
                  <div className="text-sm font-mono text-white/80 mb-2">
                    {link.name}
                  </div>
                  <div className="text-xs font-mono text-white/40">
                    {link.cmd}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        @keyframes glitch {
          0%,
          100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }

        .animate-glitch {
          animation: glitch 0.3s linear infinite;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #000;
        }

        ::-webkit-scrollbar-thumb {
          background: #fff;
          border-radius: 0;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #ccc;
        }

        ::selection {
          background: #fff;
          color: #000;
        }

        button:focus,
        a:focus {
          outline: 2px solid #fff;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}

export default Info;
