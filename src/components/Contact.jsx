import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import useReveal from '../hooks/useReveal';

function ContactCard({ icon, label, children, href }) {
  const [ref, isVisible] = useReveal(0.1);
  const Wrapper = href ? 'a' : 'div';
  return (
    <div className={`col-sm-4 mt-4 reveal ${isVisible ? 'active' : ''}`} ref={ref}>
      <Wrapper
        href={href}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener noreferrer' : undefined}
        className="contact-card text-decoration-none d-block"
      >
        <div className="contact-card-icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <span className="contact-card-label">{label}</span>
        <div className="contact-card-value">{children}</div>
      </Wrapper>
    </div>
  );
}

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">Contact Me</h2>
        </div>
        <div className="row">
          <ContactCard
            icon={faEnvelope}
            label="Email"
            href="mailto:tomasfernandezvaldes@gmail.com"
          >
            tomasfernandezvaldes@gmail.com
          </ContactCard>

          <ContactCard
            icon={faLinkedin}
            label="Social"
          >
            <div className="contact-social-row">
              <a href="https://www.linkedin.com/in/tomasferval/?locale=en_US" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/tomasfv" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </ContactCard>

          <ContactCard
            icon={faWhatsapp}
            label="WhatsApp"
            href="https://wa.me/5493517619943"
          >
            +(54) 9 351 7619943
          </ContactCard>
        </div>

        <div className="contact-footer">
          <div>© 2025. All Rights Reserved. Created with React and Bootstrap.</div>
        </div>
      </div>
    </section>
  );
}
