import { useEffect, useState, useRef } from "react";

function Info() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSkill, setActiveSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Placeholder data - replace with your actual information
  const skills = [
    {
      name: "[YOUR SKILL 1]",
      level: 90,
      description: "Advanced proficiency in [describe your expertise]",
    },
    {
      name: "[YOUR SKILL 2]",
      level: 85,
      description: "Strong experience with [describe your experience]",
    },
    {
      name: "[YOUR SKILL 3]",
      level: 95,
      description: "Expert level knowledge in [describe your mastery]",
    },
    {
      name: "[YOUR SKILL 4]",
      level: 80,
      description: "Solid foundation in [describe your capabilities]",
    },
    {
      name: "[YOUR SKILL 5]",
      level: 88,
      description: "Comprehensive understanding of [describe your knowledge]",
    },
    {
      name: "[YOUR SKILL 6]",
      level: 82,
      description: "Specialized experience in [describe your specialization]",
    },
  ];

  const socialLinks = [
    { name: "[LINKEDIN]", href: "[YOUR_LINKEDIN_URL]", icon: "💼" },
    { name: "[GITHUB]", href: "[YOUR_GITHUB_URL]", icon: "🔗" },
    { name: "[PORTFOLIO]", href: "[YOUR_PORTFOLIO_URL]", icon: "🌐" },
    { name: "[RESUME]", href: "[YOUR_RESUME_URL]", icon: "📄" },
  ];

  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Ateneo Innovation Center",
      period: "Feb 2025 - May 2025",
      description: "[Brief description of your role and achievements]",
    },
  ];

  // Dynamic background elements
  const FloatingElements = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            transform: `translate(${mousePos.x * 0.01 * (i + 1)}px, ${
              mousePos.y * 0.01 * (i + 1)
            }px)`,
            animationDelay: `${i * 0.5}s`,
            transition: "transform 0.3s ease-out",
          }}
        />
      ))}
    </div>
  );

  // Glowing cursor effect
  const GlowCursor = () => (
    <div
      className="fixed pointer-events-none z-50 w-8 h-8 rounded-full mix-blend-difference"
      style={{
        left: mousePos.x - 16,
        top: mousePos.y - 16,
        background:
          "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
        transition: "transform 0.1s ease-out",
      }}
    />
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <FloatingElements />
      <GlowCursor />

      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-800/10" />

        <div
          className={`text-center transform transition-all duration-2000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <div className="mb-8 relative">
            <h1 className="text-8xl md:text-[12rem] font-thin mb-4 leading-none tracking-wider">
              <span className="inline-block hover:scale-105 transition-transform duration-500 cursor-default">
                Bryan
              </span>
            </h1>
            <h1 className="text-8xl md:text-[12rem] font-thin leading-none tracking-wider">
              <span className="inline-block hover:scale-105 transition-transform duration-500 cursor-default text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
                Tiamzon
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <p className="text-gray-400 text-xl md:text-2xl font-light tracking-wide">
              Computer Science
            </p>
            <p className="text-gray-500 text-lg font-light">
              Taguig City, Philippines
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen py-32 px-8 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-thin mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            About
          </h2>
        </div>
        <div className="max-w-5xl mx-auto border border-gray-800 rounded-lg p-8 backdrop-blur-sm bg-gray-900/30 hover:bg-gray-900/50 transform-gpu transition-all duration-300 hover:border-gray-600">
          <div className="grid md:grid-cols-[60%_40%] gap-8 items-start">
            <div className="space-y-8">
              <div className="space-y-6 text-gray-300 leading-relaxed text-medium">
                <p>
                  Bryan is a Computer Science student based in KA, who is
                  passionate about creating digital products and visual
                  experiences with a human-centred approach. Outside of coding,
                  you can find him reading books, going on solo rides,
                  practicing hypertrophy training, or creating art.
                </p>
                <p>
                  From a young age, he was captivated by art and design, finding
                  inspiration in everything around him. The impact of great
                  design profoundly moved him, often giving him a thrill of
                  excitement.
                </p>
              </div>
            </div>
            <div className="relative h-full flex items-center pr-4">
              <div className="overflow-hidden rounded-lg w-[90%] h-[250px]">
                <img
                  src="/IMG_5556.jpg"
                  alt="Bryan"
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="min-h-screen py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-thin mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Work Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-16 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 hover:scale-125 transition-transform duration-300" />

                <div
                  className={`ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-16" : "md:ml-16"
                  }`}
                >
                  <div className="group p-6 rounded-lg border border-gray-800 hover:border-gray-600 bg-gray-900/30 hover:bg-gray-900/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300">
                          {exp.role}
                        </h3>
                        <p className="text-gray-400 mb-2">{exp.company}</p>
                        <p className="text-sm text-gray-500 mb-4">
                          {exp.period}
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                      <div className="w-full md:w-32 h-32 overflow-hidden rounded-lg">
                        <img
                          src="/aic.jpg"
                          alt="Ateneo Innovation Center"
                          className="w-full h-full object-cover object-center"
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

      {/* Contact Section with Magnetic Effect */}
      <section className="min-h-screen flex items-center justify-center px-8 relative">
        <div className="text-center max-w-3xl">
          <h2 className="text-6xl md:text-8xl font-thin mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
            Let's Connect
          </h2>

          <p className="text-gray-400 text-xl md:text-2xl mb-20 leading-relaxed font-light">
            [YOUR CALL TO ACTION - Replace with your personal invitation to
            connect]
          </p>

          {/* Email with hover effect */}
          <a
            href="mailto:[YOUR_EMAIL]"
            className="inline-block text-3xl md:text-4xl font-light mb-16 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-gray-300 transition-all duration-500 transform hover:scale-105"
          >
            [YOUR_EMAIL@DOMAIN.COM]
          </a>

          {/* Social Links with Magnetic Hover */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gray-900/20 hover:bg-gray-900/40"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm">
                  {link.name}
                </span>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/5 to-gray-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Info;
