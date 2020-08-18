import React, {useState} from "react";
import {FaArrowCircleUp} from 'react-icons/fa';

function ScrollToTop() {

    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if(!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    window.addEventListener('scroll', checkScrollTop);

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <FaArrowCircleUp
            className="scrollTop"
            onClick={scrollTop}
            style={{height: 40, display: showScroll ? 'flex' : 'none'}}
        />
    );
}

export default ScrollToTop;
