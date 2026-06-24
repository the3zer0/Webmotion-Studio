'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] flex items-center justify-center px-6">

      {/* Background Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#ff6b35]/10 blur-[220px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2563eb]/10 blur-[180px]" />

      {/* Floating Particles */}

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
          }}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#2563eb]"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 4) * 18}%`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* 404 */}

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            text-[7rem]
            sm:text-[10rem]
            md:text-[12rem]
            font-black
            leading-none
            bg-gradient-to-r
            from-[#ff6b35]
            via-white
            to-[#2563eb]
            bg-clip-text
            text-transparent
          "
        >
          404
        </motion.h1>

        {/* Title */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="text-3xl md:text-5xl font-bold text-white mt-2"
        >
          Lost In The Digital Void
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="
            mt-6
            text-zinc-400
            text-lg
            leading-relaxed
            max-w-2xl
            mx-auto
          "
        >
          The page you're looking for doesn't exist,
          may have been moved, or never existed in the first place.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <Link
            href="/"
            className="
              px-8
              py-4
              rounded-full
              bg-gradient-to-r
              from-[#ff6b35]
              to-[#2563eb]
              text-white
              font-semibold
              hover:scale-105
              transition-all
              duration-300
              shadow-[0_0_30px_rgba(255,107,53,0.25)]
            "
          >
            Return Home
          </Link>

          <Link
            href="/#contact"
            className="
              px-8
              py-4
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              text-white
              font-semibold
              hover:border-[#ff6b35]/30
              transition-all
              duration-300
            "
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Footer Text */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
          className="
            mt-16
            text-sm
            uppercase
            tracking-[0.4em]
            text-zinc-600
          "
        >
          Webmotion Studio
        </motion.p>

      </div>
    </main>
  )
}