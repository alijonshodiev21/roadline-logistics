import { useState } from 'react'
import { ArrowDown, ArrowRight, Menu, X } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Owner-operators', href: '#owner-operators' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Roadline Logistics Inc. home" onClick={closeMenu}>
          <img
            className="brand-logo"
            src="/DBB179C9-A0ED-43B2-9040-1D2D74DF0F75(3).png"
            alt="Roadline Logistics Inc."
          />
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
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Get in touch <ArrowRight size={15} aria-hidden="true" /></a>
        </nav>
      </div>
      <div className="header-rule" />
      <a className="scroll-cue" href="#services" aria-label="Scroll to our services"><ArrowDown size={15} /></a>
    </header>
  )
}
