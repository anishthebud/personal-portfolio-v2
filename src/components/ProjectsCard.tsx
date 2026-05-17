import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { PortfolioItemCard } from '@/components/PortfolioItemCard'
import { DetailCard } from '@/components/DetailCard'

interface ProjectItem {
  title: string
  image: string
  href: string
  description: string
  skills: string[]
}

const PROJECTS: ProjectItem[] = [
  {
    title: 'Content Creation Manager',
    image: '/images/projects/content_creation_manager.png',
    href: 'https://github.com/anishthebud',
    description:
      'Electron desktop application for managing video content production pipelines with end-to-end pre-production, production, and distribution workflows.',
    skills: ['Electron', 'React', 'JavaScript', 'MongoDB', 'Tailwind CSS', 'Vite', 'TanStack Router', 'IPC', 'Cross-Platform'],
  },
  {
    title: 'Steam Game Recommender',
    image: '/images/projects/steam-vg-personality-quiz.jpeg',
    href: 'https://github.com/anishthebud',
    description:
      'Full-stack ML quiz that recommends Steam games from a catalog of over 80,000 titles using cosine-similarity filtering and OpenAI-generated adaptive questions.',
    skills: ['Python', 'FastAPI', 'React', 'scikit-learn', 'OpenAI API', 'AWS', 'Docker', 'CI/CD'],
  },
  {
    title: 'Look At Me',
    image: '/images/projects/look_at_me.png',
    href: 'https://github.com/anishthebud',
    description:
      'Published Chrome extension for task focus and productivity, featuring real-time task tracking across browser sessions with a custom new-tab override page.',
    skills: ['TypeScript', 'React', 'Chrome Extension APIs', 'Service Workers', 'Vite', 'Browser Storage', 'Custom Hooks'],
  },
  {
    title: 'YouTube-VoiceOver',
    image: '/images/placeholder.png',
    href: 'https://github.com/anishthebud',
    description:
      'Chrome extension paired with a Node.js backend that overlays user-recorded voiceovers onto YouTube videos using FFmpeg compositing.',
    skills: ['JavaScript', 'Node.js', 'Express', 'FFmpeg', 'yt-dlp', 'MediaRecorder API', 'REST APIs', 'CORS'],
  },
  {
    title: 'Traffic Accident Analyzer',
    image: '/images/projects/traffic_accident_analyzer.png',
    href: 'https://github.com/anishthebud',
    description:
      'Data analysis and visualization tool for exploring traffic accident patterns, producing interactive charts and county-level geospatial maps.',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Data Visualization', 'Geospatial Mapping', 'Machine Learning'],
  },
  {
    title: 'Braille Buddy',
    image: '/images/placeholder.png',
    href: 'https://github.com/anishthebud',
    description:
      'Native Android accessibility app enabling two-way communication between deaf/blind and sighted/hearing users via a custom Braille keyboard and vibration patterns.',
    skills: ['Java', 'Android SDK', 'Google Cloud', 'Speech Recognition', 'Material Design', 'Multi-threading', 'Accessibility'],
  },
  {
    title: 'Confido',
    image: '/images/projects/confido.png',
    href: 'https://github.com/anishthebud',
    description:
      'AI-powered public speaking coach built at a hackathon. Full-stack web app with gamified scoring, an interactive AI avatar, and real-time feedback on confidence and filler words.',
    skills: ['SvelteKit', 'TypeScript', 'Supabase', 'LLM Integration', 'Speech-to-Text', 'Text-to-Speech', 'Stable Diffusion', 'Pinata/IPFS'],
  },
]

const PROJECT_CARD_BG = 'rgba(60, 28, 133, 0.85)'

interface ProjectsCardProps {
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

export function ProjectsCard({ className }: ProjectsCardProps) {
  const [selected, setSelected] = useState<ProjectItem | null>(null)

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
                      className={cn(isLone && 'w-[calc(50%-10px)]')}
                      onClick={() => setSelected(project)}
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
