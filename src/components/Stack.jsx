import { Reveal } from '../lib'
import { STACK } from '../data/content'
import { SectionHead } from './Work'

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <SectionHead
          num="02"
          title="The stack"
          desc="Deep where it counts — backend, data and React — and genuinely hands-on where it's rare: the AI layer."
        />
        <div className="stack-grid">
          {STACK.map((col) => (
            <Reveal className={`scol${col.signal ? ' signal' : ''}`} key={col.h}>
              <h4>
                <span className="b" /> {col.h}
              </h4>
              <ul>
                {col.items.map(([name, note]) => (
                  <li key={name}>
                    {name}
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
