import React from "react";

function Main(props) {
  return (
    <div className={"main-container"}>
      <div className="main-about">
        <h2 className="main-about-title">About</h2>
        <p className="main-about-txt">
          I'm a web developer currently looking for an internship starting by
          the end of september 2022. This is my first React project, and I hope
          you'll enjoy it as much as I liked building it !
        </p>
      </div>
      <div className="main-interest">
        <h2 className="main-interest-title">Interests</h2>
        <p className="main-interest-txt">
          Football and travel lover, I also enjoy dancing on tecno music
          whenever i have the chance.
        </p>
      </div>
    </div>
  );
}

export default Main;
