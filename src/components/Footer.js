import React from "react";
import facebook from "../../public/img/facebook.png";
import twitter from "../../public/img/twitter.png";
import github from "../../public/img/github.png";

function Footer() {
  return (
    <div className="footer-container">
      <a
        className="footer-twitter-link"
        href="https://twitter.com/Lambada_Limbo"
        target="_blank"
      >
        <img className="footer-twitter-img" src={twitter} />
      </a>
      <a
        className="footer-facebook-link"
        href="https://www.facebook.com/PaulSerrano30/"
        target="_blank"
      >
        <img className="footer-facebook-img" src={facebook} />
      </a>
      <a
        className="footer-github-link"
        href="https://github.com/Paul-Serrano"
        target="_blank"
      >
        <img className="footer-github-img" src={github} />
      </a>
    </div>
  );
}

export default Footer;
