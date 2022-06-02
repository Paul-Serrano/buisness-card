import React from "react";

function Info() {
  return (
    <div className="info-container">
      <img className="info-img" src="" />
      <div className="info-content">
        <div className="info-personnal">
          <p className="info-personnal-name">Paul Serrano</p>
          <p className="info-personnal-job">Web Developer</p>
          <a className="info-personnal-porfolio-link" href="#">
            <p className="info-personnal-portfolio">Portfolio</p>
          </a>
        </div>
        <div className="info-contact">
          <a className="info-contact-email-link" href="#">
            <button className="info-contact-email-btn">
              <img className="info-contact-email-btn-img" src="" />
              <p>Email</p>
            </button>
          </a>
          <a className="" href="#">
            <button className="info-contact-linkedin-btn">
              <img className="info-contact-linkedin-btn-img" src="" />
              <p>Linkedin</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;
