import { ChevronDown } from 'lucide-react'
import { PageCallout, PageIntro } from '../components/InteriorPage'

const customerQuestions = [
  { question: 'What transportation services does Roadline provide?', answer: 'Roadline’s current operations include container transportation, Amazon-related container transportation, and local transportation. Contact the company to discuss your particular request.' },
  { question: 'What areas does Roadline serve?', answer: 'Roadline has not published a confirmed service area. Please email your origin and destination to ask whether your request can be accommodated.' },
  { question: 'How can I request transportation information?', answer: 'Email roadline25@gmail.com with a brief description of your transportation need. Service availability and next steps can be discussed directly.' },
  { question: 'How can I contact Roadline?', answer: 'Email roadline25@gmail.com. A business phone number has not yet been provided.' },
]

const operatorQuestions = [
  { question: 'Who can apply?', answer: 'Roadline is interested in connecting with independent owner-operators who own and operate their own trucks. Contact the company to discuss your experience and potential fit.' },
  { question: 'What equipment is required?', answer: 'Equipment requirements depend on the specific opportunity and have not been published. Ask Roadline directly about the equipment relevant to the work you are interested in.' },
  { question: 'How does the application process work?', answer: 'The first step is to email Roadline with a brief introduction and your interest. The company can explain any next steps directly. Do not send sensitive driver documents in an initial email.' },
  { question: 'How can I learn about available opportunities?', answer: 'Email roadline25@gmail.com to introduce yourself and ask about current opportunities. Availability and business terms should be confirmed directly.' },
]

function QuestionList({ items }: { items: { question: string; answer: string }[] }) {
  return <div className="faq-list">{items.map(({ question, answer }) => <details className="faq-item" key={question}><summary><span>{question}</span><ChevronDown size={19} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
}

export default function FAQ() {
  return (
    <>
      <PageIntro eyebrow="FREQUENTLY ASKED QUESTIONS" title={<>Clear answers.<br /><em>Direct conversations.</em></>} description="A starting point for customers and independent owner-operators. If a detail is not listed, please ask Roadline directly." />
      <section className="faq-section page-width"><div className="faq-group"><div className="faq-group-heading"><span>01</span><h2>For customers</h2><p>Transportation requests and service details.</p></div><QuestionList items={customerQuestions} /></div><div className="faq-group"><div className="faq-group-heading"><span>02</span><h2>For owner-operators</h2><p>Working independently with Roadline.</p></div><QuestionList items={operatorQuestions} /></div></section>
      <PageCallout title="Still have a question?" copy="Email Roadline and ask about your specific request or interest." link="/contact" linkText="Contact us" />
    </>
  )
}
