import { useState } from "react";
import "./App.css";
import profile from "./Profile.jpg";
import resume from "./assets/Saravanan_A_Resume.pdf";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#certificates" onClick={() => setMenuOpen(false)}>
            Certificates
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
      <section className="hero" id="home">

        <div className="profile-image">
          <img src={profile} alt="Saravanan A" />
        </div>

        <div className="hero-content">

          <p className="intro">HELLO, I'M</p>

          <h1>A SARAVANAN </h1>

          <h2>AspiringFull Stack Developer</h2>

          <p className="about">
            Third year B.Tech Artificial Intelligence
            and Data Science student passionate about Full Stack Development
            and Artificial Intelligence. I enjoy building creative and
            practical solutions using modern technologies and continuously
            improving my technical skills.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="project-btn">
              View My Projects
            </a>

            <a href={resume} download="Saravanan_A_Resume.pdf" className="outline-btn">
              Download Resume
            </a>

            <a href="#contact" className="outline-btn">
              Contact Me
            </a>

          </div>

        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section className="about-section" id="about">

        <p className="section-label">ABOUT ME</p>

        <h2>
          Turning Ideas Into{" "}
          <span>Intelligent Solutions</span>
        </h2>

        <p className="about-text">
          I’m Saravanan A, a B.Tech Artificial Intelligence and Data Science
          student passionate about building smart and practical solutions.
          I enjoy turning ideas into impactful projects using AI, Full Stack
          Development, and modern technologies.
        </p>

      </section>


      {/* ================= SKILLS ================= */}
      <section className="skills-section" id="skills">

        <p className="section-label">MY SKILLS</p>

        <h2>
          Technologies I <span>Work With</span>
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Python</h3>
            <p>Artificial Intelligence & Machine Learning</p>
          </div>

          <div className="skill-card">
            <h3>Java</h3>
            <p>Programming & Development</p>
          </div>

          <div className="skill-card">
            <h3>SQL</h3>
            <p>Database Management</p>
          </div>

          <div className="skill-card">
            <h3>React</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill-card">
            <h3>AWS</h3>
            <p>Cloud Computing</p>
          </div>

          <div className="skill-card">
            <h3>Node.js</h3>
            <p>Backend Development</p>
          </div>

        </div>
      </section>


      {/* ================= PROJECTS ================= */}
      <section className="projects-section" id="projects">

        <p className="section-label">MY WORK</p>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-number">01</div>

            <h3>Smart Queue Management System</h3>

            <p>
              An intelligent queue management solution designed to reduce
              waiting time and improve patient flow in government hospitals.
            </p>

            <div className="project-tech">
              <span>AI</span>
              <span>Python</span>
              <span>React</span>
            </div>
          </div>


          <div className="project-card">
            <div className="project-number">02</div>

            <h3>SkillSphere AI</h3>

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
          </div>


          <div className="project-card">
            <div className="project-number">03</div>

            <h3>AI Inventory & Demand Prediction</h3>

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
          </div>


          <div className="project-card">
            <div className="project-number">04</div>

            <h3>AI MSME Growth Advisor</h3>

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
          </div>

        </div>
      </section>


      {/* ================= CERTIFICATES ================= */}
      <section className="certificates-section" id="certificates">
        <p className="section-label">MY CERTIFICATES</p>

        <h2>
          Learning & <span>Achievements</span>
        </h2>

        <div className="certificates-grid">

          <div className="certificate-card">
            <img
              src={new URL("./assets/Certificate1.jpg", import.meta.url).href}
              alt="Bootcamp On Cloud Computing"
            />
            <h3>Bootcamp On Cloud Computing</h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL("./assets/Certificate2.jpg", import.meta.url).href}
              alt="Cloud Computing AWS"
            />
            <h3>Cloud Computing AWS</h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL("./assets/Certificate3.jpg", import.meta.url).href}
              alt="Full Stack Developer Internship"
            />
            <h3>Full Stack Developer Internship</h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL("./assets/Certificate4.jpg", import.meta.url).href}
              alt="Java Programming"
            />
            <h3>Java Programming</h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL("./assets/Certificate5.jpg", import.meta.url).href}
              alt="Python Programming"
            />
            <h3>Python Programming</h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL("./assets/Certificate6.jpg", import.meta.url).href}
              alt="Cloud Computing Intern"
            />
            <h3>Cloud Computing Intern</h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL("./assets/Certificate7.jpg", import.meta.url).href}
              alt="Full Stack Developer Intern"
            />
            <h3>Full Stack Developer Intern</h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL("./assets/Certificate8.jpg", import.meta.url).href}
              alt="Python Developer Intern"
            />
            <h3>Python Developer Intern</h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL("./assets/Certificate9.jpg", import.meta.url).href}
              alt="Java Developer Intern"
            />
            <h3>Java Developer Intern</h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL("./assets/Certificate10.jpg", import.meta.url).href}
              alt="Python Programming"
            />
            <h3>Python Programming</h3>
          </div>

          <div className="certificate-card">
            <img
              src={new URL("./assets/Certificate11.jpg", import.meta.url).href}
              alt="Build Your Own Responsive Website"
            />
            <h3>Build Your Own Responsive Website</h3>
          </div>

        </div>
      </section>


      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">

        <p className="section-label">GET IN TOUCH</p>

        <h2>
          Let's <span>Connect</span>
        </h2>

        <p className="contact-intro">
          Have a project idea, internship opportunity, or just want to
          connect? Feel free to reach out. I’d love to hear from you.
        </p>

        <div className="contact-container">

          {/* CONTACT DETAILS */}
          <div className="contact-info">

            <div className="contact-card">

              <div className="contact-icon">✉</div>

              <div>
                <h3>Email</h3>
                <p>saravanananand326@gmail.com</p>
              </div>

            </div>
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>9042336121</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📸</div>

              <div>
                <h3>Instagram</h3>

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
              <div className="contact-icon">💼</div>

              <div>
                <h3>LinkedIn</h3>
                <p>Let's connect professionally</p>
              </div>
            </a>


            <a
              href="https://github.com/saravanan2212-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-link"
            >
              <div className="contact-icon">💻</div>

              <div>
                <h3>GitHub</h3>
                <p>Explore my projects & code</p>
              </div>
            </a>

          </div>


          {/* CONTACT FORM */}
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>

              <h3>Message Sent Successfully!</h3>

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


    </main >
  );
}

export default App;