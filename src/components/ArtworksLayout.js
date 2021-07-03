import { useState, useEffect } from "react";
import Image from "next/image";
import { data } from "../data/allPaintings";
import Works from "./Works";
import About from "./About";
import Work from "./Works";

function ArtworksLayout({ ImageContent, WorkContent }) {
  // dataSorting function////////////////////////////////////////////////////////////////////////////////////////
  const dataSorting = (data, number) => {
    let newArray = [];
    for (let x = 0; x <= data.length - number; x += number) {
      let subarray = data.slice(x, x + number);
      newArray.push(subarray);
    }
    let remainder = data.length % number;
    if (remainder !== 0) {
      let remainderArray = data.slice(-remainder);
      newArray.push(remainderArray);
    }

    return newArray;
  };
  // dataSorting function////////////////////////////////////////////////////////////////////////////////////////
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    console.log("parallxingggg");

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //testing///////////////////////////////////////////////////////////////////////////////////////////////////
  // let fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // console.log(dataSorting(fakeData, 6));
  //testing///////////////////////////////////////////////////////////////////////////////////////////////////
  let newData = dataSorting(data, 4);
  return (
    <div>
      {newData.map((datum1, index1) => {
        return (
          <div key={datum1.id} className="artworks">
            {datum1.map((datum2, index2) => {
              let random = Math.floor(Math.random() * 300);
              return (
                // the content component can show anything from images to about to works; so this is where is the state can change what to be displayed
                <div
                  key={datum2.id}
                  style={{
                    margin: "10px",
                    display: "inline-block",
                    // flex: "1",
                  }}
                >
                  <Image
                    className="artworks-image"
                    src={datum2.url}
                    alt="title"
                    width={100}
                    height={100}
                    // layout="fill"
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default ArtworksLayout;
