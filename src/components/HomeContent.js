import { useEffect, useState } from "react";
import Image from "next/image";
import { data } from "../data/allPaintings";

function HomeContent() {
  let newData = data.slice(0, 5);

  useEffect(() => {
    const random = Math.random();
    let artContainer = document.querySelector(".art-container");
    let containerWidth = artContainer.getBoundingClientRect().width;
    let arts = document.querySelectorAll('[class^="art"]');
    let artArray = Array.from(arts);
    artArray.map((art) => {
      let artWidth = art.getBoundingClientRect().width;
      let upperDistance = containerWidth - artWidth;
      artContainer.style.pointerEvents = "none";

      let pos1 = 0,
        pos2 = 0,
        right = false,
        target,
        targetPos = 0,
        shadeDistance = 100;

      art.style.left = `${
        Math.round((upperDistance - 2 * shadeDistance) * Math.random()) +
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
        if (target.classList == art.classList) {
          if (pos1 < e.clientX) {
            right = true;
          } else if (pos1 > e.clientX) {
            right = false;
          }
          pos2 = pos1 - e.clientX;
          pos1 = e.clientX;
          targetPos = target.offsetLeft;
          let nextDistance = target.offsetLeft - pos2;
          if (nextDistance >= 0 && nextDistance <= upperDistance) {
            target.style.left = nextDistance + "px";
          }
          const fading = (nextDistance, side) => {
            if (nextDistance > 0) {
              side == "left" && (target.style.opacity = nextDistance / 100);
              side == "right" &&
                (target.style.opacity =
                  1 -
                  (nextDistance + artWidth - (containerWidth - shadeDistance)) /
                    100);
            }
            if (nextDistance < 20 || nextDistance > upperDistance - 20) {
              target.style.display = "none";
              document.querySelector(".description").style.display = "none";
              document.removeEventListener("mouseup", mouseUp);
              document.removeEventListener("mousemove", mouseMove);
            }
          };
          nextDistance < shadeDistance &&
            nextDistance >= 0 &&
            fading(nextDistance, "left");
          nextDistance > upperDistance - shadeDistance &&
            nextDistance <= upperDistance &&
            fading(nextDistance, "right");
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
    });
  }, []);

  return (
    <div className="art-container">
      {newData.map((data, index) => {
        return (
          <div key={data.id}>
            <div className="art">
              <Image
                src={data.url}
                alt="title"
                height={500}
                width={500}
                // layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="description">
              <h3>{data.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomeContent;
