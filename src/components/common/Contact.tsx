'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

import {
  Mail,
  Instagram,
  Clock3,
  MessageCircle,
} from 'lucide-react'

interface ContactProps {
  title: string
  description: string
}

export default function Contact({
  title,
  description,
}: ContactProps) {
  const [isSubmitting, setIsSubmitting] =
    useState(false)

  const [isSent, setIsSent] =
    useState(false)

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setIsSubmitting(true)

    const form = e.currentTarget

    try {
      await emailjs.send(
        'service_u5r3kim',

        'template_ffhj1mf',

        {
          name: (
            form.elements.namedItem(
              'name'
            ) as HTMLInputElement
          ).value,

          email: (
            form.elements.namedItem(
              'email'
            ) as HTMLInputElement
          ).value,

          whatsapp: (
            form.elements.namedItem(
              'whatsapp'
            ) as HTMLInputElement
          ).value,

          service: (
            form.elements.namedItem(
              'service'
            ) as HTMLSelectElement
          ).value,

          message: (
            form.elements.namedItem(
              'message'
            ) as HTMLTextAreaElement
          ).value,
        },

        'o3xqEQcsMlS3t0jlO'
      )

      setIsSent(true)

      form.reset()
    } catch (error) {
      console.error(error)

      alert(
        'Something went wrong. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-[#111111] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#ff6b35]/10 blur-[180px]" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
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
            duration: 0.7,
          }}

          className="text-center mb-12"
        >
          <p className="text-[#2563eb] uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            {description}
          </p>

        </motion.div>

        {/* Form */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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

          className="
            p-8
            md:p-10
            rounded-[2rem]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-sm
          "
        >

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div className="grid md:grid-cols-2 gap-5">

              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  text-white
                  placeholder:text-zinc-500
                  outline-none
                  focus:border-[#ff6b35]
                "
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  text-white
                  placeholder:text-zinc-500
                  outline-none
                  focus:border-[#ff6b35]
                "
              />

            </div>

            <input
              name="whatsapp"
              type="tel"
              placeholder="WhatsApp Number"
              required
              className="
                w-full
                px-5
                py-4
                rounded-xl
                bg-white/5
                border
                border-white/10
                text-white
                placeholder:text-zinc-500
                outline-none
                focus:border-[#ff6b35]
              "
            />

            <div className="relative">

              <select

                name="service"

                required

                defaultValue=""

                className="
                  w-full
                  px-5
                  py-4
                  pr-14
                  appearance-none
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  text-white
                  outline-none
                  focus:border-[#ff6b35]
                "
              >

                <option
                  value=""
                  disabled
                  className="bg-[#111111]"
                >
                  Select Service
                </option>

                <option
                  value="graphics-design"
                  className="bg-[#111111]"
                >
                  Graphics Design
                </option>

                <option
                  value="video-editing"
                  className="bg-[#111111]"
                >
                  Video Editing
                </option>

                <option
                  value="web-development"
                  className="bg-[#111111]"
                >
                  Web Development
                </option>

                

                <option
                  value="custom-package"
                  className="bg-[#111111]"
                >
                  Custom Package
                </option>

              </select>

              <span
                className="
                  absolute
                  right-8
                  top-1/2
                  -translate-y-1/2
                  text-zinc-400
                  pointer-events-none
                "
              >
                ▼
              </span>

            </div>

            <textarea

              name="message"

              rows={6}

              placeholder="Tell us about your project..."

              required

              className="
                w-full
                px-5
                py-4
                rounded-xl
                bg-white/5
                border
                border-white/10
                text-white
                placeholder:text-zinc-500
                outline-none
                resize-none
                focus:border-[#ff6b35]
              "
            />

            <button
              type="submit"

              disabled={
                isSubmitting || isSent
              }

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
                hover:scale-[1.01]
              "
            >

              {isSubmitting
                ? 'Sending...'
                : isSent
                ? 'Request Sent ✓'
                : 'Start Project →'}

            </button>

          </form>

        </motion.div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03] text-center">

            <Mail
              size={24}
              className="mx-auto text-[#ff6b35] mb-4"
            />

            <p className="text-xs uppercase tracking-[0.25em] text-[#2563eb] mb-2">
              Email
            </p>

            <p className="text-white text-sm break-all">
              webmotionstudio1@gmail.com
            </p>

          </div>

          <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03] text-center">

            <MessageCircle
              size={24}
              className="mx-auto text-[#ff6b35] mb-4"
            />

            <p className="text-xs uppercase tracking-[0.25em] text-[#2563eb] mb-2">
              WhatsApp
            </p>

            <a
              href="https://wa.me/8801805768267"

              target="_blank"

              rel="noopener noreferrer"

              className="text-white text-sm hover:text-[#25D366] transition"
            >
              +880 1805-768267
            </a>

          </div>

          <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03] text-center">

            <Instagram
              size={24}
              className="mx-auto text-[#ff6b35] mb-4"
            />

            <p className="text-xs uppercase tracking-[0.25em] text-[#2563eb] mb-2">
              Instagram
            </p>

            <p className="text-white text-sm">
              @webmotionstudio_
            </p>

          </div>

          <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03] text-center">

            <Clock3
              size={24}
              className="mx-auto text-[#ff6b35] mb-4"
            />

            <p className="text-xs uppercase tracking-[0.25em] text-[#2563eb] mb-2">
              Response Time
            </p>

            <p className="text-white text-sm">
              Within 24 Hours
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}