import { useEffect, useState } from 'react'
import { NAV, PROFILE } from '../data/content'
import { useScrollSpy } from '../lib'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(NAV.map((n) => n.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <span className="dot" /> {PROFILE.name}
        </a>

        <nav className={`nav-links${open ? ' open' : ''}`}>
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <a className="nav-cta" href={PROFILE.resume} target="_blank" rel="noopener noreferrer">
            Résumé ↗
          </a>
        </nav>

        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          ≡
        </button>
      </div>
    </header>
  )
}
