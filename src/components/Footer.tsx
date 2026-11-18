import { ArrowUpRight } from 'lucide-react'

export const BUSINESS_EMAIL = 'roadline25@gmail.com'

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand-block">
          <div className="footer-wordmark">ROADLINE<span>LOGISTICS INC.</span></div>
          <p>Transportation built around people, respect, and dependable relationships.</p>
        </div>
        <div className="footer-contact-block">
          <span className="eyebrow eyebrow-light">START A CONVERSATION</span>
          <h2>Let’s move forward.</h2>
          <p>For transportation inquiries and owner-operator interest, email Roadline.</p>
          <a className="footer-email" href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>
          <a className="text-link text-link-light" href="/contact">Contact Roadline <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Roadline Logistics Inc.</span>
        <span>Built on trust. Powered by people.</span>
      </div>
    </footer>
  )
}
