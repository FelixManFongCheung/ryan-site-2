import React, { useState } from "react";
import Link from "next/link";
import SpinNav from "./SpinNav";

function Header({ changeMode, ImageContent }) {
  return (
    <div className="header">
      <Link href="/">
        {/* link style can only added to the class of the a tag  */}
        <a className="name-link">
          <div className="name">Ryan Moyii</div>
        </a>
      </Link>
      <SpinNav changeMode={changeMode} />
    </div>
  );
}

export default Header;
