import { ArrowUpRight } from 'lucide-react'

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
          <p>Business phone and email will be added once verified.</p>
          <a className="text-link text-link-light" href="#top">Back to top <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Roadline Logistics Inc.</span>
        <span>Built on trust. Powered by people.</span>
      </div>
    </footer>
  )
}
