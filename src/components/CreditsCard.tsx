import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const CREDITS = [
  'Friends, Family, Teachers, Mentors',
  'Georgia Institute of Technology',
  'Hackathon Teammates',
  'GROWER',
  'Georgia-Pacific',
  'The Computer Science Community',
  'Mass Effect Legendary Edition',
  'Star Wars Jedi Series',
]

interface CreditsCardProps {
  className?: string
}

export function CreditsCard({ className }: CreditsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'section-card flex flex-col items-center gap-6 px-12 py-10 text-center',
        'bg-[var(--credits-surface)] text-[var(--portfolio-subtitle)]',
        'font-display-portfolio',
        className,
      )}
    >
      <h2 className="text-7xl font-extrabold leading-tight">Thank You</h2>
      <ul className="flex flex-col gap-1 text-4xl">
        {CREDITS.map((credit) => (
          <li key={credit} className="list-none">
            {credit}
          </li>
        ))}
      </ul>
      <p className="text-2xl">
        Built By <strong>Anish Budida</strong> With the Help of{' '}
        <strong>Claude Code</strong>
      </p>
    </motion.div>
  )
}
