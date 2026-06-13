import { Reveal, ArrowIcon, MailIcon } from '../lib'
import { PROFILE, STATS } from '../data/content'
import Schematic from './Schematic'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <span className="eyebrow">
          <span className="pulse" /> Full-stack .NET · <b>AI integration</b>
        </span>

        <h1 className="hero-title">
          Full-Stack Developer <span className="amber">Jay Savaliya</span> — building .NET apps with <span className="sig">AI</span> built in.
        </h1>

        <p className="hero-sub">
          Full-stack developer with 3+ years shipping booking, billing and invoicing systems in{' '}
          <strong>C#, .NET Core and React</strong> — and one thing most backend engineers at my level
          can&apos;t claim: real production experience integrating{' '}
          <strong>OpenAI, Claude and MCP servers</strong> into live workflows.
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            View selected work <ArrowIcon />
          </a>
          <a href={`mailto:${PROFILE.email}`} className="btn btn-ghost">
            Get in touch <MailIcon />
          </a>
        </div>

        <Schematic />

        <Reveal className="stats">
          {STATS.map((s) => (
            <div className="stat" key={s.l}>
              <div className="n">
                {s.n}
                <span className="amber">{s.suffix}</span>
              </div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
