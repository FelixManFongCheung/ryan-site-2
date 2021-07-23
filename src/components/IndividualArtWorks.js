import { useState } from "react";
import Image from "next/image";
import { Backdrop } from "@material-ui/core";

function IndividualArtWorks({ description, image }) {
  const [backdrop, setBackdrop] = useState(false);
  const _onClick = () => {
    console.log("clicked");
    setBackdrop(true);
  };
  const _onClose = () => {
    console.log("closed");
    setBackdrop(false);
  };
  return (
    <div>
      <Image
        className="artworks-image"
        src={image}
        alt="title"
        width={300}
        height={300}
        priority={true}
        // layout="fill"
        onClick={_onClick}
      />
      <div className="artworks-footer" onClick={_onClick}>
        {description}
      </div>

      <Backdrop open={backdrop} onClick={_onClose} className="backdrop">
        <Image
          className="artworks-image"
          src={image}
          alt="title"
          width={500}
          height={500}
          priority={true}
          // layout="fill"
        />
        <div className="backdrop-description">{description}</div>
      </Backdrop>
    </div>
  );
}

export default IndividualArtWorks;
