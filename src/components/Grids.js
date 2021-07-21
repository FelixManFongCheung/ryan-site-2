import Image from "next/image";
import { data } from "../data/paintingsForGrids";
import { useEffect } from "react";

function Grids() {
  let dragEl, targetEl;

  const _onDragStart = (e) => {
    console.log("dragging");
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
    console.log(e.target.getBoundingClientRect());
    console.log(e.clientX);
    console.log(e.clientY);
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

  // const _onMouseOver = (e) => {
  //   e.preventDefault();
  //   console.log(e.target);
  //   let dimension = e.target.getBoundingClientRect();
  //   console.log(dimension);
  //   console.log(e.clientX);
  //   console.log(e.clientY);
  // };

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
