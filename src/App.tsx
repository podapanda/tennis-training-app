import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { FootworkPage } from './pages/FootworkPage'
import { SessionPage } from './pages/SessionPage'
import { StatsPage } from './pages/StatsPage'
import { TodayPage } from './pages/TodayPage'
import { WeekPage } from './pages/WeekPage'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<TodayPage />} />
          <Route path="/week" element={<WeekPage />} />
          <Route path="/session/:sessionId" element={<SessionPage />} />
          <Route path="/footwork" element={<FootworkPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
