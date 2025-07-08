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

  const myEmail = "bryxp@gmail.com"; // Replace with your actual email
  const linkedInUrl = "https://linkedin.com/in/bryxp"; // Replace with your LinkedIn URL
  const resumeUrl = "/TIAMZON_Resume-1.pdf"; // This points to your resume in the public folder

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

    // Create mailto link with form data
    const subject = encodeURIComponent(
      formData.subject || "Contact from Portfolio"
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open default email client
    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setSubmitStatus("success");

    // Reset form after 3 seconds
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
      icon: BsEnvelope,
      title: "Email",
      subtitle: myEmail,
      description: "Send me an email directly",
      action: () => (window.location.href = `mailto:${myEmail}`),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: BsLinkedin,
      title: "LinkedIn",
      subtitle: "Connect with me",
      description: "Let's connect professionally",
      action: () => window.open(linkedInUrl, "_blank"),
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: BsFileText,
      title: "Resume",
      subtitle: "Download PDF",
      description: "View my complete experience",
      action: () => window.open(resumeUrl, "_blank"),
      color: "from-gray-600 to-gray-700",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and
              connecting with fellow professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 cursor-pointer transform hover:-translate-y-2"
              onClick={method.action}
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <method.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600 mb-1">{method.subtitle}</p>
              <p className="text-sm text-gray-500 mb-4">{method.description}</p>
              <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                <span className="text-sm font-medium">
                  {method.title === "Email"
                    ? "Send Email"
                    : method.title === "LinkedIn"
                    ? "Connect"
                    : "Download"}
                </span>
                <BsArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Send a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project, questions, or just say hello!"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <BsCheck className="mr-2" />
                      Email copied!
                    </>
                  ) : (
                    <>
                      <BsCopy className="mr-2" />
                      Copy email: {myEmail}
                    </>
                  )}
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : submitStatus === "success"
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-blue-600 hover:bg-blue-700 transform hover:scale-105"
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Sending...
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <BsCheck className="mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <BsArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Currently available for freelance work and new opportunities
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Available for work
            </div>
            <div className="flex items-center text-gray-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Response within 24h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
