'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO at TechVenture',
    company: 'TechVenture',
    review: 'Webmotion Studio transformed our brand with stunning visuals and seamless web experience. Highly recommended!',
    rating: 5,
    image: '👩‍💼',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director at Creative Co',
    company: 'Creative Co',
    review: 'The video production was exceptional. Our engagement rates increased by 300% after launch.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Founder of DesignHub',
    company: 'DesignHub',
    review: 'Professional, creative, and responsive. They understood our vision perfectly and executed it flawlessly.',
    rating: 5,
    image: '👩‍🎨',
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Product Lead at StartupXYZ',
    company: 'StartupXYZ',
    review: 'Working with this team was a game-changer for our product launch. Attention to detail is remarkable.',
    rating: 5,
    image: '👨‍💻',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Brand Manager at Fashion Plus',
    company: 'Fashion Plus',
    review: 'Outstanding work on our rebranding project. They captured our essence perfectly in digital form.',
    rating: 5,
    image: '👩‍🔬',
  },
  {
    id: 6,
    name: 'David Martinez',
    role: 'Director at Global Solutions',
    company: 'Global Solutions',
    review: 'The entire experience was smooth from concept to delivery. Truly world-class service and creativity.',
    rating: 5,
    image: '👨‍🏫',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark via-secondary/5 to-dark overflow-hidden">
      {/* Background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10 opacity-50"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 opacity-50"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Client Reviews
            </span>
          </h2>
          <p className="text-xl text-light/70 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say about working with Webmotion Studio.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Quote icon */}
              <Quote size={32} className="text-primary/30 mb-4" />

              {/* Review text */}
              <p className="text-light/90 mb-6 leading-relaxed italic">
                "{testimonial.review}"
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star size={18} className="fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4" />

              {/* Client info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="text-light font-bold">{testimonial.name}</h4>
                  <p className="text-light/60 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Hover indicator */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-light/60 mb-6">Join 50+ satisfied clients worldwide</p>
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark rounded-full font-bold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  )
}
