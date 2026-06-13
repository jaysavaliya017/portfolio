import { Reveal } from '../lib'
import { EXPERIENCE } from '../data/content'
import { SectionHead } from './Work'

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHead
          num="03"
          title="Experience"
          desc="Contract client engagements and product work, building from internship to full-stack ownership."
        />
        <div className="timeline">
          {EXPERIENCE.map((e) => (
            <Reveal className={`tl-item${e.edu ? ' edu' : ''}`} key={e.role}>
              <div className="tl-top">
                <div>
                  <div className="tl-role">{e.role}</div>
                  <div className={`tl-co${e.edu ? ' edu' : ''}`}>{e.company}</div>
                </div>
                <div className="tl-date">{e.date}</div>
              </div>
              {e.intro && (
                <div className="tl-body">
                  {e.intro}
                  {e.bullets && (
                    <ul>
                      {e.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
