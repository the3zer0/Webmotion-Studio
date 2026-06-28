
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Instagram',
      icon: '/instagram.png',
      href: 'https://www.instagram.com/webmotionstudio_/',
    },

    {
      name: 'Facebook',
      icon: '/facebook.png',
      href: 'https://www.facebook.com/webmotionofficial',
    },

    {
      name: 'LinkedIn',
      icon: '/linkedin.png',
      href: 'https://www.linkedin.com/in/webmotionstudio1/',
    },

    {
      name: 'YouTube',
      icon: '/youtube.png',
      href: 'https://www.youtube.com/channel/UCxC_a3VNFhTT5zDP1F_pxsw',
    },
  ]

  return (
    <footer className="bg-[#111111] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        {/* TOP */}

        <div className="flex flex-col lg:flex-row justify-between gap-20">

          {/* Logo */}

          <div className="lg:w-[35%]">

            <h2 className="text-5xl font-bold">

              <span className="text-[#ff6b35]">
                Webmotion
              </span>

              <span className="text-[#2563eb]">
                {' '}Studio
              </span>

            </h2>

          </div>

          {/* Right Side */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

            {/* Services */}

            <div>

              <h3 className="text-white text-xl font-semibold mb-6">
                Services
              </h3>

              <ul className="space-y-4">

                <li>

                  <Link
                    href="/graphics-design"
                    className="text-zinc-400 hover:text-[#ff6b35] transition"
                  >
                    Graphics Design
                  </Link>

                </li>

                <li>

                  <Link
                    href="/video-editing"
                    className="text-zinc-400 hover:text-[#ff6b35] transition"
                  >
                    Video Editing
                  </Link>

                </li>

                <li>

                  <Link
                    href="/web-dev"
                    className="text-zinc-400 hover:text-[#ff6b35] transition"
                  >
                    Web Development
                  </Link>

                </li>

              </ul>

            </div>

            {/* Company */}

            <div>

              <h3 className="text-white text-xl font-semibold mb-6">
                Company
              </h3>

              <ul className="space-y-4">

                <li>

                  <Link
                    href="/#about"
                    className="text-zinc-400 hover:text-[#ff6b35] transition"
                  >
                    About Us
                  </Link>

                </li>

                <li>

                  <Link
                    href="/blog"
                    className="text-zinc-400 hover:text-[#ff6b35] transition"
                  >
                    Blog
                  </Link>

                </li>

                <li>

                  <Link
                    href="/careers"
                    className="text-zinc-400 hover:text-[#ff6b35] transition"
                  >
                    Careers
                  </Link>

                </li>

              </ul>

            </div>

            {/* Quick Links */}

            <div>

              <h3 className="text-white text-xl font-semibold mb-6">
                Quick Links
              </h3>

              <ul className="space-y-4">

                <li>

                  <Link
                    href="/privacy"
                    className="text-zinc-400 hover:text-[#ff6b35] transition"
                  >
                    Privacy Policy
                  </Link>

                </li>

                <li>

                  <Link
                    href="/terms"
                    className="text-zinc-400 hover:text-[#ff6b35] transition"
                  >
                    Terms & Conditions
                  </Link>

                </li>

                <li>

                  <Link
                    href="/support"
                    className="text-zinc-400 hover:text-[#ff6b35] transition"
                  >
                    Support
                  </Link>

                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* Contact */}

        <div className="mt-20">

          <h3 className="text-white text-2xl font-semibold mb-8">
            Contact Us
          </h3>

          <div className="grid md:grid-cols-3 gap-10">

            <div>

              <p className="text-[#2563eb] mb-2 font-medium">
                WhatsApp
              </p>

              <a
                href="https://wa.me/8801805768267"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#ff6b35]"
              >
                +8801805768267
              </a>

            </div>

            <div>

              <p className="text-[#2563eb] mb-2 font-medium">
                Email
              </p>

              <a
                href="mailto:webmotionstudio1@gmail.com"
                className="text-zinc-400 hover:text-[#ff6b35]"
              >
                webmotionstudio1@gmail.com
              </a>

            </div>

            <div>

              <p className="text-[#2563eb] mb-2 font-medium">
                Location
              </p>

              <p className="text-zinc-400">

                Dhaka, Bangladesh

                <br />

                Available Worldwide

              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-zinc-500 text-sm">

            © {currentYear} Webmotion Studio. All rights reserved.

          </p>

           {/* Social Icons */}

          <div
            className="
              flex

              items-center

              gap-4

              lg:pr-16
            "
          >

            {socialLinks.map((social) => (

              <motion.a
                key={social.name}

                href={social.href}

                target="_blank"

                rel="noopener noreferrer"

                whileHover={{
                  scale: 1.08,
                  y: -3,
                }}

                whileTap={{
                  scale: 0.95,
                }}

                className="
                  flex

                  h-11

                  w-11

                  items-center

                  justify-center

                  rounded-xl

                  border

                  border-[#ff6b35]/20

                  bg-[#ff6b35]/10

                  transition-all

                  duration-300

                  hover:border-[#ff6b35]/50

                  hover:bg-[#ff6b35]/20
                "
              >

                <Image
                  src={social.icon}

                  alt={social.name}

                  width={18}

                  height={18}
                />

              </motion.a>

            ))}

          </div>

        </div>

      </div>

    </footer>
  )
}

