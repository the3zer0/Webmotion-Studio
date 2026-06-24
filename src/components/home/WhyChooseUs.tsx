'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

import {
  Users,
  Globe,
  Award,
  Lightbulb,
} from 'lucide-react'

const studioValues = [
  {
    icon: Users,

    title: 'Collaborative',

    description:
      'We work closely with our clients to understand their vision and bring it to life.',
  },

  {
    icon: Lightbulb,

    title: 'Creative',

    description:
      'Innovation and creativity drive everything we do in every project.',
  },

  {
    icon: Award,

    title: 'Excellence',

    description:
      'We never compromise on quality or attention to detail.',
  },

  {
    icon: Globe,

    title: 'Global',

    description:
      'Serving clients internationally with diverse expertise and perspectives.',
  },
]

export default function Studio() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-dark
        to-secondary/10
        py-24
        px-4
        sm:px-6
        lg:px-8
      "
    >
      {/* Background */}

      <div
        className="
          absolute
          top-0
          left-0
          h-96
          w-96
          rounded-full
          bg-secondary/10
          blur-3xl
          opacity-50
          -z-10
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-96
          w-96
          rounded-full
          bg-primary/10
          blur-3xl
          opacity-50
          -z-10
        "
      />

      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-20"
        >
          <h2
            className="
              mb-6
              text-4xl
              font-bold
              sm:text-5xl
              lg:text-6xl
            "
          >
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-primary
                to-accent
              "
            >
              About Our Studio
            </span>
          </h2>

          <p
            className="
              max-w-3xl
              text-lg
              sm:text-xl
              text-light/70
              leading-relaxed
            "
          >
            Webmotion Studio is a full-service creative agency specializing in web development, graphic design, and video editing services. 
            We create high-performing digital experiences, SEO-friendly websites, and compelling visual content that help businesses build 
            their brand, attract customers, and drive long-term growth.
          </p>
        </motion.div>

        {/* Main Section */}

        <div
          className="
            mb-24
            grid
            grid-cols-1
            items-center
            gap-16
            lg:grid-cols-2
          "
        >

          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <div
              className="
                grid
                grid-cols-2
                gap-x-16
                gap-y-14
              "
            >

              <div>

                <h3
                  className="
                    mb-2
                    text-5xl
                    font-bold
                    text-primary
                  "
                >
                  410+
                </h3>

                <p className="text-lg text-light/70">

                  Projects Completed

                </p>

              </div>

              <div>

                <h3
                  className="
                    mb-2
                    text-5xl
                    font-bold
                    text-accent
                  "
                >
                  100+
                </h3>

                <p className="text-lg text-light/70">

                  Happy Clients Worldwide

                </p>

              </div>

              <div>

                <h3
                  className="
                    mb-2
                    text-5xl
                    font-bold
                    text-primary
                  "
                >
                  6+
                </h3>

                <p className="text-lg text-light/70">

                  Years of Experience

                </p>

              </div>

              <div>

                <h3
                  className="
                    mb-2
                    text-5xl
                    font-bold
                    text-accent
                  "
                >
                  4+
                </h3>

                <p className="text-lg text-light/70">

                  Creative Members & Specialists

                </p>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              flex
              justify-center
            "
          >

            <div
              className="
                relative
                w-full
                max-w-[340px]
                overflow-hidden
                rounded-[2rem]
                border
                border-[#ff6b35]/20
                bg-white/[0.03]
                shadow-[0_0_40px_rgba(255,107,53,0.08)]
              "
            >

              <Image
                src="/resume/gm.png"
                alt="Webmotion Team"
                width={1023}
                height={1537}
                priority
                className="
                  h-auto
                  w-full
                  object-contain
                "
              />

            </div>

          </motion.div>

        </div>

        {/* Values */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-4
          "
        >

          {studioValues.map(
            (value, index) => {

              const Icon = value.icon

              return (

                <motion.div
                  key={index}

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                  }}

                  className="
                    group
                    rounded-xl
                    border
                    border-primary/20
                    bg-primary/5
                    p-6
                    transition-all
                    duration-300
                    hover:border-primary/50
                  "
                >

                  <div
                    className="
                      mb-4
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-lg
                      bg-gradient-to-br
                      from-primary
                      to-accent
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >

                    <Icon
                      size={24}
                      className="text-dark"
                    />

                  </div>

                  <h3
                    className="
                      mb-2
                      text-lg
                      font-bold
                      text-light
                    "
                  >

                    {value.title}

                  </h3>

                  <p
                    className="
                      text-sm
                      text-light/60
                    "
                  >

                    {value.description}

                  </p>

                </motion.div>
              )
            }
          )}

        </div>

      </div>
    </section>
  )
}