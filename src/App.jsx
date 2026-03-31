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
  {
    name: 'Lari Dee Guy',
    image: 'reviews/lari-dee-guy.jpeg',
    videoId: 'Ck4tdY8ssP8',
  },
  {
    name: 'Cody Demers',
    image: 'reviews/cody-demers.jpeg',
    videoId: 'GxgaD_8lPzw',
  },
  {
    name: 'Steve Birnie',
    image: 'reviews/steve-birnie.jpeg',
    videoId: 'Pq3zXhjI8dc',
  },
  {
    name: 'Larry McGrady',
    image: 'reviews/lari-mcgrady.jpeg',
    videoId: 'fuFypvi0hPA',
  },
  {
    name: 'Hope Thompson',
    image: 'reviews/hope-thompson.jpeg',
    videoId: 'PMgNknTr7nA',
  },
  {
    name: 'Ty Yost',
    image: 'reviews/ty-yost.jpeg',
    videoId: 'ysVrD6pfOtE',
  },
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
    suffix: 'For Details',
    description: 'Additional pieces can be added to expand your track system.',
    features: [
      'Delivery and setup by a Rope Hog team member (optional)',
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
      'Yes. That is what makes Rope Hog so effective. What would normally take extra help and hours of time can be done by one person in a fraction of the time.',
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

const galleryVideos = [
  { id: '_DqoNvUtYpc', title: 'Rope Hog gallery video 1' },
  { id: 'WVpc8mIin6M', title: 'Rope Hog gallery video 2' },
  { id: 'tMWOapIZXkQ', title: 'Rope Hog gallery video 3' },
  { id: 'jXKXpPJQjSQ', title: 'Rope Hog gallery video 4' },
  { id: 'cpjtn5nlz7o', title: 'Rope Hog gallery video 5' },
  { id: 'riVt94rPnHU', title: 'Rope Hog gallery video 6' },
  { id: 'ZSkENmzRzC4', title: 'Rope Hog gallery video 7' },
  { id: 'UV5Xhq_Zoww', title: 'Rope Hog gallery video 8' },
  { id: 'Sa8aoZnh5S0', title: 'Rope Hog gallery video 9' },
]

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Pricing', href: '#pricing' },
]

const contactDetails = [
  { label: 'Sales', value: '(801) 400-5584', href: 'tel:+18014005584' },
  { label: 'Support', value: '(801) 592-2579', href: 'tel:+18015922579' },
  { label: 'Email', value: 'dorianbundy@gmail.com', href: 'mailto:dorianbundy@gmail.com' },
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

const aboutVideos = [
  {
    id: 'GVaCd5_9PIQ',
    title: 'Rope Hog product overview video',
    kicker: 'See the product',
    heading: 'Watch the system in use.',
  },
  {
    id: 'Tb7CHoyBb5E',
    title: 'Podcast episode about the future of roping',
    kicker: 'Future of roping',
    heading: 'Hear the bigger conversation around where the sport is headed.',
    text: 'This conversation explores innovation, training, and how technology is shaping modern roping.',
  },
]

function getCurrentPage() {
  const hash = window.location.hash.replace('#', '')
  return pages.some((page) => page.id === hash) ? hash : 'home'
}

function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path}`
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
  const [activeReview, setActiveReview] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getCurrentPage())
      setIsMenuOpen(false)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (!activeReview) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveReview(null)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [activeReview])

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
                <source src={assetUrl('herovideo.mp4')} type="video/mp4" />
              </video>
              <div className="hero-overlay">
                <div className="eyebrow">Start roping today</div>
                <img className="hero-logo" src={assetUrl('ropehoglogo.png')} alt="Rope Hog" />
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
                <img src={assetUrl('image1.png')} alt="Rope Hog track system installed outdoors" />
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

        <section className="section">
          <div className="press-panel">
            <div className="press-copy">
              <p className="kicker">See Rope Hog In The Press</p>
              <h2>ABC4 recently featured Rope Hog and the story behind the system.</h2>
              <p>
                Read the ABC4 feature on the innovation behind Rope Hog and the impact
                it is making in the roping world.
              </p>
            </div>
            <div className="press-media">
              <img src={assetUrl('abcpicture.png')} alt="ABC4 article preview about Rope Hog" />
              <a
                className="button button-primary press-button"
                href="https://www.abc4.com/news/southern-utah/local-cowboy-innovation-roping-tool/"
                target="_blank"
                rel="noreferrer"
              >
                Read The ABC4 Article
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="release-panel">
            <div className="release-copy">
              <p className="kicker">Partnership Release</p>
              <h2>THE ARENA @ Richards Ranch announced a new partnership with Rope Hog, LLC.</h2>
              <p className="release-date">January 12, 2026</p>
              <p>
                THE ARENA @ Richards Ranch in Jacksboro, Texas announced new partnership
                initiatives for its inaugural 2026 season, including practice sessions
                sponsored by Rope Hog and daily access to a permanent demo unit.
              </p>
              <p>
                Visitors heading to the 2026 USTRC Finals in Fort Worth are encouraged
                to book private practice time, stay the week, and use the facility to
                keep both ropers and horses sharp.
              </p>
            </div>
            <div className="release-details">
              <div className="info-card release-card">
                <p className="kicker">Highlights</p>
                <ul className="feature-list">
                  <li>Tuesday and Thursday practice sessions sponsored by Rope Hog, LLC.</li>
                  <li>Daily access to a permanent demo unit with multiple training sled options.</li>
                  <li>Pre-orders available with shipping options for buyers nationwide.</li>
                </ul>
              </div>
              <div className="info-card release-card">
                <p className="kicker">Richards Ranch</p>
                <p>
                  For updates and reservations, visit{' '}
                  <a href="https://www.rr3tx.com" target="_blank" rel="noreferrer">
                    RR3TX.com
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+18176941286">
                    817-694-1286
                  </a>
                  .
                </p>
                <p className="release-contacts">
                  Sonny Miller: <a href="mailto:Sonny@RR3TX.com">Sonny@RR3TX.com</a>
                </p>
                <p className="release-contacts">
                  Kinzee Shull: <a href="mailto:Kinzee@RR3TX.com">Kinzee@RR3TX.com</a>
                </p>
              </div>
            </div>
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
                <p className="kicker">Explore pricing</p>
                <h3>Want to know more about the Rope Hog track system?</h3>
                <p>
                  Compare standard and custom options, then contact the team to find the
                  right setup for the way you train.
                </p>
                <div className="cta-row">
                  <a className="button button-primary" href="#pricing">
                    View Pricing
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

        <section className="section page-shell">
          <div className="about-video-layout">
            <div className="story-block home-feature-card">
              <div>
                <p className="kicker">Featured Interview</p>
                <h2>Rope Hog was featured on the Cowboy State Daily Show.</h2>
              </div>
              <p>
                Watch Dorian Bundy talk about Rope Hog on Cowboy State Daily. The video
                begins at the interview segment and highlights the story behind the
                product, the training concept, and where the business is headed.
              </p>
              <div className="cta-row">
                <a
                  className="button button-primary"
                  href="https://www.youtube.com/live/2XrFdw_Kbfk"
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch On YouTube
                </a>
              </div>
            </div>
            <div className="video-embed">
              <iframe
                src="https://www.youtube.com/embed/2XrFdw_Kbfk?start=3985&end=4765"
                title="Cowboy State Daily interview with Dorian Bundy"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
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
          <div className="story-block about-video-heading">
            <p className="kicker">{aboutVideos[0].kicker}</p>
            <h2>{aboutVideos[0].heading}</h2>
          </div>
          <div className="video-embed about-video-full">
            <iframe
              src={`https://www.youtube.com/embed/${aboutVideos[0].id}`}
              title={aboutVideos[0].title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
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
          <div className="about-video-layout about-video-layout-reverse">
            <div className="video-embed">
              <iframe
                src={`https://www.youtube.com/embed/${aboutVideos[1].id}`}
                title={aboutVideos[1].title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="story-block">
              <div>
                <p className="kicker">{aboutVideos[1].kicker}</p>
                <h2>{aboutVideos[1].heading}</h2>
              </div>
              <p>{aboutVideos[1].text}</p>
            </div>
          </div>
        </section>

        <section className="section page-shell">
          <div className="section-heading narrow">
            <p className="kicker">Customer reviews</p>
            <h2>See our customers&apos; reviews.</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="review-media">
                  <img src={assetUrl(review.image)} alt={`${review.name} review`} />
                  <button
                    className="review-play"
                    type="button"
                    onClick={() => setActiveReview(review)}
                    aria-label={`Play ${review.name} review video`}
                  >
                    <span className="review-play-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M8 6.5v11l9-5.5-9-5.5Z" />
                      </svg>
                    </span>
                    <span>Play Review</span>
                  </button>
                </div>
                <strong>{review.name}</strong>
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
                <div>
                  <h3>{tier.name}</h3>
                  <p>{tier.description}</p>
                </div>
                <ul className="feature-list compact">
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="price-card-footer">
                  <div className="price-tag-wrap">
                    <div className="price-tag">{tier.price}</div>
                    <span className="price-suffix">{tier.suffix}</span>
                  </div>
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
            A collection of Rope Hog footage showing product motion, training setups,
            and real use in the arena.
          </p>
        </div>
        <div className="gallery-video-grid">
          {galleryVideos.map((video) => (
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
    ),
    contact: (
      <section className="section page-shell">
        <div className="section-heading narrow contact-heading">
          <p className="kicker">Contact</p>
          <h1>Get in touch with Rope Hog.</h1>
          <p className="lead">
            Reach Rope Hog directly for sales questions, support, pricing, or setup
            details.
          </p>
        </div>
        <div className="contact-page-grid">
          <div className="info-card contact-card contact-card-only">
            <p className="kicker">Reach Rope Hog</p>
            <ul className="contact-list contact-list-large">
              {contactDetails.map((detail) => (
                <li key={detail.label}>
                  <span>{detail.label}</span>
                  <strong>
                    <a href={detail.href}>{detail.value}</a>
                  </strong>
                </li>
              ))}
            </ul>
          </div>
          <div className="story-block contact-side-note">
            <div>
              <p className="kicker">How to reach us</p>
              <h2>Call for direct questions. Email for follow-up, pricing, and details.</h2>
            </div>
            <p>
              If you are comparing systems, checking pricing, or figuring out what setup
              fits your event, calling is the fastest way to get an answer.
            </p>
          </div>
        </div>
      </section>
    ),
  }

  return (
    <>
      <div className="site-shell">
        <header className="site-header">
          <a
            className="brand"
            href="#home"
            onClick={() => {
              setCurrentPage('home')
              setIsMenuOpen(false)
            }}
          >
            <img className="brand-logo" src={assetUrl('ropehoglogo.png')} alt="Rope Hog logo" />
            <span className="brand-text">
              <strong>Rope Hog</strong>
              <small>Remote controlled roping track system</small>
            </span>
          </a>
          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav
            id="primary-navigation"
            className={`site-nav ${isMenuOpen ? 'open' : ''}`}
            aria-label="Primary"
          >
            {pages.map((page) => (
              <a
                key={page.id}
                href={`#${page.id}`}
                className={currentPage === page.id ? 'active' : ''}
                onClick={() => {
                  setCurrentPage(page.id)
                  setIsMenuOpen(false)
                }}
              >
                {page.label}
              </a>
            ))}
            <a
              className="nav-cta"
              href="#contact"
              onClick={() => {
                setCurrentPage('contact')
                setIsMenuOpen(false)
              }}
            >
              Get Started
            </a>
          </nav>
        </header>

        <main>{pageContent[currentPage]}</main>

        <footer className="site-footer">
          <img className="footer-logo" src={assetUrl('ropehoglogo.png')} alt="Rope Hog logo" />
          <div className="footer-meta">
            <p>&copy; {currentYear} RopeHog LLC, All rights reserved.</p>
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

      {activeReview ? (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setActiveReview(null)}
        >
          <div
            className="modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-header">
              <h2 id="review-modal-title">{activeReview.name}</h2>
              <button
                className="modal-close"
                type="button"
                onClick={() => setActiveReview(null)}
                aria-label="Close review video"
              >
                ×
              </button>
            </div>
            <div className="video-embed modal-video">
              <iframe
                src={`https://www.youtube.com/embed/${activeReview.videoId}?autoplay=1`}
                title={`${activeReview.name} review video`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default App
