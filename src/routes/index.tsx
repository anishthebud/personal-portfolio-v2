import { createFileRoute } from '@tanstack/react-router'
import { motion } from "motion/react"

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <motion.ul animate={{ rotate: 360 }} />
    </div>
  )
}
