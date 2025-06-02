import { useEffect, useState } from "react";

function Work() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        "The Point of Sales (POS) with Inventory System is a software solution designed to improve a company's restaurant operations such as managing inventory and processing orders. The software is specifically built to meet the company's needs with several essential modules tailored to support its operations.",
      tech: ["D3.js", "WebGL", "Node.js"],
      gradient: "from-emerald-600/20 to-teal-600/20",
    },
  ];

  return (
    <div className="min-h-screen">
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
            <span className="block">My</span>
            <span className="block text-gray-400">Work</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-lg leading-relaxed">
            A collection of projects that reflect my passion for technology and
            innovation
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-thin mb-20 text-center">
            Featured Projects
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
    </div>
  );
}

export default Work;
