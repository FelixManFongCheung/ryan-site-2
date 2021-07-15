import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { data } from "../data/allPaintings";

function HomeContent() {
  const [slide, setSlide] = useState(0);
  let newData = data.slice(0, 5);

  useEffect(() => {
    let artContainer = document.querySelector(".container-art");
    let containerWidth = artContainer.getBoundingClientRect().width;
    let arts = document.querySelectorAll('[class^="art"]');
    let descriptions = document.querySelectorAll(".description");
    let descriptionArray = Array.from(descriptions);
    let artArray = Array.from(arts);

    descriptionArray.map((description, index) => {
      index !== slide && description.classList.add("nothing");
    });

    slide < artArray.length &&
      artArray.map((art, index) => {
        if (index !== slide) {
          console.log("cleaned");
          art.classList.add("nothing");
        }
        let artWidth = art.getBoundingClientRect().width;
        let upperDistance = containerWidth - artWidth;
        let parentNodeImage = art.querySelector(".image").parentElement;
        parentNodeImage.style.pointerEvents = "none";
        console.log(art);

        let pos1 = 0,
          pos2 = 0,
          right = false,
          target,
          targetPos = 0,
          shadeDistance = 100;

        if (index === slide) {
          //setting only the initial position of the target image
          art.style.left = `${
            Math.round((upperDistance - 2 * shadeDistance) * Math.random()) +
            shadeDistance
          }px`;
          //the navigation of the image on the slider
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
                      (nextDistance +
                        artWidth -
                        (containerWidth - shadeDistance)) /
                        100);
                }
                // if (nextDistance < 20 || nextDistance > upperDistance - 20) {
                if (nextDistance === 0 || nextDistance === upperDistance) {
                  target.style.opacity = 0;
                  descriptionArray[index].classList.add("nothing");
                  setSlide(slide + 1);
                  index < artArray.length - 1 &&
                    artArray[index + 1].classList.remove("nothing");
                  index < artArray.length - 1 &&
                    descriptionArray[index + 1].classList.remove("nothing");
                  document.removeEventListener("mouseup", mouseUp);
                  document.removeEventListener("mousemove", mouseMove);
                  art.removeEventListener("mouseover", mouseOver);
                  art.removeEventListener("mouseleave", mouseLeave);
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
          };
        }
      });
  }, [slide]);

  return (
    <div className="container-art">
      {newData.map((data, index) => {
        return (
          <div key={data.id}>
            <div className="art">
              <Image
                src={data.url}
                className="image"
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
