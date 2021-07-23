import { useState, useEffect } from "react";
import { data } from "../data/allPaintings";
import Image from "next/image";
import IndividualArtworks from "./IndividualArtWorks";

function ArtworksLayout() {
  return (
    <div>
      <ul className="artworks">
        {data.map((datum) => {
          return (
            <li
              key={datum.id}
              style={{
                margin: "30px",
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              <IndividualArtworks description={datum.name} image={datum.url} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArtworksLayout;
