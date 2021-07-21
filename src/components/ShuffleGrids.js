import Image from "next/image";
import { data } from "../data/paintingsForGrids";
import { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import { shuffle } from "lodash";

function Grids() {
  const [shuffleGrids, setShuffleGrids] = useState(data);

  useEffect(() => {
    const autoShuffle = setInterval(() => {
      setShuffleGrids(shuffle(shuffleGrids));
    }, 5000);
    return () => {
      clearInterval(autoShuffle);
    };
  }, []);

  return (
    <div className="grid-container">
      <FlipMove className="grid" duration={500}>
        {shuffleGrids.map((data) => {
          return (
            <div
              key={data.id}
              draggable="true"
              style={{ backgroundImage: `url(${data.url})` }}
              className="painting"
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Grids;
