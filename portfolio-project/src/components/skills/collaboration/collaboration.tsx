import './collaboration.css';
import logoGitHub from "../../../assets/skills-logo/github-7493.png"
import logoFigma from "../../../assets/skills-logo/figma-0189.png"
import logoTrello from "../../../assets/skills-logo/trello-4874.png"


function Collaboration() {
  return (
    <>
      <h4 className='title-collaboration'>Collaboration</h4>
      <div className='collaboration-skills'>
        <div className='collaboration-element'>
          <img className='logo-collaboration-skill' src={logoGitHub} alt='Logo de GitHub'/>
          <p className='title-collaboration-skill'>GITHUB</p>
        </div>
        <div className='collaboration-element'>
          <img className='logo-collaboration-skill' src={logoFigma} alt='Logo de Figma'/>
          <p className='title-collaboration-skill'>FIGMA</p>
        </div>
        <div className='collaboration-element'>
          <img className='logo-collaboration-skill' src={logoTrello} alt='Logo de Trello'/>
          <p className='title-collaboration-skill'>TRELLO</p>
        </div>
      </div>
    </>
  );
}

export default Collaboration;
