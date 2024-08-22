import './style.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react'

function Carousel({imageSlider}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const length = imageSlider.length; //longueur du tableau de slides

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }

    return (
       
        <div style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carousel'>
            {imageSlider.length > 1 && 
                <>
                    <FontAwesomeIcon 
                        icon= {faChevronLeft}
                        className='carousel-arrow_right' 
                        onClick={prevSlide} 
                    />
                    <FontAwesomeIcon 
                        icon= {faChevronRight}
                        className='carousel_arrow_left' 
                        onClick={nextSlide} 
                    />
                    <span className="number">
                     {currentIndex + 1}/{length}
                    </span>

                </>
            } 
        </div>
        
       
    )
}
export default Carousel