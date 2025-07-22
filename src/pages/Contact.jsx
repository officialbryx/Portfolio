import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import {
  BsEnvelope,
  BsLinkedin,
  BsFileText,
  BsArrowRight,
  BsCheck,
  BsCopy,
} from "react-icons/bs";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Interactive hero states
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);
  const [textAnimationIndex, setTextAnimationIndex] = useState(0);

  const myEmail = "bryxph@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/bryantiamzonph";
  const resumeUrl = "/TIAMZON_Resume-1.pdf";

  const heroTexts = ["Get in touch", "Let's connect", "Say hello"];

  // Initialize floating elements
  useEffect(() => {
    const elements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      speed: Math.random() * 2 + 1,
      direction: Math.random() * 360,
      opacity: Math.random() * 0.1 + 0.05,
    }));
    setFloatingElements(elements);
  }, []);

  // Animate floating elements
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingElements((prev) =>
        prev.map((el) => ({
          ...el,
          x: (el.x + Math.cos(el.direction) * el.speed * 0.1) % 100,
          y: (el.y + Math.sin(el.direction) * el.speed * 0.1) % 100,
          direction: el.direction + (Math.random() - 0.5) * 0.02,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTextAnimationIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for parallax effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration from environment variables
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Contact from Portfolio',
        message: formData.message,
        to_email: myEmail,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus("error");
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(myEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const contactMethods = [
    {
      icon: BsLinkedin,
      title: "LinkedIn",
      subtitle: "Connect with me",
      description: "Let's connect professionally",
      action: () => window.open(linkedInUrl, "_blank"),
      color: "blue",
      iconColor: "#0077B5", // LinkedIn brand blue
    },
    {
      icon: BsFileText,
      title: "Resume",
      subtitle: "Download PDF",
      description: "View my complete experience",
      action: () => window.open(resumeUrl, "_blank"),
      color: "gray",
      iconColor: null, // Default gray
    },
    {
      icon: () => (
        <svg className="text-2xl w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      title: "GitHub",
      subtitle: "View my code",
      description: "Check out my projects",
      action: () => window.open("https://github.com/officialbryx", "_blank"),
      color: "gray",
      iconColor: "#333333", // GitHub brand dark gray
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Interactive Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden pt-20"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHeroHovered(true)}
        onMouseLeave={() => setIsHeroHovered(false)}
      >
        {/* Floating geometric elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 backdrop-blur-sm"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              opacity: element.opacity,
              transform: `translate(-50%, -50%) scale(${
                isHeroHovered ? 1.2 : 1
              })`,
              transition: "transform 0.3s ease-out",
            }}
          />
        ))}

        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${
              mousePosition.x * 100
            }% ${mousePosition.y * 100}%, 
              rgba(59, 130, 246, 0.1) 0%, 
              rgba(147, 51, 234, 0.05) 30%, 
              transparent 70%)`,
            transition: "background 0.3s ease-out",
          }}
        />

        {/* Interactive grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
              transform: `translate(${mousePosition.x * 10}px, ${
                mousePosition.y * 10
              }px)`,
              transition: "transform 0.2s ease-out",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center">
            {/* Animated main heading */}
            <div className="relative h-[100px] mb-8 overflow-hidden">
              {heroTexts.map((text, index) => (
                <h1
                  key={index}
                  className={`absolute w-full text-[80px] leading-[1.05] font-semibold tracking-[-0.015em] text-[#1d1d1f] transition-all duration-700 ease-out ${
                    index === textAnimationIndex
                      ? "opacity-100 transform translate-y-0"
                      : index < textAnimationIndex
                      ? "opacity-0 transform -translate-y-full"
                      : "opacity-0 transform translate-y-full"
                  }`}
                  style={{
                    transform: `translateY(${
                      index === textAnimationIndex
                        ? 0
                        : index < textAnimationIndex
                        ? -100
                        : 100
                    }%) 
                               translateX(${(mousePosition.x - 0.5) * 20}px)`,
                  }}
                >
                  {text}
                </h1>
              ))}
            </div>

            {/* Animated subtitle */}
            <div className="relative overflow-hidden">
              <p
                className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto transition-all duration-300"
                style={{
                  transform: `translateY(${(mousePosition.y - 0.5) * 10}px)`,
                }}
              >
                Looking to build something{" "}
                <span className="relative">
                  <span className="bg-gradient-to-b from-red-500 via-pink-600 to-purple-900 bg-clip-text text-transparent font-medium">
                    great
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>{" "}
                together? Let's connect!
              </p>
            </div>

            {/* Interactive call-to-action buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="group px-8 py-4 bg-[#1d1d1f] text-white rounded-full font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-2xl"
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="flex items-center">
                  <BsEnvelope className="mr-2" />
                  Send Message
                  <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-[#1d1d1f] rounded-full font-medium border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={copyEmail}
              >
                <span className="flex items-center">
                  {copiedEmail ? (
                    <>
                      <BsCheck className="mr-2 text-green-500" />
                      Email Copied!
                    </>
                  ) : (
                    <>
                      <BsCopy className="mr-2 group-hover:scale-110 transition-transform" />
                      Copy Email
                    </>
                  )}
                </span>
              </button>
            </div>

            {/* Floating contact preview */}
            <div
              className={`mt-16 transition-all duration-500 ${
                isHeroHovered
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-70 transform translate-y-2"
              }`}
            >
              <div className="inline-flex items-center space-x-6 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200/50 shadow-lg">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available for work
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-[#FFA500] rounded-full mr-2"></div>
                  Response Time
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods - Apple card style */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 border transition-all duration-500 cursor-pointer ${
                hoveredCard === index
                  ? "border-gray-200 shadow-2xl transform -translate-y-2"
                  : "border-gray-100 shadow-sm hover:shadow-lg"
              }`}
              onClick={method.action}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
                    hoveredCard === index
                      ? "bg-gray-50 scale-110"
                      : "bg-gray-50"
                  }`}
                >
                  <method.icon
                    className="text-2xl transition-colors duration-300"
                    style={{
                      color:
                        method.iconColor ||
                        (hoveredCard === index ? "#1d1d1f" : "#6b7280"),
                    }}
                  />
                </div>
                <h3 className="text-lg font-medium text-[#1d1d1f] mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-1 text-sm">{method.subtitle}</p>
                <p className="text-xs text-gray-500 mb-6">
                  {method.description}
                </p>
                <div
                  className={`flex items-center transition-all duration-300 ${
                    hoveredCard === index
                      ? "text-[#1d1d1f] transform translate-x-1"
                      : "text-gray-400"
                  }`}
                >
                  <span className="text-sm font-medium mr-2">
                    {method.title === "LinkedIn"
                      ? "Connect"
                      : method.title === "GitHub"
                      ? "View"
                      : "Download"}
                  </span>
                  <BsArrowRight className="text-xs" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form - Apple style */}
        <div className="max-w-2xl mx-auto mb-16" id="contact-form">
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="px-8 py-8 text-center">
              <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-3 tracking-[-0.015em]">
                Send a message
              </h2>
              <p className="text-gray-600 font-light">
                I'll get back to you within 24 hours.
              </p>
            </div>

            <div className="px-8 pb-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#1d1d1f] focus:outline-none text-[#1d1d1f] placeholder-transparent transition-all duration-300"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      focusedField === "name" || formData.name
                        ? "-top-2 text-sm text-[#1d1d1f]"
                        : "top-4 text-gray-500"
                    }`}
                  >
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#1d1d1f] focus:outline-none text-[#1d1d1f] placeholder-transparent transition-all duration-300"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      focusedField === "email" || formData.email
                        ? "-top-2 text-sm text-[#1d1d1f]"
                        : "top-4 text-gray-500"
                    }`}
                  >
                    Email
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#1d1d1f] focus:outline-none text-[#1d1d1f] placeholder-transparent transition-all duration-300"
                  placeholder="Subject"
                />
                <label
                  htmlFor="subject"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focusedField === "subject" || formData.subject
                      ? "-top-2 text-sm text-[#1d1d1f]"
                      : "top-4 text-gray-500"
                  }`}
                >
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#1d1d1f] focus:outline-none text-[#1d1d1f] placeholder-transparent resize-none transition-all duration-300"
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focusedField === "message" || formData.message
                      ? "-top-2 text-sm text-[#1d1d1f]"
                      : "top-4 text-gray-500"
                  }`}
                >
                  Message
                </label>
              </div>

              <div className="flex items-center justify-between pt-8">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex items-center text-gray-500 hover:text-[#1d1d1f] transition-colors duration-300 group"
                >
                  {copiedEmail ? (
                    <>
                      <BsCheck className="mr-2 text-green-500" />
                      <span className="text-sm">Copied!</span>
                    </>
                  ) : (
                    <>
                      <BsCopy className="mr-2 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{myEmail}</span>
                    </>
                  )}
                </button>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                    isSubmitting
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : submitStatus === "success"
                      ? "bg-green-500 text-white"
                      : submitStatus === "error"
                      ? "bg-red-500 text-white"
                      : "bg-[#1d1d1f] hover:bg-gray-800 text-white transform hover:scale-105 hover:shadow-lg"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-400 border-t-transparent mr-2"></div>
                      <span>Sending...</span>
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <BsCheck className="mr-2" />
                      <span>Message Sent!</span>
                    </>
                  ) : submitStatus === "error" ? (
                    <>
                      <span>❌ Failed to Send</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
