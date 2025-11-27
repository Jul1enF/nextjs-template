import { useState, useEffect } from "react";

export function useWindowDimensions() {

    // State to know if the app is display on a computer or a smaller screen
    const [computerDisplay, setComputerDisplay] = useState(false)

    // States to register in real time vw and vh
    const [vw, setVw] = useState(1)
    const [vh, setVh] = useState(1)

    useEffect(() => {

        const handleResize = () => {
	        setVw(window.innerWidth / 100);
	        setVh(window.innerHeight / 100)
        
            if (window.innerHeight >= 600 && window.innerWidth / window.innerHeight > 1 || window.innerWidth >= 1100 && window.innerWidth / window.innerHeight < 1) {
                setComputerDisplay(true)
            } else {
                setComputerDisplay(false)
            }
        };

        handleResize()

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { computerDisplay, vw, vh }
}