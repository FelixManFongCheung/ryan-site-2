import { useState } from "react";
import Image from "next/image";
import { data } from "../data/allPaintings";
import Works from "./Works";
import About from "./About";
import Work from "./Works";

function Content({ ImageContent, WorkContent }) {
  return (
    <div className="content">
      {ImageContent ? (
        data.map((datum, index) => {
          return (
            // the content component can show anything from images to about to works; so this is where is the state can change what to be displayed
            <div key={datum.id}>
              <Image
                className="art"
                src={datum.url}
                alt="title"
                width={100}
                height={100}
                // layout="fill"
              />
              <div className="caption">new pic</div>
            </div>
          );
        })
      ) : WorkContent ? (
        <Works />
      ) : (
        <About />
      )}
    </div>
  );
}

export default Content;
