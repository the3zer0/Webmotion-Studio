import Link from 'next/link'

export const metadata = {
  title: 'Terms & Conditions | Webmotion Studio',

  description:
    'Terms and conditions for using Webmotion Studio services and website.',
}

export default function TermsPage() {
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

            Terms & Conditions

          </h1>

          <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed">

            These terms explain the rules and guidelines
            for using Webmotion Studio's website and services.
            By accessing this website or working with us,
            you agree to these terms.

          </p>

        </header>

        {/* Sections */}

        <div className="space-y-8">

          {[
            {
              title: '1. Website Usage',

              text:
                'You may browse this website, explore our portfolio, and contact us regarding services. You agree not to misuse, disrupt, or attempt unauthorized access to the website or its systems.',
            },

            {
              title: '2. Services & Project Agreements',

              text:
                'Every project will have a defined scope, timeline, revisions, and pricing shared through a proposal or agreement before work begins. Signed agreements will always take priority over this page.',
            },

            {
              title: '3. Intellectual Property',

              text:
                'Ownership of final deliverables is transferred after full payment unless otherwise agreed in writing. Webmotion Studio may showcase completed projects in its portfolio unless restricted by contract.',
            },

            {
              title: '4. Payments & Refund Policy',

              text:
                'Project payments, deposits, milestones, and refund conditions will be clearly communicated before starting work. Delayed payments may affect project timelines and delivery schedules.',
            },

            {
              title: '5. Revisions & Changes',

              text:
                'Revision limits may vary depending on the selected package or project agreement. Additional changes outside the agreed scope may incur extra charges.',
            },

            {
              title: '6. Limitation of Liability',

              text:
                'Webmotion Studio will not be held responsible for indirect damages, business losses, or issues caused by third-party services, platforms, or hosting providers.',
            },

            {
              title: '7. Updates to These Terms',

              text:
                'We may update these terms from time to time. The latest version will always be available on this page along with the updated effective date.',
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

              Questions About These Terms?

            </h2>

            <p className="text-zinc-300 leading-8">

              If you have any questions regarding these
              terms and conditions, feel free to contact us.

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