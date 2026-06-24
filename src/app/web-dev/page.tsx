import Hero from '@/components/web-dev/Hero'
import FeaturedWork from '@/components/web-dev/FeaturedWork'
import Services from '@/components/web-dev/Services'
import Pricing from '@/components/web-dev/Pricing'
import TechStack from '@/components/web-dev/TechStack'
import Process from '@/components/web-dev/Process'
import Testimonials from '@/components/web-dev/Testimonials'
import FAQ from '@/components/common/FAQ'
import Contact from '@/components/common/Contact'

const webFaqs = [
  {
    question: 'How long does a website take to build?',
    answer:
      "Most websites are completed within 2–4 weeks, depending on the project's complexity., content requirements, and revision rounds.",
  },
  {
    question: 'Do you design before development?',
    answer:
      'Yes, every project begins with a design phase to ensure the best user experience and visual direction',
  },
  {
    question: 'Will my website be mobile responsive?',
    answer:
      'Absolutely, all websites we build are fully responsive across desktop, tablet, and mobile devices.',
  },
  {
    question: 'Do you provide hosting support?',
    answer:
      'Yes, we can help with hosting setup, deployment, and ongoing website maintenance.',
  },
  {
    question: 'Can you redesign an existing website?',
    answer:
      'Yes, we can modernize and optimize your existing website for better performance and user experience.',
  },
  {
    question: 'Do you build custom features?',
    answer:
      'Yes, we develop custom functionality tailored to your specific business requirements.',
  },
]
export default function WebDevPage() {
  return (
    <main className="bg-dark text-light">
      <Hero />
      <FeaturedWork />
      <Services />
      <Pricing />
      <TechStack />
      <Process />
      <Testimonials />
      <FAQ
  title="Web Development FAQ"
  description="Common questions about our web design and development process."
  items={webFaqs}
/>
      <Contact
  title="Let's Build Your Next Website."
  description="Whether you need a landing page, business website, portfolio, or custom web application, let's discuss your project."
/>
    </main>
  )
}