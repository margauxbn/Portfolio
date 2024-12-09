import AboutMe from '../aboutMe/aboutMe';
import './titlePresentation.css';

function TitlePresentation() {
  return (
    <>
      <div className='title-aboutme-container'>
        <div className='container-title-presentation'>
          <h2 className="title-presentation">Présentation</h2>
        </div>
        <AboutMe />
      </div>
    </>
  );
}

export default TitlePresentation;
