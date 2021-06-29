import React, { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { Parallax } from "react-scroll-parallax";

function Home() {
  const [ImageContent, setImageContent] = useState(true);
  const [WorkContent, setWorkContent] = useState(false);
  // const changeImageState = () => {
  //   setImageContent((ImageContent = !ImageContent));
  // };
  const changeMode = (mode) => {
    switch (mode) {
      case "home":
        setImageContent(true);
        setWorkContent(false);
        break;
      case "works":
        setImageContent(false);
        setWorkContent(true);
        break;
      case "about":
        setImageContent(false);
        setWorkContent(false);
        break;
    }
  };
  return (
    <div>
      <Header changeMode={changeMode} />
      <Content ImageContent={ImageContent} WorkContent={WorkContent} />
      <Footer />
    </div>
  );
}

export default Home;
