import { motion } from 'motion/react'
import { ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DetailCardProps {
  title: string
  image?: string
  description: string
  skills: string[]
  onBack: () => void
  className?: string
}

export function DetailCard({
  title,
  image,
  description,
  skills,
  onBack,
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
              'max-h-52',
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
      <div className="flex flex-col gap-3 px-[25px] pt-5 pb-6">
        {/* Title */}
        <h2
          className={cn(
            'text-[32px] font-bold leading-tight',
            'text-white',
          )}
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className={cn(
            'text-[18px] leading-relaxed',
            'text-[var(--portfolio-subtitle)]',
          )}
        >
          {description}
        </p>

        {/* Skill badge chips */}
        <div className="flex flex-wrap gap-2 mt-1">
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