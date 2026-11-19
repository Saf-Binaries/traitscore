import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Clock3,
  HardHat,
  Leaf,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  Users,
  Wind,
  Wrench,
  X,
  Zap,
} from 'lucide-react'

const emailAddress = 'info@traitscoretchservices.com'
const website = 'www.traitscoretchservices.com'
const address = 'Onyx Building - G-06, Al Khabeesi, Dubai, UAE'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#approach', label: 'Our Approach' },
  { href: '#contact', label: 'Contact' },
]

const heroSlides = [
  {
    image: '/images/hero-engineers.jpg',
    kicker: 'Engineering & Technical Services · UAE',
    title: ['Building Trust', 'Through Engineering', 'Excellence.'],
    accentIndex: 1,
    description:
      'Integrated engineering solutions, delivered with experience, precision and commitment across Electrical, HVAC, Plumbing and Civil disciplines.',
  },
  {
    image: '/images/hero-hvac.jpg',
    kicker: 'Integrated MEP & Civil Expertise',
    title: ['Reliable Systems', 'For Modern', 'Infrastructure.'],
    accentIndex: 2,
    description:
      'From concept and installation to commissioning and lifecycle support, we keep your facilities performing safely and efficiently.',
  },
  {
    image: '/images/hero-pump.jpg',
    kicker: 'Dubai · United Arab Emirates',
    title: ['From Experience', 'To Engineering', 'Excellence.'],
    accentIndex: 2,
    description:
      'A dependable technical partner focused on quality without compromise, safety without exception and disciplined project delivery.',
  },
]

const services = [
  {
    icon: Zap,
    image: '/images/service-electrical.jpg',
    title: 'Electrical Engineering',
    description:
      'Power distribution, lighting, generators, earthing and testing solutions designed for safe, reliable building operation.',
    points: [
      'Low-voltage system design and installation',
      'Power distribution networks & panel board installation',
      'Lighting design, supply and installation',
      'Generator systems, ATS panels and backup power solutions',
      'Earthing and lightning protection systems',
      'Electrical testing, commissioning and certification',
      'Preventive maintenance for electrical systems',
      'Electrical system retrofit projects',
    ],
  },
  {
    icon: Wind,
    image: '/images/service-hvac.jpg',
    title: 'HVAC',
    description:
      'Chilled water, ventilation, air distribution and commissioning services that balance comfort with long-term performance.',
    points: [
      'Chilled water system installation and commissioning',
      'ABU, FAHU/FCU, VRF/VRV systems, package units and DX systems',
      'Ventilation and fresh air systems',
      'Air distribution, ducting and airflow balancing',
      'Indoor air quality improvement solutions',
      'Energy optimisation and HVAC performance tuning',
      'Complete HVAC testing and commissioning',
      'HVAC retrofit projects',
    ],
  },
  {
    icon: Wrench,
    image: '/images/service-plumbing.jpg',
    title: 'Plumbing',
    description:
      'Water supply, drainage, pumps and maintenance solutions delivered with proper coordination and maintainability.',
    points: [
      'Water supply system design and installation using PPR, HDPE, UPVC, Flexible PVC and Flexible SS',
      'Drainage and sewerage networks',
      'Pump installations and booster systems',
      'Irrigation networks and control systems',
      'Water storage tanks, filtration and dosing systems',
      'Plumbing maintenance and leak detection',
      'Grease trap and wastewater management solutions',
      'Plumbing system retrofit projects',
    ],
  },
  {
    icon: Building2,
    image: '/images/service-civil.jpg',
    title: 'Civil Engineering',
    description:
      'Refurbishment, structural repairs, waterproofing and fit-out works that protect the condition and value of your assets.',
    points: [
      'Building refurbishment',
      'Structural repairs',
      'Concrete restoration',
      'Masonry works',
      'Waterproofing systems',
      'Tiling and flooring',
      'Painting and decorative finishes',
      'Ceiling and partition works',
      'Interior fit-out support',
      'Building maintenance',
    ],
  },
]

const aboutPoints = [
  { icon: HardHat, label: 'Qualified Professionals' },
  { icon: ShieldCheck, label: 'Safety Without Exception' },
  { icon: CheckCircle2, label: 'Quality Without Compromise' },
]

const whyItems = [
  {
    icon: CircleDot,
    title: 'One Point of Responsibility',
    description: 'A single accountable partner coordinating multiple disciplines with clarity and control.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Solutions',
    description: 'Practical engineering choices that support efficiency, performance and asset lifecycle value.',
  },
  {
    icon: Clock3,
    title: 'On-Time Delivery',
    description: 'Robust planning and disciplined site management to keep work aligned with agreed timelines.',
  },
  {
    icon: Users,
    title: 'Client-Focused Approach',
    description: 'We take time to understand requirements, communicate clearly and remain responsive throughout.',
  },
]

const projects = [
  {
    image: '/images/project-1.jpg',
    tag: 'MEP Services',
    title: 'Plant Room & Essential Systems',
    description: 'Reliable mechanical and electrical support for critical building operations.',
  },
  {
    image: '/images/project-2.jpg',
    tag: 'HVAC',
    title: 'Rooftop & Ventilation Works',
    description: 'Installation and commissioning focused on comfort, efficiency and performance.',
  },
  {
    image: '/images/project-3.jpg',
    tag: 'Engineering',
    title: 'Technical Planning & Coordination',
    description: 'On-site collaboration and execution guided by clear engineering standards.',
  },
]

function Logo({ light = false }) {
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href="#home" aria-label="Traits Core home">
      <img className="brand-logo-img" src="/images/logo.png" alt="Traits Core Technical Services LLC" />
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [formMessage, setFormMessage] = useState('')

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone') || 'Not provided'
    const service = formData.get('service')
    const message = formData.get('message')
    const subject = `Project enquiry from ${name}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      '',
      'Project details:',
      message,
    ].join('\n')

    setFormMessage('Your email app will open with your enquiry ready to send.')
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const slide = heroSlides[activeSlide]

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
              Get a Quote <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-slides" aria-hidden="true">
            {heroSlides.map((item, index) => (
              <div
                key={item.image}
                className={`hero-slide${index === activeSlide ? ' is-active' : ''}`}
                style={{ backgroundImage: `url(${item.image})` }}
              />
            ))}
          </div>
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-copy reveal">
              <p className="hero-kicker">{slide.kicker}</p>
              <h1>
                {slide.title.map((line, index) => (
                  <span key={line} className={index === slide.accentIndex ? 'accent' : ''}>
                    {line}
                    {index < slide.title.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h1>
              <p className="hero-description">{slide.description}</p>
              <div className="hero-actions">
                <a className="button button-gold" href="#services">
                  Explore Our Services <ArrowRight size={17} />
                </a>
                <a className="button button-ghost" href="#contact">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="hero-side reveal">
              <div className="hero-badge">
                <img src="/images/logo.png" alt="" />
                <span>Traits Core Technical Services LLC</span>
              </div>
              <div className="hero-controls" aria-label="Hero slides">
                <button type="button" onClick={() => setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)} aria-label="Previous slide">
                  <ChevronLeft size={18} />
                </button>
                <div className="hero-dots">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={index === activeSlide ? 'active' : ''}
                      aria-label={`Go to slide ${index + 1}`}
                      onClick={() => setActiveSlide(index)}
                    />
                  ))}
                </div>
                <button type="button" onClick={() => setActiveSlide((current) => (current + 1) % heroSlides.length)} aria-label="Next slide">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#services">
            Scroll Down <ChevronDown size={16} />
          </a>
        </section>

        <section className="services section" id="services">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <p className="eyebrow">Our Services</p>
                <h2>Four Disciplines. <span>One Integrated Solution.</span></h2>
              </div>
              <a className="inline-link" href="#contact">View All Services <ArrowUpRight size={15} /></a>
            </div>
            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon
                const waMessage = `Hello, I'm interested in ${service.title} services from Traits Core.`
                const waUrl = `https://wa.me/971503247488?text=${encodeURIComponent(waMessage)}`
                return (
                  <article className="service-card reveal" key={service.title}>
                    <div className="service-image">
                      <img src={service.image} alt={`${service.title} service`} loading="lazy" />
                    </div>
                    <div className="service-body">
                      <span className="service-icon"><Icon size={20} /></span>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      {service.points?.length ? (
                        <ul className="service-points">
                          {service.points.map((point) => (
                            <li key={point}>
                              <CheckCircle2 size={14} aria-hidden="true" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      <div className="service-actions">
                        <a className="service-enquire" href="#contact">
                          Enquire Now <ArrowRight size={14} />
                        </a>
                        <a className="service-whatsapp" href={waUrl} target="_blank" rel="noreferrer" aria-label={`WhatsApp about ${service.title}`}>
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="wrap about-grid">
            <div className="about-media reveal">
              <img src="/images/about-main.jpg" alt="Engineers reviewing technical plans on site" loading="lazy" />
              <div className="about-badge">
                <strong>18+</strong>
                <span>Years of Experience</span>
              </div>
            </div>
            <div className="about-copy reveal">
              <p className="eyebrow">About Traits Core</p>
              <h2>From Experience to <span>Engineering Excellence.</span></h2>
              <p>
                Traits Core Technical Services LLC is a Dubai-based engineering and technical services company specialising in integrated Electrical, HVAC, Plumbing and Civil Engineering solutions, alongside building maintenance, retrofit, sustainability and project management.
              </p>
              <p>
                Led by professionals with strong regional experience, our teams deliver projects safely, on time and in compliance with applicable UAE requirements — with a clear focus on reliability and long-term performance.
              </p>
              <div className="about-points">
                {aboutPoints.map((point) => {
                  const Icon = point.icon
                  return (
                    <div key={point.label} className="about-point">
                      <Icon size={18} />
                      <span>{point.label}</span>
                    </div>
                  )
                })}
              </div>
              <a className="button button-dark" href="#contact">Learn More <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="why section" id="approach">
          <div className="wrap">
            <div className="section-head center reveal">
              <div>
                <p className="eyebrow">Why Choose Us</p>
                <h2>Your Trusted Engineering <span>Partner in the UAE.</span></h2>
              </div>
            </div>
            <div className="why-grid">
              {whyItems.map((item) => {
                const Icon = item.icon
                return (
                  <article className="why-card reveal" key={item.title}>
                    <span className="why-icon"><Icon size={22} /></span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <p className="eyebrow">Our Projects</p>
                <h2>Turning Ideas into <span>Lasting Solutions.</span></h2>
              </div>
              <a className="inline-link" href="#contact">View All Projects <ArrowUpRight size={15} /></a>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card reveal" key={project.title}>
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <span>{project.tag}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="wrap cta-inner reveal">
            <div>
              <p className="eyebrow eyebrow-light">Let&apos;s Build Something Reliable</p>
              <h2>Discuss your next project with our team.</h2>
              <p>Partner with a Dubai-based engineering team committed to dependable delivery and long-term performance.</p>
            </div>
            <a className="button button-gold" href="#contact">Get in Touch <ArrowRight size={17} /></a>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="wrap contact-grid">
            <div className="contact-info reveal">
              <p className="eyebrow">Contact</p>
              <h2>Start with a <span>conversation.</span></h2>
              <p>Tell us about your requirements and our team will be in touch to explore how we can support your project.</p>
              <div className="contact-list">
                <a href={`mailto:${emailAddress}`}><Mail size={18} /><span>{emailAddress}</span></a>
                <a href={`https://${website}`} target="_blank" rel="noreferrer"><GlobeIcon /><span>{website}</span></a>
                <div><MapPin size={18} /><span>{address}</span></div>
              </div>
            </div>
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <h3>Request a Quote</h3>
              <div className="form-row">
                <label>Full name<input name="name" required placeholder="Your name" /></label>
                <label>Email<input name="email" type="email" required placeholder="you@company.com" /></label>
              </div>
              <div className="form-row">
                <label>Phone<input name="phone" type="tel" placeholder="+971" /></label>
                <label>Service
                  <select name="service" required defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Electrical Engineering</option>
                    <option>HVAC</option>
                    <option>Plumbing</option>
                    <option>Civil Engineering</option>
                    <option>Building Maintenance & Retrofit</option>
                    <option>Project Management</option>
                  </select>
                </label>
              </div>
              <label>Project details<textarea name="message" rows="5" required placeholder="Location, scope and timeline" /></label>
              <button type="submit" className="button button-dark">Send Enquiry <ArrowRight size={16} /></button>
              {formMessage ? <p className="form-note success">{formMessage}</p> : <p className="form-note">We&apos;ll respond promptly and treat your information confidentially.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <Logo light />
            <p>Integrated engineering and technical services across the UAE.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            <a href={`https://${website}`} target="_blank" rel="noreferrer">{website}</a>
            <span>{address}</span>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>© {new Date().getFullYear()} Traits Core Technical Services LLC. All rights reserved.</span>
          <span>Dubai, UAE</span>
        </div>
      </footer>
    </div>
  )
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export default App
