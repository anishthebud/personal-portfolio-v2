import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { PortfolioItemCard } from '@/components/PortfolioItemCard'
import { DetailCard } from '@/components/DetailCard'

interface ProjectItem {
  title: string
  image: string
  projectUrl?: string
  href: string
  description: string
  skills: string[]
}

const PROJECTS: ProjectItem[] = [
  {
    title: 'Personal Portfolio v2',
    image: '/images/placeholder.png',
    projectUrl: 'https://github.com/anishthebud/personal-portfolio-v2',
    href: 'https://github.com/anishthebud/personal-portfolio-v2',
    description:
      'Personal portfolio website built with TanStack Start and React. Features a dark cinematic aesthetic with an animated background video, a split-panel nav layout, and smooth Motion-powered transitions. Designed in Figma and implemented with Claude Code agents that converted Figma frames directly into production React components.',
    skills: ['TanStack Start', 'React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Shadcn UI', 'Vite', 'Nitro', 'Vercel', 'Figma', 'Claude Code', 'Multi-Agent Workflow'],
  },
  {
    title: 'Content Creation Manager',
    image: '/images/projects/content_creation_manager.png',
    href: 'https://github.com/anishthebud/content-creation-manager',
    description:
      'Full-stack desktop application for managing video content production pipeline with comprehensive workflow including pre-production, production, post-poroduction and distribution.',
    skills: ['Electron', 'React', 'JavaScript', 'MongoDB', 'Tailwind CSS', 'Vite', 'TanStack Router', 'IPC', 'Cross-Platform'],
  },
  {
    title: 'Steam VG Personality Quiz',
    image: '/images/projects/steam-vg-personality-quiz.jpeg',
    projectUrl: 'https://master.d2pkiqyt9q31d2.amplifyapp.com/',
    href: 'https://github.com/anishthebud/game_recommendation_engine',
    description:
      'Full-stack web application that recommends Steam games from a catalog of over 80,000 titles using cosine-similarity filtering and OpenAI-generated adaptive questions.',
    skills: ['Python', 'FastAPI', 'React', 'scikit-learn', 'OpenAI API', 'AWS', 'Docker', 'CI/CD'],
  },
  {
    title: 'Look At Me',
    image: '/images/projects/look_at_me.png',
    projectUrl: 'https://chromewebstore.google.com/detail/look-at-me/gmdiakgkdgohhfppabhcppmnkcpcgjkm',
    href: 'https://github.com/anishthebud/look-at-me',
    description:
      'Published Chrome extension for task focus and productivity, featuring real-time task tracking across browser sessions with a custom new tab page for easy usability.',
    skills: ['TypeScript', 'React', 'Chrome Extension APIs', 'Service Workers', 'Vite', 'Browser Storage', 'Custom Hooks'],
  },
  {
    title: 'Confido',
    image: '/images/projects/confido.png',
    projectUrl: 'https://confido-xi.vercel.app/',
    href: 'https://github.com/anishthebud/confido',
    description:
      'AI-powered public speaking coach built at a hackathon. Full-stack web app with gamified scoring, an interactive AI avatar, and real-time feedback on confidence and filler words. My focus was on developing the user experience, gamification process, and managing the database.',
    skills: ['SvelteKit', 'TypeScript', 'Supabase', 'LLM Integration', 'Speech-to-Text', 'Text-to-Speech', 'Stable Diffusion', 'Pinata/IPFS'],
  },
  {
    title: 'Traffic Accident Analyzer',
    image: '/images/projects/traffic_accident_analyzer.png',
    projectUrl: 'https://github.gatech.edu/pages/vpatra3/ML-Traffic-Analyzer/',
    href: 'https://github.gatech.edu/vpatra3/ML-Traffic-Analyzer',
    description:
      'Team project focused on building a data analysis and visualization tool for exploring traffic accident patterns. My focus was on developing the data/feature engineering pipeline.',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Data Visualization', 'Machine Learning'],
  },
  {
    title: 'Braille Buddy',
    image: '/images/placeholder.png',
    href: 'https://github.com/anishthebud/brailleBuddy',
    description:
      'Hackathon project focused on building a native Android accessibility app enabling two-way communication between deaf/blind and sighted/hearing users via a custom Braille keyboard and vibration patterns. My focus was on developing the user experience and the frontend for the app.',
    skills: ['Java', 'Android SDK', 'Google Cloud', 'UI/UX Design', 'Speech Recognition', 'Material Design', 'Multi-threading', 'Accessibility'],
  },
  {
    title: 'YouTube-VoiceOver',
    image: '/images/placeholder.png',
    href: 'https://github.com/anishthebud/YouTube-VoiceOver',
    description:
      'Chrome extension paired with a Node.js backend that overlays user-recorded voiceovers onto YouTube videos using FFmpeg composition.',
    skills: ['JavaScript', 'Node.js', 'Express', 'FFmpeg', 'yt-dlp', 'MediaRecorder API', 'REST APIs', 'CORS'],
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
              projectUrl={selected.projectUrl}
              href={selected.href}
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
