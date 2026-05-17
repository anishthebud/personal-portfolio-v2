import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface PortfolioItemCardProps {
  title: string
  image?: string
  subtitle?: string
  bgColor: string
  href?: string
  className?: string
}

export function PortfolioItemCard({
  title,
  image,
  subtitle,
  bgColor,
  href,
  className,
}: PortfolioItemCardProps) {
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03, boxShadow: '5px 5px 18px 0px rgba(0, 0, 0, 0.7)' }}
      className={cn(
        'flex flex-col w-full overflow-hidden',
        'rounded-[var(--project-card-radius)]',
        'shadow-[var(--project-card-shadow)]',
        className,
      )}
      style={{
        backgroundColor: bgColor,
        aspectRatio: '300 / 200',
        padding: '8px 8px 6px',
      }}
    >
      {/* Thumbnail area — fills ~77% of card height */}
      <div
        className="overflow-hidden rounded-[var(--project-card-radius)] flex-1 min-h-0 flex items-center justify-center"
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center bg-white/10 text-[var(--portfolio-subtitle)] text-5xl font-bold select-none"
            style={{ fontFamily: 'var(--font-display-portfolio)' }}
            aria-hidden="true"
          >
            {title.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      {/* Label area */}
      <div className="flex-shrink-0 pt-1 px-1">
        <p
          className="text-[var(--project-card-label-color)] leading-tight truncate"
          style={{
            fontFamily: 'var(--font-display-portfolio)',
            fontSize: 'clamp(0.75rem, 1.2vw, var(--font-size-project-card-label))',
          }}
        >
          {title}
        </p>
        {subtitle && (
          <p
            className="text-[var(--portfolio-subtitle)] text-xs leading-tight truncate opacity-80 mt-0.5"
            style={{ fontFamily: 'var(--font-display-portfolio)' }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline block w-full"
        aria-label={title}
      >
        {cardContent}
      </a>
    )
  }

  return cardContent
}