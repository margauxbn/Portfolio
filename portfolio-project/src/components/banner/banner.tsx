import './banner.css';
import imgBanner from "../../assets/images/fish-violet-6205.jpg";

function Banner() {

  return (
    <>
      <div className='container-banner'>
        <img src={imgBanner} className='img-banner' alt="Poisson combattant pourpre"/>
        <h1 className='title-banner'>PORTFOLIO</h1>          
      </div>
    </>
  )
}

export default Banner
