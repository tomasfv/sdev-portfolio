
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faGear, faGamepad, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import avatar from '../assets/avatar.svg';
import taitikoImg from '../assets/ttk2.webp';
import apoceusImg from '../assets/apoceus3.jpg';
import riftZoneImg from '../assets/RiftZone2.jpg';
// import zombieImg from '../assets/zombie1.jpg';
// import doozyImg from '../assets/doozy1.jfif';
// import survivalImg from '../assets/Survival5.jpg';
import getbackImg from '../assets/getback.jfif';
import farmaciaImg from '../assets/farmacia4.jpg';
import sportsImg from '../assets/KustomsSports.jpg';
import travelImg from '../assets/travel.jpg';
import uj1 from '../assets/UJ1.jpg';
import microlabImg from '../assets/microlab2.jpg';




export default function LandingPage(){

var unityLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg';
var cSharpLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg';
var javascriptLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
var typescriptLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg';
var reactLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';
var reduxLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg';
var nodeLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg';
var postgreLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg';
var sequelizeLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg';
var htmlLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg';
var cssLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg';
var bootstrapLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg';
var expressLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg';
var electronLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg';
var materialUiLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg';
var tailwindLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg';

var smallLogo = {height:'30px', width:'30px', marginRight: '4px'};
var bigLogo = {height:'200px', width:'200px'};



return (
<>
    

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
                <img src={avatar} className="img-fluid" alt="avatar"/>
            </div>
        </div>
    </div>
</section>

<section className="services" id="services">
    <div className="container">
        <h2 className="display-5 fw-bold mb-4">What I Do </h2>
        <div className="row">
            <div className="col-lg col-sm-6 mt-4">
                <div className="card">
                    <i className=""><FontAwesomeIcon icon={faLaptopCode}/></i>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Frontend Development</h5>
                        <p className="card-text">React, TypeScript, JavaScript, HTML, CSS, React Query, Redux, Electron, Material UI, Tailwind, Bootstrap.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg col-sm-6 mt-4">
                <div className="card">
                    <i className=""><FontAwesomeIcon icon={faGear}/></i>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Backend, APIs & Deployment</h5>
                        <p className="card-text">Node.js, Express.js, PostgreSQL, REST APIs, Sequelize, Netlify, Railway, Cloud Deployment.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg col-sm-6 mt-4">
                <div className="card">
                    <i className=""><FontAwesomeIcon icon={faGamepad}/></i>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Game Development (Additional Background)</h5>
                        <p className="card-text">Unity3D, C#, AI Navigation, ML-Agents, Netcode, UnityWebRequest.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="about" id="about">
    <div className="container">
        <h2 className="display-5 fw-bold mb-4">About Me</h2>
        <p>
            My name is Tomás Fernández Valdés, a Frontend Software Engineer with C1-Advanced English level and experience developing scalable web and desktop applications using React, TypeScript, JavaScript, Node.js, and PostgreSQL.
            Experienced in user interface development, REST API integration, and building maintainable frontend architectures with strong focus on performance and usability. I have worked on production applications, Electron-based desktop systems, and SaaS platforms within international agile teams.
        </p>
        <p> 
            I also have a background in game development using Unity and C#, which helped me develop strong problem-solving skills and a solid understanding of software architecture.
            Passionate about technology and continuous learning, I enjoy working on innovative projects that deliver high-quality user experiences.
        </p>
    </div>
</section>

<section className="projects" id="projects">
    <div className="container">
        <h2 className="display-5 fw-bold mb-4">My Work</h2>
        <div className="row">
        
        <div className="row mt-4">
        <h1 className="fw-bold mt-4">Frontend & Web Applications</h1>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card" style={{maxHeight:'507px', minHeight: '506px'}}>
                    <img src={uj1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <img src={typescriptLogo} alt="..." style={smallLogo}/>
                        <img src={htmlLogo} alt="..." style={smallLogo}/>
                        <img src={cssLogo} alt="..." style={smallLogo}/>
                        <img src={reactLogo} alt="..." style={smallLogo}/>
                        <img src={materialUiLogo} alt="..." style={smallLogo}/>
                        <img src={electronLogo} alt="..." style={smallLogo}/>
                        <img src={reduxLogo} alt="..." style={smallLogo}/>
                        <h5 className="card-title fw-bold" style={{marginTop: '40px'}}>Universo Tickets</h5>
                        <p className="card-text">Desktop App</p>
                        <p className="card-text">Frontend Developer</p>
                        <p className="card-text fw-bold" style={{color: '#53b14a'}}>Full-time Contract</p>
                        <Link to='/project/11' className="btn btn-outline-dark">
                        More information
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card" style={{maxHeight:'507px', minHeight: '506px'}}>
                    <img src={getbackImg} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <img src={javascriptLogo} alt="..." style={smallLogo}/>
                        <img src={typescriptLogo} alt="..." style={smallLogo}/>
                        <img src={htmlLogo} alt="..." style={smallLogo}/>
                        <img src={cssLogo} alt="..." style={smallLogo}/>
                        <img src={reactLogo} alt="..." style={smallLogo}/>
                        <img src={reduxLogo} alt="..." style={smallLogo}/>
                        <img src={nodeLogo} alt="..." style={smallLogo}/>
                        <img src={expressLogo} alt="..." style={smallLogo}/>
                        <img src={postgreLogo} alt="..." style={smallLogo}/>
                        <img src={sequelizeLogo} alt="..." style={smallLogo}/>
                        <h5 className="card-title fw-bold">Getback</h5>
                        <p className="card-text">Logistics Software</p>
                        <p className="card-text">Full Stack Web Developer</p>
                        <p className="card-text fw-bold" style={{color: '#53b14a'}}>Full-time Contract</p>
                        <Link to='/project/7' className="btn btn-outline-dark">
                        More information
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card" style={{maxHeight:'507px', minHeight: '506px'}}>
                    <img src={farmaciaImg} className="card-img-top" alt="..." style={{height:'165px'}}/>
                    <div className="card-body">
                        <img src={javascriptLogo} alt="..." style={smallLogo}/>
                        <img src={htmlLogo} alt="..." style={smallLogo}/>
                        <img src={cssLogo} alt="..." style={smallLogo}/>
                        <img src={reactLogo} alt="..." style={smallLogo}/>
                        <img src={bootstrapLogo} alt="..." style={smallLogo}/>
                        <img src={reduxLogo} alt="..." style={smallLogo}/>
                        <img src={nodeLogo} alt="..." style={smallLogo}/>
                        <img src={expressLogo} alt="..." style={smallLogo}/>
                        <img src={postgreLogo} alt="..." style={smallLogo}/>
                        <img src={sequelizeLogo} alt="..." style={smallLogo}/>
                        <h5 className="card-title fw-bold">Farmacia Alto Palermo</h5>
                        <p className="card-text">Pharmacy Admin App</p>
                        <p className="card-text">Full Stack Web Developer</p>
                        <p className="card-text fw-bold" style={{color: '#53b14a'}}>Freelance Contract</p>
                        <Link to='/project/8' className="btn btn-outline-dark">
                        More information
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card" style={{maxHeight:'507px', minHeight: '506px'}}>
                    <img src={microlabImg} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <img src={javascriptLogo} alt="..." style={smallLogo}/>
                        <img src={htmlLogo} alt="..." style={smallLogo}/>
                        <img src={cssLogo} alt="..." style={smallLogo}/>
                        <img src={reactLogo} alt="..." style={smallLogo}/>
                        <h5 className="card-title fw-bold" style={{marginTop: '40px'}}>Microlab</h5>
                        <p className="card-text">Frontend showcase app</p>
                        <p className="card-text">Frontend Developer</p>
                        <p className="card-text fw-bold" style={{color: '#408BD6'}}>Personal Project</p>
                        <Link to='/project/12' className="btn btn-outline-dark">
                        More information
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card" style={{maxHeight:'507px', minHeight: '506px'}}>
                    <img src={sportsImg} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <img src={javascriptLogo} alt="..." style={smallLogo}/>
                        <img src={htmlLogo} alt="..." style={smallLogo}/>
                        <img src={cssLogo} alt="..." style={smallLogo}/>
                        <img src={reactLogo} alt="..." style={smallLogo}/>
                        <img src={tailwindLogo} alt="..." style={smallLogo}/>
                        <img src={reduxLogo} alt="..." style={smallLogo}/>
                        <h5 className="card-title fw-bold" style={{marginTop: '40px'}}>Kustoms Sports</h5>
                        <p className="card-text">e-commerce</p>
                        <p className="card-text">Frontend Developer</p>
                        <p className="card-text fw-bold" style={{color: '#F79D4F'}}>Academic Team Project</p>
                        <Link to='/project/9' className="btn btn-outline-dark">
                        More information
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4" style={{marginBottom: '30px'}}>
                <div className="card" style={{maxHeight:'507px', minHeight: '506px'}}>
                    <img src={travelImg} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <img src={javascriptLogo} alt="..." style={smallLogo}/>
                        <img src={htmlLogo} alt="..." style={smallLogo}/>
                        <img src={cssLogo} alt="..." style={smallLogo}/>
                        <img src={reactLogo} alt="..." style={smallLogo}/>
                        <img src={reduxLogo} alt="..." style={smallLogo}/>
                        <h5 className="card-title fw-bold" style={{marginTop: '40px'}}>Travel Website</h5>
                        <p className="card-text">Landing page</p>
                        <p className="card-text">Frontend Developer</p>
                        <p className="card-text fw-bold" style={{color: '#408BD6'}}>Personal Project</p>
                        <Link to='/project/10' className="btn btn-outline-dark">
                        More information
                        </Link> 
                    </div>
                </div>
            </div>

            <h1 className="fw-bold my-4">Game Development Experience</h1>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card">
                    <img src={riftZoneImg} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <img src={unityLogo} alt="..." style={smallLogo}/>
                        <img src={cSharpLogo} alt="..." style={smallLogo}/>
                        <h5 className="card-title fw-bold">Rift Zone: Contact</h5>
                        <p className="card-text">Miniature Wargame App</p>
                        <p className="card-text">Game Programmer</p>
                        <p className="card-text fw-bold" style={{color: '#53b14a'}}>Full-time Contract</p>
                        <Link to='/project/6' className="btn btn-outline-dark">
                        More information
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card">
                    <img src={taitikoImg} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <img src={unityLogo} alt="..." style={smallLogo}/>
                        <img src={cSharpLogo} alt="..." style={smallLogo}/>
                        <h5 className="card-title fw-bold">Taitiko - SuperBytes</h5>
                        <p className="card-text">Online Multiplayer Party Game</p>
                        <p className="card-text">Game Programmer</p>
                        <p className="card-text fw-bold" style={{color: '#53b14a'}}>Full-time Contract</p>
                        <Link to='/project/1' className="btn btn-outline-dark">
                            More information
                        </Link>    
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card">
                    <img src={apoceusImg} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <img src={unityLogo} alt="..." style={smallLogo}/>
                        <img src={cSharpLogo} alt="..." style={smallLogo}/>
                        <h5 className="card-title fw-bold">Apoceus - Landell Games</h5>
                        <p className="card-text">Online Multiplayer RTS</p>
                        <p className="card-text">Game Programmer</p>
                        <p className="card-text fw-bold" style={{color: '#53b14a'}}>Part-time Contract</p>
                        <Link to='/project/2' className="btn btn-outline-dark">
                        More information
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>

<section className="testimonials" id="testimonials">
    <div className="container">
        <h2 className="display-5 fw-bold mb-4">Skills</h2>
        <div id="carouselExample" className="carousel slide carousel-dark carousel-fade">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <h5>React</h5>
                    <img src={reactLogo} alt="..." style={bigLogo}/>
                </div>
                <div className="carousel-item">
                    <h5>Redux</h5>
                    <img src={reduxLogo} alt="..." style={bigLogo}/>
                </div>
                <div className="carousel-item">
                    <h5>Electron</h5>
                    <img src={electronLogo} alt="..." style={bigLogo}/>
                </div>
                <div className="carousel-item">
                    <h5>Javascript</h5>
                    <img src={javascriptLogo} alt="..." style={bigLogo}/>
                </div>
                <div className="carousel-item">
                    <h5>TypeScript</h5>
                    <img src={typescriptLogo} alt="..." style={bigLogo}/>
                </div>
                <div className="carousel-item">
                    <h5>HTML</h5>
                    <img src={htmlLogo} alt="..." style={bigLogo}/>
                </div>
                <div className="carousel-item">
                    <h5>CSS</h5>
                    <img src={cssLogo} alt="..." style={bigLogo}/>
                </div>
                <div className="carousel-item">
                    <h5>Material UI</h5>
                    <img src={materialUiLogo} alt="..." style={bigLogo}/>
                </div>
                <div className="carousel-item">
                    <h5>Tailwind CSS</h5>
                    <img src={tailwindLogo} alt="..." style={bigLogo}/>
                </div>
                <div className="carousel-item">
                    <h5>Bootstrap</h5>
                    <img src={bootstrapLogo} alt="..." style={bigLogo}/>
                </div>
                <div className="carousel-item">
                    <h5>Node.js</h5>
                    <img src={nodeLogo} alt="..." style={bigLogo}/>
                </div>
                <div className="carousel-item">
                    <h5>Express.js</h5>
                    <img src={expressLogo} alt="..." style={bigLogo}/>
                </div>
                <div className="carousel-item">
                    <h5>PostgreSQL</h5>
                    <img src={postgreLogo} alt="..." style={bigLogo}/>
                </div>
                <div className="carousel-item">
                    <h5>Sequelize</h5>
                    <img src={sequelizeLogo} alt="..." style={bigLogo}/>
                </div>
                <div className="carousel-item">
                    <h5>Unity3D</h5>
                    <img src={unityLogo} alt="..." style={bigLogo}/>
                </div>
                <div className="carousel-item">
                    <h5>C#</h5>
                    <img src={cSharpLogo} alt="..." style={bigLogo}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</section>

<section className="contact" id="contact">
    <div className="container">
        <h2 className="display-5 fw-bold mb-4">Contact Me</h2>
        <div className="row">
            <div className="col-sm-4 mt-4">
                <a href="mailto:tomasfernandezvaldes@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope}/> tomasfernandezvaldes@gmail.com
                </a>
            </div>
            <div className="col-sm-4 mt-4">
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/tomasferval/?locale=en_US">
                        <i className=""><FontAwesomeIcon icon={faLinkedin}/></i>
                    </a>
                    <a href="https://github.com/tomasfv">
                        <i className=""><FontAwesomeIcon icon={faGithub}/></i>
                    </a>
                </div>
            </div>
            <div className="col-sm-4 mt-4">
                <a href="https://wa.me/5493517619943">
                    <FontAwesomeIcon icon={faWhatsapp}/> +(54) 9 351 7619943
                </a>
            </div>
        </div>
    </div>
</section>

<footer className="text-center p-3 bg-body-tertiary">
    <div>© 2025. All Rights Reserved.</div>
</footer>
</>    
)
}
