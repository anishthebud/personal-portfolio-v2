import { motion } from 'motion/react'
import { ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SkillCategory {
  label: string
  skills: string[]
}

interface SkillTreeViewProps {
  title: string
  categories: SkillCategory[]
  onBack: () => void
  className?: string
}

export function SkillTreeView({
  title,
  categories,
  onBack,
  className,
}: SkillTreeViewProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col overflow-hidden',
        'rounded-[var(--detail-card-radius)]',
        'bg-[var(--credits-surface)]',
        'shadow-[var(--about-card-shadow)]',
        'font-[var(--font-display-portfolio)]',
        className,
      )}
    >
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
          'z-10',
        )}
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
      </button>

      {/* Content area */}
      <div className="flex flex-col gap-5 pt-5 px-6 pb-6">
        {/* Area title */}
        <h2
          className={cn(
            'text-[32px] font-bold leading-tight',
            'text-white',
            'pt-8',
          )}
          style={{ fontFamily: 'Alegreya Sans SC, var(--font-display-portfolio), serif' }}
        >
          {title}
        </h2>

        {/* Skill categories */}
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: categoryIndex * 0.07 }}
            className="flex flex-col gap-2"
          >
            {/* Category label */}
            <span
              className={cn(
                'text-xs tracking-widest uppercase',
                'opacity-60 text-white',
                'mb-2',
              )}
            >
              {category.label}
            </span>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, chipIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: categoryIndex * 0.07 + chipIndex * 0.03,
                  }}
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
          </motion.div>
        ))}
      </div>
    </div>
  )
}
