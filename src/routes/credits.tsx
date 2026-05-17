import { createFileRoute } from '@tanstack/react-router'
import { CreditsCard } from '@/components/CreditsCard'

export const Route = createFileRoute('/credits')({
  component: Credits,
})

function Credits() {
  return (
    <div className="page-wrap flex justify-center py-16">
      <CreditsCard className="w-full max-w-3xl" />
    </div>
  )
}
