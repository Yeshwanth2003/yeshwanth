import { useEffect } from "react";

export default function useLiveUpdateElem({ element, state, setState, initialCount }) {
     const windowHeight = window.innerHeight;
     let isInvoked = false;
     let called = 0;
     function recurOnInnerHTML() {
          isInvoked = true;
          const id = setInterval(() => {
               called++;
               if (called === initialCount) {
                    return clearInterval(id);
               }
               setState(called)
          }, 100);
     }

     function onVisible() {
          const clintBound = element.current.getBoundingClientRect();
          if (clintBound.top < Math.abs(windowHeight * (80 / 100)) &&
               clintBound.top > Math.abs(windowHeight * (10 / 100))) {
               if (!isInvoked) recurOnInnerHTML()
          }
     }

     useEffect(() => {
          window.addEventListener("scroll", onVisible)
     }, [])
}