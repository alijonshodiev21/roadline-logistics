import { ArrowUpRight, Container, MapPin, Truck } from 'lucide-react'
import { PageCallout, PageIntro } from '../components/InteriorPage'

const services = [
  { number: '01', id: 'container', title: 'Container transportation', icon: Container, description: 'Roadline coordinates container transportation with independent owner-operators. Share the details of your transportation need so the team can discuss whether it is a fit.' },
  { number: '02', id: 'amazon-related', title: 'Amazon-related container transportation', icon: Truck, description: 'Roadline’s current operations include Amazon-related container transportation. This description does not imply an official partnership with Amazon.' },
  { number: '03', id: 'local', title: 'Local transportation', icon: MapPin, description: 'Roadline also handles local transportation. Specific locations, timing, and availability have not been published; contact the company to discuss your request.' },
]

export default function Services() {
  return (
    <>
      <PageIntro eyebrow="TRANSPORTATION SERVICES" title={<>Practical coordination.<br /><em>People you can talk to.</em></>} description="Roadline’s current transportation operations include container transportation and local transportation, coordinated with independent owner-operators." />
      <section className="service-detail-list page-width" aria-label="Roadline transportation services">
        {services.map(({ number, id, title, icon: Icon, description }) => (
          <article className="service-detail" id={id} key={id}>
            <span className="service-detail-number">{number}</span>
            <div className="service-detail-icon"><Icon size={27} strokeWidth={1.4} aria-hidden="true" /></div>
            <div><p className="eyebrow"><span className="eyebrow-line eyebrow-line-dark" /> ROADLINE LOGISTICS</p><h2>{title}</h2><p className="service-detail-copy">{description}</p><a className="text-link" href={`/contact?topic=${encodeURIComponent(title)}`}>Ask about this service <ArrowUpRight size={16} aria-hidden="true" /></a></div>
          </article>
        ))}
      </section>
      <section className="service-note"><div className="page-width"><p>Current operations and service availability may depend on the details of each request. Roadline can discuss your needs directly.</p><a href="/contact">Contact Roadline <ArrowUpRight size={16} aria-hidden="true" /></a></div></section>
      <PageCallout eyebrow="FOR CUSTOMERS" title="Tell us what you need moved." copy="Email Roadline with your transportation inquiry. Service area and availability can be confirmed directly." link="/contact?topic=Customer%20transportation%20inquiry" linkText="Make an inquiry" />
    </>
  )
}
