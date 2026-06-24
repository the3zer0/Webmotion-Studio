'use client'

import { motion } from 'framer-motion'

import { Play, ChevronDown } from 'lucide-react'

export default function Hero() {

  return (

    <section

      id="home"

      className="

        relative

        min-h-screen

        overflow-hidden

        pt-40

        pb-20

        flex

        items-center

        justify-center

      "

    >

      {/* Background */}

      <div

        className="

          absolute

          inset-0

          -z-10

          bg-gradient-to-br

          from-primary/10

          via-dark

          to-secondary/10

        "

      />

      {/* Glow 1 */}

      <motion.div

        animate={{

          rotate: 360,

        }}

        transition={{

          duration: 25,

          repeat: Infinity,

          ease: 'linear',

        }}

        className="

          absolute

          top-20

          right-20

          h-72

          w-72

          rounded-full

          bg-primary/20

          blur-3xl

          opacity-40

          -z-10

        "

      />

      {/* Glow 2 */}

      <motion.div

        animate={{

          rotate: -360,

        }}

        transition={{

          duration: 30,

          repeat: Infinity,

          ease: 'linear',

        }}

        className="

          absolute

          bottom-20

          left-20

          h-96

          w-96

          rounded-full

          bg-secondary/20

          blur-3xl

          opacity-40

          -z-10

        "

      />

      <div

        className="

          relative

          z-10

          mx-auto

          max-w-7xl

          px-6

          text-center

        "

      >

        {/* Heading */}

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

            duration: 0.8,

          }}

          className="mb-8"

        >

          <h1

            className="

              text-5xl

              sm:text-6xl

              lg:text-8xl

              font-bold

              leading-tight

            "

          >

            <span

              className="

                bg-gradient-to-r

                from-primary

                via-accent

                to-primary

                bg-clip-text

                text-transparent

              "

            >

              Scroll. Pause. Remember.

            </span>

          </h1>

        </motion.div>

        {/* Subtitle */}

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

            duration: 0.8,

            delay: 0.2,

          }}

          className="

            mx-auto

            mb-14

            max-w-4xl

            text-xl

            text-light/80

            sm:text-2xl

          "

        >

          We create stunning graphics,

          compelling videos, and powerful

          web experiences that make

          your brand unforgettable.

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

            duration: 0.8,

            delay: 0.4,

          }}

          className="

            mb-20

            flex

            flex-col

            items-center

            justify-center

            gap-6

            sm:flex-row

          "

        >

          <a

            href="#contact"

            className="

              rounded-full

              bg-gradient-to-r

              from-primary

              to-accent

              px-10

              py-4

              text-lg

              font-bold

              text-dark

              transition-all

              duration-300

              hover:scale-105

              hover:shadow-lg

              hover:shadow-primary/50

            "

          >

            Start Your Project

          </a>

          <a

            href="#about"

            className="

              flex

              items-center

              gap-2

              rounded-full

              border-2

              border-primary

              px-10

              py-4

              text-lg

              font-bold

              text-primary

              transition-all

              duration-300

              hover:bg-primary/10

            "

          >

            Why Choose Us

          </a>

        </motion.div>

        {/* Preview */}

        <motion.div

          initial={{

            opacity: 0,

            scale: 0.95,

          }}

          animate={{

            opacity: 1,

            scale: 1,

          }}

          transition={{

            duration: 0.8,

            delay: 0.6,

          }}

          className="relative"

        >

          <div

            className="

              aspect-video

              overflow-hidden

              rounded-3xl

              border

              border-primary/20

              bg-gradient-to-br

              from-primary/20

              to-secondary/20

              backdrop-blur-sm

            "

          >

            <div

              className="

                flex

                h-full

                items-center

                justify-center

              "

            >

              <motion.div

                whileHover={{

                  scale: 1.1,

                }}

                className="

                  flex

                  h-24

                  w-24

                  items-center

                  justify-center

                  rounded-full

                  bg-gradient-to-r

                  from-primary

                  to-accent

                "

              >

                <Play

                  size={36}

                  className="

                    ml-1

                    text-dark

                  "

                />

              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div

        animate={{

          y: [0, 10, 0],

        }}

        transition={{

          duration: 2,

          repeat: Infinity,

        }}

        className="

          absolute

          bottom-8

          left-1/2

          -translate-x-1/2

        "

      >

        <ChevronDown

          size={28}

          className="

            text-[#22c55e]

            opacity-80

          "

        />

      </motion.div>

    </section>

  )

}