import Link from 'next/link'

export const metadata = {
  title: 'Careers | Webmotion Studio',

  description:
    'Explore career opportunities at Webmotion Studio.',
}

export default function CareersPage() {
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

            Careers

          </h1>

          <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed">

            We are building a team of creative thinkers,
            designers, editors, and developers who love
            creating digital experiences that people remember.

          </p>

        </header>

        {/* Status Card */}

        <section
          className="
            rounded-3xl
            border
            border-[#ff6b35]/20
            bg-gradient-to-r
            from-[#ff6b35]/10
            to-[#2563eb]/10
            p-10
            mb-10
          "
        >

          <div className="flex items-center gap-4 mb-6">

            <div className="w-4 h-4 rounded-full bg-[#ff6b35] animate-pulse" />

            <p className="text-lg font-semibold">

              Hiring Status

            </p>

          </div>

          <h2 className="text-4xl font-bold mb-4">

            We're Not Hiring Right Now

          </h2>

          <p className="max-w-3xl text-zinc-300 leading-8">

            Although there are currently no open positions,
            we're always excited to connect with talented
            individuals who are passionate about design,
            video editing, and web development.

          </p>

        </section>

        {/* Future Opportunities */}

        <section
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-10
            mb-10
          "
        >

          <h2 className="text-3xl font-bold mb-8">

            Roles We Usually Work With

          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            {[
              'Graphic Designer',

              'Video Editor',

              'Motion Designer',

              'Frontend Developer',

              'UI/UX Designer',

              'Content Creator',
            ].map((role) => (

              <div
                key={role}

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

                <span className="text-[#ff6b35]">

                  ✦

                </span>

                <span className="text-zinc-300">

                  {role}

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
            border-white/10
            bg-white/[0.03]
            p-10
            text-center
          "
        >

          <h2 className="text-3xl font-bold mb-4">

            Stay Connected

          </h2>

          <p className="max-w-2xl mx-auto text-zinc-400 leading-8">

            Follow us on social media and keep an eye on
            future opportunities. When we're hiring again,
            we'll announce it there first.

          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <a
              href="https://www.instagram.com/webmotionstudio_/"

              target="_blank"

              rel="noopener noreferrer"

              className="
                rounded-full
                bg-gradient-to-r
                from-[#ff6b35]
                to-[#2563eb]
                px-8
                py-4
                font-semibold
                hover:scale-105
                transition-all
              "
            >

              Follow Us

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
                hover:border-[#ff6b35]/30
                hover:text-[#ff6b35]
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