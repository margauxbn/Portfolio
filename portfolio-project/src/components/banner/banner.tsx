import './banner.css';
import imgBanner from "../../assets/images/red-drop-5145.webp";

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
