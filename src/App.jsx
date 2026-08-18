import { useState, useEffect } from "react";
import "./App.css";
import profile from "./profile.jpg";
import resume from "./assets/Saravanan_A_Resume.pdf";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  /* ================= SCROLL REVEAL ================= */

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="profile-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          SARAVANAN A
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#education" onClick={() => setMenuOpen(false)}>
            Education
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#certificates" onClick={() => setMenuOpen(false)}>
            Certificates
          </a>

          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </nav>


      {/* ================= HERO ================= */}

      <section className="hero reveal" id="home">

        <div className="profile-image">
          <img src={profile} alt="Saravanan A" />
        </div>

        <div className="hero-content">

          <p className="intro">
            HELLO, I'M
          </p>

          <h1>
            A SARAVANAN
          </h1>

          <h2>
            Aspiring Full Stack Developer
          </h2>

          <p className="about">
            Third year B.Tech Artificial Intelligence
            and Data Science student passionate about Full Stack Development
            and Artificial Intelligence. I enjoy building creative and
            practical solutions using modern technologies and continuously
            improving my technical skills.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="project-btn"
            >
              View My Projects
            </a>

            <a
              href={resume}
              download="Saravanan_A_Resume.pdf"
              className="outline-btn"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="outline-btn"
            >
              Contact Me
            </a>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        className="about-section reveal"
        id="about"
      >

        <p className="section-label">
          ABOUT ME
        </p>

        <h2>
          Turning Ideas Into{" "}
          <span>
            Intelligent Solutions
          </span>
        </h2>

        <p className="about-text">
          I’m Saravanan A, a B.Tech Artificial Intelligence and Data Science
          student passionate about building smart and practical solutions.
          I enjoy turning ideas into impactful projects using AI, Full Stack
          Development, and modern technologies.
        </p>

      </section>
      {/* ================= EDUCATION ================= */}
      <section className="education-section reveal" id="education">

        <p className="section-label">MY JOURNEY</p>

        <h2>
          Education & <span>Experience</span>
        </h2>

        <div className="timeline">

          {/* Education */}
          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-year">
                2024 - 2028
              </span>

              <h3>B.Tech Artificial Intelligence & Data Science</h3>

              <h4>Kings Engineering College</h4>

              <p>
                Currently pursuing B.Tech in Artificial Intelligence and
                Data Science with a strong interest in Full Stack Development,
                Artificial Intelligence, Machine Learning and Cloud Computing.
              </p>

            </div>

          </div>


          {/* Experience */}
          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-year">
                Internship
              </span>

              <h3>Full Stack Developer Intern</h3>

              <h4>Internship Experience</h4>

              <p>
                Gained practical experience in frontend and backend development,
                working with modern web technologies and building responsive
                applications.
              </p>

            </div>

          </div>


          {/* Certifications */}
          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-year">
                Continuous Learning
              </span>

              <h3>Technical Certifications</h3>

              <h4>AI • Cloud • Programming • Full Stack</h4>

              <p>
                Continuously improving technical knowledge through certifications,
                internships, workshops and hands-on projects.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <div className="skills-grid">

        <div className="skill-card">
          <div className="skill-header">
            <h3>Python</h3>
            <span>90%</span>
          </div>

          <div className="skill-bar">
            <div className="skill-progress python"></div>
          </div>

          <p>AI, Machine Learning & Backend Development</p>
        </div>


        <div className="skill-card">
          <div className="skill-header">
            <h3>React</h3>
            <span>85%</span>
          </div>

          <div className="skill-bar">
            <div className="skill-progress react"></div>
          </div>

          <p>Frontend & Responsive Web Development</p>
        </div>


        <div className="skill-card">
          <div className="skill-header">
            <h3>Java</h3>
            <span>80%</span>
          </div>

          <div className="skill-bar">
            <div className="skill-progress java"></div>
          </div>

          <p>Programming & Application Development</p>
        </div>


        <div className="skill-card">
          <div className="skill-header">
            <h3>SQL</h3>
            <span>85%</span>
          </div>

          <div className="skill-bar">
            <div className="skill-progress sql"></div>
          </div>

          <p>Database Management & Queries</p>
        </div>


        <div className="skill-card">
          <div className="skill-header">
            <h3>Node.js</h3>
            <span>75%</span>
          </div>

          <div className="skill-bar">
            <div className="skill-progress node"></div>
          </div>

          <p>Backend Development & APIs</p>
        </div>


        <div className="skill-card">
          <div className="skill-header">
            <h3>AWS</h3>
            <span>70%</span>
          </div>

          <div className="skill-bar">
            <div className="skill-progress aws"></div>
          </div>

          <p>Cloud Computing & Deployment</p>
        </div>

      </div>


      {/* ================= PROJECTS ================= */}

      <section
        className="projects-section reveal"
        id="projects"
      >

        <p className="section-label">
          MY WORK
        </p>

        <h2>
          Featured{" "}
          <span>
            Projects
          </span>
        </h2>

        <div className="projects-grid">


          {/* ================= PROJECT 01 ================= */}

          <div className="project-card">

            <div className="project-number">
              01
            </div>

            <h3>
              Smart Queue Management System
            </h3>

            <p>
              An intelligent queue management solution designed to reduce
              waiting time and improve patient flow in government hospitals.
            </p>

            <div className="project-tech">
              <span>AI</span>
              <span>Python</span>
              <span>React</span>
            </div>

            <div className="project-links">

              <a
                href="https://github.com/saravanan2212-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Live Demo ↗
              </a>

            </div>

          </div>
          <button
            className="project-details-btn"
            onClick={() =>
              setSelectedProject({
                title: "Smart Queue Management System",
                description:
                  "An intelligent queue management solution designed to reduce waiting time and improve patient flow in government hospitals.",
                features: [
                  "Digital queue management",
                  "Reduced patient waiting time",
                  "Improved patient flow",
                  "Real-time queue monitoring",
                ],
                technologies: ["AI", "Python", "React"],
              })
            }
          >
            View Details →
          </button>


          {/* ================= PROJECT 02 ================= */}

          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <h3>
              SkillSphere AI
            </h3>

            <p>
              An AI-powered platform that brings internships, jobs,
              hackathons, events, career guidance and opportunities
              together in one place.
            </p>

            <div className="project-tech">
              <span>AI</span>
              <span>React</span>
              <span>Node.js</span>
            </div>

            <div className="project-links">

              <a
                href="https://github.com/saravanan2212-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Live Demo ↗
              </a>

            </div>

          </div>
          <button
            className="project-details-btn"
            onClick={() =>
              setSelectedProject({
                title: "SkillSphere AI",
                description:
                  "An AI-powered platform that brings internships, jobs, hackathons, events and career opportunities together in one place.",
                features: [
                  "Internship opportunities",
                  "Job alerts",
                  "Hackathon discovery",
                  "AI career guidance",
                ],
                technologies: ["AI", "React", "Node.js"],
              })
            }
          >
            View Details →
          </button>


          {/* ================= PROJECT 03 ================= */}

          <div className="project-card">

            <div className="project-number">
              03
            </div>

            <h3>
              AI Inventory & Demand Prediction
            </h3>

            <p>
              A smart inventory system that predicts product demand,
              provides low-stock alerts and helps businesses make better
              purchasing decisions.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>ML</span>
              <span>MySQL</span>
            </div>

            <div className="project-links">

              <a
                href="https://github.com/saravanan2212-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Live Demo ↗
              </a>

            </div>

          </div>
          <button
            className="project-details-btn"
            onClick={() =>
              setSelectedProject({
                title: "AI Inventory & Demand Prediction",
                description:
                  "A smart inventory system that predicts product demand and helps businesses make better purchasing decisions.",
                features: [
                  "Demand prediction",
                  "Low-stock alerts",
                  "Inventory monitoring",
                  "Purchase recommendations",
                ],
                technologies: ["Python", "Machine Learning", "MySQL"],
              })
            }
          >
            View Details →
          </button>


          {/* ================= PROJECT 04 ================= */}

          <div className="project-card">

            <div className="project-number">
              04
            </div>

            <h3>
              AI MSME Growth Advisor
            </h3>

            <p>
              An AI-based business assistant designed to help MSMEs with
              sales prediction, cash-flow insights, marketing and business
              decisions.
            </p>

            <div className="project-tech">
              <span>AI</span>
              <span>Python</span>
              <span>Cloud</span>
            </div>

            <div className="project-links">

              <a
                href="https://github.com/saravanan2212-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Live Demo ↗
              </a>

            </div>

          </div>

        </div>
        <button
          className="project-details-btn"
          onClick={() =>
            setSelectedProject({
              title: "AI MSME Growth Advisor",
              description:
                "An AI-based business assistant designed to help MSMEs with sales prediction, cash-flow insights and business decisions.",
              features: [
                "Sales prediction",
                "Cash-flow insights",
                "Marketing suggestions",
                "Business recommendations",
              ],
              technologies: ["AI", "Python", "Cloud"],
            })
          }
        >
          View Details →
        </button>

      </section>



      {/* ================= CERTIFICATES ================= */}

      <section
        className="certificates-section reveal"
        id="certificates"
      >

        <p className="section-label">
          MY CERTIFICATES
        </p>

        <h2>
          Learning &{" "}
          <span>
            Achievements
          </span>
        </h2>

        <div className="certificates-grid">

          <div className="certificate-card">
            <img
              src={new URL(
                "./assets/Certificate1.jpg",
                import.meta.url
              ).href}
              alt="Bootcamp On Cloud Computing"
            />
            <h3>
              Bootcamp On Cloud Computing
            </h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL(
                "./assets/Certificate2.jpg",
                import.meta.url
              ).href}
              alt="Cloud Computing AWS"
            />
            <h3>
              Cloud Computing AWS
            </h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL(
                "./assets/Certificate3.jpg",
                import.meta.url
              ).href}
              alt="Full Stack Developer Internship"
            />
            <h3>
              Full Stack Developer Internship
            </h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL(
                "./assets/Certificate4.jpg",
                import.meta.url
              ).href}
              alt="Java Programming"
            />
            <h3>
              Java Programming
            </h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL(
                "./assets/Certificate5.jpg",
                import.meta.url
              ).href}
              alt="Python Programming"
            />
            <h3>
              Python Programming
            </h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL(
                "./assets/Certificate6.jpg",
                import.meta.url
              ).href}
              alt="Cloud Computing Intern"
            />
            <h3>
              Cloud Computing Intern
            </h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL(
                "./assets/Certificate7.jpg",
                import.meta.url
              ).href}
              alt="Full Stack Developer Intern"
            />
            <h3>
              Full Stack Developer Intern
            </h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL(
                "./assets/Certificate8.jpg",
                import.meta.url
              ).href}
              alt="Python Developer Intern"
            />
            <h3>
              Python Developer Intern
            </h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL(
                "./assets/Certificate9.jpg",
                import.meta.url
              ).href}
              alt="Java Developer Intern"
            />
            <h3>
              Java Developer Intern
            </h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL(
                "./assets/Certificate10.jpg",
                import.meta.url
              ).href}
              alt="Python Programming"
            />
            <h3>
              Python Programming
            </h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL(
                "./assets/Certificate11.jpg",
                import.meta.url
              ).href}
              alt="Build Your Own Responsive Website"
            />
            <h3>
              Build Your Own Responsive Website
            </h3>
          </div>

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="experience-section reveal" id="experience">

        <p className="section-label">MY EXPERIENCE</p>

        <h2>
          Internship & <span>Experience</span>
        </h2>

        <p className="experience-intro">
          Hands-on experience gained through internships, technical training,
          and real-world development projects.
        </p>

        <div className="experience-timeline">

          {/* EXPERIENCE 01 */}
          <div className="experience-item">

            <div className="experience-dot"></div>

            <div className="experience-card">

              <div className="experience-top">
                <div>
                  <span className="experience-number">01</span>

                  <h3>Full Stack Developer Intern</h3>

                  <h4>Full Stack Development</h4>
                </div>

                <span className="experience-date">
                  Internship
                </span>
              </div>

              <p>
                Worked on frontend and backend development while gaining
                practical experience in building responsive web applications,
                APIs and database-driven solutions.
              </p>

              <div className="experience-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>JavaScript</span>
                <span>SQL</span>
              </div>

            </div>
          </div>


          {/* EXPERIENCE 02 */}
          <div className="experience-item">

            <div className="experience-dot"></div>

            <div className="experience-card">

              <div className="experience-top">
                <div>
                  <span className="experience-number">02</span>

                  <h3>Python Developer Intern</h3>

                  <h4>Python Development</h4>
                </div>

                <span className="experience-date">
                  Internship
                </span>
              </div>

              <p>
                Developed Python-based solutions and strengthened programming,
                problem-solving and application development skills through
                practical tasks and projects.
              </p>

              <div className="experience-tech">
                <span>Python</span>
                <span>Programming</span>
                <span>Problem Solving</span>
              </div>

            </div>
          </div>


          {/* EXPERIENCE 03 */}
          <div className="experience-item">

            <div className="experience-dot"></div>

            <div className="experience-card">

              <div className="experience-top">
                <div>
                  <span className="experience-number">03</span>

                  <h3>Java Developer Intern</h3>

                  <h4>Java Programming</h4>
                </div>

                <span className="experience-date">
                  Internship
                </span>
              </div>

              <p>
                Gained hands-on experience in Java programming, object-oriented
                concepts and application development while working on practical
                development tasks.
              </p>

              <div className="experience-tech">
                <span>Java</span>
                <span>OOP</span>
                <span>Application Development</span>
              </div>

            </div>
          </div>


          {/* EXPERIENCE 04 */}
          <div className="experience-item">

            <div className="experience-dot"></div>

            <div className="experience-card">

              <div className="experience-top">
                <div>
                  <span className="experience-number">04</span>

                  <h3>Cloud Computing Intern</h3>

                  <h4>AWS & Cloud Technologies</h4>
                </div>

                <span className="experience-date">
                  Internship
                </span>
              </div>

              <p>
                Explored cloud computing concepts and gained practical exposure
                to cloud services, deployment concepts and AWS technologies.
              </p>

              <div className="experience-tech">
                <span>AWS</span>
                <span>Cloud</span>
                <span>Deployment</span>
              </div>

            </div>
          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        className="contact-section reveal"
        id="contact"
      >

        <p className="section-label">
          GET IN TOUCH
        </p>

        <h2>
          Let's{" "}
          <span>
            Connect
          </span>
        </h2>

        <p className="contact-intro">
          Have a project idea, internship opportunity, or just want to
          connect? Feel free to reach out. I’d love to hear from you.
        </p>

        <div className="contact-container">


          {/* ================= CONTACT DETAILS ================= */}

          <div className="contact-info">

            <div className="contact-card">

              <div className="contact-icon">
                ✉
              </div>

              <div>
                <h3>
                  Email
                </h3>

                <p>
                  saravanananand326@gmail.com
                </p>
              </div>

            </div>


            <div className="contact-card">

              <div className="contact-icon">
                📞
              </div>

              <div>
                <h3>
                  Phone
                </h3>

                <p>
                  9042336121
                </p>
              </div>

            </div>


            <div className="contact-card">

              <div className="contact-icon">
                📸
              </div>

              <div>
                <h3>
                  Instagram
                </h3>

                <a
                  href="https://www.instagram.com/mr_fearlez_22/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @mr_fearlez_22
                </a>
              </div>

            </div>


            <a
              href="https://www.linkedin.com/in/saravanan-a-797887355/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-link"
            >

              <div className="contact-icon">
                💼
              </div>

              <div>
                <h3>
                  LinkedIn
                </h3>

                <p>
                  Let's connect professionally
                </p>
              </div>

            </a>


            <a
              href="https://github.com/saravanan2212-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-link"
            >

              <div className="contact-icon">
                💻
              </div>

              <div>
                <h3>
                  GitHub
                </h3>

                <p>
                  Explore my projects & code
                </p>
              </div>

            </a>

          </div>


          {/* ================= CONTACT FORM ================= */}

          {submitted ? (

            <div className="success-message">

              <div className="success-icon">
                ✓
              </div>

              <h3>
                Message Sent Successfully!
              </h3>

              <p>
                Thanks for reaching out. I'll get back to you soon.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>

            </div>

          ) : (

            <form
              className="contact-form"
              onSubmit={async (e) => {

                e.preventDefault();

                const form = e.target;
                const data = new FormData(form);

                const response = await fetch(
                  "https://formspree.io/f/mppajawa",
                  {
                    method: "POST",
                    body: data,
                    headers: {
                      Accept: "application/json",
                    },
                  }
                );

                if (response.ok) {
                  form.reset();
                  setSubmitted(true);
                }

              }}
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit">
                Send Message →
              </button>

            </form>

          )}

        </div>

      </section>

      {/* ================= PROJECT MODAL ================= */}

      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <p className="modal-label">
              PROJECT DETAILS
            </p>

            <h2>
              {selectedProject.title}
            </h2>

            <p className="modal-description">
              {selectedProject.description}
            </p>

            <h3>
              Key Features
            </h3>

            <ul className="modal-features">
              {selectedProject.features.map((feature, index) => (
                <li key={index}>
                  {feature}
                </li>
              ))}
            </ul>

            <h3>
              Technologies
            </h3>

            <div className="modal-tech">
              {selectedProject.technologies.map(
                (technology, index) => (
                  <span key={index}>
                    {technology}
                  </span>
                )
              )}
            </div>

          </div>

        </div>
      )}
      {showTop && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",
          })}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}


    </main>
  );
}

export default App;


