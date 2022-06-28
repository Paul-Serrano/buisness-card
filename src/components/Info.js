import React from "react";
import gmail from "../../public/img/gmail.png";
import linkedin from "../../public/img/linkedin.png";
import profil from "../../public/img/profil.png";

function Info(props) {

  return (
    <div className={"info-container"}>
      <img className="info-img" src={profil} />
      <div className="info-content">
        <div className="info-personnal">
          <p className="info-personnal-name">Paul Serrano</p>
          <p className="info-personnal-job">Web Developer</p>
        </div>
        <div className="info-button-block">
            <div className="darkmode-button" onClick={props.toggleDarkMode}>
              <div className="button-circle"></div>
          </div>
          <a
              className="info-personnal-porfolio-link"
              href="https://www.serrano-paul-portfolio.ovh/Portfolio/"
              target="_blank"
          >
            <p className="info-personnal-portfolio">Portfolio</p>
          </a>
        </div>
        <div className="info-contact">
          <a
              className="info-contact-email-link"
              href="mailto:paul.serrano08374@gmail.com"
          >
            <img className="info-contact-email-btn-img" src={gmail} />
            <p>Email</p>
          </a>
          <a
              className="info-contact-linkedin-link"
              href="https://www.linkedin.com/in/serrano-paul/"
              target="_blank"
          >
            <img className="info-contact-linkedin-btn-img" src={linkedin} />
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;
