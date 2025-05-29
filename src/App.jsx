import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full p-6 flex justify-between items-center z-50">
        <div className="flex items-center space-x-4">
          <img src="/B.png" alt="Bryan Tiamzon" className="h-12 w-12" />
          <div className="flex flex-col">
            <h1 className="text-2xl font-light text-white">Bryan Tiamzon</h1>
            <p className="text-gray-400 text-sm">Data Science</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-white hover:text-gray-400 transition-colors"
          >
            <span>LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </a>
          <a
            href="/your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-white hover:text-gray-400 transition-colors"
          >
            <span>Resume</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 px-6">
        <section className="min-h-screen flex flex-col justify-center">
          <h2 className="text-6xl md:text-8xl font-light mb-6">
            Creative
            <br />
            Developer
          </h2>
          <p className="text-gray-400 max-w-md">
            Crafting digital experiences through clean and minimalist design.
          </p>
        </section>

        {/* Projects Section */}
        <section className="min-h-screen py-20">
          <h3 className="text-2xl font-light mb-12">Selected Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Cards */}
            <div className="group cursor-pointer">
              <div className="aspect-video bg-gray-900 mb-4 overflow-hidden">
                {/* Add project image here */}
              </div>
              <h4 className="text-xl mb-2">Project One</h4>
              <p className="text-gray-400">Web Development</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-video bg-gray-900 mb-4 overflow-hidden">
                {/* Add project image here */}
              </div>
              <h4 className="text-xl mb-2">Project Two</h4>
              <p className="text-gray-400">UI/UX Design</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="min-h-screen flex flex-col justify-center">
          <h3 className="text-2xl font-light mb-12">Get in Touch</h3>
          <div className="space-y-4">
            <a
              href="mailto:your.email@example.com"
              className="block text-xl hover:text-gray-400 transition-colors"
            >
              your.email@example.com
            </a>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
