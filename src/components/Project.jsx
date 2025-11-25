import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Carousel from './Carousel';
import projectsData from './ProjectsBulk.json';
import tk1 from '../assets/ttk1.jpeg';
import tk2 from '../assets/ttk2.webp';
import tk3 from '../assets/ttk3.webp';
import tk4 from '../assets/ttk4.png';
import tk5 from '../assets/ttk5.webp';
import tk6 from '../assets/ttk6.webp';
import tk7 from '../assets/ttk7.webp';
import tk8 from '../assets/ttk8.jpg';
import tk9 from '../assets/ttk9.png';
import tk10 from '../assets/ttk10.jpeg';
import tk11 from '../assets/ttk11.jpeg';
import tk12 from '../assets/ttk12.jpg';
import tk13 from '../assets/ttk13.jpg';
import ap1 from '../assets/apoceus1.jpg';
import ap2 from '../assets/apoceus2.jpg';
import ap3 from '../assets/apoceus3.jpg';
import ap4 from '../assets/apoceus4.webp';
import ap5 from '../assets/apoceus5.png';
import ap6 from '../assets/apoceus6.jfif';
import ap7 from '../assets/apoceus7.jfif';
import ap8 from '../assets/apoceus8.webp';
import ap9 from '../assets/apoceus9.jpg';
import ap10 from '../assets/apoceus10.jpg';
import ap11 from '../assets/apoceus11.jpg';
import ap12 from '../assets/apoceus12.jpg';
import zs1 from '../assets/zombie1.jpg';
import zs2 from '../assets/zombie2.jpg';
import zs3 from '../assets/zombie3.jpg';
import zs4 from '../assets/zombie4.jpg';
import zs5 from '../assets/zombie5.png';
import zs6 from '../assets/zombie6.jpg';
import zs7 from '../assets/zombie7.jpg';
import zs8 from '../assets/zombie8.jpg';
import zs9 from '../assets/zombie9.jpg';
import zs10 from '../assets/zombie10.jpg';
import sn1 from '../assets/survival1.jpg';
import sn2 from '../assets/Survival2.jpg';
import sn3 from '../assets/Survival3.jpg';
import sn4 from '../assets/Survival4.jpg';
import sn5 from '../assets/Survival5.jpg';
import sn6 from '../assets/Survival6.jpg';
import sn7 from '../assets/Survival7.jpg';
import sn8 from '../assets/Survival8.jpg';
import sn9 from '../assets/Survival9.jpg';
import dw1 from '../assets/doozy1.jfif';
import dw2 from '../assets/Doozy2.jpg';
import dw3 from '../assets/Doozy3.jpg';
import dw4 from '../assets/Doozy4.jpg';
import dw5 from '../assets/Doozy5.jpg';
import dw6 from '../assets/Doozy6.jpg';
import dw7 from '../assets/Doozy7.jpg';
import dw8 from '../assets/Doozy1.jpg';
import rzc1 from '../assets/RiftZone2.jpg';
import gb1 from '../assets/Getback1.png';
import gb2 from '../assets/Getback2.png';
import gb3 from '../assets/Getback3.png';
import gb4 from '../assets/Getback4.png';
import gb5 from '../assets/Getback5.png';
import gb6 from '../assets/Getback6.png';
import gb7 from '../assets/Getback7.png';
import gb8 from '../assets/Getback8.png';
import gb9 from '../assets/Getback9.png';
import gb10 from '../assets/Getback10.png';
import gb11 from '../assets/Getback11.png';
import gb12 from '../assets/Getback12.png';
import gb13 from '../assets/Getback13.png';
import gb14 from '../assets/Getback14.png';
import gb15 from '../assets/Getback15.png';
import gb16 from '../assets/Getback16.png';
import gb17 from '../assets/Getback17.png';
import gb18 from '../assets/Getback18.png';
import gb19 from '../assets/Getback19.png';
import gb20 from '../assets/Getback20.png';
import gb21 from '../assets/Getback21.png';
import gb22 from '../assets/Getback22.png';
import gb23 from '../assets/Getback23.png';
import gb24 from '../assets/Getback24.png';
import gb25 from '../assets/Getback25.png';
import gb26 from '../assets/Getback26.png';
import gb27 from '../assets/Getback27.png';
import gb28 from '../assets/Getback28.png';
import gb29 from '../assets/Getback29.png';
import gb30 from '../assets/Getback30.png';
import gb31 from '../assets/Getback31.png';
import gb32 from '../assets/Getback32.png';
import gb33 from '../assets/Getback33.png';
import gb34 from '../assets/Getback34.png';
import gb35 from '../assets/Getback35.png';
import gb36 from '../assets/Getback36.png';
import gb37 from '../assets/Getback37.png';
import gb38 from '../assets/Getback38.png';
import gb39 from '../assets/Getback39.png';
import gb40 from '../assets/Getback40.png';
import fap1 from '../assets/farmacia1.jpg';
import fap2 from '../assets/farmacia2.jpeg';
import fap3 from '../assets/farmacia3.jpeg';
import fap4 from '../assets/farmacia4.jpg';
import ks1 from '../assets/KustomsSports1.jpg';
import ks2 from '../assets/KustomsSports2.jpg';
import ks3 from '../assets/KustomsSports3.jpg';
import ks4 from '../assets/KustomsSports4.jpg';
import ks5 from '../assets/KustomsSports5.jpg';
import ks6 from '../assets/KustomsSports6.jpg';
import ks7 from '../assets/KustomsSports7.jpg';
import ks8 from '../assets/KustomsSports8.jpg';
import ks9 from '../assets/KustomsSports9.jpg';
import ks10 from '../assets/KustomsSports.jpg';
import tw1 from '../assets/travel.jpg';
import tw2 from '../assets/travel2.jpg';
import ts1 from '../assets/TSStopWatch.jpg';
import ml1 from '../assets/microlab.jpg'
import ml3 from '../assets/microlab3.jpg'
import ml4 from '../assets/microlab4.jpg'
import ml5 from '../assets/microlab5.jpg'
import ml6 from '../assets/microlab6.jpg'
import ml7 from '../assets/microlab7.jpg'
import ml8 from '../assets/microlab8.jpg'
import uj1 from '../assets/UJ1.jpg'
import uj2 from '../assets/UJ2.png'
import uj3 from '../assets/UJ3.jpg'
import uj4 from '../assets/UJ4.png'
import uj5 from '../assets/UJ5.png'
import uj6 from '../assets/UJ6.png'
import uj7 from '../assets/UJ7.png'
import uj8 from '../assets/UJ8.png'
import uj9 from '../assets/UJ9.png'
import uj10 from '../assets/UJ10.jpg'
import uj11 from '../assets/UJ11.jpg'
import uj12 from '../assets/UJ12.jpg'
import uj13 from '../assets/UJ13.jpg'
import uj14 from '../assets/UJ14.png'
import uj15 from '../assets/UJ15.jpg'
import uj16 from '../assets/UJ16.jpg'
import uj17 from '../assets/UJ17.jpg'
import uj18 from '../assets/UJ18.jpg'
import uj19 from '../assets/UJ19.png'
import uj20 from '../assets/UJ20.png'
import uj21 from '../assets/UJ21.png'
import uj22 from '../assets/UJ22.png'
import uj23 from '../assets/UJ23.png'
import uj24 from '../assets/UJ24.jpg'
import uj25 from '../assets/UJ25.jpg'


export default function Project(){
  const { id } = useParams(); // Obtiene el ID de la URL
  const project = projectsData.find((p) => p.id === parseInt(id)); // Busca el proyecto por ID

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'}); // Scroll al inicio al renderizar el componente
  }, []);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  const imageMapping = {
    'tk1': tk1,'tk2': tk2,'tk3': tk3,'tk4': tk4,'tk5': tk5,'tk6': tk6,'tk7': tk7,'tk8': tk8,'tk9': tk9,'tk10': tk10,'tk11': tk11,'tk12': tk12,'tk13': tk13,
    'ap1': ap1,'ap2': ap2,'ap3': ap3,'ap4': ap4,'ap5': ap5,'ap6': ap6,'ap7': ap7,'ap8': ap8,'ap9': ap9,'ap10': ap10,'ap11': ap11,'ap12': ap12,
    'zs1': zs1,'zs2': zs2,'zs3': zs3,'zs4': zs4,'zs5': zs5,'zs6': zs6,'zs7': zs7,'zs8': zs8,'zs9': zs9,'zs10': zs10,
    'sn1': sn1,'sn2': sn2,'sn3': sn3,'sn4': sn4,'sn5': sn5,'sn6': sn6,'sn7': sn7,'sn8': sn8,'sn9': sn9,
    'dw1': dw1,'dw2': dw2,'dw3': dw3,'dw4': dw4,'dw5': dw5,'dw6': dw6,'dw7': dw7,'dw8': dw8,
    'rzc1': rzc1,
    'gb1': gb1,'gb2': gb2,'gb3': gb3,'gb4': gb4,'gb5': gb5,'gb6': gb6,'gb7': gb7,'gb8': gb8,'gb9': gb9,'gb10': gb10,
    'gb11': gb11,'gb12': gb12,'gb13': gb13,'gb14': gb14,'gb15': gb15,'gb16': gb16,'gb17': gb17,'gb18': gb18,'gb19': gb19,'gb20': gb20,
    'gb21': gb21,'gb22': gb22,'gb23': gb23,'gb24': gb24,'gb25': gb25,'gb26': gb26,'gb27': gb27,'gb28': gb28,'gb29': gb29,'gb30': gb30,
    'gb31': gb31,'gb32': gb32,'gb33': gb33,'gb34': gb34,'gb35': gb35,'gb36': gb36,'gb37': gb37,'gb38': gb38,'gb39': gb39,'gb40': gb40,
    'fap1': fap1,'fap2': fap2,'fap3': fap3,'fap4': fap4,
    'ks1': ks1,'ks2': ks2,'ks3': ks3,'ks4': ks4,'ks5': ks5,'ks6': ks6,'ks7': ks7,'ks8': ks8,'ks9': ks9,'ks10': ks10,
    'tw1': tw1,'tw2': tw2,
    'ts1': ts1,
    'uj1': uj1,'uj2': uj2,'uj3': uj3,'uj4': uj4,'uj5': uj5,'uj6': uj6,'uj7': uj7,'uj8': uj8,'uj9': uj9,'uj10': uj10,'uj11': uj11,'uj12': uj12,
    'uj13': uj13,'uj14': uj14,'uj15': uj15,'uj16': uj16,'uj17': uj17,'uj18': uj18,'uj19': uj19,'uj20': uj20,'uj21': uj21,'uj22': uj22,'uj23': uj23,'uj24': uj24,'uj25': uj25,
    'ml1': ml1,'ml3': ml3,'ml4': ml4,'ml5': ml5,'ml6': ml6,'ml7': ml7,'ml8': ml8,
  };

  const projectImages = project.images.map(img => imageMapping[img]).filter(Boolean);

  return (

    <div className="container mt-5">
      <div className='text-center mb-4'>
        <h2 className='display-5 fw-bold'>{project.name}  {project.company}</h2>
      </div>
      <h4>Role: {project.role}</h4>
      <h4>Date: {project.date}</h4>

      {project.links.demo && <h5><a href={project.links.demo} target='_blank'>Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a></h5>}
      {project.links.company && <h5><a href={project.links.company} target='_blank'>Company <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a></h5>}
      {project.links.store && <h5><a href={project.links.store} target='_blank'>Store <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a></h5>}
      {project.links.code && <h5><a href={project.links.code} target='_blank'>Code <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a></h5>}

      <div className='project-description'>
        <div className='p-2 m-2'>
            <p className='fst-italic fs-5 text-body-secondary'>{project.intro}</p>
            <p className='fs-5'>{project.description}</p>
        </div>
      </div>

      
      <div className='grid text-center my-4'>
        <div className='my-4'>
          {project.type == 1 ?
            <div className="ratio ratio-16x9 responsive-video" style={{ border: '2px solid #000000', borderRadius: '8px', boxShadow: '4px 4px #000000' }}>
            <iframe 
              src={project.videos} 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
          :
          <div></div>}
        </div>
        <div>
          <Carousel images={projectImages} />
        </div>
      </div>
    </div>
  )
}