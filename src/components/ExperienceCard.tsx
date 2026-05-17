import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { PortfolioItemCard } from '@/components/PortfolioItemCard'
import { DetailCard } from '@/components/DetailCard'

interface ExperienceItem {
  title: string
  image: string
  description: string
  skills: string[]
}

const EXPERIENCES: ExperienceItem[] = [
  {
    title: 'GROWER',
    image: '/images/experiences/grower.png',
    description:
      'Software Engineer that partnered with the Internet Intelligence Lab, researching correlations between power outages and internet outages. Built and maintained Python/Selenium scrapers deployed on AWS.',
    skills: ['Python', 'Pandas', 'Selenium', 'Web Scraping', 'AWS', 'Docker', 'Matplotlib', 'Plotly', 'ETL Pipelines'],
  },
  {
    title: 'Georgia-Pacific',
    image: '/images/experiences/georgia_pacific.png',
    description:
      'Product Fellow focused on redesigning the digital interface for GP PRO dispensers. Applied Agile methods, user research, and competitive analysis, then pitched feasibility and effectiveness to clients.',
    skills: ['UI/UX', 'Product Management', 'Agile Development', 'User Research', 'Competitive Analysis'],
  },
  {
    title: 'HexLabs',
    image: '/images/experiences/hexlabs.png',
    description:
      'Operations Team member supporting logistics for HackGT, the largest hackathon at Georgia Tech. Managed vendor negotiations, co-produced a themed club showcase, and coordinated workshops for 1100+ participants.',
    skills: ['Project Development', 'Communication', 'Logistics', 'Event Management', 'Vendor Negotiation'],
  },
]

const EXPERIENCE_CARD_BG = 'rgba(60, 28, 133, 0.85)'

interface ExperienceCardProps {
  className?: string
}

const gridVariants = {
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
}

const detailVariants = {
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 24 },
}

export function ExperienceCard({ className }: ExperienceCardProps) {
  const [selected, setSelected] = useState<ExperienceItem | null>(null)

  return (
    <div className={cn('w-full', className)}>
      <AnimatePresence mode="wait">
        {selected ? (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 24 }}
            animate={detailVariants.enter}
            exit={detailVariants.exit}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <DetailCard
              title={selected.title}
              image={selected.image}
              description={selected.description}
              skills={selected.skills}
              onBack={() => setSelected(null)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0, x: -24 }}
            animate={gridVariants.enter}
            exit={gridVariants.exit}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              'flex flex-col gap-6 px-10 py-10 overflow-hidden',
              'font-display-portfolio',
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
                      onClick={() => setSelected(exp)}
                    />
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
