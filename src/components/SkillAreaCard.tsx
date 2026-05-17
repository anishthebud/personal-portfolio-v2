import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface SkillAreaCardProps {
  label: string
  image: string
  onClick: () => void
}

export function SkillAreaCard({ label, image, onClick }: SkillAreaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={cn(
        'cursor-pointer flex flex-col overflow-hidden',
        'rounded-[var(--project-card-radius)]',
        'shadow-[var(--about-card-shadow)]',
      )}
      style={{
        width: 'var(--skill-area-card-width)',
        height: 'var(--skill-area-card-height)',
        backgroundColor: 'var(--credits-surface)',
        padding: '29px 28px 0',
      }}
    >
      {/* Portrait image slot */}
      <div
        className="flex-shrink-0 overflow-hidden rounded-[var(--project-card-radius)]"
        style={{
          width: 'var(--skill-area-card-image-width)',
          height: 'var(--skill-area-card-image-height)',
        }}
      >
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Label */}
      <div
        className="flex flex-1 items-center justify-center text-center px-1"
        style={{ paddingTop: '16px' }}
      >
        <p
          className="leading-tight text-[var(--portfolio-subtitle)]"
          style={{
            fontFamily: 'var(--font-display-portfolio)',
            fontSize: '2rem',
            fontWeight: 400,
          }}
        >
          {label}
        </p>
      </div>
    </motion.div>
  )
}
