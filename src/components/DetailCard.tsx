import { motion } from 'motion/react'
import { ChevronLeft, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DetailCardProps {
  title: string
  image?: string
  description: string
  skills: string[]
  onBack: () => void
  projectUrl?: string
  href?: string
  className?: string
}

export function DetailCard({
  title,
  image,
  description,
  skills,
  onBack,
  projectUrl,
  href,
  className,
}: DetailCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden',
        'rounded-[var(--detail-card-radius)]',
        'bg-[var(--credits-surface)]',
        'shadow-[var(--about-card-shadow)]',
        'font-[var(--font-display-portfolio)]',
        className,
      )}
    >
      {/* Banner image with back button overlay */}
      <div className="relative w-full">
        {image ? (
          <img
            src={image}
            alt={title}
            className={cn(
              'w-full object-cover',
              'rounded-t-[var(--detail-card-radius)] overflow-hidden',
              'max-h-36',
            )}
          />
        ) : (
          <div
            className={cn(
              'w-full h-36',
              'rounded-t-[var(--detail-card-radius)]',
              'bg-[rgba(255,255,255,0.06)]',
            )}
          />
        )}

        {/* Floating back button */}
        <button
          onClick={onBack}
          aria-label="Go back"
          className={cn(
            'absolute top-3 left-3',
            'flex items-center justify-center',
            'h-8 w-8 rounded-full',
            'bg-[rgba(0,0,0,0.35)]',
            'text-white',
            'cursor-pointer',
          )}
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
        </button>
      </div>

      {/* Content area */}
      <div className="flex flex-col gap-2 px-[25px] pt-4 pb-4">
        {/* Title */}
        <div className="flex items-center justify-between gap-3">
          <h2
            className={cn(
              'text-[26px] font-bold leading-tight',
              'text-white',
            )}
          >
            {title}
          </h2>
          <div className="flex items-center gap-2 shrink-0">
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live site"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Globe className="h-6 w-6" />
              </a>
            )}
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p
          className={cn(
            'text-[15px] leading-relaxed',
            'text-[var(--portfolio-subtitle)]',
          )}
        >
          {description}
        </p>

        {/* Skill badge chips */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              className={cn(
                'inline-flex items-center',
                'h-[30px] px-3 rounded-full',
                'bg-[rgba(255,255,255,0.15)]',
                'text-white text-sm',
              )}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}