import { useEffect, useState } from "react";
import "./App.css";

import profile from "./profile.jpg";
import resume from "./assets/Saravanan_A_Resume.pdf";
import song from "./assets/profile-song.mp3";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [viewCertificate, setViewCertificate] = useState(null);
  const [showResume, setShowResume] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  /* ================= SCROLL REVEAL ================= */

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);

      const elements = document.querySelectorAll(".reveal");

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

  /* ================= MUSIC ================= */

  const toggleMusic = async () => {
    const audio = document.getElementById("profile-song");

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  /* ================= PROJECT DATA ================= */

  const projects = [
    {
      number: "01",
      title: "Smart Queue Management System",
      description:
        "An intelligent queue management solution designed to reduce waiting time and improve patient flow in government hospitals.",
      technologies: ["AI", "Python", "React"],
      features: [
        "Digital queue management",
        "Reduced patient waiting time",
        "Improved patient flow",
        "Real-time queue monitoring",
      ],
    },
    {
      number: "02",
      title: "SkillSphere AI",
      description:
        "An AI-powered platform that brings internships, jobs, hackathons, events, career guidance and opportunities together in one place.",
      technologies: ["AI", "React", "Node.js"],
      features: [
        "Internship opportunities",
        "Job alerts",
        "Hackathon discovery",
        "AI career guidance",
      ],
    },
    {
      number: "03",
      title: "AI Inventory & Demand Prediction",
      description:
        "A smart inventory system that predicts product demand, provides low-stock alerts and helps businesses make better purchasing decisions.",
      technologies: ["Python", "Machine Learning", "MySQL"],
      features: [
        "Demand prediction",
        "Low-stock alerts",
        "Inventory monitoring",
        "Purchase recommendations",
      ],
    },
    {
      number: "04",
      title: "AI MSME Growth Advisor",
      description:
        "An AI-based business assistant designed to help MSMEs with sales prediction, cash-flow insights, marketing and business decisions.",
      technologies: ["AI", "Python", "Cloud"],
      features: [
        "Sales prediction",
        "Cash-flow insights",
        "Marketing suggestions",
        "Business recommendations",
      ],
    },
  ];

  /* ================= SKILLS ================= */

  /* ================= SKILLS ================= */

  const skills = [
    {
      name: "Python",
      percentage: "90%",
      className: "python",
      icon: "🐍",
      category: "Programming",
      description: "AI, Machine Learning & Backend Development",
    },
    {
      name: "React",
      percentage: "85%",
      className: "react",
      icon: "⚛️",
      category: "Frontend",
      description: "Frontend & Responsive Web Development",
    },
    {
      name: "JavaScript",
      percentage: "85%",
      className: "javascript",
      icon: "🟨",
      category: "Frontend",
      description: "Interactive Web Applications",
    },
    {
      name: "Java",
      percentage: "80%",
      className: "java",
      icon: "☕",
      category: "Programming",
      description: "OOP & Application Development",
    },
    {
      name: "SQL",
      percentage: "85%",
      className: "sql",
      icon: "🗄️",
      category: "Database",
      description: "Database Management & Queries",
    },
    {
      name: "Node.js",
      percentage: "75%",
      className: "node",
      icon: "🟢",
      category: "Backend",
      description: "Backend Development & APIs",
    },
    {
      name: "AWS",
      percentage: "70%",
      className: "aws",
      icon: "☁️",
      category: "Cloud",
      description: "Cloud Computing & Deployment",
    },
    {
      name: "Machine Learning",
      percentage: "80%",
      className: "machine-learning",
      icon: "🤖",
      category: "AI / ML",
      description: "Predictive Models & Intelligent Systems",
    },
    {
      name: "Git & GitHub",
      percentage: "85%",
      className: "github",
      icon: "💻",
      category: "Tools",
      description: "Version Control & Collaboration",
    },
  ];

  /* ================= CERTIFICATES ================= */

  const certificates = [
    {
      image: "Certificate1.jpg",
      title: "Bootcamp On Cloud Computing",
      organization: "Cloud Computing",
      date: "2025",
      credentialId: "CC-001",
    },
    {
      image: "Certificate2.jpg",
      title: "Cloud Computing AWS",
      organization: "AWS",
      date: "2025",
      credentialId: "AWS-002",
    },
    {
      image: "Certificate3.jpg",
      title: "Full Stack Developer Internship",
      organization: "Full Stack Development",
      date: "2025",
      credentialId: "FSD-003",
    },
    {
      image: "Certificate4.jpg",
      title: "Java Programming",
      organization: "Java Programming",
      date: "2025",
      credentialId: "JAVA-004",
    },
    {
      image: "Certificate5.jpg",
      title: "Python Programming",
      organization: "Python Programming",
      date: "2025",
      credentialId: "PY-005",
    },
    {
      image: "Certificate6.jpg",
      title: "Cloud Computing Intern",
      organization: "Cloud Computing",
      date: "2025",
      credentialId: "CLOUD-006",
    },
    {
      image: "Certificate7.jpg",
      title: "Full Stack Developer Intern",
      organization: "Full Stack Development",
      date: "2025",
      credentialId: "FSD-007",
    },
    {
      image: "Certificate8.jpg",
      title: "Python Developer Intern",
      organization: "Python Development",
      date: "2025",
      credentialId: "PY-008",
    },
    {
      image: "Certificate9.jpg",
      title: "Java Developer Intern",
      organization: "Java Development",
      date: "2025",
      credentialId: "JAVA-009",
    },
    {
      image: "Certificate10.jpg",
      title: "Python Programming",
      organization: "Python Programming",
      date: "2025",
      credentialId: "PY-010",
    },
    {
      image: "Certificate11.jpg",
      title: "Build Your Own Responsive Website",
      organization: "Web Development",
      date: "2025",
      credentialId: "WEB-011",
    },
  ];

  /* ================= EXPERIENCE ================= */

  const experiences = [
    {
      number: "01",
      title: "Full Stack Developer Intern",
      subtitle: "Full Stack Development",
      date: "Internship",
      description:
        "Worked on frontend and backend development while gaining practical experience in building responsive web applications, APIs and database-driven solutions.",
      technologies: ["React", "Node.js", "JavaScript", "SQL"],
    },
    {
      number: "02",
      title: "Python Developer Intern",
      subtitle: "Python Development",
      date: "Internship",
      description:
        "Developed Python-based solutions and strengthened programming, problem-solving and application development skills through practical tasks and projects.",
      technologies: ["Python", "Programming", "Problem Solving"],
    },
    {
      number: "03",
      title: "Java Developer Intern",
      subtitle: "Java Programming",
      date: "Internship",
      description:
        "Gained hands-on experience in Java programming, object-oriented concepts and application development while working on practical development tasks.",
      technologies: ["Java", "OOP", "Application Development"],
    },
    {
      number: "04",
      title: "Cloud Computing Intern",
      subtitle: "AWS & Cloud Technologies",
      date: "Internship",
      description:
        "Explored cloud computing concepts and gained practical exposure to cloud services, deployment concepts and AWS technologies.",
      technologies: ["AWS", "Cloud", "Deployment"],
    },
  ];

  /* ================= CONTACT FORM ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mppajawa", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert(
        "Unable to send message. Please check your internet connection."
      );
    }
  };

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
          aria-label="Toggle navigation menu"
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
            Final year B.Tech Artificial Intelligence and Data Science
            student passionate about Full Stack Development and Artificial
            Intelligence. I enjoy building creative and practical solutions
            using modern technologies and continuously improving my technical
            skills.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="project-btn"
            >
              View My Projects
            </a>

            <button
              type="button"
              className="outline-btn"
              onClick={() => setShowResume(true)}
            >
              📄 View Resume
            </button>

            <a
              href={resume}
              download="Saravanan_A_Resume.pdf"
              className="outline-btn"
            >
              ⬇ Download Resume
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

      <section
        className="education-section reveal"
        id="education"
      >

        <p className="section-label">
          MY JOURNEY
        </p>

        <h2>
          Education & <span>Experience</span>
        </h2>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-year">
                2024 - 2028
              </span>

              <h3>
                B.Tech Artificial Intelligence & Data Science
              </h3>

              <h4>
                Kings Engineering College
              </h4>

              <p>
                Currently pursuing B.Tech in Artificial Intelligence and
                Data Science with a strong interest in Full Stack Development,
                Artificial Intelligence, Machine Learning and Cloud Computing.
              </p>

            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-year">
                Internship
              </span>

              <h3>
                Full Stack Developer Intern
              </h3>

              <h4>
                Internship Experience
              </h4>

              <p>
                Gained practical experience in frontend and backend development,
                working with modern web technologies and building responsive
                applications.
              </p>

            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-year">
                Continuous Learning
              </span>

              <h3>
                Technical Certifications
              </h3>

              <h4>
                AI • Cloud • Programming • Full Stack
              </h4>

              <p>
                Continuously improving technical knowledge through
                certifications, internships, workshops and hands-on projects.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      {/* ================= SKILLS ================= */}

      <section
        className="skills-section reveal"
        id="skills"
      >

        <p className="section-label">
          MY SKILLS
        </p>

        <h2>
          Technical <span>Skills</span>
        </h2>

        <p className="skills-intro">
          Technologies and tools I use to build intelligent,
          responsive and scalable applications.
        </p>

        <div className="skills-grid">

          {skills.map((skill) => (

            <div
              className="skill-card"
              key={skill.name}
            >

              <div className="skill-icon">
                {skill.icon}
              </div>

              <div className="skill-content">

                <div className="skill-header">

                  <div>
                    <h3>
                      {skill.name}
                    </h3>

                    <span className="skill-category">
                      {skill.category}
                    </span>
                  </div>

                  <span className="skill-percentage">
                    {skill.percentage}
                  </span>

                </div>

                <div className="skill-bar">

                  <div
                    className={`skill-progress ${skill.className}`}
                    style={{
                      width: skill.percentage,
                    }}
                  ></div>

                </div>

                <p>
                  {skill.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        className="projects-section reveal"
        id="projects"
      >

        <p className="section-label">
          MY WORK
        </p>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="projects-grid">

          {projects.map((project) => (
            <div
              className="project-wrapper"
              key={project.number}
            >

              <div className="project-card">

                <div className="project-number">
                  {project.number}
                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-tech">

                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

                {/* ================= GITHUB ONLY ================= */}

                <div className="project-links">

                  <a
                    href="https://github.com/saravanan2212-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <button
                    type="button"
                    className="project-details-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details →
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

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
          Learning & <span>Achievements</span>
        </h2>

        <div className="certificates-grid">

          {certificates.map((certificate) => (
            <div
              className="certificate-card"
              key={certificate.image}
              onClick={() => setSelectedCertificate(certificate)}
            >

              <img
                src={
                  new URL(
                    `./assets/${certificate.image}`,
                    import.meta.url
                  ).href
                }
                alt={certificate.title}
                loading="lazy"
              />

              <h3>
                {certificate.title}
              </h3>

              <span className="certificate-view">
                Click to View →
              </span>

            </div>
          ))}

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section
        className="experience-section reveal"
        id="experience"
      >

        <p className="section-label">
          MY EXPERIENCE
        </p>

        <h2>
          Internship & <span>Experience</span>
        </h2>

        <p className="experience-intro">
          Hands-on experience gained through internships, technical training,
          and real-world development projects.
        </p>

        <div className="experience-timeline">

          {experiences.map((experience) => (
            <div
              className="experience-item"
              key={experience.number}
            >

              <div className="experience-dot"></div>

              <div className="experience-card">

                <div className="experience-top">

                  <div>

                    <span className="experience-number">
                      {experience.number}
                    </span>

                    <h3>
                      {experience.title}
                    </h3>

                    <h4>
                      {experience.subtitle}
                    </h4>

                  </div>

                  <span className="experience-date">
                    {experience.date}
                  </span>

                </div>

                <p>
                  {experience.description}
                </p>

                <div className="experience-tech">

                  {experience.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

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
          Let's <span>Connect</span>
        </h2>

        <p className="contact-intro">
          Have a project idea, internship opportunity, or just want to
          connect? Feel free to reach out. I’d love to hear from you.
        </p>

        <div className="contact-container">

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


            <a
              href="https://www.instagram.com/mr_fearlez_22/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-link"
            >

              <div className="contact-icon">
                📸
              </div>

              <div>
                <h3>
                  Instagram
                </h3>

                <p>
                  @mr_fearlez_22
                </p>
              </div>

            </a>


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


          {/* CONTACT FORM */}

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
              onSubmit={handleSubmit}
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
              aria-label="Close project details"
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

              {selectedProject.features.map(
                (feature, index) => (
                  <li key={index}>
                    {feature}
                  </li>
                )
              )}

            </ul>

            <h3>
              Technologies
            </h3>

            <div className="modal-tech">

              {selectedProject.technologies.map(
                (technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                )
              )}

            </div>

          </div>

        </div>
      )}


      {/* ================= CERTIFICATE MODAL ================= */}

      {selectedCertificate && (
        <div
          className="certificate-modal-overlay"
          onClick={() => setSelectedCertificate(null)}
        >

          <div
            className="certificate-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="certificate-modal-close"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate"
            >
              ✕
            </button>


            {/* CERTIFICATE IMAGE */}

            <div className="certificate-modal-image">

              <img
                src={
                  new URL(
                    `./assets/${selectedCertificate.image}`,
                    import.meta.url
                  ).href
                }
                alt={selectedCertificate.title}
              />

            </div>


            {/* CERTIFICATE DETAILS */}

            <div className="certificate-modal-content">

              <p className="modal-label">
                CERTIFICATE
              </p>

              <h2>
                {selectedCertificate.title}
              </h2>

              <div className="certificate-details">

                <div className="certificate-detail-item">

                  <span className="detail-icon">
                    🏢
                  </span>

                  <div>
                    <small>
                      Issuing Organization
                    </small>

                    <strong>
                      {selectedCertificate.organization}
                    </strong>
                  </div>

                </div>


                <div className="certificate-detail-item">

                  <span className="detail-icon">
                    📅
                  </span>

                  <div>
                    <small>
                      Date
                    </small>

                    <strong>
                      {selectedCertificate.date}
                    </strong>
                  </div>

                </div>


                <div className="certificate-detail-item">

                  <span className="detail-icon">
                    🆔
                  </span>

                  <div>
                    <small>
                      Credential ID
                    </small>

                    <strong>
                      {selectedCertificate.credentialId}
                    </strong>
                  </div>

                </div>

              </div>


              {/* CERTIFICATE BUTTONS */}
              {/* ================= CERTIFICATE BUTTONS ================= */}

              <div className="certificate-modal-buttons">

                <button
                  className="certificate-verify-btn"
                  type="button"
                  onClick={() => setViewCertificate(selectedCertificate)}
                >
                  View Certificate ↗
                </button>

              </div>

            </div>

          </div>

        </div>
      )}


      {/* ================= BACK TO TOP ================= */}

      {showTop && (
        <button
          className="back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to top"
        >
          ↑
        </button>
      )}


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-content">

          <div className="footer-brand">

            <h3>
              SARAVANAN A
            </h3>

            <p>
              Aspiring Full Stack Developer passionate about AI,
              modern web technologies and building useful solutions.
            </p>

          </div>


          <div className="footer-links">

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Saravanan A. All rights reserved.
          </p>

          <div className="footer-socials">

            <a
              href="https://github.com/saravanan2212-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/saravanan-a-797887355/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/mr_fearlez_22/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

          </div>

        </div>

      </footer>


      {/* ================= MUSIC PLAYER ================= */}

      <audio
        id="profile-song"
        src={song}
        loop
      />

      <div className="music-player">

        <button
          className="music-btn"
          onClick={toggleMusic}
          aria-label="Play or pause profile song"
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>

        <div className="music-info">

          <span>
            🎵
          </span>

          <div>

            <strong>
              My Profile Song
            </strong>

            <small>
              {isPlaying
                ? "Playing..."
                : "Click to play"}
            </small>

          </div>

        </div>

      </div>
      {/* ================= FULL CERTIFICATE VIEW ================= */}

      {viewCertificate && (
        <div
          className="certificate-view-overlay"
          onClick={() => setViewCertificate(null)}
        >

          <button
            className="certificate-view-close"
            onClick={() => setViewCertificate(null)}
            aria-label="Close certificate"
          >
            ✕
          </button>

          <img
            src={
              new URL(
                `./assets/${viewCertificate.image}`,
                import.meta.url
              ).href
            }
            alt={viewCertificate.title}
            className="certificate-full-image"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}
      {/* ================= RESUME MODAL ================= */}

      {showResume && (
        <div
          className="resume-modal-overlay"
          onClick={() => setShowResume(false)}
        >

          <div
            className="resume-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="resume-modal-header">

              <div>
                <p className="modal-label">
                  MY RESUME
                </p>

                <h2>
                  Saravanan A
                </h2>
              </div>

              <button
                type="button"
                className="resume-close-btn"
                onClick={() => setShowResume(false)}
                aria-label="Close resume"
              >
                ✕
              </button>

            </div>


            {/* RESUME PREVIEW */}

            <div className="resume-preview">

              <iframe
                src={resume}
                title="Saravanan A Resume"
              ></iframe>

            </div>


            {/* RESUME ACTIONS */}

            <div className="resume-actions">

              <a
                href={resume}
                download="Saravanan_A_Resume.pdf"
                className="resume-download-btn"
              >
                ⬇ Download Resume
              </a>

              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-open-btn"
              >
                ↗ Open in New Tab
              </a>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}

export default App;