import { useEffect } from "react";

const getParentsStatus = (element, horizontal) => {
    let parent = element.parentElement
    let containerToScroll = null
    let fixedElementsHeight = 0

    while (parent) {
        const style = window.getComputedStyle(parent);

        if (!containerToScroll) {
            const overflowAxis = horizontal ? style.overflowX : style.overflowY;
            const scrollAxis = horizontal ? "scrollWidth" : "scrollHeight"
            const clientAxis = horizontal ? "clientWidth" : "clientHeight"
            const overflow = style.overflow;

            const isScrollable =
                ["auto", "scroll", "overlay"].includes(overflowAxis) ||
                ["auto", "scroll", "overlay"].includes(overflow);

            if (isScrollable && parent[scrollAxis] > parent[clientAxis]) {
                containerToScroll = parent;
            }
        }

        parent = parent.parentElement;
    }

    if (!horizontal && !containerToScroll) containerToScroll = window
    // If the section container is horizontal, we need a scroll parent to not go over the edges so we let it null

    // Add potentials heights of fixed header
    const fixedHeaders = document.querySelectorAll("[fixed-header]");

    if (fixedHeaders.length && containerToScroll === window) {
        fixedHeaders.forEach(e => fixedElementsHeight += e.clientHeight)
    }

    return {
        containerToScroll,
        fixedElementsHeight,
    }
}



export default function useScrollToSection(selectedSectionName, horizontal, sectionsRef) {

    useEffect(() => {
        if (!sectionsRef.current || !selectedSectionName) return

        const targetedSection = sectionsRef.current[selectedSectionName]

        const { containerToScroll, fixedElementsHeight } = getParentsStatus(targetedSection, horizontal)

        if (!containerToScroll) return

        const padding = 15

        const scrollDirection = horizontal ? "left" : "top"
        const scrollOffset = horizontal ? "scrollLeft" : "scrollTop"

        const sectionRectOffset = targetedSection.getBoundingClientRect()[scrollDirection]
        let containerRectOffset = 0
        let containerScroll = window.scrollY

        if (containerToScroll !== window) {
            containerRectOffset = containerToScroll.getBoundingClientRect()[scrollDirection]
            containerScroll = containerToScroll[scrollOffset]
        }
        const offset = sectionRectOffset - containerRectOffset + containerScroll - padding - fixedElementsHeight;

        if (containerToScroll === window) {
            window.scroll({
                [scrollDirection]: offset,
                behavior: "smooth",
            })
        } else {
            containerToScroll.scrollTo({
                [scrollDirection]: offset,
                behavior: "smooth",
            });
        }
    }, [selectedSectionName])
}
