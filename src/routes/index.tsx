import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { useState } from 'react'
import { cn } from '#/lib/utils'
import { CreditsCard } from '@/components/CreditsCard'
import { AboutCard } from '@/components/AboutCard'
import { ProjectsCard } from '@/components/ProjectsCard'
import { ExperienceCard } from '@/components/ExperienceCard'


export const Route = createFileRoute('/')({ component: Home })

const NAV_LINKS = [
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Credits', href: '#credits' },
]

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn('block', className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn('block', className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

interface NavLinksProps {
  activeSection: string | null
  onSectionChange: (href: string) => void
}

function NavLinks({ activeSection, onSectionChange }: NavLinksProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <nav
      className="mt-[5vh] flex flex-col"
      aria-label="Site navigation"
    >
      {NAV_LINKS.map((link, i) => {
        const isHovered = hoveredIndex === i
        const isActive = activeSection === link.href
        return (
          <motion.a
            key={link.label}
            href={link.href}
            className={cn('w-fit leading-none')}
            style={{
              fontFamily: 'var(--font-display-portfolio)',
              fontSize: 'clamp(2rem, 4vw, var(--font-size-nav-link))',
              fontWeight: isActive ? 800 : 500,
              color: isActive ? 'var(--nav-link-active-color)' : 'var(--portfolio-purple)',
              textDecoration: isHovered || isActive ? 'underline solid' : 'none',
              textUnderlinePosition: isHovered || isActive ? 'from-font' : undefined,
              marginBottom: 'clamp(1rem, 2vh, 2rem)',
            }}
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.25,
              delay: 0.1 + i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ x: 6, color: 'var(--nav-link-hover-color)' }}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={(e) => {
              e.preventDefault()
              onSectionChange(link.href)
            }}
          >
            {link.label}
          </motion.a>
        )
      })}
    </nav>
  )
}

function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden',
        'min-h-screen',
      )}
      style={{ backgroundColor: '#0d0b14' }}
    >
      {/* Background video — right half */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute right-0 top-0 h-full w-[100%] object-cover object-center"
          src="/background.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Left gradient overlay — fades the video into the dark background */}
        <div
          className="absolute inset-0 w-[50%]"
          style={{
            background:
              'linear-gradient(to right, #000000 0%, #00000000 100%, transparent 100%)',
          }}
        />
        {/* Top + bottom vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(13,11,20,0.5) 0%, transparent 18%, transparent 75%, rgba(13,11,20,0.6) 100%)',
          }}
        />
      </div>

      {/* Left-side content panel */}
      <motion.div
        className="relative z-10 flex min-h-screen flex-col px-[5vw] py-[9vh]"
        style={{ maxWidth: '50vw' }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Hero name */}
        <motion.h1
          className="leading-none whitespace-nowrap"
          style={{
            fontFamily: 'var(--font-display-portfolio)',
            fontSize: 'clamp(3rem, 6vw, var(--font-size-hero-name))',
            fontWeight: 900,
            color: 'var(--portfolio-purple-hero)',
            letterSpacing: '-0.01em',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          Anish Budida
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-[1.4rem] whitespace-nowrap"
          style={{
            fontFamily: 'var(--font-display-portfolio)',
            fontSize: 'clamp(1rem, 2vw, var(--font-size-subtitle))',
            fontWeight: 400,
            color: 'var(--portfolio-subtitle)',
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          Full-Stack &amp; Machine Learning Developer
        </motion.p>

        {/* Nav links */}
        <NavLinks activeSection={activeSection} onSectionChange={setActiveSection} />

        {/* Social icons — pinned toward bottom */}
        <motion.div
          className="flex flex-row items-center gap-6 pt-[6vh]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="https://github.com/anishthebud"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-opacity duration-150 hover:opacity-70"
            style={{ color: 'var(--portfolio-purple)' }}
          >
            <GithubIcon className="block w-[var(--icon-size-social)] h-[var(--icon-size-social)]" />
          </a>
          <a
            href="https://www.linkedin.com/in/anish-budida-57994723a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-opacity duration-150 hover:opacity-70"
            style={{ color: 'var(--portfolio-purple)' }}
          >
            <LinkedinIcon className="block w-[var(--icon-size-social)] h-[var(--icon-size-social)]" />
          </a>
        </motion.div>
      </motion.div>

      {/* Right-side section panels */}
      <div className="absolute inset-y-0 right-0 z-10 flex flex-col w-[50%] items-center overflow-y-auto scrollbar-hide px-8">
        {activeSection === '#about' && (
          <section id="about" className="my-auto py-[8vh] w-full max-w-[798px]">
            <AboutCard className="w-full" />
          </section>
        )}
        {activeSection === '#projects' && (
          <section id="projects" className="my-auto py-[8vh] w-full max-w-[798px]">
            <ProjectsCard className="w-full" />
          </section>
        )}
        {activeSection === '#experience' && (
          <section id="experience" className="my-auto py-[8vh] w-full max-w-[798px]">
            <ExperienceCard className="w-full" />
          </section>
        )}
        {activeSection === '#credits' && (
          <section id="credits" className="my-auto py-[8vh] w-full max-w-[798px]">
            <CreditsCard />
          </section>
        )}
      </div>
    </div>
  )
}
