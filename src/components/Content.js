// import { useState } from "react";
import Works from "./Works";
import About from "./About";
import HomeContent from "./HomeContent";

function Content({ ImageContent, WorkContent }) {
  return (
    <div className="content">
      {ImageContent ? <HomeContent /> : WorkContent ? <Works /> : <About />}
    </div>
  );
}

export default Content;
