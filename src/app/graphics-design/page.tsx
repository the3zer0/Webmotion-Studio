import Hero from '@/components/graphics-design/Hero'
import Services from '@/components/graphics-design/Services'
import Pricing from '@/components/graphics-design/Pricing'
import FeaturedWork from '@/components/graphics-design/FeaturedWork'
import Process from '@/components/graphics-design/Process'
import Testimonials from '@/components/graphics-design/Testimonials'
import FAQ from '@/components/common/FAQ'
import Contact from '@/components/common/Contact'

const graphicsFaqs = [
{
question: 'Why Choose Webmotion Studio?',
answer:
'We combine creative design, strategic thinking, and industry experience to create visuals that strengthen your brand identity and help your business stand out in a competitive market.',
},
{
question: 'What information do I need to provide before starting?',
answer:
'To begin your project, please provide your business name, tagline (if any), preferred colors, industry details, design preferences, references, and any existing brand assets you would like us to follow.',
},
{
question: 'Do you offer unlimited revisions?',
answer:
'Yes. We work closely with our clients and provide revisions to ensure the final design meets their expectations and business goals.',
},
{
question: 'Do I own the copyright to the final design?',
answer:
'Absolutely. Once the project is completed and delivered, you receive full ownership rights to the final approved design.',
},
{
question: 'Will I receive source files?',
answer:
'Yes. Depending on your selected package, editable source files such as AI, PSD, SVG, EPS, or other requested formats can be included.',
},
{
question: 'Why are transparent PNG files important?',
answer:
'Transparent PNG files allow you to use your logo or design on websites, social media, marketing materials, packaging, and watermarks without a background.',
},
{
question: 'Can you work with existing brand guidelines?',
answer:
'Yes. We can follow your existing brand guidelines to ensure consistency across all marketing materials and visual assets.',
},
{
question: 'What types of graphic design services do you offer?',
answer:
'We provide logo design, brand identity design, social media graphics, business cards, banners, posters, presentation design, advertising creatives, and other custom design solutions.',
},
{
question: 'How long does a graphic design project take?',
answer:
'Project timelines vary depending on complexity and revisions, but most graphic design projects are completed within 3–10 business days.',
},
{
question: 'Do you offer refunds?',
answer:
'Client satisfaction is our priority. Refund requests are reviewed on a case-by-case basis depending on the project stage and work completed.',
},
]

export default function GraphicsDesignPage() {
  return (
    <main className="bg-dark text-light">

  {/* Hero */}
  <Hero />

  {/* Best Work First */}
  <FeaturedWork />

  {/* Services */}
  <Services />

  {/* Process */}
  <Process />

  {/* Pricing */}
  <Pricing />

  {/* Testimonials */}
  <Testimonials />

  {/* FAQ */}
  <FAQ
    title="Graphics Design FAQ"
    description="Everything you need to know before starting your design project."
    items={graphicsFaqs}
  />

  {/* Contact */}
  <Contact
    title="Let's Build Something Remarkable."
    description="Whether you're launching a brand, promoting a product, or improving your visual identity, we're ready to create designs that make an impact."
  />

</main>
  )
}