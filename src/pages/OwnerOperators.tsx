import { ArrowRight, Check, Handshake, Truck } from 'lucide-react'
import { PageCallout, PageIntro } from '../components/InteriorPage'

const expectations = [
  'Own and operate your own truck as an independent owner-operator.',
  'Be interested in discussing Roadline’s current transportation opportunities.',
  'Value clear communication and professional working relationships.',
]

export default function OwnerOperators() {
  return (
    <>
      <PageIntro eyebrow="INDEPENDENT OWNER-OPERATORS" title={<>Your truck. Your business.<br /><em>A partnership built on trust.</em></>} description="Roadline works with independent owner-operators who own and operate their own trucks. We aim to build relationships grounded in communication, fairness, and respect." />
      <section className="owner-model-section">
        <div className="page-width owner-model-grid">
          <div className="owner-model-mark"><Truck size={42} strokeWidth={1.2} aria-hidden="true" /><span>INDEPENDENT BY DESIGN</span></div>
          <div className="interior-copy"><p className="eyebrow"><span className="eyebrow-line eyebrow-line-dark" /> THE BUSINESS MODEL</p><h2>Your truck.<br />Your business.</h2><p>Roadline does not own a fleet or employ a company-owned truck fleet. We work with independent owner-operators who bring their own equipment and experience. Specific work opportunities and terms are discussed directly; no rates or employment terms are published here.</p><p>We want to build long-term professional relationships based on honest communication and mutual respect.</p></div>
        </div>
      </section>
      <section className="owner-checklist-section page-width">
        <div className="interior-section-heading"><p className="eyebrow"><span className="eyebrow-line eyebrow-line-dark" /> IS THIS A FIT?</p><h2>Who we hope<br />to connect with.</h2><p>Share a little about yourself and your operation. The initial conversation is a chance to learn about each other.</p></div>
        <div className="owner-checklist">{expectations.map((item, index) => <div className="owner-check-item" key={item}><span className="owner-check-icon"><Check size={17} aria-hidden="true" /></span><span>{item}</span><span className="owner-check-index">0{index + 1}</span></div>)}</div>
      </section>
      <section className="owner-process">
        <div className="page-width owner-process-inner"><div><p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> FIRST STEPS</p><h2>Start with<br /><em>a conversation.</em></h2><p>Email Roadline to introduce yourself and express interest. You can include your city and state, truck type, and relevant experience. Please do not email sensitive identity, financial, or driver documents.</p></div><div className="owner-process-side"><Handshake size={42} strokeWidth={1.25} aria-hidden="true" /><p>Roadline will follow up directly to discuss whether a current opportunity may be a fit. Details of any opportunity, requirements, and business terms should be confirmed with the company.</p><a className="button button-white" href="/contact?topic=Owner-operator%20interest">Contact Roadline <ArrowRight size={17} aria-hidden="true" /></a></div></div>
      </section>
      <PageCallout eyebrow="YOUR NEXT MILE STARTS HERE" title="Interested in working together?" copy="Reach out to introduce yourself and learn more about current opportunities." link="/contact?topic=Owner-operator%20interest" linkText="Express interest" />
    </>
  )
}
