import { ArrowRight, HeartHandshake, MessageSquareText, Scale } from 'lucide-react'
import { PageCallout, PageIntro } from '../components/InteriorPage'

const commitments = [
  { icon: HeartHandshake, number: '01', title: 'Mutual respect', body: 'Independent owner-operators bring their own equipment, time, and expertise. We believe those contributions deserve consideration and respect.' },
  { icon: MessageSquareText, number: '02', title: 'Clear communication', body: 'Open, direct communication helps people understand expectations and have productive working relationships.' },
  { icon: Scale, number: '03', title: 'Honest business practices', body: 'We value transparency and fairness. Specific opportunity details and business terms are discussed directly rather than assumed.' },
]

export default function Partnerships() {
  return (
    <>
      <PageIntro eyebrow="OUR PARTNERSHIPS" title={<>Strong work.<br /><em>Stronger relationships.</em></>} description="Roadline’s business depends on working relationships with independent owner-operators—not a company-owned fleet." />
      <section className="partnership-lead page-width"><p className="partnership-quote">“Transportation works best when the people doing the work are treated as partners.”</p><p className="partnership-attribution">A principle that guides Roadline’s approach</p></section>
      <section className="partnership-values"><div className="page-width"><div className="interior-section-heading"><p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> HOW WE WORK TOGETHER</p><h2>Partnership is<br />how the work moves.</h2></div><div className="partnership-grid">{commitments.map(({ icon: Icon, number, title, body }) => <article className="partnership-card" key={number}><span>{number}</span><Icon size={27} strokeWidth={1.4} aria-hidden="true" /><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="partner-note page-width"><div><p className="eyebrow"><span className="eyebrow-line eyebrow-line-dark" /> REAL PEOPLE, REAL STORIES</p><h2>Respect is more<br />than a promise.</h2></div><div><p>We will share driver photos or testimonials only when they are supplied and approved. No driver images or testimonials are presented here as Roadline partners.</p><p>Interested in learning about working with Roadline? Start a direct conversation.</p><a className="text-link" href="/owner-operators">Owner-operator information <ArrowRight size={16} aria-hidden="true" /></a></div></section>
      <PageCallout title="Let’s build a professional relationship." copy="Contact Roadline to learn more about independent owner-operator opportunities." link="/contact?topic=Owner-operator%20interest" linkText="Get in touch" />
    </>
  )
}
