'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import '../../styles/video-editing/hero.css'

const stats = [
{ value: '22K+', label: 'Content Views' },
{ value: '1.5+', label: 'Years Experience' },
{ value: '55+', label: 'Creative Projects' },
{ value: '3K+', label: 'Hours In Premiere' },
]

export default function Hero() {
  const playerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const iframe = iframeRef.current

        if (!iframe) return

        iframe.contentWindow?.postMessage(
          JSON.stringify({
            event: 'command',
            func: entry.isIntersecting
              ? 'playVideo'
              : 'pauseVideo',
          }),
          '*'
        )
      },
      {
        threshold: 0.5,
      }
    )

    if (playerRef.current) {
      observer.observe(playerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="video-hero">
      <div className="video-hero-glow" />

      <div className="video-hero-container">
        <div className="video-hero-content">
<span className="video-tag">
  VIDEO EDITING • MOTION DESIGN • STORYTELLING
</span>

<div
  className="
    inline-flex
    items-center
    gap-3
    px-8
    py-4
    rounded-full
    bg-gradient-to-r
    from-[#ff6b35]/20
    to-[#2563eb]/20
    border
    border-[#ff6b35]/30
    mt-4
    mb-6
  "
>
  <span className="text-[#ff6b35] text-xl">✦</span>

  <span className="text-white text-lg font-bold">
    1.5+ Years Experience • 55+ Creative Projects
  </span>
</div>

          <h1 className="video-title">
            CINEMATIC
            <br />
            <span>EDITS.</span>
          </h1>

          <p className="video-description">
            We create cinematic edits, branded content, and high-retention
            videos designed to stop the scroll, hold attention, and turn
            viewers into loyal audiences.
          </p>

          <div className="video-actions">
  <a href="#contact" className="btn-primary">
    Start Project
  </a>

  <a href="#portfolio" className="btn-secondary">
    View Portfolio
  </a>

  <a
    href="/resume/video-editor-resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-secondary"
  >
    View Resume
  </a>
</div>
          <div className="video-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="video-stat">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="video-showcase">
          <div
            ref={playerRef}
            className="video-frame"
          >
            <iframe
              ref={iframeRef}
              src="https://www.youtube.com/embed/HnvYalV-BOU?enablejsapi=1&autoplay=1&mute=1&controls=1&loop=1&playlist=HnvYalV-BOU&rel=0&modestbranding=1"
              title="Featured Work"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="video-badge">
            Featured Project
          </div>

          <div
            style={{
              marginTop: '16px',
              padding: '18px',
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,107,53,0.2)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <p
              style={{
                color: '#2563eb',
                fontSize: '12px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              FEATURED WORK
            </p>

            <h3
              style={{
                color: '#ffffff',
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '10px',
              }}
            >
              Podcast On Client Hunting
            </h3>

            <p
              style={{
                color: '#a1a1aa',
                lineHeight: 1.7,
                fontSize: '0.95rem',
              }}
            >
              A cinematic short-form podcast edit focused on retention,
              storytelling, pacing, subtitles, and motion graphics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}