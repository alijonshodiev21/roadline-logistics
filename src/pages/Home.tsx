import { ArrowDownRight, ArrowRight, ArrowUpRight, Container, MapPin, MoveRight, ShieldCheck, Truck } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Container transportation',
    copy: 'Transportation coordination for container moves, with clear communication from request to delivery.',
    icon: Container,
  },
  {
    number: '02',
    title: 'Amazon-related container moves',
    copy: 'Roadline currently supports Amazon-related container transportation. Work is coordinated without implying an official Amazon partnership.',
    icon: Truck,
  },
  {
    number: '03',
    title: 'Local transportation',
    copy: 'Local transportation support shaped around the needs of each customer and the opportunity at hand.',
    icon: MapPin,
  },
]

const values = [
  { title: 'Honesty', copy: 'Say what we mean. Keep communication clear and expectations grounded.' },
  { title: 'Fairness', copy: 'Approach every working relationship with consideration and respect.' },
  { title: 'Professionalism', copy: 'Show up with care, communicate thoughtfully, and follow through.' },
  { title: 'Partnership', copy: 'Build lasting relationships with the people who make the work possible.' },
]

export default function Home() {
  return (
    <>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-image" role="img" aria-label="A tractor-trailer traveling on an open highway at sunset" />
        <div className="hero-shade" />
        <div className="hero-content page-width">
          <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> TRANSPORTATION, BUILT ON RELATIONSHIPS</p>
          <h1 id="hero-title">BUILT ON TRUST.<br /><span>POWERED BY PEOPLE.</span></h1>
          <p className="hero-copy">Roadline Logistics coordinates transportation with independent owner-operators—grounded in honest communication, mutual respect, and dependable partnerships.</p>
          <div className="hero-actions">
            <a className="button button-red" href="#services">Explore our services <ArrowRight size={17} aria-hidden="true" /></a>
            <a className="button button-outline" href="#owner-operators">Become an owner-operator <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-caption"><span>INDEPENDENT OWNER-OPERATORS</span><span>BUILT ON MUTUAL RESPECT</span></div>
        <a href="#services" className="hero-scroll" aria-label="Explore Roadline services"><ArrowDownRight size={23} /></a>
      </section>

      <section className="intro-section page-width" aria-label="Our approach">
        <p className="eyebrow"><span className="eyebrow-line eyebrow-line-dark" /> A DIFFERENT KIND OF ROADLINE</p>
        <div className="intro-grid">
          <h2>Good transportation<br />starts with <em>good people.</em></h2>
          <div className="intro-copy">
            <p>We bring customers and independent owner-operators together through professional transportation coordination. Our approach is straightforward: treat people fairly, communicate honestly, and take every relationship seriously.</p>
            <a className="text-link" href="#about">Meet Roadline <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="page-width">
          <div className="section-heading section-heading-light">
            <div><p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> WHAT WE DO</p><h2 id="services-title">Transportation<br />with purpose.</h2></div>
            <p>Practical transportation coordination, supported by the experience and dedication of independent owner-operators.</p>
          </div>
          <div className="service-list">
            {services.map(({ number, title, copy, icon: Icon }) => (
              <article className="service-row" key={number}>
                <span className="service-number">{number}</span>
                <div className="service-icon"><Icon size={24} strokeWidth={1.5} aria-hidden="true" /></div>
                <div className="service-copy"><h3>{title}</h3><p>{copy}</p></div>
                <a className="service-arrow" href="#contact" aria-label={`Ask about ${title}`}><ArrowUpRight size={20} /></a>
              </article>
            ))}
          </div>
          <div className="services-footnote"><span>01 — 03</span><span>Current operations; service details confirmed case by case.</span></div>
        </div>
      </section>

      <section className="about-section page-width" id="about">
        <div className="about-image" role="img" aria-label="A professional truck driver standing beside a truck" />
        <div className="about-content">
          <p className="eyebrow"><span className="eyebrow-line eyebrow-line-dark" /> WHO WE ARE</p>
          <h2>People are at<br />the heart of<br /><em>every mile.</em></h2>
          <p>Roadline does not own its own fleet. We work with independent owner-operators who bring their own trucks, knowledge, and commitment to the road.</p>
          <p>We believe a strong business is built on honest communication, mutual respect, and treating drivers and workers fairly.</p>
          <a className="text-link" href="#values">What guides us <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="operator-section" id="owner-operators">
        <div className="operator-image" role="img" aria-label="A truck traveling along a highway through open country" />
        <div className="operator-content">
          <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> FOR INDEPENDENT OWNER-OPERATORS</p>
          <h2>Your truck.<br />Your business.<br /><em>A partnership built on trust.</em></h2>
          <p>We value the people behind the wheel. Roadline works with independent owner-operators and is interested in building professional, respectful working relationships.</p>
          <a className="button button-white" href="#contact">Start a conversation <ArrowRight size={17} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="values-section page-width" id="values">
        <div className="values-heading">
          <p className="eyebrow"><span className="eyebrow-line eyebrow-line-dark" /> WHAT WE BELIEVE</p>
          <h2>How we work<br />matters.</h2>
          <p>Relationships are built through the everyday choices we make—and the respect we show each other.</p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <article className="value-item" key={value.title}>
              <span className="value-index">0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-cta">
        <div className="closing-inner page-width">
          <div><p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> LET’S GET STARTED</p><h2>Looking for a transportation partner?</h2></div>
          <a className="button button-red" href="#contact">Talk with Roadline <MoveRight size={18} aria-hidden="true" /></a>
          <ShieldCheck className="closing-mark" size={74} strokeWidth={0.75} aria-hidden="true" />
        </div>
      </section>
    </>
  )
}
