import React, { useState } from "react";

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
      <div className="facebook">Facebook</div>
      <div className="twitter">Twitter</div>
      <div className="instagram">Instagram</div>
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
        <div className="menu">Menu</div>
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
