import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { PROFILE } from './data/content'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <footer>
        <div className="wrap foot-inner">
          <span>© {new Date().getFullYear()} {PROFILE.name} · {PROFILE.location}</span>
        </div>
      </footer>
    </>
  )
}
