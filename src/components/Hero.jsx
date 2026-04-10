import avatar from '../assets/avatar.svg';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container-lg">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <h1 className="display-5 fw-bold">Tomas Fernandez Valdes</h1>
            <h3>Frontend Software Engineer</h3>
            <a href='#projects'>
              <button className="btn btn-outline-dark btn-lg mt-3">
                Projects
              </button>
            </a>
          </div>
          <div className="col-sm-6 text-center">
            <img src={avatar} className="img-fluid" alt="avatar" />
          </div>
        </div>
      </div>
    </section>
  );
}
