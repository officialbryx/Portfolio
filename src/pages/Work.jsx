import { useEffect, useState, useRef } from "react";

function Work() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(0);
  const [modalProject, setModalProject] = useState(null);
  const [isCentered, setIsCentered] = useState(true);
  const gridRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "HireFlow",
      tagline: "Smart screening. Smarter hiring.",
      description:
        "An ATS platform that transforms hiring with advanced AI. JobBERT and XGBoost algorithms automatically screen and rank candidates, making recruitment effortless and precise.",
      tech: ["Python", "TensorFlow", "React", "XGBoost", "JobBERT"],
      imageUrl: "/pexels-goumbik-590016.jpg",
    },
    {
      title: "UnlockX",
      tagline: "Find faces. Reunite families.",
      description:
        "Advanced facial recognition system designed for family reunification and secure access control. Powered by InsightFace technology for unparalleled accuracy and speed.",
      tech: ["Python", "OpenCV", "InsightFace", "PyQt5", "NumPy"],
      imageUrl: "/face-detection-output.png",
    },
    {
      title: "Ward",
      tagline: "Watch closely. Act instantly.",
      description:
        "This project captures a defined region of the screen in real time and detects faces within it, displaying the results with bounding boxes, and is designed to be integrated into CCTV or drone-based surveillance systems for live monitoring.",
      tech: ["Python", "OpenCV", "InsightFace", "PIL", "Threading"],
      imageUrl: "/pexels-cottonbro-8090298.jpg",
    },
    {
      title: "Moon Hey Hotpot POS",
      tagline: "Serve fast. Manage smarter.",
      description:
        "Complete point-of-sale system designed for modern restaurants. Streamlines operations with inventory management, order processing, and comprehensive analytics.",
      tech: ["Python", "PyQt5", "MySQL", "pandas", "matplotlib"],
      imageUrl: "/pexels-mibernaa-31777068.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Projects Overview */}
      <section className="py-20 bg-white">
        {/* Title and GitHub Button Row */}
        <div className="flex items-center justify-between pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-24 lg:pr-24 mb-12">
          <h2 className="text-black leading-none text-5xl font-bold tracking-tight whitespace-nowrap">
            Get to know Projects.
          </h2>
          <a
            href="https://github.com/officialbryx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-black rounded-full hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 text-white transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-white font-semibold tracking-[.012em] leading-[1.42] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif] transition-colors duration-300">
              View More on GitHub
            </span>
          </a>
        </div>

        {/* Cards Row */}
        <div className="relative">
          <div
            className="overflow-x-auto overflow-y-hidden scrollbar-hide pl-8 md:pl-16 lg:pl-24"
            style={{ scrollBehavior: "smooth" }}
            ref={gridRef}
          >
            <div className="flex flex-nowrap gap-10">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer relative h-[700px] w-[420px] flex-shrink-0"
                  onClick={() => setModalProject(project)}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Full Card Background Image */}
                  <div className="h-full relative rounded-[28px] overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Text Overlay */}
                    <div className="absolute top-7 left-7 right-7">
                      <h3 className="text-[21px] font-semibold mb-2 text-white tracking-tight leading-[1.19] font-['SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]">
                        {project.title}
                      </h3>
                      <p
                        className={`text-white text-[17px] leading-[1.235] font-semibold tracking-[-.022em] font-['SF_Pro_Text','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif]`}
                      >
                        {project.tagline}
                      </p>
                    </div>
                    {/* Bottom right + button - always visible */}
                    <div className="absolute bottom-7 right-7">
                      <div className="w-10 h-10 bg-[#333336] hover:bg-[#37373a] active:bg-[#2f2f32] rounded-full flex items-center justify-center transition-colors duration-200">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Arrow Buttons BELOW the cards */}
          <div className="flex justify-end gap-4 pt-8 pr-8 md:pr-16 lg:pr-24">
            <button
              className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center shadow transition-colors"
              onClick={() => {
                if (gridRef.current) {
                  const currentScroll = gridRef.current.scrollLeft;
                  const cardWidth = 420;
                  const gap = 40;
                  const cardSpacing = cardWidth + gap;

                  // Find the current card position
                  const currentCardIndex = Math.round(
                    currentScroll / cardSpacing
                  );
                  const targetCardIndex = Math.max(0, currentCardIndex - 1);
                  const targetScroll = targetCardIndex * cardSpacing;

                  gridRef.current.scrollTo({
                    left: targetScroll,
                    behavior: "smooth",
                  });
                }
              }}
              aria-label="Scroll Left"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center shadow transition-colors"
              onClick={() => {
                if (gridRef.current) {
                  const currentScroll = gridRef.current.scrollLeft;
                  const cardWidth = 420;
                  const gap = 40;
                  const cardSpacing = cardWidth + gap;
                  const maxScroll =
                    gridRef.current.scrollWidth - gridRef.current.clientWidth;

                  // Find the current card position
                  const currentCardIndex = Math.round(
                    currentScroll / cardSpacing
                  );
                  const targetCardIndex = Math.min(3, currentCardIndex + 1); // 3 is the last card index (0-3 for 4 cards)
                  const targetScroll = Math.min(
                    targetCardIndex * cardSpacing,
                    maxScroll
                  );

                  gridRef.current.scrollTo({
                    left: targetScroll,
                    behavior: "smooth",
                  });
                }
              }}
              aria-label="Scroll Right"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-[4px] z-50 flex items-center justify-center p-4"
          onClick={() => setModalProject(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative flex flex-col items-center"
            style={{
              fontFamily:
                "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setModalProject(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10 shadow"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="w-full flex flex-col items-center px-8 pt-16 pb-12">
              {/* Title and subtitle */}
              <div className="w-full max-w-2xl mx-auto mb-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight text-black">
                  {modalProject.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-6">
                  {modalProject.tagline}
                </p>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  {modalProject.description}
                </p>
                {/* View Website Button for HireFlow */}
                {modalProject.title === "HireFlow" && (
                  <a
                    href="https://hireflow-web.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <span className="font-semibold">View Website</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
                {/* View Program on GitHub Button for UnlockX */}
                {modalProject.title === "UnlockX" && (
                  <a
                    href="https://github.com/officialbryx/UnlockX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="font-semibold">
                      View Program on GitHub
                    </span>
                  </a>
                )}
                {/* View Program on GitHub Button for Ward */}
                {modalProject.title === "Ward" && (
                  <a
                    href="https://github.com/officialbryx/Ward"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="font-semibold">
                      View Program on GitHub
                    </span>
                  </a>
                )}
              </div>

              {/* Image section - Special layout for HireFlow */}
              {modalProject.title === "HireFlow" ? (
                <div className="w-full mb-10 max-w-5xl mx-auto">
                  <div className="flex flex-col space-y-8">
                    {/* Image 1 */}
                    <div className="flex flex-col items-center">
                      <div className="rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center mb-4 w-full">
                        <img
                          src="/hireflow1.png"
                          alt="AI-Powered Screening"
                          className="object-contain w-full"
                        />
                      </div>
                      <div className="text-center px-4 py-6">
                        <h4 className="text-xl font-semibold text-black mb-3">
                          Landing Page
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          The landing page of a job portal serves as the main
                          entry point where jobseekers can search for
                          opportunities and employers can access hiring tools,
                          all presented in a user-friendly interface.
                        </p>
                      </div>
                    </div>

                    {/* Image 2 */}
                    <div className="flex flex-col items-center">
                      <div className="rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center mb-4 w-full">
                        <img
                          src="/hireflow2.png"
                          alt="Smart Ranking System"
                          className="object-contain w-full"
                        />
                      </div>
                      <div className="text-center px-4 py-6">
                        <h4 className="text-xl font-semibold text-black mb-3">
                          View/Edit Job Posts
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          This view displays all jobs created by the employer,
                          allowing them to edit, archive, or view applicants for
                          each job.
                        </p>
                      </div>
                      <div className="rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center mb-4 w-full">
                        <img
                          src="/hireflow4.png"
                          alt="Applicant Review"
                          className="object-contain w-full"
                        />
                      </div>
                      <div className="text-center px-4 py-6">
                        <h4 className="text-xl font-semibold text-black mb-3">
                          Applicants Review
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          This tab shows applicant information and enables
                          employers to evaluate individual candidates through
                          resume review and screening questions.
                        </p>
                      </div>
                      <div className="rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center mb-4 w-full">
                        <img
                          src="/hireflow5.png"
                          alt="Evaluate"
                          className="object-contain w-full"
                        />
                      </div>
                      <div className="text-center px-4 py-6">
                        <h4 className="text-xl font-semibold text-black mb-3">
                          Resume-Job Match Evaluator
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          Employers can trigger an automated match evaluation to
                          assess how well a candidate's resume aligns with the
                          job posting.
                        </p>
                      </div>
                      <div className="rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center mb-4 w-full">
                        <img
                          src="/hireflow6.png"
                          alt="Jobbertmatch"
                          className="object-contain w-full"
                        />
                      </div>
                      <div className="text-center px-4 py-6">
                        <h4 className="text-xl font-semibold text-black mb-3">
                          Applicant's Analysis Result
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          This displays match scores and a qualification verdict
                          from JobBert and XGBoost to show how fit a candidate
                          is for the role.
                        </p>
                      </div>
                      <div className="rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center mb-4 w-full">
                        <img
                          src="/hireflow7.png"
                          alt="Jobbert"
                          className="object-contain w-full"
                        />
                      </div>
                      <div className="text-center px-4 py-6">
                        <h4 className="text-xl font-semibold text-black mb-3">
                          JobBERT Insights
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          A detailed analysis that provides insights into
                          skills, qualifications, and hiring recommendations to
                          help assess applicant suitability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full flex justify-center mb-10">
                  {modalProject.title === "UnlockX" ? (
                    <div className="rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center w-full max-w-4xl">
                      <video
                        controls
                        autoPlay
                        muted
                        loop
                        className="w-full h-auto"
                        poster="/face-detection-output.png"
                      >
                        <source src="/LCtn1f1y.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <div
                      className="rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center"
                      style={{
                        minHeight:
                          modalProject.title === "Ward" ? "400px" : "220px",
                        minWidth:
                          modalProject.title === "Ward" ? "600px" : "320px",
                        maxHeight:
                          modalProject.title === "Ward" ? "600px" : "320px",
                        maxWidth: "100%",
                      }}
                    >
                      {/* If you have an image, show it here */}
                      {modalProject.imageUrl && (
                        <img
                          src={
                            modalProject.title === "Ward"
                              ? "/Wards1.png"
                              : modalProject.imageUrl
                          }
                          alt={modalProject.title}
                          className={
                            modalProject.title === "Ward"
                              ? "object-contain w-full h-full max-h-[600px] max-w-[800px]"
                              : "object-contain w-full h-full max-h-[320px] max-w-[480px]"
                          }
                        />
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Tech Stack */}
              <div className="w-full max-w-5xl mx-auto mb-8">
                <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider text-center">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {modalProject.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Work;
