import { ArrowRight, HeartHandshake, MessageCircle, Scale, ShieldCheck } from 'lucide-react'
import { PageCallout, PageIntro } from '../components/InteriorPage'

const principles = [
  { icon: MessageCircle, title: 'Honest communication', copy: 'Clear, direct conversations help set expectations and build trust over time.' },
  { icon: Scale, title: 'Fairness and respect', copy: 'We believe people deserve to be treated thoughtfully and fairly in business.' },
  { icon: HeartHandshake, title: 'Strong relationships', copy: 'Long-term working relationships are built through reliability and mutual respect.' },
  { icon: ShieldCheck, title: 'Professionalism', copy: 'We value care, responsibility, and respect in the way transportation work is coordinated.' },
]

export default function About() {
  return (
    <>
      <PageIntro eyebrow="ABOUT ROADLINE" title={<>Transportation is<br /><em>people first.</em></>} description="At Roadline Logistics Inc., we believe successful transportation starts with strong relationships." />
      <section className="interior-section page-width about-story">
        <div className="interior-kicker"><span>01</span><p>OUR APPROACH</p></div>
        <div className="interior-copy">
          <h2>Built around<br />independent people.</h2>
          <p>Our business is built around independent owner-operators who bring their own trucks, experience, and dedication to the road. Roadline does not own its own fleet.</p>
          <p>We believe in honest communication, mutual respect, and treating the people we work with fairly. Drivers and workers are an important part of our business, and we strive to build an environment where people feel respected, supported, and valued.</p>
        </div>
      </section>
      <section className="principles-section">
        <div className="page-width">
          <div className="interior-section-heading"><p className="eyebrow"><span className="eyebrow-line eyebrow-line-dark" /> WHAT GUIDES US</p><h2>Principles that<br />show up in the work.</h2></div>
          <div className="principles-grid">
            {principles.map(({ icon: Icon, title, copy }, index) => <article className="principle-item" key={title}><span className="principle-index">0{index + 1}</span><Icon size={25} strokeWidth={1.5} aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>
      <section className="interior-section page-width split-message">
        <p className="eyebrow"><span className="eyebrow-line eyebrow-line-dark" /> OUR OPERATIONS</p>
        <div><h2>Coordinate with care.<br /><em>Work with respect.</em></h2><p>Roadline’s current operations include Amazon-related container transportation and local transportation. We work with independent owner-operators; service details and availability are discussed directly.</p><a className="text-link" href="/services">Explore services <ArrowRight size={16} aria-hidden="true" /></a></div>
      </section>
      <PageCallout title="Good work starts with a conversation." copy="Get in touch about transportation or working together as an owner-operator." />
    </>
  )
}
