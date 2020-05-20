import React from "react";

function Sidebar() {
  return (
    <div>
      <a
        href="#"
        className="js-colorlib-nav-toggle colorlib-nav-toggle"
        data-toggle="collapse"
        data-target="#navbar"
        aria-expanded="false"
        aria-controls="navbar"
      >
        <i></i>
      </a>
      <aside
        id="colorlib-aside"
        className="border js-fullheight"
      >
        <div className="text-center">
          <div className="author-img"></div>
          <h1 id="colorlib-logo">
            Svetlana <br />
            Stosic Milosavljevic
          </h1>
          <span className="position">Frontend Developer</span>
          <ul className="social">
            <li>
              <a href="https://www.linkedin.com/in/cecastosic/" target="_blank" rel="noopener noreferrer">
                <i className="icon-linkedin2"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/cecastosic" target="_blank" rel="noopener noreferrer">
                <i className="icon-github"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/cecastosic" target="_blank" rel="noopener noreferrer">
                <i className="icon-twitter2"></i>
              </a>
            </li>
          </ul>
        </div>
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse">
            <ul>
              <li className="active">
                <a href="#home" data-nav-section="home">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" data-nav-section="about">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" data-nav-section="skills">
                  Skills
                </a>
              </li>
              <li>
                <a href="#work" data-nav-section="work">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" data-nav-section="experience">
                  Experience
                </a>
              </li>
             
              <li>
                <a href="#education" data-nav-section="education">
                  Education
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="colorlib-footer">
          

          <p>
            <small>
              <span>
                Made with <i className="icon-heart" aria-hidden="true"></i> and
                inspiration by{" "}
                <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
                  {" "}
                  Colorlib
                </a>
              </span>
            </small>
          </p>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
