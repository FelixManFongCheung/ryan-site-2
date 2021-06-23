import Image from "next/image";
import { data } from "../data/paintingsForGrids";

function Grids() {
  let dragEl, targetEl;
  // const _onClick = (e) => {
  //   e.target.src = "https://picsum.photos/200/300";
  // };

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
    <div className="container">
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
