import Hero from '@/components/video-editing/Hero'
import TheStory from '@/components/video-editing/TheStory'
import PortfolioEcosystem from '@/components/video-editing/PortfolioEcosystem'
import Services from '@/components/video-editing/Services'
import Process from '@/components/video-editing/Process'
import Testimonials from '@/components/video-editing/Testimonials'
import FAQ from '@/components/common/FAQ'
import Contact from '@/components/common/Contact'
import Pricing from '@/components/video-editing/Pricing'

const videoFaqs = [
   {
    question: 'What type of videos do you edit?',
    answer:
      'We create high-quality edits tailored to your brand and audience — including short-form content, cinematic reels, YouTube videos, ads, podcasts, brand promos, social media content, and creative storytelling edits.',
  },
  {
    question: 'How can I send my footage?',
    answer:
      'You can share files through Google Drive, Dropbox, WeTransfer, or any cloud storage platform. Once we begin, we’ll guide you through the process smoothly.',
  },
  {
    question: 'Do you offer revisions?',
    answer:
      'Yes. Revisions are included to ensure the final video matches your vision and brand style. Revision limits depend on the selected package.',
  },
  {
    question: 'Can you match my brand style?',
    answer:
      'Absolutely. We carefully match your colors, fonts, captions, transitions, pacing, and editing style to keep your content professional, recognizable, and consistent across all platforms.',
  },
  {
    question: 'Do you work on monthly retainers or one-time projects?',
    answer:
      'We offer both. Whether you need a single project edited or ongoing monthly content support, we have flexible packages for creators, businesses, agencies, and personal brands.',
  },
  {
    question: 'How long does delivery take?',
    answer:
      'Turnaround time depends on the project size and complexity, but we always aim for fast, high-quality delivery without compromising the final result.',
  },
  {
    question: 'Can you help with content ideas and strategy too?',
    answer:
      'Yes. Along with editing, we can help improve hooks, pacing, captions, storytelling, and content structure to make your videos more engaging and platform-friendly.',
  },
]
export default function VideoEditingPage() {
  return (
    <main className="bg-dark text-light">
      <Hero />

<TheStory />

<Services />

<PortfolioEcosystem />

<Pricing />

<Process />

<Testimonials />

<FAQ
  title="Video Editing FAQ"
  description="Learn more about our editing workflow, revisions, delivery times, and content strategy."
  items={videoFaqs}
/>

<Contact
  title="Let's Create Content That Performs."
  description="Whether you need short-form content, YouTube videos, podcasts, ads, or ongoing editing support, let's discuss your project."
/>
      
    </main>
  )
}