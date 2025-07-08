import { useState, useEffect } from "react";
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

  const myEmail = "bryxph@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/bryantiamzonph";
  const resumeUrl = "/TIAMZON_Resume-1.pdf";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(
      formData.subject || "Contact from Portfolio"
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setSubmitStatus("success");

    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus(null);
    }, 3000);
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
    },
    {
      icon: BsFileText,
      title: "Resume",
      subtitle: "Download PDF",
      description: "View my complete experience",
      action: () => window.open(resumeUrl, "_blank"),
      color: "gray",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Apple style minimal */}
      <div className="relative bg-white">
        <div className="max-w-4xl mx-auto px-6 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
              Get in touch.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's start a conversation.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods - Apple card style */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 border transition-all duration-500 cursor-pointer ${
                hoveredCard === index
                  ? "border-blue-200 shadow-2xl transform -translate-y-2"
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
                      ? "bg-blue-50 scale-110"
                      : "bg-gray-50"
                  }`}
                >
                  <method.icon
                    className={`text-2xl transition-colors duration-300 ${
                      hoveredCard === index ? "text-blue-600" : "text-gray-600"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-1 text-sm">{method.subtitle}</p>
                <p className="text-xs text-gray-500 mb-6">
                  {method.description}
                </p>
                <div
                  className={`flex items-center transition-all duration-300 ${
                    hoveredCard === index
                      ? "text-blue-600 transform translate-x-1"
                      : "text-gray-400"
                  }`}
                >
                  <span className="text-sm font-medium mr-2">
                    {method.title === "LinkedIn" ? "Connect" : "Download"}
                  </span>
                  <BsArrowRight className="text-xs" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form - Apple style */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="px-8 py-8 text-center">
              <h2 className="text-3xl font-light text-gray-900 mb-3">
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
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900 placeholder-transparent transition-all duration-300"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      focusedField === "name" || formData.name
                        ? "-top-2 text-sm text-blue-600"
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
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900 placeholder-transparent transition-all duration-300"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      focusedField === "email" || formData.email
                        ? "-top-2 text-sm text-blue-600"
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
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900 placeholder-transparent transition-all duration-300"
                  placeholder="Subject"
                />
                <label
                  htmlFor="subject"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focusedField === "subject" || formData.subject
                      ? "-top-2 text-sm text-blue-600"
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
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900 placeholder-transparent resize-none transition-all duration-300"
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focusedField === "message" || formData.message
                      ? "-top-2 text-sm text-blue-600"
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
                  className="flex items-center text-gray-500 hover:text-gray-900 transition-colors duration-300 group"
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
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                    isSubmitting
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : submitStatus === "success"
                      ? "bg-green-500 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 hover:shadow-lg"
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
                      <span>Sent!</span>
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

        {/* Status indicators - Apple style */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center space-x-12">
            <div className="flex items-center text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-light">Available for work</span>
            </div>
            <div className="flex items-center text-gray-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-sm font-light">Quick response</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
