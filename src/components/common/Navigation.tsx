'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'

import { Menu, X, ChevronDown } from 'lucide-react'

import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false)

  const [isScrolled, setIsScrolled] =
    useState(false)

  const [isServicesOpen, setIsServicesOpen] =
    useState(false)

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 20)

    }

    window.addEventListener(
      'scroll',
      handleScroll
    )

    return () => {

      window.removeEventListener(
        'scroll',
        handleScroll
      )

    }

  }, [])

  const services = [

    {
      label: 'Graphics Design',

      href: '/graphics-design',
    },

    {
      label: 'Video Editing',

      href: '/video-editing',
    },

    {
      label: 'Web Development',

      href: '/web-dev',
    },

  ]

  return (

    <motion.nav

      initial={{
        y: -80,
        opacity: 0,
      }}

      animate={{
        y: 0,
        opacity: 1,
      }}

      transition={{
        duration: 0.6,
      }}

      className="

        fixed

        top-5

        left-0

        w-full

        z-50

        px-4

      "

    >

      <div

        className="

          mx-auto

          max-w-7xl

        "

      >

        <div

          className={`

            flex

            items-center

            justify-between

            rounded-full

            px-7

            py-4

            border

            transition-all

            duration-300

            ${

              isScrolled

                ?

                'border-[#ff6b35]/20 bg-[#111111]/85 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]'

                :

                'border-white/10 bg-[#111111]/55 backdrop-blur-lg'

            }

          `}

        >

          {/* Logo */}

          <Link href="/">

            <div

              className="

                text-2xl

                md:text-3xl

                font-bold

                cursor-pointer

                whitespace-nowrap

              "

            >

              <span className="text-[#ff6b35]">

                Webmotion

              </span>

              <span className="text-[#2563eb]">

                {' '}Studio

              </span>

            </div>

          </Link>

          {/* Desktop Menu */}

          <div

            className="

              hidden

              lg:flex

              items-center

              gap-10

            "

          >

            {/* Services */}

            <div

              className="relative"

              onMouseEnter={() =>
                setIsServicesOpen(true)
              }

              onMouseLeave={() =>
                setIsServicesOpen(false)
              }

            >

              <button

                className="

                  flex

                  items-center

                  gap-2

                  font-medium

                  text-white

                  transition-all

                  hover:text-[#ff6b35]

                "

              >

                Services

                <ChevronDown size={18} />

              </button>

              <AnimatePresence>

                {isServicesOpen && (

                  <motion.div

                    initial={{
                      opacity: 0,
                      y: 10,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    exit={{
                      opacity: 0,
                      y: 10,
                    }}

                    transition={{
                      duration: 0.2,
                    }}

                    className="

                      absolute

                      top-14

                      left-0

                      w-64

                      rounded-3xl

                      border

                      border-white/10

                      bg-[#151515]/95

                      backdrop-blur-xl

                      p-3

                    "

                  >

                    {services.map(
                      (service) => (

                        <Link

                          key={service.label}

                          href={service.href}

                          className="

                            block

                            rounded-2xl

                            px-5

                            py-4

                            text-white

                            transition-all

                            hover:bg-white/5

                            hover:text-[#ff6b35]

                          "

                        >

                          {service.label}

                        </Link>

                      )
                    )}

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

            <a

              href="#pricing"

              className="

                font-medium

                text-white

                hover:text-[#ff6b35]

                transition

              "

            >

              Pricing

            </a>

            <a

              href="#about"

              className="

                font-medium

                text-white

                hover:text-[#ff6b35]

                transition

              "

            >

              About

            </a>

            <a

              href="#contact"

              className="

                font-medium

                text-white

                hover:text-[#ff6b35]

                transition

              "

            >

              Contact

            </a>

            {/* CTA */}

            <a

              href="#contact"

              className="

                rounded-full

                bg-gradient-to-r

                from-[#ff6b35]

                to-[#2563eb]

                px-7

                py-3

                text-white

                font-semibold

                transition-all

                duration-300

                hover:scale-105

                hover:shadow-[0_0_30px_rgba(255,107,53,0.35)]

              "

            >

              Let's Work Together

            </a>

          </div>

          {/* Mobile Menu Button */}

          <button

            onClick={() =>

              setIsMobileMenuOpen(
                !isMobileMenuOpen
              )

            }

            className="

              text-white

              lg:hidden

            "

          >

            {

              isMobileMenuOpen

                ?

                <X size={28} />

                :

                <Menu size={28} />

            }

          </button>

        </div>

        {/* Mobile Menu */}

        <AnimatePresence>

          {isMobileMenuOpen && (

            <motion.div

              initial={{
                opacity: 0,
                y: -10,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                y: -10,
              }}

              className="

                mt-4

                rounded-3xl

                border

                border-white/10

                bg-[#111111]/95

                backdrop-blur-xl

                p-6

                lg:hidden

              "

            >

              <div

                className="

                  flex

                  flex-col

                  gap-4

                "

              >

                {services.map(
                  (service) => (

                    <Link

                      key={service.label}

                      href={service.href}

                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }

                      className="

                        text-white

                        hover:text-[#ff6b35]

                      "

                    >

                      {service.label}

                    </Link>

                  )
                )}

                <a

                  href="#pricing"

                  className="text-white"

                >

                  Pricing

                </a>

                <a

                  href="#about"

                  className="text-white"

                >

                  About

                </a>

                <a

                  href="#contact"

                  className="text-white"

                >

                  Contact

                </a>

                <a

                  href="#contact"

                  className="

                    mt-2

                    rounded-xl

                    bg-gradient-to-r

                    from-[#ff6b35]

                    to-[#2563eb]

                    px-5

                    py-3

                    text-center

                    font-semibold

                    text-white

                  "

                >

                  Let's Work Together

                </a>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </motion.nav>

  )

}