import Link from "next/link";
import { useRef, useEffect } from "react";

function SpinNav({ changeMode }) {
  const spinItems = useRef(new Array());
  useEffect(() => {
    spinItems.current.map((item, index) => {
      item.classList.add(`letter-animation${index + 1}`);
    });
    console.log("rerender");
    //put the state of content as the dependency********************
  }, []);

  return (
    <div className="spin-nav">
      {/* home  */}
      <div
        onClick={() => {
          changeMode("home");
        }}
        className="spin-link"
      >
        <span ref={(ref) => spinItems.current.push(ref)} className="letter">
          H
        </span>
        <span ref={(ref) => spinItems.current.push(ref)} className="letter">
          O
        </span>
        <span ref={(ref) => spinItems.current.push(ref)} className="letter">
          M
        </span>
        <span ref={(ref) => spinItems.current.push(ref)} className="letter">
          E
        </span>
      </div>
      <span
        ref={(ref) => spinItems.current.push(ref)}
        className="letter"
      ></span>
      <span
        ref={(ref) => spinItems.current.push(ref)}
        className="letter"
      ></span>
      {/* about */}
      <div
        onClick={() => {
          changeMode("about");
        }}
        className="spin-link"
      >
        <span ref={(ref) => spinItems.current.push(ref)} className="letter">
          A
        </span>
        <span ref={(ref) => spinItems.current.push(ref)} className="letter">
          B
        </span>
        <span ref={(ref) => spinItems.current.push(ref)} className="letter">
          O
        </span>
        <span ref={(ref) => spinItems.current.push(ref)} className="letter">
          U
        </span>
        <span ref={(ref) => spinItems.current.push(ref)} className="letter">
          T
        </span>
      </div>
      <span
        ref={(ref) => spinItems.current.push(ref)}
        className="letter"
      ></span>
      <span
        ref={(ref) => spinItems.current.push(ref)}
        className="letter"
      ></span>
      {/* works */}
      <div
        onClick={() => {
          changeMode("works");
        }}
        className="spin-link"
      >
        <span ref={(ref) => spinItems.current.push(ref)} className="letter">
          W
        </span>
        <span ref={(ref) => spinItems.current.push(ref)} className="letter">
          O
        </span>
        <span ref={(ref) => spinItems.current.push(ref)} className="letter">
          R
        </span>
        <span ref={(ref) => spinItems.current.push(ref)} className="letter">
          K
        </span>
        <span ref={(ref) => spinItems.current.push(ref)} className="letter">
          S
        </span>
      </div>

      <span
        ref={(ref) => spinItems.current.push(ref)}
        className="letter"
      ></span>
      <span
        ref={(ref) => spinItems.current.push(ref)}
        className="letter"
      ></span>
    </div>
  );
}

export default SpinNav;
