import { useState, useEffect } from "react";

export default function useWindowDimensions() {

    // State to know if the app is display on a computer or a smaller screen
    const [computerDisplay, setComputerDisplay] = useState(false)

    // States to register in real time vw and vh
    const [vw, setVw] = useState(1)
    const [vh, setVh] = useState(1)

    // States to register the free height available in the layout and the fixed headers height
    const [freeHeight, setFreeHeight]=useState(100)
    const [headersHeight, setHeadersHeight]=useState(0)

    useEffect(() => {

        const handleResize = () => {
	        setVw(window.innerWidth / 100);
	        setVh(window.innerHeight / 100)
        
            if (window.innerHeight >= 600 && window.innerWidth / window.innerHeight > 1 || window.innerWidth >= 1100 && window.innerWidth / window.innerHeight < 1) {
                setComputerDisplay(true)
            } else {
                setComputerDisplay(false)
            }

            const fixedHeaders = document.querySelectorAll("[fixed-header]");
            let fixedHeadersHeight = 0
            if (fixedHeaders.length) fixedHeaders.forEach(e => fixedHeadersHeight += e.clientHeight)
            setHeadersHeight(fixedHeadersHeight)

            const fixedFooters = document.querySelectorAll("[fixed-footer]");
            let fixedFootersHeight = 0
            if (fixedFooters.length) fixedFooters.forEach(e => fixedFootersHeight += e.clientHeight)
            
            setFreeHeight(window.innerHeight - fixedHeadersHeight - fixedFootersHeight)
        };

        handleResize()

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { computerDisplay, vw, vh, freeHeight, headersHeight }
}