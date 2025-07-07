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

  // Mouse move effect for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
    <div className="min-h-screen bg-white text-gray-800 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-20" ref={heroRef}>
          <h1 className="text-4xl font-bold mb-6">
            <span className="text-gray-800">Hello, I'm</span>{" "}
            <span className="text-black">Bryan Tiamzon</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            {roles[currentRoleIndex]}
            <span className="animate-blink ml-1">|</span>
          </p>

          {/* Social Links */}
          <div className="space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-600 hover:text-black transition-colors group"
              >
                <span className="text-xl w-8">{link.icon}</span>
                <span className="font-mono text-sm">{link.cmd}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  ⟶
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            <span className="text-gray-400">// </span>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all duration-300 bg-gray-50"
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {skill.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {skill.description}
                </p>
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gray-800 transition-all duration-500"
                    style={{
                      width:
                        activeSkill === skill.name ? `${skill.level}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            <span className="text-gray-400">// </span>
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.role}
                className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all duration-300 bg-gray-50"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {exp.role}
                    </h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                    {exp.status === "Active" && (
                      <span className="ml-2 inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        Active
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Info;
