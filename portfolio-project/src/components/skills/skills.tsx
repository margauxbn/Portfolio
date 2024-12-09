import Collaboration from './collaboration/collaboration';
import Development from './development/development';
import './skills.css';

function Skills() {
  return (
    <>
        <h3 className='title-skills'>Mes compétences</h3>
        <Development />
        <Collaboration />
    </>
  );
}

export default Skills;