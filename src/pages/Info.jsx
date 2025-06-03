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
  const canvasRef = useRef(null);

  const roles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Creative Thinker",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Catppuccin Mocha Colors
  const colors = {
    base: "#1e1e2e",
    mantle: "#181825",
    crust: "#11111b",
    text: "#cdd6f4",
    subtext0: "#a6adc8",
    subtext1: "#bac2de",
    surface0: "#313244",
    surface1: "#45475a",
    surface2: "#585b70",
    overlay0: "#6c7086",
    overlay1: "#7f849c",
    overlay2: "#9399b2",
    blue: "#89b4fa",
    lavender: "#b4befe",
    sapphire: "#74c7ec",
    sky: "#89dceb",
    teal: "#94e2d5",
    green: "#a6e3a1",
    yellow: "#f9e2af",
    peach: "#fab387",
    maroon: "#eba0ac",
    red: "#f38ba8",
    mauve: "#cba6f7",
    pink: "#f5c2e7",
    flamingo: "#f2cdcd",
    rosewater: "#f5e0dc",
  };

  // Animated background particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: [colors.blue, colors.mauve, colors.pink, colors.sky][
          Math.floor(Math.random() * 4)
        ],
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Mouse interaction
        const dx = mousePos.x - particle.x;
        const dy = mousePos.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          particle.x -= dx * 0.01;
          particle.y -= dy * 0.01;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle =
          particle.color +
          Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, "0");
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx2 = particles[j].x - particle.x;
          const dy2 = particles[j].y - particle.y;
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distance2 < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = colors.blue + "20";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mousePos]);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let i = 0;

    const typeInterval = setInterval(() => {
      if (i < currentRole.length) {
        setTypedText(currentRole.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (i > 0) {
              setTypedText(currentRole.slice(0, i - 1));
              i--;
            } else {
              clearInterval(deleteInterval);
              setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRoleIndex]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Update time every second
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
      color: colors.blue,
    },
    {
      name: "TypeScript",
      level: 85,
      description:
        "Strong experience with type-safe JavaScript development and large-scale applications",
      color: colors.sapphire,
    },
    {
      name: "UI/UX Design",
      level: 95,
      description:
        "Expert level knowledge in user interface design, prototyping, and user experience research",
      color: colors.mauve,
    },
    {
      name: "Node.js & APIs",
      level: 80,
      description:
        "Solid foundation in backend development, REST APIs, and database integration",
      color: colors.green,
    },
    {
      name: "Python & AI",
      level: 88,
      description:
        "Comprehensive understanding of Python development and machine learning fundamentals",
      color: colors.yellow,
    },
    {
      name: "Cloud & DevOps",
      level: 82,
      description:
        "Specialized experience in AWS, Docker, and CI/CD pipeline development",
      color: colors.peach,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/bryantiamzon",
      icon: "💼",
      color: colors.blue,
    },
    {
      name: "GitHub",
      href: "https://github.com/bryantiamzon",
      icon: "🔗",
      color: colors.mauve,
    },
    {
      name: "Portfolio",
      href: "https://bryantiamzon.dev",
      icon: "🌐",
      color: colors.teal,
    },
    { name: "Resume", href: "/resume.pdf", icon: "📄", color: colors.peach },
  ];

  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Ateneo Innovation Center",
      period: "Feb 2025 - May 2025",
      description:
        "Developing innovative web applications using React and Node.js, collaborating with cross-functional teams to deliver user-centered solutions for academic and research projects.",
      tech: ["React", "Node.js", "MongoDB", "Figma"],
    },
  ];

  // Interactive floating elements
  const FloatingElements = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-pulse"
          style={{
            left: `${15 + i * 12}%`,
            top: `${25 + i * 8}%`,
            backgroundColor: [
              colors.blue,
              colors.mauve,
              colors.pink,
              colors.sky,
              colors.teal,
              colors.green,
              colors.yellow,
              colors.peach,
            ][i],
            transform: `translate(${mousePos.x * 0.02 * (i + 1)}px, ${
              mousePos.y * 0.02 * (i + 1)
            }px)`,
            animationDelay: `${i * 0.3}s`,
            transition: "transform 0.4s ease-out",
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );

  // Enhanced glowing cursor
  const GlowCursor = () => (
    <div
      className="fixed pointer-events-none z-50 w-12 h-12 rounded-full mix-blend-screen"
      style={{
        left: mousePos.x - 24,
        top: mousePos.y - 24,
        background: `radial-gradient(circle, ${colors.mauve}80 0%, ${colors.blue}40 50%, transparent 100%)`,
        transition: "transform 0.1s ease-out",
        filter: "blur(2px)",
      }}
    />
  );

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{ backgroundColor: colors.base, color: colors.text }}
    >
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `linear-gradient(135deg, ${colors.base} 0%, ${colors.mantle} 50%, ${colors.crust} 100%)`,
        }}
      />

      <FloatingElements />
      <GlowCursor />

      {/* Enhanced Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative z-10"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 40%, ${colors.mauve}20 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${colors.blue}15 0%, transparent 50%), radial-gradient(circle at 40% 80%, ${colors.teal}10 0%, transparent 50%)`,
          }}
        />

        <div
          className={`text-center transform transition-all duration-2000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          {/* Time and location */}
          <div
            className="mb-8 text-sm font-mono opacity-60"
            style={{ color: colors.subtext0 }}
          >
            <span>
              {currentTime.toLocaleTimeString("en-US", {
                timeZone: "Asia/Manila",
                hour12: false,
              })}{" "}
              • Taguig City, PH
            </span>
          </div>

          <div className="mb-12 relative">
            <h1 className="text-7xl md:text-[10rem] font-bold mb-4 leading-none tracking-wider relative">
              <span
                className="inline-block hover:scale-110 transition-all duration-700 cursor-default relative"
                style={{
                  background: `linear-gradient(135deg, ${colors.text} 0%, ${colors.blue} 50%, ${colors.mauve} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 20px rgba(137, 180, 250, 0.3))",
                }}
              >
                Bryan
              </span>
            </h1>
            <h1 className="text-7xl md:text-[10rem] font-bold leading-none tracking-wider">
              <span
                className="inline-block hover:scale-110 transition-all duration-700 cursor-default"
                style={{
                  background: `linear-gradient(135deg, ${colors.mauve} 0%, ${colors.pink} 50%, ${colors.rosewater} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 20px rgba(203, 166, 247, 0.3))",
                }}
              >
                Tiamzon
              </span>
            </h1>
          </div>

          {/* Animated role typewriter */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <span
              className="text-2xl md:text-3xl font-light tracking-wide"
              style={{ color: colors.subtext1 }}
            >
              {typedText}
              <span className="animate-pulse" style={{ color: colors.mauve }}>
                |
              </span>
            </span>
          </div>

          <div className="space-y-4 mb-16">
            <p
              className="text-xl md:text-2xl font-light tracking-wide"
              style={{ color: colors.subtext0 }}
            >
              Computer Science Student
            </p>
            <div
              className="flex items-center justify-center gap-4 text-lg"
              style={{ color: colors.overlay1 }}
            >
              <span>🎓 Passionate Learner</span>
              <span>•</span>
              <span>💻 Code Enthusiast</span>
              <span>•</span>
              <span>🎨 Design Lover</span>
            </div>
          </div>

          {/* Interactive CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              className="group px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-2 backdrop-blur-sm"
              style={{
                backgroundColor: colors.mauve + "20",
                borderColor: colors.mauve,
                color: colors.text,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.mauve;
                e.target.style.color = colors.base;
                e.target.style.boxShadow = `0 10px 30px ${colors.mauve}40`;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = colors.mauve + "20";
                e.target.style.color = colors.text;
                e.target.style.boxShadow = "none";
              }}
            >
              <span className="flex items-center gap-2">
                View My Work
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </button>

            <button
              className="group px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-2 backdrop-blur-sm"
              style={{
                backgroundColor: "transparent",
                borderColor: colors.blue,
                color: colors.blue,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.blue + "20";
                e.target.style.boxShadow = `0 10px 30px ${colors.blue}30`;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.boxShadow = "none";
              }}
            >
              <span className="flex items-center gap-2">📧 Get In Touch</span>
            </button>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span
                className="text-xs font-mono opacity-60"
                style={{ color: colors.subtext0 }}
              >
                Scroll to explore
              </span>
              <div
                className="w-6 h-10 border-2 rounded-full flex justify-center relative overflow-hidden"
                style={{ borderColor: colors.mauve + "60" }}
              >
                <div
                  className="w-1 h-3 rounded-full mt-2 animate-pulse"
                  style={{ backgroundColor: colors.mauve }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="min-h-screen py-32 px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-6xl font-bold mb-20 text-center drop-shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${colors.text} 0%, ${colors.blue} 50%, ${colors.mauve} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Me
          </h2>
        </div>
        <div
          className="max-w-5xl mx-auto rounded-2xl p-8 backdrop-blur-xl transform-gpu transition-all duration-500 hover:scale-[1.02] border"
          style={{
            backgroundColor: colors.surface0 + "40",
            borderColor: colors.surface2,
            boxShadow: `0 25px 50px ${colors.crust}80`,
          }}
        >
          <div className="grid md:grid-cols-[60%_40%] gap-12 items-center">
            <div className="space-y-8">
              <div
                className="space-y-6 leading-relaxed text-lg"
                style={{ color: colors.subtext1 }}
              >
                <p className="text-xl leading-relaxed">
                  Bryan is a passionate Computer Science student based in Metro
                  Manila, who thrives on creating
                  <span
                    className="font-semibold mx-2"
                    style={{ color: colors.mauve }}
                  >
                    digital experiences
                  </span>
                  that bridge technology and human needs. When not coding,
                  you'll find him exploring books, going on solo adventures,
                  staying fit through hypertrophy training, or expressing
                  creativity through art.
                </p>
                <p>
                  From childhood, art and design have been his compass. The
                  transformative power of exceptional design continues to
                  inspire him, often sparking that familiar thrill of creative
                  excitement that drives his work today.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {[
                    "Creative Problem Solving",
                    "Human-Centered Design",
                    "Full-Stack Development",
                    "UI/UX Research",
                  ].map((interest, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border"
                      style={{
                        backgroundColor: colors.surface1 + "60",
                        borderColor: colors.surface2,
                        color: colors.subtext1,
                      }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative h-full flex items-center justify-center">
              <div
                className="relative rounded-2xl overflow-hidden w-72 h-80 transform hover:scale-105 transition-all duration-500 border-4"
                style={{
                  borderColor: colors.mauve + "60",
                  boxShadow: `0 20px 40px ${colors.mauve}20`,
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${colors.mauve}20 0%, ${colors.blue}20 100%)`,
                  }}
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                  alt="Bryan Tiamzon"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section className="py-32 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-6xl font-bold mb-20 text-center"
            style={{
              background: `linear-gradient(135deg, ${colors.text} 0%, ${colors.blue} 50%, ${colors.mauve} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative p-6 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:scale-105 border cursor-pointer"
                style={{
                  backgroundColor: colors.surface0 + "30",
                  borderColor:
                    activeSkill === index ? skill.color : colors.surface2,
                  boxShadow:
                    activeSkill === index
                      ? `0 20px 40px ${skill.color}30`
                      : `0 10px 20px ${colors.crust}40`,
                }}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: colors.text }}
                  >
                    {skill.name}
                  </h3>
                  <span
                    className="text-sm font-mono"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>

                <div className="mb-4">
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ backgroundColor: colors.surface2 }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: activeSkill === index ? `${skill.level}%` : "0%",
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}60`,
                      }}
                    />
                  </div>
                </div>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.subtext0 }}
                >
                  {skill.description}
                </p>

                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}10 0%, transparent 100%)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Experience Timeline */}
      <section className="min-h-screen py-32 px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-6xl font-bold mb-20 text-center"
            style={{
              background: `linear-gradient(135deg, ${colors.text} 0%, ${colors.blue} 50%, ${colors.mauve} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Experience
          </h2>

          <div className="relative">
            <div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 rounded-full transform md:-translate-x-1/2"
              style={{
                background: `linear-gradient(to bottom, transparent, ${colors.mauve}, transparent)`,
              }}
            />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-16 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
                }`}
              >
                <div
                  className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full transform -translate-x-1/2 hover:scale-125 transition-all duration-300 border-4"
                  style={{
                    backgroundColor: colors.mauve,
                    borderColor: colors.base,
                    boxShadow: `0 0 20px ${colors.mauve}60`,
                  }}
                />

                <div
                  className={`ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-16" : "md:ml-16"
                  }`}
                >
                  <div
                    className="group p-8 rounded-2xl transition-all duration-500 backdrop-blur-xl hover:scale-105 border"
                    style={{
                      backgroundColor: colors.surface0 + "40",
                      borderColor: colors.surface2,
                      boxShadow: `0 20px 40px ${colors.crust}60`,
                    }}
                  >
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-1 space-y-4">
                        <h3
                          className="text-2xl font-bold group-hover:scale-105 transition-transform duration-300"
                          style={{ color: colors.text }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          className="text-lg font-medium"
                          style={{ color: colors.blue }}
                        >
                          {exp.company}
                        </p>
                        <p
                          className="text-sm font-mono"
                          style={{ color: colors.subtext0 }}
                        >
                          {exp.period}
                        </p>
                        <p
                          className="leading-relaxed"
                          style={{ color: colors.subtext1 }}
                        >
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full text-xs font-medium border"
                              style={{
                                backgroundColor: colors.surface1 + "60",
                                borderColor: colors.surface2,
                                color: colors.subtext1,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div
                        className="w-full md:w-32 h-32 overflow-hidden rounded-xl border-2"
                        style={{ borderColor: colors.surface2 }}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop"
                          alt="Ateneo Innovation Center"
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="min-h-screen flex items-center justify-center px-8 relative z-10">
        <div className="text-center max-w-4xl">
          <h2
            className="text-7xl md:text-9xl font-bold mb-16"
            style={{
              background: `linear-gradient(135deg, ${colors.text} 0%, ${colors.mauve} 50%, ${colors.pink} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 30px rgba(203, 166, 247, 0.3))",
            }}
          >
            Let's Create
          </h2>

          <p
            className="text-xl md:text-2xl mb-20 leading-relaxed font-light max-w-2xl mx-auto"
            style={{ color: colors.subtext1 }}
          >
            Ready to bring your ideas to life? Let's collaborate and build
            something amazing together. I'm always excited to work on innovative
            projects and meaningful solutions.
          </p>

          <a
            href="mailto:bryan.tiamzon@example.com"
            className="inline-block text-3xl md:text-4xl font-light mb-16 transition-all duration-500 transform hover:scale-110 px-8 py-4 rounded-2xl backdrop-blur-xl border-2"
            style={{
              color: colors.text,
              borderColor: colors.mauve + "60",
              backgroundColor: colors.surface0 + "30",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = colors.mauve + "20";
              e.target.style.borderColor = colors.mauve;
              e.target.style.boxShadow = `0 20px 40px ${colors.mauve}40`;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = colors.surface0 + "30";
              e.target.style.borderColor = colors.mauve + "60";
              e.target.style.boxShadow = "none";
            }}
          >
            bryan.tiamzon@example.com
          </a>

          {/* Enhanced Social Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-4 backdrop-blur-xl border-2"
                style={{
                  backgroundColor: colors.surface0 + "30",
                  borderColor: colors.surface2,
                  animationDelay: `${index * 150}ms`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = link.color + "20";
                  e.target.style.borderColor = link.color;
                  e.target.style.boxShadow = `0 25px 50px ${link.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = colors.surface0 + "30";
                  e.target.style.borderColor = colors.surface2;
                  e.target.style.boxShadow = "none";
                }}
              >
                <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {link.icon}
                </div>
                <span
                  className="text-sm font-medium transition-all duration-300"
                  style={{ color: colors.subtext1 }}
                >
                  {link.name}
                </span>

                {/* Animated border */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${link.color}15 0%, transparent 100%)`,
                  }}
                />
              </a>
            ))}
          </div>

          {/* Fun footer */}
          <div
            className="mt-20 pt-12 border-t"
            style={{ borderColor: colors.surface2 }}
          >
            <p
              className="text-sm font-mono opacity-60"
              style={{ color: colors.subtext0 }}
            >
              Made with 💜 using React • Catppuccin Mocha Theme •{" "}
              {new Date().getFullYear()}
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: colors.green }}
              />
              <span className="text-xs" style={{ color: colors.subtext0 }}>
                Currently available for new opportunities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-rotate {
          animation: rotate 20s linear infinite;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: ${colors.surface0};
        }

        ::-webkit-scrollbar-thumb {
          background: ${colors.mauve};
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${colors.blue};
        }

        /* Selection color */
        ::selection {
          background: ${colors.mauve}40;
          color: ${colors.text};
        }

        /* Focus styles */
        button:focus,
        a:focus {
          outline: 2px solid ${colors.mauve};
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}

export default Info;
