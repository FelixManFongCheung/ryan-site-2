import { useState, useEffect } from "react";
import Image from "next/image";
import { data } from "../data/allPaintings";
import Works from "./Works";
import About from "./About";
import Work from "./Works";

function ArtworksLayout() {
  return (
    <div>
      <ul className="artworks">
        {data.map((data, index) => {
          return (
            <li
              key={data.id}
              style={{
                margin: "10px",
                display: "inline-block",
                // flex: "1",
              }}
            >
              <Image
                className="artworks-image"
                src={data.url}
                alt="title"
                width={300}
                height={300}
                priority={true}
                // layout="fill"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArtworksLayout;
