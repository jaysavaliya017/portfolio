import { Reveal, RichText } from '../lib'
import { PROJECTS } from '../data/content'

function SectionHead({ num, title, desc }) {
  return (
    <Reveal className="sec-head">
      <span className="sec-num">{num}</span>
      <h2 className="sec-title">{title}</h2>
      <p className="sec-desc">{desc}</p>
    </Reveal>
  )
}

function ProjectCard({ p }) {
  const cls = ['card', p.feature && 'feature', p.ai && 'ai'].filter(Boolean).join(' ')
  return (
    <Reveal as="article" className={cls}>
      <span className="tag">
        {p.ai ? <span className="pulse" /> : <span className="led" />} {p.tag}
      </span>
      <h3>{p.title}</h3>
      <p>
        <RichText parts={p.body} />
      </p>

      {p.metrics && (
        <div className="metrics">
          {p.metrics.map((m) => (
            <div className="m" key={m.k}>
              <div className="v">{m.amber ? <span className="amber">{m.v}</span> : m.v}</div>
              <div className="k">{m.k}</div>
            </div>
          ))}
        </div>
      )}

      <div className="stack-row">
        {p.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </Reveal>
  )
}

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <SectionHead
          num="01"
          title="Selected work"
          desc="A few systems I've designed, built and kept running — from AI integration down to invoicing and frontend performance."
        />
        <div className="work-grid">
          {PROJECTS.map((p) => (
            <ProjectCard p={p} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { SectionHead }
