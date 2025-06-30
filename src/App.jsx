import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Download, Send, Menu, X } from 'lucide-react';
import project_1 from "./assets/project1.png";
import project_2 from "./assets/project2.png";
import project_3 from "./assets/project3.png";
import project_4 from "./assets/project4.png";

import my_profile from "./assets/my_profile.jpg";

import ScrollFloat from './ScrollFloat';
import ClickSpark from './ClickSpark';

// Animated Background Component - Updated for dark theme
const AnimatedBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none -z-10 overflow-hidden bg-gray-900">
      {/* Floating Geometric Shapes - Darker colors */}
      <div
        className="absolute rounded-full bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm animate-float"
        style={{
          width: '300px',
          height: '300px',
          top: '10%',
          right: '10%',
          transform: `translateY(${scrollY * 0.3}px) rotateZ(${scrollY * 0.1}deg) translateX(${mousePos.x * 0.1}px)`,
          animationDelay: '0s'
        }}
      />
      <div
        className="absolute rounded-full bg-gradient-to-br from-pink-900/15 to-yellow-900/15 backdrop-blur-sm animate-float"
        style={{
          width: '200px',
          height: '200px',
          top: '60%',
          left: '5%',
          transform: `translateY(${scrollY * -0.2}px) rotateZ(${scrollY * -0.05}deg) translateX(${mousePos.x * -0.05}px)`,
          animationDelay: '-7s'
        }}
      />
      <div
        className="absolute rounded-full bg-gradient-to-br from-green-900/15 to-blue-900/15 backdrop-blur-sm animate-float"
        style={{
          width: '150px',
          height: '150px',
          top: '30%',
          left: '20%',
          transform: `translateY(${scrollY * 0.4}px) rotateZ(${scrollY * 0.08}deg) translateY(${mousePos.y * 0.1}px)`,
          animationDelay: '-3s'
        }}
      />
      <div
        className="absolute rounded-full bg-gradient-to-br from-red-900/20 to-purple-900/20 backdrop-blur-sm animate-float"
        style={{
          width: '250px',
          height: '250px',
          top: '70%',
          right: '25%',
          transform: `translateY(${scrollY * -0.1}px) rotateZ(${scrollY * -0.03}deg) translateX(${mousePos.x * 0.08}px)`,
          animationDelay: '-10s'
        }}
      />
      <div
        className="absolute rounded-full bg-gradient-to-br from-yellow-900/15 to-green-900/15 backdrop-blur-sm animate-float"
        style={{
          width: '180px',
          height: '180px',
          top: '15%',
          left: '45%',
          transform: `translateY(${scrollY * 0.25}px) rotateZ(${scrollY * 0.06}deg) translateY(${mousePos.y * -0.05}px)`,
          animationDelay: '-5s'
        }}
      />

      {/* Gradient Overlays - Darker */}
      <div
        className="absolute w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(55, 48, 163, 0.1) 0%, transparent 50%)',
          transform: `translateY(${scrollY * 0.15}px) scale(${1 + scrollY * 0.0005})`
        }}
      />
      <div
        className="absolute w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(76, 29, 149, 0.1) 0%, transparent 50%)',
          transform: `translateY(${scrollY * -0.1}px) scale(${1 + scrollY * 0.0003})`
        }}
      />
    </div>
  );
};

// Navbar Component - Dark theme
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full bg-gray-900/95 backdrop-blur-lg z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/98 shadow-xl' : ''}`}>
      <div className="flex justify-between items-center max-w-6xl mx-auto px-5 h-[70px] relative z-50">
        <div className="text-indigo-400 font-bold text-xl cursor-pointer">SR</div>

        <div className={`md:flex gap-8 ${isMobileMenuOpen ? 'fixed left-0 top-[70px] flex-col w-full bg-gray-800 text-center py-10 shadow-xl' : 'hidden'}`}>
          <button onClick={() => scrollToSection('home')} className="text-gray-100 font-medium hover:text-indigo-400 transition-colors text-lg cursor-pointer">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-100 font-medium hover:text-indigo-400 transition-colors text-lg cursor-pointer">About</button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-100 font-medium hover:text-indigo-400 transition-colors text-lg cursor-pointer">Projects</button>
          <button onClick={() => scrollToSection('skills')} className="text-gray-100 font-medium hover:text-indigo-400 transition-colors text-lg cursor-pointer">Skills</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-100 font-medium hover:text-indigo-400 transition-colors text-lg cursor-pointer">Contact</button>
        </div>

        <div className="md:hidden cursor-pointer text-gray-100" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
};

// Hero Component - Dark theme
const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center text-gray-100 pt-[70px] relative z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 to-purple-900/70 opacity-10 z-0"></div>

      <div
        className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center relative z-20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">
            Hi, I'm <span className="text-indigo-400">Siva Ram</span>
          </h1>
          <h2 className="text-2xl mb-5 opacity-90">Frontend Developer</h2>
          <p className="text-lg mb-10 opacity-80">
            I create beautiful, responsive web applications with modern technologies.
            Passionate about clean code and exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <button
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all cursor-pointer"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button
              className="bg-transparent text-gray-100 border-2 border-indigo-400 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-indigo-400/10 hover:text-white transition-all cursor-pointer"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-indigo-400/20 transition-transform duration-300 perspective-1000 hover:scale-100"

          >
            <img
              src={my_profile}
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// About Component - Dark theme
const About = () => {
  const education = [
    {
      year: "2022-2026",
      degree: "Bachelor of Technology",
      institution: "SRKR ENGINEERING COLLEGE",
      specialization: "Computer Science Engineering",
      score: "CGPA: 8.2/10"
    },
    {
      year: "2020-2022",
      degree: "Higher Secondary",
      institution: "Sri Chaitanya Junior College",
      specialization: "Science Stream",
      score: "Percentage: 94.4%"
    },
    {
      year: "2020",
      degree: "Secondary School",
      institution: "Sri Chaitanya School",
      specialization: "",
      score: "CGPA: 10/10"
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-800/95 backdrop-blur-lg relative z-10">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-100">About Me</h2>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Education Timeline */}
          <div className="relative h-full p-8 rounded-xl border border-gray-700 bg-gray-900/50">
            <h3 className="text-2xl font-bold mb-8 text-indigo-400 flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
              Education Journey
            </h3>

            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 h-full w-0.5 bg-indigo-400/30"></div>

              {education.map((edu, i) => (
                <div key={i} className="relative pl-10 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-4 h-4 rounded-full bg-indigo-400 border-4 border-gray-900 -translate-x-1/2 group-hover:scale-125 transition-transform"></div>

                  <div className="bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-indigo-400/50 transition-colors">
                    <p className="text-sm font-mono text-indigo-400 mb-1">{edu.year}</p>
                    <h4 className="text-xl font-semibold text-gray-100 mb-1">{edu.degree}</h4>
                    <p className="text-gray-300 font-medium mb-1">{edu.institution}</p>
                    {edu.specialization && <p className="text-gray-400 text-sm mb-1">{edu.specialization}</p>}
                    <p className="text-gray-400 text-sm font-medium">{edu.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-5 text-gray-100">Hello! I'm Siva Ram</h3>
            <p className="text-gray-300 mb-5 text-lg">
              A passionate and enthusiastic fresher looking to kickstart my career in frontend development.
              I specialize in React.js, JavaScript, and modern web technologies, with strong foundations
              in computer science principles.
            </p>
            <p className="text-gray-300 mb-10 text-lg">
              During my academic journey, I've completed multiple projects and internships that have honed
              my technical skills. I'm eager to apply my knowledge, learn from experienced professionals,
              and contribute to innovative web solutions.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-10">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-indigo-400">15+</h4>
                <p className="text-gray-300 font-medium">Projects Built</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-indigo-400">5+</h4>
                <p className="text-gray-300 font-medium">Tech Certifications</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-indigo-400">2</h4>
                <p className="text-gray-300 font-medium">Internships Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// Project Card Component - Dark theme
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800/90 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-blur-lg border border-gray-700">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-indigo-600/90 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-5">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors cursor-pointer"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors cursor-pointer"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-100">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span key={index} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Projects Component - Dark theme
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce website with shopping cart, payment integration, and user authentication.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: project_1,
      demo: "https://tangybite.netlify.app/",
      github: "https://github.com/Sivaram842/food-del"
    },
    {
      title: "Stylive: Online Fashion Store",
      description: "A responsive fashion storefront UI built with React and Tailwind CSS",
      tech: ["React", "Tailwind CSS", "Netlify"],
      image: project_2,
      demo: "https://stylive.netlify.app/",
      github: "https://github.com/Sivaram842/fashion-app"
    },
    {
      title: "Face Detection Using OpenCV",
      description: "A real-time face detection system built using OpenCV and Python.",
      tech: ["Python", "OpenCV", "Numpy", "Haar Cascade"],
      image: project_4,
      demo: "https://github.com/Sivaram842/Opencv",
      github: "https://github.com/Sivaram842/Opencv"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with smooth animations.",
      tech: ["React", "CSS3", "Framer Motion", "Netlify"],
      image: project_3,
      demo: "https://sivaramp-portfolio.netlify.app/",
      github: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-5 text-gray-100">My Projects</h2>
        <p className="text-gray-400 text-center mb-16 text-lg">Here are some of my recent works</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 ">
          {projects.map((project) => (
            <div key={project.title} className='hover:scale-110'>
              <ProjectCard project={project} />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

// Skills Component - Dark theme
const Skills = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "Python", "HTML5", "CSS3",
    "MongoDB", "Express.js", "Git", "Firebase",
    "Tailwind CSS", "REST APIs", "MySQL"
  ];

  return (
    <section id="skills" className="py-24 bg-gray-800/95 backdrop-blur-lg relative z-10">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-5 text-gray-100">Skills & Technologies</h2>
        <p className="text-gray-400 text-center mb-16 text-lg">Technologies I work with</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700/90 p-5 rounded-lg text-center font-semibold text-gray-200 shadow-md hover:-translate-y-1 hover:shadow-lg hover:bg-indigo-600/30 transition-all backdrop-blur-lg border border-gray-600"
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-5 text-gray-100">Want to know more?</h3>
          <a href="/resume.pdf" download>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-indigo-700 transition-colors cursor-pointer">
              <Download size={20} />
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

// Contact Component - Dark theme
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gray-900/95 backdrop-blur-lg relative z-10">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-5 text-gray-100">Get In Touch</h2>
        <p className="text-gray-400 text-center mb-16 text-lg">Let's work together on your next project</p>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          <div>
            <h3 className="text-2xl font-semibold mb-5 text-gray-100">Let's talk about everything!</h3>
            <p className="text-gray-300 mb-10 text-lg">
              Don't hesitate to reach out to me! Whether you have a question,
              want to discuss a project, or just want to say hello, I'd love to hear from you.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 text-gray-300">
                <Mail size={20} />
                <span>sivaram.p842@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Github size={20} />
                <span>https://github.com/Sivaram842</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Linkedin size={20} />
                <span>https://www.linkedin.com/in/siva-ram-9b2534293/</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg focus:border-indigo-500 focus:outline-none text-lg bg-gray-800 text-gray-100"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg focus:border-indigo-500 focus:outline-none text-lg bg-gray-800 text-gray-100"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg focus:border-indigo-500 focus:outline-none text-lg bg-gray-800 text-gray-100"
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 w-fit hover:bg-indigo-700 transition-colors"
            >
              <Send size={20} />
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component - Dark theme
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-5 md:mb-0">
            <p>&copy; 2025 Siva Ram. All rights reserved.</p>
          </div>
          <div className="flex gap-5">
            <a href="https://github.com/Sivaram842" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/siva-ram-9b2534293/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:sivaram.p842@gmail.com?subject=Portfolio%20Contact&body=Hi%20Sivaram," className="hover:text-indigo-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="font-sans text-gray-100 leading-relaxed relative min-h-screen">
      <AnimatedBackground />

      <ClickSpark
        sparkColor='#6366f1'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}>

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </ClickSpark>
    </div>
  );
};

export default App;