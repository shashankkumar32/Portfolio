
import Spline from '@splinetool/react-spline/next';
import './style.css'; // External CSS file
// import { Flipper, Flipped } from 'react-flip-toolkit';
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="main-container">
      <div className="left-section">
        <h1 className="heading-name">Shashank Kumar</h1>
        <div className="contact-buttons">
      <button className="contact-button call">
        <FaPhoneAlt className="icon" /> Call
      </button>
      <button className="contact-button mail">
        <FaEnvelope className="icon" /> Mail
      </button>
      <button className="contact-button github">
        <FaGithub className="icon" /> GitHub
      </button>
      <button className="contact-button linkedin">
        <FaLinkedin className="icon" /> LinkedIn
      </button>
    </div>
    {/* </Flipper> */}
        {/* <p> (+91) 7004346065</p>
        <p> shashankofficial3209@gmail.com</p>
        <p> shashankkumar32</p>
        <p> shashank-kumar-357770195</p> */}
        <h2 className="heading-skill">Skills</h2>
        <div className="skills-stack">
          <button className="skill-button">React</button>
          <button className="skill-button">Next.js</button>
          <button className="skill-button">Redux</button>
          <button className="skill-button">Axios</button>
          <button className="skill-button">Material-UI</button>
          <button className="skill-button">MongoDB</button>
          <button className="skill-button">JavaScript</button>
          <button className="skill-button">TypeScript</button>
          <button className="skill-button">SQL</button>
          <button className="skill-button">HTML</button>
          <button className="skill-button">CSS</button>
          <button className="skill-button">C++</button>
          <button className="skill-button">Git</button>
          <button className="skill-button">GitHub</button>
          <button className="skill-button">ODI</button>
          <button className="skill-button">JWT Authentication</button>
          <button className="skill-button">OAuth</button>
          <button className="skill-button">RESTful APIs</button>
          <button className="skill-button">OOPs</button>
        </div>
      </div>

      {/* Spline Scene */}
      <Spline
        className="spline-background"
        scene="https://prod.spline.design/haYALpM7B1fTcWeO/scene.splinecode" /* Replace with your valid Spline URL */
      />

      {/* Right Section */}
      <div className="right-section">
  <h2 className="experience-heading">Experience</h2>
      <div className="experience-section">

  <div className="experience-card tech-mahindra">
    <div className="company-name">Tech Mahindra</div>
    <div className="position-name">Associate Software Developer</div>
    <div className="experience-details">
      • Completed 6-month Java Full Stack training covering frontend technologies (HTML, CSS, React, Tailwind) and backend technologies (Java, Spring Boot, SQL).<br />
      • Designed and refined 10+ full-stack features, integrating RESTful APIs and ensuring seamless frontend-backend communication using Java, Spring Boot, and React.<br />
      • Diagnosed memory leaks and optimized database interactions, reducing system crashes by 20%.
    </div>
  </div>

  <div className="experience-card think201">
    <div className="company-name">Think201</div>
    <div className="position-name">Apprenticeship</div>
    <div className="experience-details">
      • Developed reusable components with React, Next.js, TypeScript, and Material-UI, cutting front-end development time by 20%.<br />
      • Led GDPR compliance POC, increased audit scores by 25%.<br />
      • Delivered scalable solutions, supporting a 30% user base growth without performance issues.
    </div>
  </div>

  <div className="experience-card codify">
    <div className="company-name">Codify Apps Private Limited</div>
    <div className="position-name">Frontend Developer Intern</div>
    <div className="experience-details">
      • Structured 15+ frontend components using HTML, CSS, JavaScript, and React.<br />
      • Optimized the Kitchen Display System (KDS) by adding inventory management features.<br />
      • Collaborated on team-based projects, utilizing technical expertise and version control (Git).
    </div>
  </div>
</div>
      </div>
    </main>
  );
}
