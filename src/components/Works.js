import Grids from "./Grids";
import { useEffect } from "react";

function Work() {
  // useEffect(() => {
  //   let artWork = document.querySelector(".works");
  //   let gridContainer = document.querySelector(".grid-container");
  //   console.log(gridContainer.outerHTML);
  //   console.log(artWork.firstChild);
  //   const scrollEvt = () => {
  //     let rect2 = artWork.getBoundingClientRect();
  //     let windowHeight = window.innerHeight;
  //     let rectY = rect2.y;
  //     let rectHeight = rect2.height;
  //     console.log("rectY", rectY);
  //     console.log("windowHeight", windowHeight);
  //     if (windowHeight >= (rectY + rectHeight) * 0.8) {
  //       console.log("start");
  //       artWork.appendChild(gridContainer);
  //       console.log("end");
  //     }
  //   };
  //   document.addEventListener("scroll", scrollEvt);
  //   return function cleanup() {
  //     document.removeEventListener("scroll", scrollEvt);
  //   };
  // }, []);
  return (
    <div className="works">
      <Grids />
    </div>
  );
}

export default Work;
