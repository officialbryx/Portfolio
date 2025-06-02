import { useState, useEffect } from "react";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Simulate loading
    setTimeout(() => setIsLoaded(true), 1000);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target);
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "HireFlow",
      category: "AI, LLM, Machine Learning",
      year: "2025",
      description:
        "An advanced Applicant Tracking System (ATS) that leverages machine learning algorithms (JobBERT and XGBoost) to revolutionize the recruitment process. This intelligent system automates resume screening, candidate ranking, and shortlisting, enabling organizations to make data-driven hiring decisions efficiently.",
      tech: ["Python", "Deepseek", "React", "TensorFlow"],
      gradient: "from-blue-600/20 to-purple-600/20",
    },
    {
      title: "UnlockX - Family Reunification Platform",
      category: "lorem ipsum",
      year: "2025",
      description: "Crafting stories that unfold through user interaction",
      tech: ["Next.js", "Three.js", "Framer Motion"],
      gradient: "from-orange-600/20 to-red-600/20",
    },
    {
      title: "Ward",
      category: "lorem ipsum",
      year: "2025",
      description: "Understanding patterns in the spaces between data",
      tech: ["R", "Python", "Observable"],
      gradient: "from-indigo-600/20 to-blue-600/20",
    },
    {
      title:
        "Point of Sales with Inventory System for Moon Hey Hotpot and Grill",
      category: "lorem ipsum",
      year: "2024",
      description:
        "The Point of Sales (POS) with Inventory System is a software solution designed to improve a company's restaurant operations such as managing inventory and processing orders. The software is specifically built to meet the company's needs with several essential modules tailored to support its operations. ",
      tech: ["D3.js", "WebGL", "Node.js"],
      gradient: "from-emerald-600/20 to-teal-600/20",
    },
  ];

  const skills = [
    { name: "Machine Learning", level: 90 },
    { name: "Data Visualization", level: 85 },
    { name: "Python", level: 95 },
    { name: "React", level: 80 },
    { name: "Statistical Analysis", level: 88 },
    { name: "Deep Learning", level: 82 },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-1000 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="w-1 h-32 bg-white animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 right-0 z-40 p-8">
        <div className="flex flex-col space-y-2">
          {["Intro", "Work", "Skills", "Contact"].map((item, index) => (
            <div key={item} className="flex items-center space-x-3">
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === index ? "bg-white" : "bg-gray-600"
                }`}
              />
              <span
                className={`text-sm transition-all duration-300 ${
                  activeSection === index ? "text-white" : "text-gray-500"
                }`}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </nav>

      {/* Header */}
      <header className="fixed top-0 left-0 z-40 p-8">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-400 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">BT</span>
          </div>
          <div>
            <h1 className="text-lg font-light">Bryan Tiamzon</h1>
            <p className="text-gray-400 text-xs">Data Science</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div
          className="text-center transform transition-all duration-1000"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: Math.max(0, 1 - scrollY / 800),
          }}
        >
          <h2 className="text-7xl md:text-9xl font-thin mb-8 leading-none">
            <span className="block">Bryan</span>
            <span className="block text-gray-400">Tiamzon</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-lg leading-relaxed">
            Computer Science
            <br />I listen, translate, and illuminate.
          </p>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-thin mb-20 text-center">
            Selected Works
          </h3>
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`flex flex-col lg:flex-row items-center gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div
                    className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-2xl relative overflow-hidden group cursor-pointer`}
                  >
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-300">View Project</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <h4 className="text-4xl font-thin">{project.title}</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 border border-gray-700 rounded-full text-sm text-gray-300"
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

      {/* Skills & Philosophy Section */}
      <section className="min-h-screen py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h3 className="text-3xl font-thin mb-12">Capabilities</h3>
              <div className="space-y-8">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-px bg-gray-800 relative">
                      <div
                        className="h-px bg-white absolute left-0 top-0 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-thin mb-12">Philosophy</h3>
              <div className="space-y-8 text-gray-400 leading-relaxed">
                <p>
                  Data is not just numbers. It's the digital DNA of human
                  behavior, the poetry of patterns, the silent symphony of
                  statistics.
                </p>
                <p>
                  I believe in the art of subtraction — removing noise to reveal
                  signal, complexity to find simplicity, chaos to discover
                  order.
                </p>
                <p>
                  Every visualization tells a story. Every model holds a truth.
                  Every algorithm dreams of understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center max-w-2xl">
          <h3 className="text-5xl font-thin mb-12">Let's Create</h3>
          <p className="text-gray-400 text-xl mb-16 leading-relaxed">
            Have a story that needs telling? Data that needs understanding?
            Let's turn complexity into clarity.
          </p>

          <div className="space-y-8">
            <a
              href="mailto:bryan@example.com"
              className="block text-2xl hover:text-gray-400 transition-colors duration-300 mb-8"
            >
              bryan@example.com
            </a>

            <div className="flex justify-center space-x-12">
              {[
                { name: "LinkedIn", href: "#" },
                { name: "GitHub", href: "#" },
                { name: "Resume", href: "#" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300"
                >
                  <span>{link.name}</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-gray-500 text-sm">
          <p>© 2025 Bryan Tiamzon</p>
          <p>Crafted with intention</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
