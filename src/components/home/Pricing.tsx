'use client'

import { motion } from 'framer-motion'

const pricingPlans = [
{
service: 'Graphics Design',
price: '39',
description:
'Professional branding, social media creatives, posters, and marketing assets.',
},
{
service: 'Video Editing',
price: '19',
description:
'High-retention edits for social media, YouTube, podcasts, and brands.',
featured: true,
},
{
service: 'Web Development',
price: '69',
description:
'Modern responsive websites built with performance and user experience in mind.',
},
]

export default function Pricing() {
return ( <section
   id="pricing"
   className="relative py-32 px-6 bg-[#151515] overflow-hidden"
 > <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#ff6b35]/10 blur-[180px]" />


  <div className="max-w-7xl mx-auto relative z-10">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <p className="text-[#2563eb] uppercase tracking-[0.3em] text-sm mb-4">
        Pricing
      </p>

      <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Transparent Pricing
      </h2>

      <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
        Flexible packages designed for creators, brands, and businesses.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid lg:grid-cols-3 gap-8">
      {pricingPlans.map((plan, index) => (
        <motion.div
          key={plan.service}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
          }}
          className={`
            relative
            rounded-[2rem]
            border
            p-8
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-2
            
          `}
        >
          

          <h3 className="text-white text-2xl font-bold mb-3">
            {plan.service}
          </h3>

          <div className="flex items-end gap-1 mb-6">
            <span className="text-5xl font-bold text-[#ff6b35]">
              ${plan.price}
            </span>

            <span className="text-zinc-500 mb-1">
              starting from
            </span>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-8">
            {plan.description}
          </p>

          <button
            className="
              w-full
              py-4
              rounded-xl
              bg-gradient-to-r
              from-[#ff6b35]
              to-[#2563eb]
              text-black
              font-semibold
              transition-all
              duration-300
              hover:scale-[1.02]
            "
          >
            View Pricing →
          </button>
        </motion.div>
      ))}
    </div>
  </div>
</section>


)
}
