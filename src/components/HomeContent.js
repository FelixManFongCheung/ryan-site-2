import { useEffect, useState } from "react";
import Image from "next/image";
import { data } from "../data/allPaintings";

function HomeContent() {
  let newData = data.slice(0, 5);
  console.log(newData);

  useEffect(() => {
    let artContainer = document.querySelector(".art-container");
    let art = document.querySelector(".art");
    let containerWidth = artContainer.getBoundingClientRect().width;
    let artWidth = art.getBoundingClientRect().width;
    let upperDistance = containerWidth - artWidth;
    let parentNodeImage = document.querySelector(".art-image").parentElement;
    parentNodeImage.style.pointerEvents = "none";

    let pos1 = 0,
      pos2 = 0,
      right = false,
      target,
      targetPos = 0,
      shadeDistance = 100;

    art.style.left = `${
      Math.round((upperDistance - shadeDistance) * Math.random()) +
      shadeDistance
    }px`;

    const mouseDown = (e) => {
      console.log(e.target);
      e.preventDefault();
      target = e.target;
      pos1 = e.clientX;
      targetPos = target.offsetLeft;
      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseUp);
    };
    const mouseMove = (e) => {
      e.preventDefault();
      if (target.classList.contains("art")) {
        if (pos1 < e.clientX) {
          right = true;
          console.log("right");
        } else if (pos1 > e.clientX) {
          right = false;
          console.log("left");
        }
        pos2 = pos1 - e.clientX;
        pos1 = e.clientX;
        targetPos = target.offsetLeft;
        let nextDistance = target.offsetLeft - pos2;
        if (nextDistance >= 0 && nextDistance <= upperDistance) {
          console.log("moving");
          target.style.left = nextDistance + "px";
        }
        const fading = (targetPos, side) => {
          if (targetPos > 0) {
            side == "left" && (target.style.opacity = targetPos / 100);
            side == "right" &&
              (target.style.opacity =
                1 -
                (targetPos + artWidth - (containerWidth - shadeDistance)) /
                  100);
          }
        };
        nextDistance < shadeDistance &&
          nextDistance >= 0 &&
          fading(targetPos, "left");
        nextDistance > upperDistance - shadeDistance &&
          nextDistance <= upperDistance &&
          fading(targetPos, "right");
        nextDistance >= shadeDistance &&
          nextDistance <= upperDistance - shadeDistance &&
          (target.style.opacity = 1);
      }
    };

    const mouseOver = (e) => {
      e.preventDefault();
      art.style.opacity = "1";
    };

    const mouseLeave = (e) => {
      e.preventDefault();
      art.style.opacity = "0.5";
    };

    const mouseUp = (e) => {
      e.preventDefault();
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    };
    artContainer.addEventListener("mousedown", mouseDown);
    art.addEventListener("mouseover", mouseOver);
    art.addEventListener("mouseleave", mouseLeave);

    return () => {
      artContainer.removeEventListener("mousedown", mouseDown);
      art.removeEventListener("mouseover", mouseOver);
      art.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <div className="art-container">
      <div className="art">
        <Image
          className="art-image"
          key={newData[0].id}
          src={newData[0].url}
          alt="title"
          layout="fill"
          objectFit="contain"
        />
      </div>
      {/* google font change to thin joseph */}
      <div className="description">
        <h3>{newData[0].name}</h3>
      </div>
    </div>
  );
}

export default HomeContent;
