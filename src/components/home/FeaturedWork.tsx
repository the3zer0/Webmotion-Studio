'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'

const portfolioProjects = [
  {
    id: 1,

    title: 'Video Editing',

    icon: '/resume/vd.png',

    category: 'Video Production',

    image: '/video.png',

    description:
      'Cinematic edits, motion graphics, and storytelling-focused content.',

    tags: [
      'Premiere Pro',
      'DaVinci Resolve',
      'After Effects',
      'Motion Design',
    ],

    link: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/video-editing#portfolio`,
  },

  {
    id: 2,

    title: 'Graphics Design',

    icon: '/resume/gr.png',

    category: 'Visual Identity',

    image: '/graphics-project/graphics.jpg',

    description:
      'Logos, social media creatives, thumbnails, and brand assets.',

    tags: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Branding',
      'Logo',
      'Social Media',
    ],

    link: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/graphics-design#featured-work`,
  },

  {
    id: 3,

    title: 'Web Development',

    icon: '/resume/web.png',

    category: 'Digital Experience',

    image: '/web/web.png',

    description:
      'Modern websites built for speed, SEO, and conversion.',

    tags: [
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'REST API',
      'SEO',
    ],

    link: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/web-dev#featured-work`,
  },
]

export default function Portfolio() {
  return (
    <section
      id="featured-work"
      className="relative overflow-hidden bg-[#151515] py-32 px-6"
    >
      {/* Glow */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          h-[700px]
          w-[700px]
          bg-[#ff6b35]/10
          blur-[180px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

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
            duration: 0.7,
          }}
          className="mb-20 text-center"
        >

          <p
            className="
              mb-4
              text-sm
              uppercase
              tracking-[0.3em]
              text-[#2563eb]
            "
          >
            Featured Work
          </p>

          <h2
            className="
              mb-6
              text-5xl
              font-bold
              text-white
              md:text-6xl
            "
          >
            Recent Projects
          </h2>

          <p
            className="
              mx-auto
              max-w-2xl
              text-lg
              text-zinc-400
            "
          >
            A selection of projects built to help brands grow
            through design, video, and web experiences.
          </p>

        </motion.div>

        {/* Cards */}

        <div
          className="
            mx-auto
            mb-20
            grid
            max-w-6xl
            grid-cols-1
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {portfolioProjects.map(
            (project, index) => (

              <motion.a
                key={project.id}

                href={project.link}

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}

                whileHover={{
                  y: -10,
                }}

                className="
                  group
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.03]
                  transition-all
                  duration-300
                  hover:border-[#ff6b35]/40
                "
              >

                {/* Image */}

                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
                      object-cover
                      transition-all
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* Hover Icon */}

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  >

                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-r
                        from-[#ff6b35]
                        to-[#2563eb]
                      "
                    >

                      <ExternalLink
                        size={28}
                        className="text-white"
                      />

                    </div>

                  </div>

                </div>

                {/* Content */}

                <div className="p-7">

                  {/* Category */}

                  <div
                    className="
                      mb-5
                      inline-flex
                      w-fit
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[#ff6b35]/20
                      bg-[#ff6b35]/10
                      px-3
                      py-2
                    "
                  >

                    <Image
                      src={project.icon}
                      alt={project.title}
                      width={16}
                      height={16}
                      className="object-contain"
                    />

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-[#ff6b35]
                      "
                    >

                      {project.category}

                    </span>

                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mb-3
                      text-2xl
                      font-bold
                      text-white
                      transition
                      group-hover:text-[#ff6b35]
                    "
                  >

                    {project.title}

                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mb-6
                      text-sm
                      leading-relaxed
                      text-zinc-400
                    "
                  >

                    {project.description}

                  </p>

                  {/* Tags */}

                  <div className="mb-7 flex flex-wrap gap-2">

                    {project.tags.map(
                      (tag) => (

                        <span
                          key={tag}

                          className="
                            rounded-full
                            bg-[#ff6b35]/10
                            px-3
                            py-1
                            text-xs
                            text-[#ff6b35]
                          "
                        >

                          {tag}

                        </span>
                      )
                    )}

                  </div>

                  {/* Link */}

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      font-semibold
                      text-[#2563eb]
                    "
                  >

                    Open Portfolio

                    <ArrowRight size={18} />

                  </div>

                </div>

              </motion.a>
            )
          )}

        </div>

        {/* CTA */}

        <motion.div
          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

          viewport={{
            once: true,
          }}

          className="flex justify-center"
        >

          <a
            href="#contact"

            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#ff6b35]
              px-8
              py-4
              font-semibold
              text-[#ff6b35]
              transition-all
              duration-300
              hover:bg-[#ff6b35]/10
            "
          >

            Start Your Project

            <ArrowRight size={20} />

          </a>

        </motion.div>

      </div>
    </section>
  )
}