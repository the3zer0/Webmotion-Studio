'use client'

import { useEffect, useState } from 'react'

import Footer from '@/components/common/Footer'
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp'
import FAQ from '@/components/common/FAQ'

import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Studio from '@/components/home/WhyChooseUs'
import Pricing from '@/components/home/Pricing'
import Portfolio from '@/components/home/FeaturedWork'
import Testimonials from '@/components/home/Testimonials'
import Contact from '@/components/common/Contact'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      )
  }, [])

  const homeFaqs = [
    {
      question: 'What services do you offer?',
      answer:
        'We provide Web Development, Video Editing, and Graphics Design services tailored for creators, brands, and businesses.',
    },
    {
      question: 'How long does a project take?',
      answer:
        'Project timelines vary depending on complexity, but most projects are completed within a few days to a few weeks.',
    },
    {
      question: 'Do you offer revisions?',
      answer:
        'Yes. Every package includes revisions to ensure the final result meets your expectations.',
    },
    {
      question: 'Can you work with international clients?',
      answer:
        'Absolutely. We work with clients worldwide and communicate through WhatsApp, email, and video calls.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Simply fill out the contact form and we will discuss your project requirements, timeline, and next steps.',
    },
  ]

  return (
    <div className="min-h-screen bg-dark">
      <main>
        <Hero />

        <Services />

        <Studio />

        <Pricing />

        <Portfolio />

        <Testimonials />

        <FAQ
          title="Frequently Asked Questions"
          description="Everything you need to know before starting your project."
          items={homeFaqs}
        />

        <Contact
          title="Let's Build Something Exceptional"
          description="Tell us about your project and we'll get back to you within 24 hours."
        />
      </main>
      <FloatingWhatsApp />
    </div>
  )
}