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
    title: 'Bits of Good',
    image: '/images/experiences/bitsOfGood.png',
    description:
      'Software Developer at FOCUS, building Salesforce reporting, dashboards, and list views for a disability equipment manager tracking 20+ items. Developing a backend controller that fetches equipment attributes for advanced analytics, while collaborating with a team of 6 so the code works across iterations and is easy for a non-profit to use.',
    skills: ['Salesforce', 'Object-Oriented Development', 'Dashboards & Reporting', 'Backend Controllers', 'Team Collaboration'],
  },
  {
    title: 'BizFirstAI',
    image: '/images/experiences/bizfirstai.jpeg',
    description:
      'Software Engineer Intern architecting a reusable infrastructure hub for customer deployments. Designed a one-command PowerShell/Bash deployment system cutting deploy time 50%, stood up a full Prometheus/Grafana/Loki/Tempo/Kafka observability stack, and led a multi-tier MinIO storage project while mentoring a fellow intern.',
    skills: ['PowerShell', 'Bash', 'Docker', 'Nginx', 'Prometheus', 'Grafana', 'Loki', 'Tempo', 'Kafka', 'MinIO', 'Deployment Automation', 'Mentorship'],
  },
  {
    title: 'GROWER',
    image: '/images/experiences/grower.png',
    description:
      'Software Engineer in the Georgia Tech Internet Intelligence Lab, establishing power-outage data as a predictive ground truth for internet disruptions. Built Dockerized Python/Selenium scrapers on AWS for 10+ utility sources, produced 20+ graphs and county-level maps, and fixed 5+ scraper failures via CloudWatch. Leading 7 engineers and designing new member onboarding.',
    skills: ['Python', 'Pandas', 'Selenium', 'Web Scraping', 'AWS', 'CloudWatch', 'Docker', 'Matplotlib', 'Plotly', 'ETL Pipelines', 'Team Leadership'],
  },
  {
    title: 'Georgia-Pacific',
    image: '/images/experiences/georgia_pacific.png',
    description:
      'Product Fellow redesigning the digital experience for GP PRO dispensers. Designed and pitched an AR solution projected to cut installation and maintenance time by 25%, modeled feasibility costs, and ran SWOT analysis across 4+ competitors to choose the highest-value UI/UX features.',
    skills: ['UI/UX', 'Product Management', 'Augmented Reality', 'SWOT Analysis', 'User Research', 'Cost Modeling'],
  },
  {
    title: 'HexLabs',
    image: '/images/experiences/hexlabs.png',
    description:
      'Operations Team member supporting logistics for HackGT, the largest hackathon at Georgia Tech. Negotiated badge vendor costs down 35% ($2,000 to $1,300), co-produced a themed club showcase, and coordinated workshops for 1,100+ participants.',
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
