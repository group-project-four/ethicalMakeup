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

    return(
        <div>
            <button className="leftArrow">&lArr;</button>
            <button className="rightArrow">&rArr;</button>
        </div>
    )
}

export default Slider