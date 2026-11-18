import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

interface PageIntroProps {
  eyebrow: string
  title: ReactNode
  description: string
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="page-intro">
      <div className="page-width page-intro-content">
        <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> {eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro-description">{description}</p>
      </div>
    </section>
  )
}

export function PageCallout({ eyebrow = 'START A CONVERSATION', title, copy, link = '/contact', linkText = 'Contact Roadline' }: { eyebrow?: string; title: string; copy: string; link?: string; linkText?: string }) {
  return (
    <section className="page-callout">
      <div className="page-width page-callout-inner">
        <div><p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> {eyebrow}</p><h2>{title}</h2><p>{copy}</p></div>
        <a className="button button-red" href={link}>{linkText} <ArrowRight size={17} aria-hidden="true" /></a>
      </div>
    </section>
  )
}
