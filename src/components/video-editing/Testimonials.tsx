'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'The edits matched our brand style perfectly and helped our content feel more modern and engaging across social platforms.',
    author: 'IstitionBD',
    role: 'Brand Collaboration',
  },
  {
    quote:
      'Creative visuals, smooth transitions, and strong attention to detail made our promotional content stand out.',
    author: 'Outfit Istition',
    role: 'Brand Collaboration',
  },
  {
    quote:
      'A fully AI-generated promotional ad with clean editing, engaging pacing, and professional visuals that made our platform more impactful and trustworthy.',
    author: 'MD. Tanbir Ahmmed',
    role: 'CEO, Tuition Hub Mymensingh',
  },
]

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#2563eb] uppercase tracking-[0.3em] text-sm mb-4">
            Testimonials
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What Clients Say
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Trusted by brands, creators, and businesses looking for
            cinematic content that performs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                relative
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-[#ff6b35]/40
                hover:shadow-[0_0_50px_rgba(255,107,53,0.18)]
              "
            >
              {/* Glow Effect */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  opacity-0
                  hover:opacity-100
                  transition-opacity
                  duration-500
                  bg-gradient-to-br
                  from-[#ff6b35]/5
                  to-[#2563eb]/5
                  pointer-events-none
                "
              />

              {/* Stars */}
              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="flex gap-1 mb-6"
              >
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="text-[#2563eb] text-lg"
                  >
                    ★
                  </span>
                ))}
              </motion.div>

              <p className="text-zinc-300 leading-relaxed mb-8 relative z-10">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4 relative z-10">
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-gradient-to-br
                    from-[#ff6b35]
                    to-[#2563eb]
                    flex
                    items-center
                    justify-center
                    text-black
                    font-bold
                  "
                >
                  {item.author.charAt(0)}
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    {item.author}
                  </h4>

                  <p className="text-zinc-500 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}