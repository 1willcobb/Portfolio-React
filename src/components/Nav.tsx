import React from "react";

const Nav = () => {
  return (
    <header>
      <div className="header-container">
        <h1>Will Cobb</h1>
        <nav>
          <a className="nav" href="#about-me-anchor">
            About Me
          </a>
          <a className="nav" href="#portfolio-anchor">
            Portfolio
          </a>
          <a className="nav" href="#resume-anchor">
            Resume
          </a>
        </nav>
        <a className="nav-btn" href="mailto:cobb.will@gmail.com">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Nav;
