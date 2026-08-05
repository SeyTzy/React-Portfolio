import { ThemeProvider } from '@/context/ThemeContext'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LoadingScreen } from '@/components/layout/LoadingScreen'
import { CursorGlow } from '@/components/effects/CursorGlow'
import { BackgroundBlobs } from '@/components/effects/BackgroundBlobs'
import { ScrollProgress } from '@/components/effects/ScrollProgress'
import { BackToTop } from '@/components/effects/BackToTop'
import { Home } from '@/pages/Home'

function App() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <div className="noise-overlay" aria-hidden="true" />
      <BackgroundBlobs />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <Home />
      <Footer />
      <BackToTop />
    </ThemeProvider>
  )
}

export default App
