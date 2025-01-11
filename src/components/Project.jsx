import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectsData from './ProjectsBulk.json';
import ttk1 from '../assets/ttk1.jpeg';
import ttk2 from '../assets/ttk2.webp';
import ttk3 from '../assets/ttk3.webp';
import apoceus1 from '../assets/apoceus1.jpg';
import apoceus2 from '../assets/apoceus2.jpg';
import apoceus3 from '../assets/apoceus3.jpg';
import zombie1 from '../assets/zombie1.jpg';
import zombie2 from '../assets/zombie2.jpg';
import survival1 from '../assets/survival1.jpg';
import doozy1 from '../assets/doozy1.jfif';
import balloon1 from '../assets/balloon1.jpg';
import getback1 from '../assets/getback.jfif';
import farmacia1 from '../assets/farmacia1.jpg';
import farmacia2 from '../assets/farmacia2.jpeg';
import farmacia3 from '../assets/farmacia3.jpeg';
import farmacia4 from '../assets/farmacia4.jpg';
import kustoms1 from '../assets/KustomsSports.jpg';
import travel1 from '../assets/travel.jpg';
import watch1 from '../assets/TSStopWatch.jpg';
import todo1 from '../assets/todo2.jpeg';

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
    'ttkData1': ttk1,
    'ttkData2': ttk2,
    'ttkData3': ttk3,
    'apoceusData1' : apoceus1,
    'apoceusData2' : apoceus2,
    'apoceusData3' : apoceus3,
    'zombieData1': zombie1,
    'zombieData2': zombie2,
    'survivalData1': survival1,
    'doozyData1': doozy1,
    'balloonData1': balloon1,
    'getbackData1': getback1,
    'farmaciaData1': farmacia1,
    'farmaciaData2': farmacia2,
    'farmaciaData3': farmacia3,
    'farmaciaData4': farmacia4,
    'kustomsData1': kustoms1,
    'travelData1': travel1,
    'watchData1': watch1,
    'todoData1': todo1,
    
  };

  return (

    <div className="container mt-5">
      <div className='text-center mb-4'>
        <h2 className='display-5 fw-bold'>{project.name}  {project.company}</h2>
      </div>
      <h4>Role: {project.role}</h4>
      <h4>Date: {project.date}</h4>

      {project.links.demo && <h5><a href={project.links.demo} target='_blank'>Demo</a></h5>}
      {project.links.company && <h5><a href={project.links.company} target='_blank'>Company</a></h5>}
      {project.links.store && <h5><a href={project.links.store} target='_blank'>Store</a></h5>}
      {project.links.code && <h5><a href={project.links.code} target='_blank'>Code</a></h5>}

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
          {project.images.map((img, index) => (
            <img key={index} src={imageMapping[img]} alt={`Project ${index}`} 
            className="me-3 my-3 responsive-img" 
            style={{ border: '2px solid #000000', borderRadius: '8px', boxShadow: '4px 4px #000000' }} />          
          ))}
        </div>
      </div>
    </div>
  )
}