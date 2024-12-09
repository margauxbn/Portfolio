import './development.css';
import logoHTML5 from "../../../assets/skills-logo/html5-5823.png"
import logoCSS from "../../../assets/skills-logo/css-4550.png"
import logoSASS from "../../../assets/skills-logo/sass-1514.png"
import logoJS from "../../../assets/skills-logo/javascript-8824.png"
import logoTS from "../../../assets/skills-logo/typescript-0354.png"
import logoREACT from "../../../assets/skills-logo/react-0589.png"

function Development() {
  return (
    <>
      <h4 className='title-development'>Développement</h4>
      <div className='development-skills'>
        <div className='development-element'>
          <img className='logo-development-skill' src={logoHTML5} alt='Logo de HTML5'/>
          <p className='title-development-skill'>HTML5</p>          
        </div>
        <div className='development-element'>
          <img className='logo-development-skill' src={logoCSS} alt='Logo de CSS'/>
          <p className='title-development-skill'>CSS</p>          
        </div>
        <div className='development-element'>
          <img className='logo-development-skill' src={logoSASS} alt='Logo de SASS'/>
          <p className='title-development-skill'>SASS</p>          
        </div>
        <div className='development-element'>
          <img className='logo-development-skill'src={logoJS} alt='Logo de JavaScript'/>
          <p className='title-development-skill'>JAVASCRIPT</p>          
        </div>
        <div className='development-element'>
          <img className='logo-development-skill' src={logoTS} alt='Logo de TypeScript'/>
          <p className='title-development-skill'>TYPESCRIPT</p>          
        </div>
        <div className='development-element'>
          <img className='logo-development-skill'src={logoREACT} alt='Logo de React'/>
          <p className='title-development-skill'>REACT</p>          
        </div>
      </div>
    </>
  );
}

export default Development;
