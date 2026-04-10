import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">Contact Me</h2>
        <div className="row">
          <div className="col-sm-4 mt-4">
            <a href="mailto:tomasfernandezvaldes@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> tomasfernandezvaldes@gmail.com
            </a>
          </div>
          <div className="col-sm-4 mt-4">
            <div className="social-media">
              <a href="https://www.linkedin.com/in/tomasferval/?locale=en_US" target="_blank" rel="noopener noreferrer">
                <i><FontAwesomeIcon icon={faLinkedin} /></i>
              </a>
              <a href="https://github.com/tomasfv" target="_blank" rel="noopener noreferrer">
                <i><FontAwesomeIcon icon={faGithub} /></i>
              </a>
            </div>
          </div>
          <div className="col-sm-4 mt-4">
            <a href="https://wa.me/5493517619943" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} /> +(54) 9 351 7619943
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
