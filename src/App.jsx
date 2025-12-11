import React, { useEffect, useState } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

import profileImg from "./assets/profile.jpg";
import Resume from "./assets/Resume.pdf";

export default function App() {
  const [showSections, setShowSections] = useState({
    about: false,
    skills: false,
    education: false,
    certifications: false,
    projects: false,
    contact: false,
  });

  const [activeSection, setActiveSection] = useState("about");

  const profile = {
    name: "Prasanna Katlekunta",
    title: "Frontend Developer",
    tagline: "Building modern, interactive web applications",
    photo: profileImg,
    skills: [
      {
        category: "Programming & Data Tools",
        items: [
          { name: "Python", level: 90 },
          { name: "Java", level: 85 },
          { name: "C", level: 80 },
          { name: "SQL", level: 85 },
          { name: "MySQL", level: 85 },
          { name: "Power BI", level: 80 }
        ]
      },
      {
        category: "Libraries",
        items: [
          { name: "NumPy", level: 85 },
          { name: "Pandas", level: 90 },
          { name: "Matplotlib", level: 80 }
        ]
      },
      {
        category: "Tools & IDEs",
        items: [
          { name: "Power BI", level: 90 },
          { name: "Git", level: 85 },
          { name: "VS Code", level: 95 }
        ]
      },
      {
        category: "Web Technologies",
        items: [
          { name: "HTML", level: 95 },
          { name: "CSS", level: 90 },
          { name: "Bootstrap", level: 85 },
          { name: "JavaScript", level: 90 },
          { name: "NodeJS", level: 85 },
          { name: "ExpressJS", level: 80 },
          { name: "ReactJS", level: 90 }
        ]
      },
      {
        category: "Soft Skills",
        items: [
          { name: "Problem-Solving", level: 95 },
          { name: "Decision-Making", level: 90 },
          { name: "Communication Skills", level: 92 },
          { name: "Analytical Thinking", level: 95 }
        ]
      },
      {
        category: "Languages Known",
        items: [
          { name: "English", level: 95 },
          { name: "Telugu", level: 100 }
        ]
      },
    ],
    certifications: [
      {
        title: "PwC Launchpad (Jul 2025)",
        desc: "IT Fundamentals, RDBMS, Programming Fundamentals, Data Engineering",
        platform: "PwC Launchpad"
      },
      {
        title: "Oracle Academy",
        desc: "Database Design, Database Programming, PL/SQL",
        platform: "Oracle"
      },
      {
        title: "NxtWave CCBP 4.0 Academy",
        desc: "Static Websites, Responsive Web Design, Python Programming Foundations",
        platform: "NxtWave"
      },
      {
        title: "Eduskills",
        desc: "Generative AI, AI/ML",
        platform: "Eduskills"
      },
      {
        title: "Ebox",
        desc: "Java, JavaScript (ES6), HTML/CSS",
        platform: "Ebox"
      },
    ],
    projects: [
      {
        name: "Match Game",
        desc: "An interactive memory-based image matching game built with React. Features include score tracking, randomized image shuffle, win/lose conditions, and a responsive design for smooth gameplay across devices..",
        technologies: "ReactJS, JavaScript, CSS",
        link: "https://matchGameby5n1.ccbp.tech",
        code: "https://github.com/KatlekuntaPrasanna/matchGame",
      },
      {
        name: "Jobby App",
        desc: "A personal portfolio website showcasing projects, skills, and professional information. Built with React and styled with CSS, it features smooth navigation, responsive design, and interactive UI elements.",
        technologies: "ReactJS, HTML, CSS, JavaScript",
        link: "https://JobSeekersHub.ccbp.tech",
        code: "https://github.com/KatlekuntaPrasanna/jobbyApp",
      },
      {
        name: "Nxt Trends Specific Products",
        desc: "A task manager web application with CRUD functionality for managing product details efficiently. Built with ReactJS, it allows users to add, update, and delete product records with a clean and responsive interface.",
        technologies: "ReactJS, JavaScript, HTML, CSS",
        link: "https://snapstyleby5n1.ccbp.tech/login",
        code: "https://github.com/KatlekuntaPrasanna/nxtTrendzSecifirProductsDetails",
      },
      {
        name: "Emoji Game",
        desc: "Its an emoji gameDeveloped an interactive memory-based emoji game using React (class components) with score tracking, emoji shuffle logic, and win/ lose conditions. Designed with JavaScript and CSS for a responsive and engaging user experience.",
        technologies: "ReactJS, JavaScript, HTML, CSS",
        link: "https://emojisby5n1.ccbp.tech/",
        code: "https://github.com/KatlekuntaPrasanna/emojiGame",
      },
      {
        name: "IPL Dashboard",
        desc: "Displays IPL matches with opponent, result (win/loss), and scores. Built with ReactJS and external APIs for live match data.",
        technologies: "ReactJS, JavaScript, HTML, CSS, External APIs",
        link: "https://IplDashBoard5n1.ccbp.tech",
        code: "https://github.com/KatlekuntaPrasanna/iplDashboardApp",
      },
      {
        name: "Password Manager",
        desc: "A simple web app to store usernames and passwords. Passwords are hidden by default and can be revealed using a Show Passwords toggle.",
        technologies: "JavaScript, HTML, CSS",
        link: "https://pwdManagerby5n1.ccbp.tech",
        code: "https://github.com/KatlekuntaPrasanna/passwordManager",
      }
    ],
    contactEmail: "katlekuntaprasanna5n1@gmail.com",
    social: [
      { name: "GitHub", link: "https://github.com/KatlekuntaPrasanna", icon: faGithub },
      { name: "LinkedIn", link: "https://www.linkedin.com/in/prasannakatlekunta/", icon: faLinkedin },
    ],
  };

  // Scroll animations & active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "education", "certifications", "projects", "contact"];
      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            setShowSections((prev) => ({ ...prev, [sec]: true }));
            setActiveSection(sec);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app black-gold">
      {/* Sidebar */}
      <aside className="sidebar">
        <div
          className="sidebar-name"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img className="sidebar-profile-pic" src={profile.photo} alt="Profile" />
          <span className="sidebar-name-text">{profile.name}</span>
        </div>
        <nav>
          {["about", "skills", "education", "certifications", "projects", "contact"].map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={activeSection === sec ? "active" : ""}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Hero Section */}
        <header className="hero">
          <div className="hero-content">
            <div className="hero-text-image">
              <div className="hero-text">
                <h1>{profile.name}</h1>
                <p className="title">{profile.title}</p>
                <p className="tagline">{profile.tagline}</p>
                <a href="#projects" className="btn">See My Work</a>
                <a href={Resume} download="Prasanna_Katlekunta_Resume.pdf" className="btn download-btn">
                  <FontAwesomeIcon icon={faDownload} /> Download Resume
                </a>
              </div>
              <div className="hero-image">
                <img src={profile.photo} alt={profile.name} />
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className={`section fade-slide ${showSections.about ? "show" : ""}`}>
          <h2>About Me</h2>
          <div className="about-card">
            <p>
              A highly motivated individual with a passion for web development and problem-solving.
              Skilled in Frontend development using React, JavaScript, HTML, and CSS, with experience in backend technologies like NodeJS and SQL.
              Strong ability to learn quickly, adapt to new technologies, and deliver solutions with attention to detail and quality.
            </p>
            <p>
              Adept at designing interactive, user-friendly web applications and responsive interfaces.
              Possess excellent communication skills, logical thinking, and a goal-driven mindset, committed to achieving exceptional results through teamwork and individual dedication.
            </p>
            <p>
              Enthusiastic about continuous learning, exploring emerging technologies such as AI/ML, and applying innovative solutions to real-world challenges.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`section fade-slide ${showSections.skills ? "show" : ""}`}>
          <h2>Skills</h2>

          <div className="skills-container">
            {profile.skills.map((group, idx) => (
              <div className="skill-group" key={idx}>
                <h3>{group.category}</h3>

                {group.items.map((skill, i) => (
                  <div className="skill-progress" key={i}>
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}

              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={`section fade-slide ${showSections.education ? "show" : ""}`}>
          <h2>Education</h2>
          <div className="education-cards">
            {[
              {
                school: "CVR College Of Engineering, Hyderabad, Telangana",
                degree: "BTech Computer Science and Engineering",
                duration: "Nov 2022 - Apr 2026",
                score: "CGPA: 9.2",
              },
              {
                school: "SR Junior College, Kanteshwar, Nizamabad, Telangana",
                degree: "Intermediate (MPC)",
                duration: "Jun 2020 - Apr 2022",
                score: "Percentage: 97.8",
              },
              {
                school: "Krishnaveni Talent School, Kamareddy, Telangana",
                degree: "Secondary School Certificate (SSC)",
                duration: "Jun 2019 - Apr 2022",
                score: "GPA: 10.0",
              },
            ].map((edu, index) => (
              <div className="education-card" key={index}>
                <div className="edu-header">
                  <h3>{edu.school}</h3>
                  <strong><span className="edu-duration">{edu.duration}</span></strong>
                </div>
                <p className="edu-degree">{edu.degree}</p>
                <p className="edu-score">{edu.score}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className={`section fade-slide ${showSections.certifications ? "show" : ""}`}>
          <h2>Certifications</h2>
          <div className="certification-list">
            {profile.certifications.map((cert, index) => (
              <div className="cert-item" key={cert.title}>
                <div className="cert-ribbon">{index + 1}</div>
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <p><strong>Certificates : </strong>{cert.desc}</p>
                  <p><strong>Platform : </strong>{cert.platform}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`section fade-slide ${showSections.projects ? "show" : ""}`}>
          <h2>Projects</h2>
          <div className="project-cards">
            {profile.projects.map((p) => (
              <div className="card project-card" key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <p><strong>Technologies : </strong>{p.technologies}</p>
                <div className="project-buttons">
                  <div className="project-buttons">
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn outline-btn">
                      View Project
                    </a>
                    <a href={p.code} target="_blank" rel="noopener noreferrer" className="btn outline-btn">
                      View Code
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`section fade-slide ${showSections.contact ? "show" : ""}`}>
          <h2>Contact Me</h2>
          <p>Email: <a href={`mailto:${profile.contactEmail}`}>{profile.contactEmail}</a></p>
          <div className="social-links">
            {profile.social.map((s) => (
              <a key={s.name} href={s.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={s.icon} size="2x" />
              </a>
            ))}
          </div>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              fetch("https://formspree.io/f/mvgevzyp", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
              })
                .then(() => alert("Message sent successfully!"))
                .catch(() => alert("Error sending message."));
              e.target.reset();
            }}
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </section>
      </div>

      {/* Floating Shapes */}
      <div className="floating-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 {profile.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
