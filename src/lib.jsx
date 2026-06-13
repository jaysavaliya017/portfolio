import { useEffect, useRef, useState } from 'react'

/* Polymorphic reveal-on-scroll wrapper. Forwards its ref to the chosen
   element so grid/layout relationships are preserved (no extra wrapper div). */
export function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`${className} reveal${shown ? ' in' : ''}`} {...rest}>
      {children}
    </Tag>
  )
}

/* Tracks which section is in view for the nav underline. */
export function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + offset
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, offset])
  return active
}

/* Renders a content array where items are strings or { strong: '...' }. */
export function RichText({ parts }) {
  return parts.map((p, i) =>
    typeof p === 'string' ? p : <strong key={i}>{p.strong}</strong>
  )
}

/* --- icons --- */
export const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)
export const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 6h16v12H4z" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)
export const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17V10.2H6.1V17h2.24zM7.22 9.24a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6zM18 17v-3.73c0-2-.43-3.5-2.75-3.5a2.4 2.4 0 0 0-2.17 1.2h-.03V10.2H10.9V17h2.24v-3.36c0-.9.17-1.76 1.27-1.76 1.1 0 1.11 1.02 1.11 1.82V17H18z" />
  </svg>
)
