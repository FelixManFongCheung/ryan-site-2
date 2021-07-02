import { useEffect, useState } from "react";
import Image from "next/image";
import { data } from "../data/allPaintings";

function HomeContent() {
  let newData = data.slice(0, 5);
  console.log(newData);

  useEffect(() => {
    let artContainer = document.querySelector(".art-container");
    let art = document.querySelector(".art");
    let halfwayPoint = artContainer.getBoundingClientRect().width / 2;
    let containerWidth = artContainer.getBoundingClientRect().width;
    let artWidth = art.getBoundingClientRect().width;
    let upperDistance = containerWidth - artWidth;

    let pos1 = 0,
      pos2 = 0,
      right = false,
      target,
      targetPos = 0,
      opacity = 1,
      sum = 0,
      shadeDistance = 100;

    art.style.left = `${
      Math.round((upperDistance - shadeDistance) * Math.random()) +
      shadeDistance
    }px`;

    const mouseDown = (e) => {
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
    const mouseUp = (e) => {
      e.preventDefault();
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    };
    document.addEventListener("mousedown", mouseDown);
  }, []);

  return (
    <div className="art-container">
      <div className="art">
        <div className="art-image">
          <Image
            key={newData[0].id}
            src={newData[0].url}
            alt="title"
            layout="fill"
            // objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
