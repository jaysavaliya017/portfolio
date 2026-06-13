import { Reveal } from '../lib'
import { SCHEMATIC, PROFILE } from '../data/content'

export default function Schematic() {
  return (
    <Reveal className="schematic">
      <div className="sc-head">
        <span>system_architecture.map</span>
        <span className="live">
          <span className="pulse" /> integrated · in production
        </span>
      </div>

      <div className="flow">
        <div className="stackcol left">
          <div className="col-label">Backend &amp; data</div>
          {SCHEMATIC.backend.map((t) => (
            <div className="chip" key={t}>
              <span className="led" /> {t}
            </div>
          ))}
        </div>

        <div className="hub-wrap">
          <div className="wire l">
            <span className="spark" />
          </div>
          <div className="hub">
            <span className="who">{PROFILE.initials}</span>
            <span className="role">
              integration
              <br />
              layer
            </span>
          </div>
          <div className="wire r">
            <span className="spark" />
          </div>
        </div>

        <div className="stackcol right">
          <div className="col-label">AI &amp; LLM</div>
          {SCHEMATIC.ai.map((t) => (
            <div className="chip" key={t}>
              <span className="led" /> {t}
            </div>
          ))}
        </div>
      </div>

      <p className="sc-caption">
        The interesting work lives in the middle — <b>connecting deterministic systems to probabilistic
        models</b> so AI features ship reliably inside real applications, not demos.
      </p>
    </Reveal>
  )
}
