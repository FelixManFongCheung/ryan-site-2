import Link from "next/link";
import { useRef, useEffect } from "react";

function SpinNav() {
  const spinItems = useRef(new Array());
  console.log(spinItems.current);
  useEffect(() => {
    spinItems.current.map((item, index) => {
      item.classList.add(`letter-animation${index + 1}`);
    });
  }, []);

  return (
    <div className="spinNav">
      <div className="spinner">
        {/* home  */}
        <Link href="/">
          <a>
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
          </a>
        </Link>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        {/* about */}
        <Link href="/">
          <a>
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
          </a>
        </Link>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        {/* works */}
        <Link href="/">
          <a>
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
          </a>
        </Link>

        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
        <span
          ref={(ref) => spinItems.current.push(ref)}
          className="letter"
        ></span>
      </div>
    </div>
  );
}

export default SpinNav;
