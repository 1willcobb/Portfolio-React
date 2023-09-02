import { NavLink } from "react-router-dom";



const Nav = () => {
  return (
    <header>
      <div className="header-container">
        <h1>Will Cobb</h1>
        <ul>
          <li>
            <NavLink className="nav" to="#about-me-anchor">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink className="nav" to="#portfolio-anchor">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink className="nav" to="#resume-anchor">
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-btn" to="mailto:cobb.will@gmail.com">
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
