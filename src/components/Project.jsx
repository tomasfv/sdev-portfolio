import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Carousel from './Carousel';
import projectsData from './ProjectsBulk.json';
import { getAssetUrl } from '../utils/assetLoader';

export default function Project() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  const projectImages = project.images.map(img => getAssetUrl(img)).filter(Boolean);

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