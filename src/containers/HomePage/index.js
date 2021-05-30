import React from "react";
import resumeFormat1 from "../../assets/images/resume_format_1.jpg";
import resumeFormat2 from "../../assets/images/resume_format_2.jpg";
import resumeFormat3 from "../../assets/images/resume_format_3.jpg";
import resumeFormat4 from "../../assets/images/resume_format_4.jpg";
import resumeFormat5 from "../../assets/images/resume_format_5.jpg";
import resumeFormat6 from "../../assets/images/resume_format_6.jpg";
import resumeFormat7 from "../../assets/images/resume_format_7.jpg";
import Image from "../../components/Image";
import "../../assets/scss/HomePage.scss";

function HomePage(props) {
  return (
    <div className="HomePage">
      <h1 className="text-center title">
        Build a great resume by picking a template
      </h1>
      <div className="templates">
        <Image src={resumeFormat1} format={1} />
        <Image src={resumeFormat2} format={2} />
        <Image src={resumeFormat3} format={3} />
        <Image src={resumeFormat4} format={4} />
        <Image src={resumeFormat5} format={5} />
        <Image src={resumeFormat6} format={6} />
        <Image src={resumeFormat7} format={7} />
      </div>
      <div className="footer">
        <div>
          <h3>My Other Projects</h3>
          <ul>
            <li>
              <a className="link" href="https://my-codepen-ankit.netlify.app">
                My CodePen
              </a>
            </li>
            <li>
              <a className="link" href="#block">
                My Instagram
              </a>
            </li>
            <li>
              <a className="link" href="#block">
                My Flipkart
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://github.com/ankit-gupta-24/My-Music"
              >
                My Music
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://github.com/ankit-gupta-24/My-blog-with-chatbot"
              >
                My Blog with Chatbot
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://github.com/ankit-gupta-24/textutils"
              >
                TextUtils
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>Developer</p>
          <h1>
            <a className="link" href="https://resume-ankit.herokuapp.com">
              Ankit Gupta
            </a>
          </h1>
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
