import { useEffect, useState, useRef } from "react";

function Info() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSkill, setActiveSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  const roles = ["Full Stack Developer", "Data Scientist"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Role switching effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: "React & Next.js",
      level: 90,
      description:
        "Building modern web applications with cutting-edge React ecosystem",
      category: "Frontend",
      color: "from-blue-400 to-blue-600",
      icon: "⚛️",
    },
    {
      name: "TypeScript",
      level: 85,
      description: "Type-safe development for scalable applications",
      category: "Language",
      color: "from-blue-500 to-indigo-600",
      icon: "📘",
    },
    {
      name: "Node.js & APIs",
      level: 88,
      description: "Server-side JavaScript and RESTful API development",
      category: "Backend",
      color: "from-green-400 to-green-600",
      icon: "🟢",
    },
    {
      name: "Python & AI",
      level: 82,
      description: "Machine learning and data science with Python",
      category: "AI/ML",
      color: "from-yellow-400 to-orange-500",
      icon: "🐍",
    },
    {
      name: "DevOps & Cloud",
      level: 75,
      description: "AWS, Docker, and modern deployment strategies",
      category: "Infrastructure",
      color: "from-purple-400 to-purple-600",
      icon: "☁️",
    },
    {
      name: "Database Design",
      level: 80,
      description: "Efficient data modeling and optimization",
      category: "Database",
      color: "from-red-400 to-red-600",
      icon: "🗄️",
    },
  ];

  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Ateneo Innovation Center",
      period: "Feb 2025 - May 2025",
      description:
        "Building scalable web applications and implementing modern development practices",
      tech: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
      status: "Active",
    },
  ];

  return (
    <div
      className="min-h-screen bg-white"
      style={{
        fontFamily:
          "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
      }}
    >
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-20"
        ref={heroRef}
      >
        <div className="text-center max-w-4xl mx-auto px-6 fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-[#1d1d1f] mb-6 tracking-[-0.015em] leading-none">
            <span
              className="block"
              style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
              Bryan Tiamzon
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-600 mb-4 font-light">
            <span className="transition-all duration-1000">
              {roles[currentRoleIndex]}
            </span>
          </div>

          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Crafting exceptional digital experiences with modern technology and
            thoughtful design
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
              View My Work
            </button>
            <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-4 tracking-[-0.015em]">
              Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My professional journey in tech
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-gray-600 mb-2">{exp.company}</p>
                    <p className="text-gray-500">{exp.period}</p>
                  </div>

                  {exp.status === "Active" && (
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-green-600">
                        Active
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fade-in.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

export default Info;
