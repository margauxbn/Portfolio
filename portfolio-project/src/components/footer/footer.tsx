import "./footer.css"
import logoFooter from "../../assets/logo/logo-footer.webp"
import logoGitHub from "../../assets/logo/github-logo-1506.png"

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

function Footer() {

  return (
    <>  
        <div className="footer-container">
            <div className="container-logo-footer" onClick={scrollToTop}>
                <img src={logoFooter} className="logo-footer" alt='Logo où il est écrit MB'/>    
            </div>
            <div className="container-github-footer">
                <a href="https://github.com/margauxbn" target="_blank" rel="noopener noreferrer">
                    <img src={logoGitHub} className="logo-github-footer" alt="Logo de GitHub"/>
                </a>
            </div>
        </div>
    </>
  )
}

export default Footer
