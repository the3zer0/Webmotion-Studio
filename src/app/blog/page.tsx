import Link from 'next/link'

export const metadata = {
  title: 'Blog | Webmotion Studio',

  description:
    'Insights, case studies, and creative resources from Webmotion Studio.',
}

const articles = [
  {
    title: '5 Ways To Make Your Brand More Memorable',

    category: 'Branding',

    description:
      'Practical strategies to build a strong digital presence and make your audience remember your brand.',

    href: '/blog/branding-tips',
  },

  {
    title: 'Why Every Business Needs A Modern Website In 2026',

    category: 'Web Development',

    description:
      'Discover how fast, responsive, and SEO-friendly websites help businesses generate more leads.',

    href: '/blog/modern-websites',
  },

  {
    title: 'How We Edit Videos That Stop The Scroll',

    category: 'Video Editing',

    description:
      'Behind the scenes of our editing process for creating engaging content with high retention.',

    href: '/blog/video-editing-process',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-36 pb-24 px-6">

      {/* Glow */}

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#ff6b35]/10 blur-[220px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}

        <header className="mb-16">

          <p className="text-[#ff6b35] text-sm font-semibold uppercase tracking-[0.4em] mb-5">

            Webmotion Studio

          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">

            Blog & Insights

          </h1>

          <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed">

            We share insights, case studies, creative
            strategies, and practical resources to help
            creators, brands, and businesses grow online.

          </p>

        </header>

        {/* Featured */}

        <section
          className="
            rounded-3xl
            border
            border-[#ff6b35]/20
            bg-gradient-to-r
            from-[#ff6b35]/10
            to-[#2563eb]/10
            p-10
            mb-16
          "
        >

          <p className="text-[#2563eb] uppercase tracking-[0.25em] text-sm mb-4">

            Featured Article

          </p>

          <h2 className="text-4xl font-bold mb-5">

            Building Digital Experiences That People Remember

          </h2>

          <p className="text-zinc-300 max-w-3xl leading-8">

            Great design is more than aesthetics.
            It combines branding, storytelling,
            motion, and technology to create
            experiences that convert visitors
            into loyal customers.

          </p>

        </section>

        {/* Articles */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {articles.map((article) => (

            <article
              key={article.title}

              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                hover:border-[#ff6b35]/30
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <p className="text-[#2563eb] uppercase tracking-[0.2em] text-sm mb-4">

                {article.category}

              </p>

              <h3 className="text-2xl font-bold mb-4">

                {article.title}

              </h3>

              <p className="text-zinc-400 leading-7 mb-6">

                {article.description}

              </p>

              <Link
                href={article.href}

                className="
                  inline-flex
                  items-center
                  text-[#ff6b35]
                  font-semibold
                  hover:text-[#2563eb]
                  transition
                "
              >

                Read More →

              </Link>

            </article>

          ))}

        </div>

        {/* Coming Soon */}

        <section
          className="
            mt-16
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-10
            text-center
          "
        >

          <h2 className="text-3xl font-bold mb-4">

            More Articles Coming Soon

          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto leading-8">

            We're currently preparing tutorials,
            case studies, and behind-the-scenes content.

          </p>

        </section>

        {/* Back */}

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