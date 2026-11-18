import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Owner-operators', href: '/owner-operators' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'FAQ', href: '/faq' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Roadline Logistics Inc. home" onClick={closeMenu}>
          <img
            className="brand-logo"
            src="/images/roadline-logo.png"
            alt="Roadline Logistics Inc."
            onError={(event) => {
              event.currentTarget.hidden = true
              event.currentTarget.nextElementSibling?.classList.remove('brand-fallback-hidden')
            }}
          />
          <span className="brand-fallback brand-fallback-hidden" aria-hidden="true">ROADLINE <span>LOGISTICS INC.</span></span>
        </a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav id="primary-navigation" className={`primary-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <a className="nav-contact" href="/contact" onClick={closeMenu}>Get in touch <ArrowRight size={15} aria-hidden="true" /></a>
        </nav>
      </div>
      <div className="header-rule" />
    </header>
  )
}
