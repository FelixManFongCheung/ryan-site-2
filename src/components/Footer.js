import React, { useState } from "react";

function Footer({ share }) {
  const [shareBar, setShareBar] = useState(false);

  const Share = ({ share }) => {
    return (
      <div className="share trigger" onClick={share}>
        Share
      </div>
    );
  };
  const ShareIcon = ({ share }) => {
    return (
      <div className="share">
        <a
          href="https://www.facebook.com/share.php?u=http://fltd-art.com/"
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
        <div className="cancel trigger" onClick={share}>
          Cancel
        </div>
      </div>
    );
  };
  return (
    <div className="footer">
      {shareBar === false ? (
        <Share
          share={() => {
            setShareBar(!shareBar);
          }}
        />
      ) : (
        <ShareIcon
          share={() => {
            setShareBar(!shareBar);
          }}
        />
      )}
    </div>
  );
}

export default Footer;
