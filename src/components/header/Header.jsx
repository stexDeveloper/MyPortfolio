import React, { useEffect, useState } from "react";
import "./Header.scss";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);

  function toggleScroll() {
    const changeScroll = window.scrollY;
    changeScroll > 100 ? setIsScroll(true) : setIsScroll(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleScroll);
    return () => {
      window.removeEventListener("scroll", toggleScroll);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div
          className={isScroll ? "header-wrapper scroll-down" : "header-wrapper"}
        >
          <nav className="nav-bar">
            <ul>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#work">WORK</a>
              </li>
              <li>
                <a href="#skills">SKILLS</a>
              </li>
              <li>
                <a href="#testimonials">TESTIMONIALS</a>
              </li>
            </ul>
          </nav>

          <div className="owner">
            <div>
              <span className="bold-name">Stefan</span>
              <span>Djordjevic</span>
            </div>
          </div>

          <div className="contact-btn">
            <button>Contact Me</button>
          </div>
        </div>
      </div>
    </header>
  );
}
