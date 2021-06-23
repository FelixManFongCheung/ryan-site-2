import React, { useState } from "react";
import SpinNav from "./SpinNav";

const Share = ({ onClick }) => {
  return (
    <div className="share trigger" onClick={onClick}>
      Share
    </div>
  );
};

const ShareIcon = ({ onClick }) => {
  return (
    <div className="share">
      <a
        href="https://www.facebook.com/share.php?u=/"
        target="_blank"
        className="facebook"
      >
        Facebook
      </a>
      <a href="" className="twitter">
        Twitter
      </a>
      <a href="" className="instagram">
        Instagram
      </a>
      <div className="cancel trigger" onClick={onClick}>
        Cancel
      </div>
    </div>
  );
};

function Home() {
  const [shareBar, setShareBar] = useState(false);
  return (
    <div>
      <div className="header">
        <div className="name">Ryan Moyii</div>
        {/* <div className="menu">Menu</div> */}
        <SpinNav />
      </div>
      <div className="footer">
        {shareBar === false ? (
          <Share
            onClick={() => {
              setShareBar(!shareBar);
            }}
          />
        ) : (
          <ShareIcon
            onClick={() => {
              setShareBar(!shareBar);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
