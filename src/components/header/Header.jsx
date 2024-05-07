import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <div className="container">
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
    </header>
  );
}
