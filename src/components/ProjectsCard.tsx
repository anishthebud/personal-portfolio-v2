import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { PortfolioItemCard } from '@/components/PortfolioItemCard'

const PROJECTS = [
  {
    title: 'Content Creation Manager',
    image: '/images/projects/content_creation_manager.png',
    href: 'https://github.com/anishthebud',
  },
  {
    title: 'Steam Game Recommender',
    image: '/images/projects/steam-vg-personality-quiz.jpeg',
    href: 'https://github.com/anishthebud',
  },
  {
    title: 'Look At Me',
    image: '/images/projects/look_at_me.png',
    href: 'https://github.com/anishthebud',
  },
  {
    title: 'YouTube-VoiceOver',
    image: '/images/placeholder.png',
    href: 'https://github.com/anishthebud',
  },
  {
    title: 'Traffic Accident Analyzer',
    image: '/images/projects/traffic_accident_analyzer.png',
    href: 'https://github.com/anishthebud',
  },
  {
    title: 'Braille Buddy',
    image: '/images/placeholder.png',
    href: 'https://github.com/anishthebud',
  },
  {
    title: 'Confido',
    image: '/images/projects/confido.png',
    href: 'https://github.com/anishthebud',
  },
]

const PROJECT_CARD_BG = 'rgba(60, 28, 133, 0.85)'

interface ProjectsCardProps {
  className?: string
}

export function ProjectsCard({ className }: ProjectsCardProps) {
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
        {PROJECTS.map((project, i) => {
          const isLone = i === PROJECTS.length - 1 && PROJECTS.length % 2 !== 0
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={cn(isLone && 'col-span-2 flex justify-center')}
            >
              <PortfolioItemCard
                title={project.title}
                image={project.image}
                bgColor={PROJECT_CARD_BG}
                href={project.href}
                className={cn(isLone && 'w-[calc(50%-10px)]')}
              />
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
