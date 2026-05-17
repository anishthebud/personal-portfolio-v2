import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

// Icon asset URLs from Figma (node 2044:83)
const gtLogoUrl =
  'https://www.figma.com/api/mcp/asset/0db1408e-ab73-425e-a699-9754e1420e57'
const folderGitUrl =
  'https://www.figma.com/api/mcp/asset/c2f39591-a19d-4219-9d5c-632d18cfe52f'
const treePinUrl =
  'https://www.figma.com/api/mcp/asset/84467ba8-752c-412e-a4d5-8fa45891da5e'

interface AboutCardProps {
  className?: string
}

export function AboutCard({ className }: AboutCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'flex flex-col gap-6 px-10 py-10 overflow-hidden',
        'rounded-[var(--about-card-radius)] shadow-[var(--about-card-shadow)]',
        'bg-[var(--about-card-bg)] text-[var(--portfolio-subtitle)]',
        'font-display-portfolio',
        className,
      )}
    >
      {/* Main bullet list */}
      <div className="flex flex-col gap-1 text-[clamp(1.1rem,1.6vw,2rem)] leading-snug">
        <p>
          {' - '}
          <span>Rising third-year CS major at </span>
          <strong>Georgia Tech</strong> with <strong>3.96</strong> GPA
        </p>
        <p>
          {' - '}
          <span>
            Took Data Structures &amp; Algorithms, Objects &amp; Design, Intro
            to AI, and Machine Learning{' '}
          </span>
        </p>
        <p>
          {' - '}
          <span>
            Worked on <strong>GROWER</strong> Research Project and with <strong>Georgia-Pacific</strong>
          </span>
        </p>
        <p>
          {' - '}
          <span>Interested in </span>
          <strong>full-stack, machine learning, </strong>
          <span>and </span>
          <strong>product management</strong>
        </p>
        <p>
          {' - '}
          <span>
            Built Content Creation Manager, Steam VG personality Quiz, and more
          </span>
        </p>
        <p>
          {' - '}
          <span>Looking for </span>
          <strong>Fall 2026 </strong>
          <span>and/or </span>
          <strong>Summer 2027 SWE</strong>
          <span> or </span>
          <strong>PM</strong>
          <span> role</span>
        </p>
      </div>

      {/* Fun Facts section */}
      <div className="flex flex-col gap-1 text-[clamp(1.1rem,1.6vw,2rem)] leading-snug">
        <p>
          <strong>Fun Facts</strong>
        </p>
        <p>{' - Avid GeoGuessr player'}</p>
        <p>{' - Taking a sustainable cities minor'}</p>
        <p>{' - Love exploring and hiking'}</p>
        <p>{' - Creating content on Instagram'}</p>
      </div>

      {/* Bottom icon row */}
      <div className="flex flex-row items-center justify-between mt-2">
        {/* Left cluster: GT logo + folder-git */}
        <div className="flex flex-row items-center gap-3">
          <img
            src={gtLogoUrl}
            alt="Georgia Tech"
            className="h-12 w-auto object-contain"
          />
          <img
            src={folderGitUrl}
            alt="GitHub"
            className="h-12 w-12 object-contain border border-white"
          />
        </div>

        {/* Right cluster: map pin + tree + Instagram */}
        <div className="flex flex-row items-center gap-3">
          {/* Map pin — inline SVG */}
          <span className="flex items-center justify-center h-12 w-12">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7 text-[var(--portfolio-subtitle)]"
              aria-label="Location"
            >
              <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6z" />
              <circle cx="12" cy="8" r="2" />
            </svg>
          </span>

          {/* Tree (sustainability) */}
          <img
            src={treePinUrl}
            alt="Sustainable cities"
            className="h-12 w-12 object-contain border border-white"
          />

          {/* Instagram — inline SVG */}
          <span className="flex items-center justify-center h-12 w-12">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7 text-[var(--portfolio-subtitle)]"
              aria-label="Instagram"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  )
}