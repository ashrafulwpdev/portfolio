'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function Home() {
  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById('mainNav')
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.scroll-animation').forEach(el => {
      observer.observe(el)
    })

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg fixed-top navbar-custom navbar-dark" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#home">Ashraful</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>

        <div className="hero-content">
          <h1 className="hero-title">Hi, I&apos;m <span className="gradient-text">Ashraful</span></h1>
          <p className="hero-subtitle">Creative Developer & Designer | Building Digital Experiences</p>
          <a href="#contact" className="cta-button">Let&apos;s Work Together</a>
        </div>
      </section>

      {/* About Section */}
      <section className="premium-section" id="about" style={{ background: '#0f0f0f' }}>
        <div className="container">
          <h2 className="section-title scroll-animation">About <span className="gradient-text">Me</span></h2>
          <p className="section-subtitle scroll-animation">Passionate about creating beautiful and functional digital experiences</p>

          <div className="row g-4">
            <div className="col-md-4 scroll-animation">
              <div className="glass-card">
                <div className="card-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h3 className="card-title">Clean Code</h3>
                <p className="card-text">Writing maintainable, scalable, and efficient code following best practices and modern standards.</p>
              </div>
            </div>
            <div className="col-md-4 scroll-animation">
              <div className="glass-card">
                <div className="card-icon">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3 className="card-title">Creative Design</h3>
                <p className="card-text">Crafting stunning user interfaces with attention to detail and modern design principles.</p>
              </div>
            </div>
            <div className="col-md-4 scroll-animation">
              <div className="glass-card">
                <div className="card-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3 className="card-title">Fast Performance</h3>
                <p className="card-text">Optimizing every aspect to deliver lightning-fast, smooth user experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="premium-section" id="skills" style={{ background: '#1a1a1a' }}>
        <div className="container">
          <h2 className="section-title scroll-animation">My <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle scroll-animation">Technologies and tools I work with</p>

          <div className="row g-4">
            <div className="col-6 col-md-3 scroll-animation">
              <div className="skill-card">
                <div className="skill-icon"><i className="fab fa-html5"></i></div>
                <div className="skill-name">HTML5</div>
              </div>
            </div>
            <div className="col-6 col-md-3 scroll-animation">
              <div className="skill-card">
                <div className="skill-icon"><i className="fab fa-css3-alt"></i></div>
                <div className="skill-name">CSS3</div>
              </div>
            </div>
            <div className="col-6 col-md-3 scroll-animation">
              <div className="skill-card">
                <div className="skill-icon"><i className="fab fa-js"></i></div>
                <div className="skill-name">JavaScript</div>
              </div>
            </div>
            <div className="col-6 col-md-3 scroll-animation">
              <div className="skill-card">
                <div className="skill-icon"><i className="fab fa-react"></i></div>
                <div className="skill-name">React</div>
              </div>
            </div>
            <div className="col-6 col-md-3 scroll-animation">
              <div className="skill-card">
                <div className="skill-icon"><i className="fab fa-node"></i></div>
                <div className="skill-name">Node.js</div>
              </div>
            </div>
            <div className="col-6 col-md-3 scroll-animation">
              <div className="skill-card">
                <div className="skill-icon"><i className="fab fa-python"></i></div>
                <div className="skill-name">Python</div>
              </div>
            </div>
            <div className="col-6 col-md-3 scroll-animation">
              <div className="skill-card">
                <div className="skill-icon"><i className="fab fa-git-alt"></i></div>
                <div className="skill-name">Git</div>
              </div>
            </div>
            <div className="col-6 col-md-3 scroll-animation">
              <div className="skill-card">
                <div className="skill-icon"><i className="fab fa-figma"></i></div>
                <div className="skill-name">Figma</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="premium-section" id="projects" style={{ background: '#0f0f0f' }}>
        <div className="container">
          <h2 className="section-title scroll-animation">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle scroll-animation">Check out some of my recent work</p>

          <div className="row">
            <div className="col-md-4 scroll-animation">
              <div className="project-card">
                <img src="/assets/img/01.jpg" alt="Project 1" className="project-image" />
                <div className="project-overlay">
                  <h3 className="project-title">Project One</h3>
                  <p className="project-description">A modern web application built with cutting-edge technologies.</p>
                  <a href="#" className="project-link">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 scroll-animation">
              <div className="project-card">
                <img src="/assets/img/02.jpg" alt="Project 2" className="project-image" />
                <div className="project-overlay">
                  <h3 className="project-title">Project Two</h3>
                  <p className="project-description">An innovative solution for complex business challenges.</p>
                  <a href="#" className="project-link">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 scroll-animation">
              <div className="project-card">
                <img src="/assets/img/03.jpg" alt="Project 3" className="project-image" />
                <div className="project-overlay">
                  <h3 className="project-title">Project Three</h3>
                  <p className="project-description">Beautiful design meets powerful functionality.</p>
                  <a href="#" className="project-link">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="premium-section" id="contact" style={{ background: '#1a1a1a' }}>
        <div className="container">
          <h2 className="section-title scroll-animation">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle scroll-animation">Let&apos;s work together on your next project</p>

          <form className="contact-form scroll-animation">
            <input type="text" className="form-control-custom" placeholder="Your Name" required />
            <input type="email" className="form-control-custom" placeholder="Your Email" required />
            <input type="text" className="form-control-custom" placeholder="Subject" required />
            <textarea className="form-control-custom" rows="5" placeholder="Your Message" required></textarea>
            <div className="text-center">
              <button type="submit" className="cta-button">Send Message</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="premium-footer">
        <div className="container">
          <div className="social-links">
            <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fas fa-envelope"></i></a>
          </div>
          <p className="text-center text-white m-0 small">
            Copyright © Ashraful <span id="currentYear">{new Date().getFullYear()}</span> | Crafted with <span style={{ color: '#f5576c' }}>♥</span>
          </p>
        </div>
      </footer>

      {/* Bootstrap JS */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </>
  )
}
