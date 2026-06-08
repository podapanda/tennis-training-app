import { Link, useLocation } from 'react-router-dom'

const tabs = [
  { to: '/', label: 'Today', icon: '🎾' },
  { to: '/week', label: 'Week', icon: '📅' },
  { to: '/footwork', label: 'Footwork', icon: '👟' },
  { to: '/stats', label: 'Stats', icon: '📊' },
]

export function BottomNav() {
  const location = useLocation()

  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      {tabs.map((tab) => {
        const active = location.pathname === tab.to
        return (
          <Link key={tab.to} to={tab.to} className={`nav-tab ${active ? 'active' : ''}`}>
            <span className="nav-icon" aria-hidden>{tab.icon}</span>
            <span className="nav-label">{tab.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
