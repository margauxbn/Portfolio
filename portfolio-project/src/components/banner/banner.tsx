import './banner.css';
import imgBanner from "../../assets/images/fish-violet-6205.jpg";

function Banner() {

  return (
    <>
      <div className='container-banner'>
        <img src={imgBanner} className='img-banner' alt="Goutte qui tombe dans l'eau"/>
        <h1 className='title-banner'>PORTFOLIO</h1>          
      </div>
    </>
  )
}

export default Banner
