import type React from "react"
export function SectionContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 ${className}`}>{children}</div>
}
