import { useState } from "react";

const Slider = ({slides}) => {
    // Set state of carousel
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(setCurrent === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(setCurrent === 0 ? length -1 : current -1)
    }

    // Error handling for images that are broken
    function imgError(image) {
        image.target.src =
            "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
    }

    return(
        <div>
            <button 
                onClick={prevSlide}
                className="leftArrow">&lArr;
            </button>

            <button 
                onClick={nextSlide}
                className="rightArrow">&rArr;
            </button>
            {/* Everything below here is for the slider - but it doesn't work   LOL Will be editing this later */}
            {/* {
                slides.map((slide, index) => {
                    return(
                        {(index === current) &&  
                            (<li key={slide.id}>
                                <img
                                    src={slide.image_link}
                                    alt={slide.name}
                                    onError={imgError}
                                />
                                <h3>{slide.name}</h3>
                                <p>$ {slide.price}</p>
                            </li>)
                        }
                    )
                })
            } */}
        </div>
    )
}

export default Slider