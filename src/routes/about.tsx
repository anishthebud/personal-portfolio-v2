import { createFileRoute } from '@tanstack/react-router'
import { AboutCard } from '@/components/AboutCard'

export const Route = createFileRoute('/about')({ component: AboutPage })

function AboutPage() {
  return (
    <div className="page-wrap flex justify-center py-16">
      <AboutCard className="w-full max-w-[798px]" />
    </div>
  )
}
