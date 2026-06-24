'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false)

  const whatsappLink =
    'https://wa.me/8801805768267?text=Hello,%20I%20want%20to%20discuss%20a%20project.'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.5,
        type: 'spring',
      }}
      className="fixed bottom-8 right-8 z-40"

      onMouseEnter={() => setIsHovered(true)}

      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pulse */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.8, 0.4],
        }}

        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}

        className="
          absolute
          inset-0
          rounded-full
          bg-gradient-to-r
          from-[#ff6b35]/30
          to-[#2563eb]/30
          blur-md
        "
      />

      {/* Main Button */}

      <motion.a
        href={whatsappLink}

        target="_blank"

        rel="noopener noreferrer"

        whileHover={{
          scale: 1.08,
          y: -4,
        }}

        whileTap={{
          scale: 0.95,
        }}

        className="
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full

          border
          border-white/10

          bg-gradient-to-br
          from-[#ff6b35]
          to-[#2563eb]

          shadow-[0_10px_35px_rgba(255,107,53,0.35)]

          transition-all
          duration-300
          cursor-pointer
        "
      >
        <Image
          src="/whatsapp.svg"

          alt="WhatsApp"

          width={30}

          height={30}

          className="
            object-contain
            brightness-0
            invert
          "
        />

        {/* Tooltip */}

        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}

          animate={{
            opacity: isHovered ? 1 : 0,

            x: isHovered ? -15 : 20,
          }}

          transition={{
            duration: 0.2,
          }}

          className="
            pointer-events-none

            absolute
            right-20

            whitespace-nowrap

            rounded-2xl

            border
            border-white/10

            bg-[#111111]/95

            px-4
            py-3

            backdrop-blur-xl

            shadow-xl
          "
        >
          <div className="flex flex-col">

            <span className="font-semibold text-white">

              Chat on WhatsApp

            </span>

            <span className="text-xs text-zinc-400">

              +880 1805-768267

            </span>

          </div>

          {/* Arrow */}

          <div
            className="
              absolute

              -right-1

              top-1/2

              h-2
              w-2

              -translate-y-1/2

              rotate-45

              border-r
              border-b

              border-white/10

              bg-[#111111]
            "
          />
        </motion.div>
      </motion.a>

      {/* Floating Dots */}

      {[0, 1, 2].map((i) => (

        <motion.div
          key={i}

          animate={{
            y: [0, -14, 0],

            opacity: [1, 0.5, 1],
          }}

          transition={{
            duration: 2,

            delay: i * 0.25,

            repeat: Infinity,
          }}

          className="
            absolute

            h-2
            w-2

            rounded-full

            bg-gradient-to-r
            from-[#ff6b35]
            to-[#2563eb]
          "

          style={{
            bottom: '82px',

            right: `${18 + i * 9}px`,
          }}
        />

      ))}
    </motion.div>
  )
}