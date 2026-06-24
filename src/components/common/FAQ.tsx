'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  title?: string
  description?: string
  items: FAQItem[]
}

export default function FAQ({
  title = 'Frequently Asked Questions',
  description = 'Everything you need to know before starting your project.',
  items,
}: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="py-32 px-6 bg-[#111111]"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#2563eb] uppercase tracking-[0.3em] text-sm mb-4">
            FAQ
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">

          {items.map((faq, index) => (
            <div
              key={index}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                overflow-hidden
              "
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  text-left
                  p-6
                "
              >
                <span className="text-white font-medium text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index
                      ? 'rotate-180'
                      : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}