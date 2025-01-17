
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faGear, faGamepad, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import avatar from '../assets/avatar.svg';
import taitikoImg from '../assets/ttk2.webp';
import apoceusImg from '../assets/apoceus3.jpg';
import zombieImg from '../assets/zombie1.jpg';
import balloonImg from '../assets/balloon1.jpg';
import doozyImg from '../assets/doozy1.jfif';
import survivalImg from '../assets/survival1.jpg';
import getbackImg from '../assets/getback.jfif';
import farmaciaImg from '../assets/farmacia4.jpg';
import sportsImg from '../assets/KustomsSports.jpg';
import travelImg from '../assets/travel.jpg';
import watchImg from '../assets/TSStopWatch.jpg';
import todoImg from '../assets/todo2.jpeg';

export default function LandingPage(){

var unityLogo = 'https://i.redd.it/tu3gt6ysfxq71.png';
var cSharpLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png';
var javascriptLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png';
var typescriptLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png';
var reactLogo = 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png';
var reduxLogo = 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png';
var nodeLogo = 'https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png';
var postgreLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png';
var sequelizeLogo = 'https://cdn.icon-icons.com/icons2/2415/PNG/512/sequelize_original_logo_icon_146348.png';
var htmlLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png';
var cssLogo = 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg';
var bootstrapLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png';
var expressLogo = 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png';



return (
<>
    

<section className="hero" id="hero">
    <div className="container-lg">
        <div className="row align-items-center">
            <div className="col-sm-6">
                <h1 className="display-5 fw-bold">Tomas Fernandez Valdes</h1>
                <h3>Software Developer</h3>
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
                        <p className="card-text">Javascript, HTML, CSS, React, Redux, and Bootstrap.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg col-sm-6 mt-4">
                <div className="card">
                    <i className=""><FontAwesomeIcon icon={faGear}/></i>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Backend Development</h5>
                        <p className="card-text">Node.Js, Express.Js, PostgreSQL, Sequelize, and TypeScript.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg col-sm-6 mt-4">
                <div className="card">
                    <i className=""><FontAwesomeIcon icon={faGamepad}/></i>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Video Game Development</h5>
                        <p className="card-text">Unity 3D, C#, AI Navigation, ML-Agents, Netcode and UnityWebRequests.</p>
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
            My name is Tomás Fernández Valdés. I am a Software Developer with C1-Advanced English level 
            and experience in Web and Games Development, using technologies such as Unity 3D, C#, Javascript, 
            React, Node.Js, and PostgreSQL among other fascinating technologies for software development. 
            I also have experience working with agile methodologies such as Scrum.
        </p>
        <p> My strongest motivation is to be part of innovative projects that leave a pleasant user experience, 
            and above all, to continue contributing and learning more about this great technology industry. 
            I describe myself as passionate about technology, proactive, with a great learning capacity, 
            and with strong teamwork skills.
            Thank you for taking the time to review my profile.
        </p>
    </div>
</section>

<section className="projects" id="projects">
    <div className="container">
        <h2 className="display-5 fw-bold mb-4">My Work</h2>
        <div className="row">
        <h1 className="fw-bold mb-4">Video Games</h1>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card">
                    <img src={taitikoImg} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <img src={unityLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={cSharpLogo} alt="..." style={{height:'30px', width:'30px'}}/>
                        <h5 className="card-title fw-bold">Taitiko - SuperBytes</h5>
                        <p className="card-text">Online Multiplayer Party Game.</p>
                        <p className="card-text">Game Programmer (Full-time Contract).</p>
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
                        <img src={unityLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={cSharpLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={'https://cdn.startbase.com/images/company/photon-engine/6c0db653d1/'} alt="..." style={{height:'30px', width:'30px'}}/>
                        <h5 className="card-title fw-bold">Apoceus - Landell Games</h5>
                        <p className="card-text">Online Multiplayer RTS.</p>
                        <p className="card-text">Game Programmer (Part-time Contract).</p>
                        <Link to='/project/2' className="btn btn-outline-dark">
                            Go somewhere
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card">
                    <img src={zombieImg} className="card-img-top" alt="..." style={{height:'132px'}}/>
                    <div className="card-body">
                        <img src={unityLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={cSharpLogo} alt="..." style={{height:'30px', width:'30px'}}/>
                        <h5 className="card-title fw-bold">Zombie Shooter</h5>
                        <p className="card-text">Top down shoot em up.</p>
                        <p className="card-text">Game Developer/Designer (Personal Project).</p>
                        <Link to='/project/3' className="btn btn-outline-dark">
                            Go somewhere
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card">
                    <img src={survivalImg} className="card-img-top" alt="..." style={{height:'135px'}}/>
                    <div className="card-body">
                        <img src={unityLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={cSharpLogo} alt="..." style={{height:'30px', width:'30px'}}/>
                        <h5 className="card-title fw-bold">Survival Nightmare</h5>
                        <p className="card-text">Action Third Person Shooter.</p>
                        <p className="card-text">Game Developer (Personal Project).</p>
                        <Link to='/project/4' className="btn btn-outline-dark">
                            Go somewhere
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card">
                    <img src={doozyImg} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <img src={unityLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={cSharpLogo} alt="..." style={{height:'30px', width:'30px'}}/>
                        <h5 className="card-title fw-bold">Doozys World</h5>
                        <p className="card-text">Adventure Game.</p>
                        <p className="card-text">Game Developer (Personal Project).</p>
                        <Link to='/project/5' className="btn btn-outline-dark">
                            Go somewhere
                        </Link>                       
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card">
                    <img src={balloonImg} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <img src={unityLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={cSharpLogo} alt="..." style={{height:'30px', width:'30px'}}/>
                        <h5 className="card-title fw-bold">Balloon Journey</h5>
                        <p className="card-text">Android Arcade Game.</p>
                        <p className="card-text">Game Developer (Personal Project).</p>
                        <Link to='/project/6' className="btn btn-outline-dark">
                            Go somewhere
                        </Link> 
                    </div>
                </div>
            </div>
        <div className="row mt-4">
        <h1 className="fw-bold mt-4">Web Development</h1>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card">
                    <img src={getbackImg} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <img src={javascriptLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={typescriptLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={htmlLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={cssLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={reactLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={reduxLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={nodeLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={expressLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={postgreLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={sequelizeLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <h5 className="card-title fw-bold">Getback</h5>
                        <p className="card-text">Logistics Software.</p>
                        <p className="card-text">Full Stack Web Developer (Full-time Contract).</p>
                        <Link to='/project/7' className="btn btn-outline-dark">
                            Go somewhere
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card">
                    <img src={farmaciaImg} className="card-img-top" alt="..." style={{height:'165px'}}/>
                    <div className="card-body">
                        <img src={javascriptLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={htmlLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={cssLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={bootstrapLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={reactLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={reduxLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={nodeLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={expressLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={postgreLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={sequelizeLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <h5 className="card-title fw-bold">Farmacia Alto Palermo</h5>
                        <p className="card-text">Pharmacy Admin App.</p>
                        <p className="card-text">Full Stack Web Developer (Freelance Contract).</p>
                        <Link to='/project/8' className="btn btn-outline-dark">
                            Go somewhere
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card">
                    <img src={sportsImg} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <img src={javascriptLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={htmlLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={cssLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={reactLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={reduxLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                    
                        <h5 className="card-title fw-bold" style={{marginTop: '40px'}}>Kustoms Sports</h5>
                        <p className="card-text">Academic Team Project.</p>
                        <p className="card-text">Frontend Developer.</p>
                        <Link to='/project/9' className="btn btn-outline-dark" style={{marginTop: '25px'}}>
                            Go somewhere
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card">
                    <img src={travelImg} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <img src={javascriptLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={htmlLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={cssLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={reactLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={reduxLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <h5 className="card-title fw-bold" style={{marginTop: '40px'}}>Travel Website</h5>
                        <p className="card-text">Personal Project.</p>
                        <p className="card-text">Frontend Developer.</p>
                        <Link to='/project/10' className="btn btn-outline-dark">
                            Go somewhere
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card">
                    <img src={watchImg} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <img src={typescriptLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={htmlLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <img src={cssLogo} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <h5 className="card-title fw-bold" style={{marginTop: '40px'}}>TypeScript StopWatch</h5>
                        <p className="card-text">Personal Project.</p>
                        <p className="card-text">Frontend Developer.</p>
                        <Link to='/project/11' className="btn btn-outline-dark">
                            Go somewhere
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
                <div className="card">
                    <img src={todoImg} className="card-img-top" alt="..." style={{height:'190px', width:'95px'}}/>
                    <div className="card-body">
                        <img src={'https://devtop.io/wp-content/uploads/2022/10/react-native-1.png'} alt="..." style={{height:'30px', width:'50px', marginRight: '4px'}}/>
                        <img src={'https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7s19o0dhp2pu41gmoyr9.png'} alt="..." style={{height:'30px', width:'30px', marginRight: '4px'}}/>
                        <h5 className="card-title fw-bold" style={{marginTop: '20px'}}>To Do App Mobile</h5>
                        <p className="card-text">Personal Project.</p>
                        <p className="card-text">Mobile Developer.</p>
                        <Link to='/project/12' className="btn btn-outline-dark">
                            Go somewhere
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
                    <h5>Unity3D</h5>
                    <img src={unityLogo} alt="..." style={{height:'200px', width:'200px'}}/>
                </div>
                <div className="carousel-item">
                    <h5>C#</h5>
                    <img src={cSharpLogo} alt="..." style={{height:'200px', width:'180px'}}/>
                </div>
                <div className="carousel-item">
                    <h5>React</h5>
                    <img src={reactLogo} alt="..." style={{height:'200px', width:'200px'}}/>
                </div>
                <div className="carousel-item">
                    <h5>Redux</h5>
                    <img src={reduxLogo} alt="..." style={{height:'200px', width:'210px'}}/>
                </div>
                <div className="carousel-item">
                    <h5>Javascript</h5>
                    <img src={javascriptLogo} alt="..." style={{height:'200px', width:'200px', borderRadius: '25px'}}/>
                </div>
                <div className="carousel-item">
                    <h5>TypeScript</h5>
                    <img src={typescriptLogo} alt="..." style={{height:'200px', width:'200px', borderRadius: '25px'}}/>
                </div>
                <div className="carousel-item">
                    <h5>HTML</h5>
                    <img src={htmlLogo} alt="..." style={{height:'200px', width:'200px'}}/>
                </div>
                <div className="carousel-item">
                    <h5>CSS</h5>
                    <img src={cssLogo} alt="..." style={{height:'200px', width:'200px'}}/>
                </div>
                <div className="carousel-item">
                    <h5>Bootstrap</h5>
                    <img src={bootstrapLogo} alt="..." style={{height:'160px', width:'200px'}}/>
                </div>
                <div className="carousel-item">
                    <h5>Node.js</h5>
                    <img src={nodeLogo} alt="..." style={{height:'200px', width:'180px'}}/>
                </div>
                <div className="carousel-item">
                    <h5>Express.js</h5>
                    <img src={expressLogo} alt="..." style={{height:'200px', width:'200px'}}/>
                </div>
                <div className="carousel-item">
                    <h5>PostgreSQL</h5>
                    <img src={postgreLogo} alt="..." style={{height:'200px', width:'200px'}}/>
                </div>
                <div className="carousel-item">
                    <h5>Sequelize</h5>
                    <img src={sequelizeLogo} alt="..." style={{height:'200px', width:'200px'}}/>
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
