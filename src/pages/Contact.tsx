import { Mail, MapPin, Phone } from 'lucide-react'
import { PageIntro } from '../components/InteriorPage'
import { BUSINESS_EMAIL } from '../components/Footer'

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="CONTACT ROADLINE" title={<>Let’s talk about<br /><em>what moves you.</em></>} description="For customer transportation inquiries or owner-operator interest, email Roadline Logistics Inc." />
      <section className="contact-section page-width">
        <div className="contact-main"><p className="eyebrow"><span className="eyebrow-line eyebrow-line-dark" /> GET IN TOUCH</p><h2>Tell us what<br />you have in mind.</h2><p>Share a brief description of your transportation inquiry or introduce yourself as an independent owner-operator. Roadline can confirm service area, availability, and next steps directly.</p><a className="button button-red contact-email-button" href={`mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent('Roadline Logistics inquiry')}`}><Mail size={17} aria-hidden="true" /> Email Roadline <span>{BUSINESS_EMAIL}</span></a><p className="contact-note">Please do not email sensitive driver documents or personal information.</p></div>
        <aside className="contact-details" aria-label="Roadline contact details"><h3>Contact details</h3><div className="contact-detail"><Mail size={19} aria-hidden="true" /><div><span>BUSINESS EMAIL</span><a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a></div></div><div className="contact-detail contact-placeholder"><Phone size={19} aria-hidden="true" /><div><span>BUSINESS PHONE</span><p>Phone number to be confirmed</p></div></div><div className="contact-detail contact-placeholder"><MapPin size={19} aria-hidden="true" /><div><span>SERVICE AREA</span><p>Service area to be confirmed</p></div></div></aside>
      </section>
      <section className="contact-inquiry-strip"><div className="page-width"><p>Include any details you are comfortable sharing, such as transportation type, origin and destination, or your owner-operator background.</p><a href={`mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent('Roadline Logistics inquiry')}`}>Write an email <Mail size={16} aria-hidden="true" /></a></div></section>
    </>
  )
}
