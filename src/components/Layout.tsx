import type { ReactNode } from 'react'
import { BottomNav } from './BottomNav'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <main className="app-main">{children}</main>
      <BottomNav />
    </div>
  )
}
