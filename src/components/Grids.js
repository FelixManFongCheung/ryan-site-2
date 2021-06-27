import Image from "next/image";
import { data } from "../data/paintingsForGrids";

function Grids() {
  let dragEl, targetEl;
  //infinite scroll efffect ****************************************************
  let artWork = document.querySelector(".grid-container");
  console.log(artWork);
  // let scrollY = artWork.scrollHeight;
  // let elementY = artWork.clientHeight;
  // console.log(scrollY);
  // console.log(elementY);
  //infinite scroll efffect ****************************************************

  const _onDragStart = (e) => {
    dragEl = e.target;
    setTimeout(() => {
      dragEl.classList.add("ghost");
    });
  };

  const _onDragEnd = (e) => {
    e.preventDefault();
    e.target.classList.remove("ghost");
    console.log("end");
  };

  const _onDragOver = (e) => {
    e.preventDefault();
  };

  const _onDrop = (e) => {
    e.preventDefault();
    targetEl = e.target;
    if (targetEl != dragEl && targetEl.className === "painting") {
      const tempStore = dragEl.style.backgroundImage;
      dragEl.style.backgroundImage = targetEl.style.backgroundImage;
      targetEl.style.backgroundImage = tempStore;
    }
  };

  return (
    <div className="grid-container">
      <div
        className="grid"
        onDragEnd={_onDragEnd}
        onDragStart={_onDragStart}
        onDragOver={_onDragOver}
        onDrop={_onDrop}
      >
        {data.map((datum, index) => {
          return (
            <div
              key={index}
              draggable="true"
              style={{ backgroundImage: `url(${datum.url})` }}
              className="painting"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Grids;
