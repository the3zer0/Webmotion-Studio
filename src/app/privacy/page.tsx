import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Webmotion Studio',

  description:
    'Privacy policy for Webmotion Studio.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-36 pb-24 px-6">

      {/* Glow */}

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#ff6b35]/10 blur-[220px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}

        <header className="mb-16">

          <p className="text-[#ff6b35] text-sm font-semibold uppercase tracking-[0.4em] mb-5">

            Webmotion Studio

          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">

            Privacy Policy

          </h1>

          <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed">

            Your privacy matters to us. This policy explains
            how Webmotion Studio collects, uses, and protects
            your information whenever you interact with our
            website, services, or contact channels.

          </p>

        </header>

        {/* Sections */}

        <div className="space-y-8">

          {[
            {
              title: '1. Information We Collect',

              text:
                'We may collect information you voluntarily provide through contact forms, email, WhatsApp, or project inquiries. This may include your name, email address, phone number, company name, and message details.',
            },

            {
              title: '2. How We Use Information',

              text:
                'We use your information to respond to inquiries, prepare project proposals, communicate with clients, deliver services, and improve our website experience. We never sell your personal information.',
            },

            {
              title: '3. Cookies & Analytics',

              text:
                'We may use cookies or analytics tools to understand website traffic, improve performance, and enhance user experience. You can disable cookies from your browser settings at any time.',
            },

            {
              title: '4. Data Sharing',

              text:
                'We only share information with trusted service providers when necessary to operate our business, such as hosting, email, or workflow tools. These providers are required to handle your data responsibly.',
            },

            {
              title: '5. Your Rights',

              text:
                'You may request access, correction, or deletion of your personal information at any time by contacting us directly.',
            },
          ].map((section) => (

            <section
              key={section.title}

              className="
                rounded-3xl

                border

                border-white/10

                bg-white/[0.03]

                p-8

                backdrop-blur-xl

                transition-all

                duration-300

                hover:border-[#ff6b35]/30

                hover:bg-white/[0.05]
              "
            >

              <h2 className="text-2xl font-bold mb-4">

                {section.title}

              </h2>

              <p className="text-zinc-400 leading-8">

                {section.text}

              </p>

            </section>

          ))}

          {/* Contact */}

          <section
            className="
              rounded-3xl

              border

              border-[#ff6b35]/20

              bg-gradient-to-r

              from-[#ff6b35]/10

              to-[#2563eb]/10

              p-8
            "
          >

            <h2 className="text-2xl font-bold mb-4">

              6. Contact Us

            </h2>

            <p className="text-zinc-300 leading-8">

              If you have any questions regarding this policy,
              feel free to contact us.

            </p>

            <a
              href="mailto:webmotionstudio1@gmail.com"

              className="
                inline-block

                mt-5

                text-[#ff6b35]

                font-semibold

                hover:text-[#2563eb]

                transition
              "
            >

              webmotionstudio1@gmail.com

            </a>

            <p className="text-zinc-500 text-sm mt-6">

              Effective Date: June 2026

            </p>

          </section>

        </div>

        {/* Back Button */}

        <div className="mt-16">

          <Link
            href="/"

            className="
              inline-flex

              items-center

              gap-2

              rounded-full

              border

              border-white/10

              bg-white/[0.03]

              px-6

              py-3

              text-zinc-300

              hover:border-[#ff6b35]/30

              hover:text-[#ff6b35]

              transition-all
            "
          >

            ← Back To Home

          </Link>

        </div>

      </div>

    </main>
  )
}