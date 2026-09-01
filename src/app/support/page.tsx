import Link from 'next/link'

export const metadata = {
  title: 'Support | Webmotion Studio',

  description:
    'Get support and assistance from Webmotion Studio.',
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-36 pb-24 px-6">

      {/* Glow */}

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FF6B35]/10 blur-[220px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}

        <header className="mb-16">

          <p className="text-[#FF6B35] text-sm font-semibold uppercase tracking-[0.4em] mb-5">

            Webmotion Studio

          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">

            Support Center

          </h1>

          <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed">

            Need help with a project, revision, website,
            quote, or deliverables? We're here to help.
            Reach out anytime and we'll guide you through
            the next steps.

          </p>

        </header>

        {/* Support Cards */}

        <div className="grid md:grid-cols-2 gap-8 mb-8">

          {/* General Support */}

          <section
            className="
              rounded-3xl

              border

              border-white/10

              bg-white/[0.03]

              p-8

              backdrop-blur-xl

              hover:border-[#FF6B35]/30

              transition-all
            "
          >

            <h2 className="text-2xl font-bold mb-4">

              General Support

            </h2>

            <p className="text-zinc-400 leading-8">

              For project discussions, updates,
              revisions, or service inquiries,
              send us an email anytime.

            </p>

            <a
              href="mailto:webmotionstudio1@gmail.com"

              className="
                inline-block

                mt-5

                text-[#FF6B35]

                font-semibold

                hover:text-[#FF6B35]

                transition
              "
            >

              webmotionstudio1@gmail.com

            </a>

          </section>

          {/* Response Time */}

          <section
            className="
              rounded-3xl

              border

              border-white/10

              bg-white/[0.03]

              p-8

              backdrop-blur-xl

              hover:border-[#FF6B35]/30

              transition-all
            "
          >

            <h2 className="text-2xl font-bold mb-4">

              Fast Response

            </h2>

            <p className="text-zinc-400 leading-8">

              We usually reply within 24 hours.
              For urgent matters, use WhatsApp
              for faster communication.

            </p>

            <a
              href="https://wa.me/8801805768267"

              target="_blank"

              rel="noopener noreferrer"

              className="
                inline-block

                mt-5

                text-[#FF6B35]

                font-semibold

                hover:text-[#FF6B35]

                transition
              "
            >

              Chat On WhatsApp →

            </a>

          </section>

        </div>

        {/* Help Topics */}

        <section
          className="
            rounded-3xl

            border

            border-white/10

            bg-white/[0.03]

            p-8

            backdrop-blur-xl

            mb-8
          "
        >

          <h2 className="text-2xl font-bold mb-6">

            What We Can Help With

          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            {[
              'Project status updates',

              'Website, design & video inquiries',

              'Revisions & file delivery',

              'Billing & invoices',

              'Portfolio questions',

              'Technical support',
            ].map((item) => (

              <div
                key={item}

                className="
                  flex

                  items-center

                  gap-3

                  rounded-2xl

                  border

                  border-white/10

                  bg-white/[0.02]

                  px-5

                  py-4
                "
              >

                <span className="text-[#FF6B35]">

                  ✓

                </span>

                <span className="text-zinc-300">

                  {item}

                </span>

              </div>

            ))}

          </div>

        </section>

        {/* CTA */}

        <section
          className="
            rounded-3xl

            border

            border-[#FF6B35]/20

            bg-gradient-to-r

            from-[#FF6B35]/10

            to-[#FF6B35]/10

            p-8
          "
        >

          <h2 className="text-3xl font-bold mb-4">

            Need Immediate Help?

          </h2>

          <p className="text-zinc-300 leading-8">

            Use the floating WhatsApp button or
            visit our homepage contact section
            to start a conversation instantly.

          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="https://wa.me/8801805768267"

              target="_blank"

              rel="noopener noreferrer"

              className="
                rounded-full

                bg-gradient-to-r

                from-[#FF6B35]

                to-[#FF6B35]

                px-8

                py-4

                font-semibold

                text-white

                hover:scale-105

                transition-all
              "
            >

              Contact Now

            </a>

            <Link
              href="/"

              className="
                rounded-full

                border

                border-white/10

                bg-white/[0.03]

                px-8

                py-4

                text-zinc-300

                hover:border-[#FF6B35]/30

                hover:text-[#FF6B35]

                transition-all
              "
            >

              ← Back To Home

            </Link>

          </div>

        </section>

      </div>

    </main>
  )
}