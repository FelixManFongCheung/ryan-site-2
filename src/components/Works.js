import ShuffleGrids from "./ShuffleGrids";
import ArtworksLayout from "./ArtworksLayout";
import { useEffect } from "react";

function Work() {
  return (
    <div className="works">
      <ArtworksLayout />
      <ShuffleGrids />
    </div>
  );
}

export default Work;
