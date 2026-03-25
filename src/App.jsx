import { useEffect, useState } from 'react'
import './App.css'

const pages = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

const homeHighlights = [
  {
    title: 'Your Time',
    text: 'Consistent repetitive runs in a fraction of the time it takes to run live cattle.',
    icon: 'clock',
  },
  {
    title: 'Compatibility',
    text: 'Works with any tow-behind dummy currently on the market.',
    icon: 'link',
  },
  {
    title: 'Mastery',
    text: 'Advance the skill level and partnership of both the ropers and their horses.',
    icon: 'target',
  },
]

const dummyCompatibility = [
  'Heel-O-Matic',
  'Smarty',
  'Hot Heels',
  'Texas Roping Dummies',
  'Calf Tracker',
  'Any other towable roping dummy',
]

const missionPillars = [
  {
    title: 'Innovation',
    text: 'Designed to train you and your horses in the privacy of your own back yard.',
  },
  {
    title: 'Enablement',
    text: 'Anybody can start from any level and build their skills no matter their experience.',
  },
  {
    title: 'Community',
    text: 'Build a supportive community where ropers can connect, share, and inspire each other on their journey.',
  },
]

const reviews = [
  'Lari Dee Guy',
  'Cody Demers',
  'Steve Birnie',
  'Lari McGrady',
  'Hope Thompson',
  'Ty Yost',
]

const pricingTiers = [
  {
    name: 'Rope Hog - Standard',
    price: '$11,995',
    suffix: 'USD',
    description: 'Our standard track is set up for team ropers and can fit in any 50′ x 70′ rectangle.',
    features: [
      '70x50 track',
      'Sixteen 8ft straight track and 4 corner tracks',
      'Brand new Honda 90cc',
      'Connecting carriage',
      'Remote operated',
    ],
  },
  {
    name: 'Rope Hog - Custom Track',
    price: 'Call',
    suffix: 'for details',
    description: 'Additional pieces can be purchased to add to your track system.',
    features: [
      'Delivery and set up by Rope Hog team member (optional)',
      'Custom size track',
      'Custom pricing',
    ],
  },
]

const faqs = [
  {
    question: 'Do I need someone to drive the 4 Wheeler?',
    answer:
      'No. The Rope Hog is remote operated. The speed is controlled by a key fob, and the rail system guides the 4 wheeler around the track.',
  },
  {
    question: 'Can you practice by yourself?',
    answer:
      'Yes. This is what makes the Rope Hog so effective. What would take at least 2 other people and hours of time can be done with one person and 45 minutes.',
  },
  {
    question: 'Can the Rope Hog be used to train horses?',
    answer:
      'Yes. Consistent repetition is one of the best ways to train your horse, and Rope Hog is built for that kind of practice.',
  },
  {
    question: 'Do I need an arena to use the Rope Hog?',
    answer: 'No. The Rope Hog can be set up in a 50′ x 70′ rectangle, even in your backyard.',
  },
  {
    question: 'What dummy do I need?',
    answer:
      'The Rope Hog works with any tow-behind dummy on the market, no matter what event you are training for.',
  },
]

const galleryItems = [
  {
    title: 'Solo practice runs',
    text: 'Train day or night without needing extra help to keep the session moving.',
  },
  {
    title: 'Horse development',
    text: 'Use steady repetition to build confident horses and cleaner timing.',
  },
  {
    title: 'Backyard setup',
    text: 'A modular system designed to fit a standard 70x50 rectangle.',
  },
  {
    title: 'Event flexibility',
    text: 'Train team roping, heading, heeling, calf roping, and breakaway with one system.',
  },
  {
    title: 'Tow-dummy compatible',
    text: 'Pull the dummies you already use instead of being locked into one brand.',
  },
  {
    title: 'Remote operation',
    text: 'Control pace and repetition with a key fob while the rail system guides the track.',
  },
]

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Pricing', href: '#pricing' },
]

const contactDetails = [
  { label: 'Sales', value: '(801) 400-5584' },
  { label: 'Support', value: '(801) 592-2579' },
  { label: 'Email', value: 'dorianbundy@gmail.com' },
]

const actionVideos = [
  {
    id: 'iQFtwo7aM9s',
    title: 'Rope Hog action video 1',
  },
  {
    id: 'eCgRkLdd2wk',
    title: 'Rope Hog action video 2',
  },
  {
    id: 'oB5JFzKaItE',
    title: 'Rope Hog action video 3',
  },
  {
    id: 'oMOXHFbIC-4',
    title: 'Rope Hog action video 4',
  },
]

function getCurrentPage() {
  const hash = window.location.hash.replace('#', '')
  return pages.some((page) => page.id === hash) ? hash : 'home'
}

function HighlightIcon({ type }) {
  const icons = {
    clock: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5v5l3.5 2" />
      </svg>
    ),
    link: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9.5 14.5 7.4 16.6a3 3 0 1 1-4.2-4.2l3-3a3 3 0 0 1 4.2 0" />
        <path d="m14.5 9.5 2.1-2.1a3 3 0 1 1 4.2 4.2l-3 3a3 3 0 0 1-4.2 0" />
        <path d="m8.5 15.5 7-7" />
      </svg>
    ),
    target: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  }

  return <span className="highlight-icon">{icons[type]}</span>
}

function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getCurrentPage())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const pageContent = {
    home: (
      <>
        <section className="hero-section section">
          <div className="hero-stack">
            <div className="hero-stage">
              <video
                className="hero-video"
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
              >
                <source src="/herovideo.mp4" type="video/mp4" />
              </video>
              <div className="hero-overlay">
                <div className="eyebrow">Start roping today</div>
                <img className="hero-logo" src="/ropehoglogo.png" alt="Rope Hog" />
                <div className="hero-copy">
                  <h1>Make your time count.</h1>
                  <p className="lead">
                    A remote controlled rail system designed to bring your roping skills
                    to the next level and train solid horses.
                  </p>
                  <div className="cta-row">
                    <a className="button button-primary" href="#contact">
                      Get Started
                    </a>
                    <a className="button button-secondary button-light" href="#pricing">
                      View Pricing
                    </a>
                  </div>
                </div>
              </div>
              <div className="stat-card">
                <strong>Practice without assistance</strong>
                <span>Just you and your horse, any time day or night, over and over again.</span>
              </div>
            </div>
            <div className="hero-photo-row">
              <div className="image-frame featured-shot">
                <img src="/image1.png" alt="Rope Hog track system installed outdoors" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="kicker">Why Rope Hog</p>
            <h2>A training system built for repetition, consistency, and real progress.</h2>
          </div>
          <div className="card-grid three-up">
            {homeHighlights.map((item) => (
              <article className="info-card" key={item.title}>
                <HighlightIcon type={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section accent-panel event-section">
          <div className="event-copy">
            <p className="kicker">Designed for every event</p>
            <h2>Train smarter with the dummies you already use.</h2>
            <p>
              Rope Hog offers a cutting-edge remote operated track system designed to
              enhance roping practice without any assistance. Our mission is simple:
              elevate the skills of every roper who trains with us.
            </p>
          </div>
          <div className="event-list">
            <ul className="feature-list">
              {dummyCompatibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="support-copy">
              We cater to team roping, heading, heeling, calf roping, and breakaway.
            </p>
          </div>
        </section>

        <section className="section split-section detail-grid">
          <div className="detail-stack">
            <div className="info-card detail-card detail-card-image3">
              <div className="detail-card-overlay">
                <p className="kicker">See details</p>
                <h3>Want to know more about the Rope Hog track system?</h3>
                <p>
                  Explore pricing, compare standard and custom options, and contact the team
                  for a setup built around the way you train.
                </p>
                <div className="cta-row">
                  <a className="button button-primary" href="#pricing">
                    See Details Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="detail-stack">
            <div className="info-card detail-card detail-card-image2">
              <div className="detail-card-overlay">
              <p className="kicker">Modular track system</p>
              <h3>Standard 70x50 rectangle</h3>
              <p>
                Our modular track system is available in a standard 70x50 rectangle, and
                additional track is available so you can customize your setup for your
                event or training style.
              </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section page-shell">
          <div className="section-heading narrow">
            <p className="kicker">In action</p>
            <h2>See the Rope Hog in action.</h2>
            <p className="lead">
              Real product footage helps visitors understand the pace, motion, and
              training flow of the system.
            </p>
          </div>
          <div className="video-grid">
            {actionVideos.map((video) => (
              <div className="video-embed" key={video.id}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </section>

        <section className="section section-cta">
          <div className="cta-banner">
            <div>
              <p className="kicker">Make your time count</p>
              <h2>Bring your roping skills and your horses to the next level.</h2>
            </div>
            <a className="button button-primary" href="#contact">
              Get Started
            </a>
          </div>
        </section>
      </>
    ),
    about: (
      <>
        <section className="section page-shell">
          <div className="section-heading narrow">
            <p className="kicker">About</p>
            <h1>Changing the game.</h1>
            <p className="lead">
              Rope Hog was invented to help ropers hone their skills, produce superior
              horses, and most importantly practice without any assistance.
            </p>
            <p className="support-copy">
              Just you and your horse, any time day or night, over and over again
              through remote operation.
            </p>
          </div>
          <div className="story-block">
            <div>
              <p className="kicker">Built to last</p>
              <h2>Uncompromising quality is woven into every part of the product.</h2>
            </div>
            <p>
              At Rope Hog, durability, reliability, and peak performance come first.
              Invest in your horses, protect your cattle, and save your time with a
              system designed to last for years.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="kicker">Our mission</p>
            <h2>Innovation, enablement, and community.</h2>
          </div>
          <div className="card-grid three-up">
            {missionPillars.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section page-shell">
          <div className="section-heading narrow">
            <p className="kicker">Customer reviews</p>
            <h2>See our customers&apos; reviews.</h2>
          </div>
          <div className="review-grid">
            {reviews.map((name) => (
              <article className="review-card" key={name}>
                <strong>{name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-cta">
          <div className="cta-banner">
            <div>
              <p className="kicker">Make your time count</p>
              <h2>Bring your roping skills and your horses to the next level.</h2>
            </div>
            <a className="button button-primary" href="#contact">
              Get Started
            </a>
          </div>
        </section>
      </>
    ),
    pricing: (
      <>
        <section className="section page-shell">
          <div className="section-heading narrow">
            <p className="kicker">Pricing</p>
            <h1>The sound investment for every roping event.</h1>
          </div>
          <div className="card-grid pricing-grid">
            {pricingTiers.map((tier) => (
              <article className="price-card" key={tier.name}>
                <div className="price-header">
                  <div>
                    <h3>{tier.name}</h3>
                    <p>{tier.description}</p>
                  </div>
                  <div className="price-tag-wrap">
                    <div className="price-tag">{tier.price}</div>
                    <span className="price-suffix">{tier.suffix}</span>
                  </div>
                </div>
                <ul className="feature-list compact">
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="cta-row">
                  <a className="button button-primary" href="#contact">
                    Get Started
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section page-shell">
          <div className="section-heading narrow">
            <p className="kicker">Questions</p>
            <h2>Got a question about our product and pricing?</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="info-card faq-card" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-cta">
          <div className="cta-banner">
            <div>
              <p className="kicker">Make your time count</p>
              <h2>Bring your roping skills and your horses to the next level.</h2>
            </div>
            <a className="button button-primary" href="#contact">
              Get Started
            </a>
          </div>
        </section>
      </>
    ),
    gallery: (
      <section className="section page-shell">
        <div className="section-heading narrow">
          <p className="kicker">Gallery</p>
          <h1>See the Rope Hog in action.</h1>
          <p className="lead">
            This page is structured to showcase the product in motion, training setups,
            horse development, and event-specific practice sessions.
          </p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <article className="gallery-card" key={item.title}>
              <div className={`gallery-art gallery-art-${(index % 3) + 1}`}>
                <span>{item.title}</span>
              </div>
              <div className="gallery-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    ),
    contact: (
      <section className="section page-shell">
        <div className="section-heading narrow">
          <p className="kicker">Contact</p>
          <h1>Have a question for us? Go for it.</h1>
          <p className="lead">Don&apos;t hesitate to call.</p>
        </div>
        <div className="contact-layout">
          <div className="info-card contact-card">
            <h3>Reach Rope Hog</h3>
            <ul className="contact-list">
              {contactDetails.map((detail) => (
                <li key={detail.label}>
                  <span>{detail.label}</span>
                  <strong>{detail.value}</strong>
                </li>
              ))}
            </ul>
          </div>
          <form className="contact-form">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="Your email" />
            </label>
            <label>
              Tell us all about it
              <textarea
                name="details"
                rows="6"
                placeholder="Tell us about your questions, setup, and training goals."
              />
            </label>
            <button className="button button-primary" type="submit">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    ),
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={() => setCurrentPage('home')}>
          <img className="brand-logo" src="/ropehoglogo.png" alt="Rope Hog logo" />
          <span className="brand-text">
            <strong>Rope Hog</strong>
            <small>Remote controlled roping track system</small>
          </span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          {pages.map((page) => (
            <a
              key={page.id}
              href={`#${page.id}`}
              className={currentPage === page.id ? 'active' : ''}
              onClick={() => setCurrentPage(page.id)}
            >
              {page.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setCurrentPage('contact')}>
            Get Started
          </a>
        </nav>
      </header>

      <main>{pageContent[currentPage]}</main>

      <footer className="site-footer">
        <img className="footer-logo" src="/ropehoglogo.png" alt="Rope Hog logo" />
        <div className="footer-meta">
          <p>&copy; 2024 RopeHogLLC, All rights reserved.</p>
          <div className="footer-links">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setCurrentPage(link.href.slice(1))}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <span>(801) 592-2579</span>
      </footer>
    </div>
  )
}

export default App
