import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const gtLogoUrl =
  'https://www.figma.com/api/mcp/asset/0db1408e-ab73-425e-a699-9754e1420e57'

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
      <div className="flex flex-col gap-1 text-[clamp(1.1rem,1.6vw,1.8rem)] leading-snug">
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
          <span>Interested in </span>
          <strong>full-stack, machine learning, </strong>
          <span>and </span>
          <strong>product management</strong>
        </p>
        <p>
          {' - '}
          <span>
            Worked on <strong>GROWER</strong> Research Project and with <strong>Georgia-Pacific</strong>
          </span>
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
          <span> internship</span>
        </p>
      </div>

      {/* Fun Facts section */}
      <div className="flex flex-col gap-1 text-[clamp(1.1rem,1.6vw,2rem)] leading-snug">
        <p>
          <strong>Fun Facts</strong>
        </p>
        <p>{' - Avid GeoGuessr player'}</p>
        <p>{' - Pursuing a sustainable cities minor'}</p>
        <p>{' - Love exploring and hiking'}</p>
        <p>{' - Creating content on Instagram'}</p>
      </div>
    </motion.div>
  )
}