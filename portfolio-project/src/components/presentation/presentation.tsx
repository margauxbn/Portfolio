import "./presentation.css"
import ImgPresentation from "../presentation/imgPresentation/imgPresentation"
import TitlePresentation from "./titlePresentation/titlePresentation"

function Presentation() {

  return (
    <>
      <div className="container-presentation">
        <ImgPresentation />
        <TitlePresentation />
      </div>
    </>
  )
}

export default Presentation
