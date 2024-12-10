import ProjectContainer from './projectContainer/projectContainer';
import './projects.css';

function Projects() {
  return (
    <>
        <h2 id="projects" className='title-projects'>Mes projets</h2>
        <ProjectContainer />
    </>
  );
}

export default Projects;