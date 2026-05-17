import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { SkillAreaCard } from '@/components/SkillAreaCard'
import { SkillTreeView } from '@/components/SkillTreeView'

const SHANGHAI_IMG = '/images/skills/shanghai.jpg'

interface SkillArea {
  label: string
  title: string
  image: string
  categories: { label: string; skills: string[] }[]
}

const SKILL_AREAS: SkillArea[] = [
  {
    label: 'Full-Stack Development',
    title: 'Full-Stack Development',
    image: SHANGHAI_IMG,
    categories: [
      {
        label: 'Languages',
        skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'SQL', 'HTML', 'CSS'],
      },
      {
        label: 'Frontend',
        skills: ['React', 'SvelteKit', 'Tailwind CSS', 'Vite', 'TanStack Router', 'Component Architecture', 'State Management', 'Custom Hooks', 'UI/UX Design'],
      },
      {
        label: 'Backend',
        skills: ['FastAPI', 'Node.js', 'Express', 'REST APIs', 'Authentication', 'CRUD Operations'],
      },
      {
        label: 'Databases',
        skills: ['MongoDB', 'Supabase', 'PostgreSQL', 'Browser Storage'],
      },
      {
        label: 'Cloud & DevOps',
        skills: ['AWS', 'Docker', 'CI/CD', 'GitHub Actions', 'Google Cloud'],
      },
      {
        label: 'Mobile & Desktop',
        skills: ['Electron', 'Android SDK', 'Material Design', 'Desktop Application Development'],
      },
      {
        label: 'Browser & Extensions',
        skills: ['Chrome Extension APIs', 'Service Workers', 'MediaRecorder API', 'Chrome Web Store', 'Manifest V3'],
      },
      {
        label: 'Media & Tools',
        skills: ['FFmpeg', 'yt-dlp', 'Media Processing', 'Git'],
      },
    ],
  },
  {
    label: 'Machine Learning',
    title: 'Machine Learning',
    image: SHANGHAI_IMG,
    categories: [
      {
        label: 'Core ML',
        skills: ['scikit-learn', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Cosine Similarity', 'NLP', 'Predictive Modeling'],
      },
      {
        label: 'AI & LLM',
        skills: ['OpenAI API', 'Claude API', 'LLM Integration', 'Prompt Engineering'],
      },
      {
        label: 'Speech & Vision',
        skills: ['Speech-to-Text', 'Text-to-Speech', 'Stable Diffusion'],
      },
      {
        label: 'Data & Analytics',
        skills: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Data Visualization', 'Geospatial Mapping'],
      },
      {
        label: 'Data Collection',
        skills: ['Web Scraping', 'Selenium', 'ETL Pipelines'],
      },
    ],
  },
  {
    label: 'Product Management',
    title: 'Product Management',
    image: SHANGHAI_IMG,
    categories: [
      {
        label: 'Methodology',
        skills: ['Agile Development', 'User Research', 'Competitive Analysis'],
      },
      {
        label: 'Design',
        skills: ['UI/UX Design', 'Accessibility Engineering', 'Gamification'],
      },
      {
        label: 'Communication',
        skills: ['Stakeholder Presentations', 'Feasibility Analysis', 'Cross-Functional Collaboration'],
      },
      {
        label: 'Delivery',
        skills: ['Project Development', 'Logistics', 'Event Management', 'Vendor Negotiation'],
      },
    ],
  },
]

interface SkillsCardProps {
  className?: string
}

export function SkillsCard({ className }: SkillsCardProps) {
  const [selected, setSelected] = useState<SkillArea | null>(null)

  return (
    <div className={cn('w-full', className)}>
      <AnimatePresence mode="wait">
        {selected ? (
          <motion.div
            key="tree"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <SkillTreeView
              title={selected.title}
              categories={selected.categories}
              onBack={() => setSelected(null)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="areas"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-row justify-center gap-6 px-4 py-4"
          >
            {SKILL_AREAS.map((area, i) => (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <SkillAreaCard
                  label={area.label}
                  image={area.image}
                  onClick={() => setSelected(area)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
