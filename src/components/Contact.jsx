import { Reveal, MailIcon, LinkedInIcon } from '../lib'
import { PROFILE } from '../data/content'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="contact-card">
          <h2>
            Let&apos;s build something that <span className="amber">actually ships</span>.
          </h2>
          <p>
            Open to full-stack .NET and React roles — especially where AI integration is part of the
            brief. Quick to respond.
          </p>
          <div className="contact-links">
            <a className="clink" href={`mailto:${PROFILE.email}`}>
              <MailIcon /> {PROFILE.email}
            </a>
            <a className="clink" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
            <a className="clink mono" href={`tel:${PROFILE.phoneHref}`}>
              {PROFILE.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
