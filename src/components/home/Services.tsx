'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Palette, Video, Code } from 'lucide-react'

const services = [
  {
    icon: Palette,
    number: '01',
    title: 'Graphics Design',
    description:
      'Logos, social media creatives, brand identity, and marketing assets that help your business stand out.',
    href: '/graphics-design',
  },
  {
    icon: Video,
    number: '02',
    title: 'Video Editing',
    description:
      'High-retention edits for creators, brands, podcasts, YouTube content, and social media campaigns.',
    href: '/video-editing',
  },
  {
    icon: Code,
    number: '03',
    title: 'Web Development',
    description:
      'Fast, modern websites designed to showcase your brand and convert visitors into customers.',
    href: '/web-dev',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 px-6 bg-[#111111] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff6b35]/10 blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563eb]/5 blur-[180px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#2563eb] uppercase tracking-[0.3em] text-sm mb-4">
            Services
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What We Do
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Creative and digital services built to help creators,
            brands, and businesses grow online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  p-8
                  rounded-[2rem]
                  border
                  border-[#ff6b35]/20
                  bg-gradient-to-br
                  from-[#ff6b35]/5
                  to-transparent
                  backdrop-blur-sm
                  overflow-hidden
                  transition-all
                  duration-300
                  hover:border-[#ff6b35]/50
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#ff6b35]/10
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                />

                {/* Number */}
                <span
                  className="
                    absolute
                    top-4
                    right-6
                    text-7xl
                    font-bold
                    text-[#ff6b35]/15
                  "
                >
                  {service.number}
                </span>

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.05,
                  }}
                  className="
                    relative
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#ff6b35]
                    to-[#2563eb]
                    flex
                    items-center
                    justify-center
                    mb-8
                  "
                >
                  <Icon
                    size={28}
                    className="text-black"
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed mb-8">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-[#ff6b35]
                    font-semibold
                    hover:text-[#2563eb]
                    transition-colors
                  "
                >
                  Learn More →
                </Link>

                {/* Bottom Line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-gradient-to-r
                    from-[#ff6b35]
                    to-[#2563eb]
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-zinc-400 mb-4">
            Need something custom?
          </p>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-2
              text-[#ff6b35]
              font-semibold
              hover:text-[#2563eb]
              transition-colors
            "
          >
            Let's discuss your project →
          </a>
        </motion.div>
      </div>
    </section>
  )
}