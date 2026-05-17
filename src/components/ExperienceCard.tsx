import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { PortfolioItemCard } from '@/components/PortfolioItemCard'

const EXPERIENCES = [
  {
    title: 'GROWER',
    image: '/images/experiences/grower.jpeg',
  },
  {
    title: 'Georgia-Pacific',
    image: '/images/experiences/georgia_pacific.jpeg',
  },
  {
    title: 'HexLabs',
    image: '/images/experiences/hexlabs.png',
  },
]

const EXPERIENCE_CARD_BG = 'rgba(100, 26, 118, 0.85)'

interface ExperienceCardProps {
  className?: string
}

export function ExperienceCard({ className }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'flex flex-col gap-6 px-10 py-10 overflow-hidden',
        'font-display-portfolio',
        className,
      )}
    >
      <div className="grid grid-cols-2 gap-5">
        {EXPERIENCES.map((exp, i) => {
          const isLone = i === EXPERIENCES.length - 1 && EXPERIENCES.length % 2 !== 0
          return (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={cn(isLone && 'col-span-2 flex justify-center')}
            >
              <PortfolioItemCard
                title={exp.title}
                image={exp.image}
                bgColor={EXPERIENCE_CARD_BG}
                className={cn(isLone && 'w-[calc(50%-10px)]')}
              />
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
