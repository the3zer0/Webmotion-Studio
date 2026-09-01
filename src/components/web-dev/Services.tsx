'use client'

import Image from 'next/image'
import { assetPath } from '@/lib/paths'

const services = [
  {
    title: 'Landing Pages',
    description:
      'High-converting landing pages built to generate leads and drive sales.',
    icon: assetPath('/web/globe.svg'),
  },
  {
    title: 'Business Websites',
    description:
      'Professional websites that establish trust and strengthen your online presence.',
    icon: assetPath('/web/briefcase.svg'),
  },
  {
    title: 'Portfolio Websites',
    description:
      'Showcase your work through modern, visually engaging portfolio experiences.',
    icon: assetPath('/web/user.svg'),
  },
  {
    title: 'E-Commerce Stores',
    description:
      'Conversion-focused online stores optimized for growth and performance.',
    icon: assetPath('/web/shopping-cart.svg'),
  },
  {
    title: 'Web Applications',
    description:
      'Custom web solutions tailored to your business and workflow requirements.',
    icon: assetPath('/web/monitor.svg'),
  },
  {
    title: 'Website Redesign',
    description:
      'Transform outdated websites into fast, modern, and user-friendly experiences.',
    icon: assetPath('/web/refresh.svg'),
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 px-6 bg-[#151515]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-[#FF6B35] uppercase tracking-[0.3em] text-sm mb-4">
            Services
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What We Build
          </h2>

          <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
            Every website is designed with performance,
            user experience, and business growth in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                hover:border-[#FF6B35]/40
                hover:-translate-y-2
                hover:shadow-[0_0_50px_rgba(255,43,43,0.12)]
                transition-all
                duration-300
              "
            >
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#FF6B35]
                  to-[#FF6B35]
                  flex
                  items-center
                  justify-center
                  mb-6
                "
              >
                <Image
                  src={service.icon}
                  loading="eager"
                  alt={service.title}
                  width={52}
                  height={52}
                  className="
                    object-contain
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  "
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}