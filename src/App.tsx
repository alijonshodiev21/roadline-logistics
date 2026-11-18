import { useEffect } from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import OwnerOperators from './pages/OwnerOperators'
import Partnerships from './pages/Partnerships'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

const pages = {
  '/': { title: 'Roadline Logistics Inc. | Built on Trust. Powered by People.', description: 'Roadline Logistics coordinates container and local transportation with independent owner-operators, guided by honest communication and respect.', component: Home },
  '/about': { title: 'About Roadline Logistics Inc. | Our Approach', description: 'Learn about Roadline Logistics and our commitment to honest communication, fairness, and respect for independent owner-operators.', component: About },
  '/services': { title: 'Transportation Services | Roadline Logistics Inc.', description: 'Explore Roadline Logistics’ container transportation, Amazon-related container transportation, and local transportation operations.', component: Services },
  '/owner-operators': { title: 'Owner-Operator Opportunities | Roadline Logistics Inc.', description: 'Connect with Roadline Logistics about working together as an independent owner-operator.', component: OwnerOperators },
  '/partnerships': { title: 'Our Partnerships | Roadline Logistics Inc.', description: 'Discover Roadline Logistics’ relationship-first approach to working with independent owner-operators.', component: Partnerships },
  '/faq': { title: 'Frequently Asked Questions | Roadline Logistics Inc.', description: 'Answers to common customer and owner-operator questions about Roadline Logistics.', component: FAQ },
  '/contact': { title: 'Contact Roadline Logistics Inc.', description: 'Contact Roadline Logistics by email about transportation services or owner-operator opportunities.', component: Contact },
} as const

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const page = pages[path as keyof typeof pages] ?? pages['/']
  const Page = page.component

  useEffect(() => {
    document.title = page.title
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    description?.setAttribute('content', page.description)
  }, [page])

  return (
    <MainLayout>
      <Page />
    </MainLayout>
  )
}
