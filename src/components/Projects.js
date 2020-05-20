import React from "react";

function Projects() {
  return (
    <section className="colorlib-work" data-section="work" id="work">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">My Work</span>
            <h2 className="colorlib-heading animate-box">Recent Projects</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="project final">
              <a
                href="https://github.com/cecastosic/FP-class11"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="desc">
                  <div className="con">
                    <h3>HackYourFuture Final Project</h3>
                    <span>React, Storybook, NodeJS, ExpressJS, KnexJS, Firebase, MySQL, HTML, CSS</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div className="project meal">
              <a
                href="https://github.com/cecastosic/meal-sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="desc">
                  <div className="con">
                    <h3>Meal Sharing App</h3>
                    <span>NodeJS, ExpressJS, MySQL, HTML, CSS</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
            <div className="project github">
            <a
                href="https://github.com/cecastosic/github-search-users"
                target="_blank"
                rel="noopener noreferrer"
              >
              <div className="desc">
                <div className="con">
                  <h3>
                    GitHub Users Search 
                  </h3>
                  <span>React, JavaScript, HTML, CSS</span>
                </div>
              </div>
              </a>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInBottom"
          >
            <div className="project game">
            <a
                href="https://github.com/cecastosic/dotnet"
                target="_blank"
                rel="noopener noreferrer"
              >
              <div className="desc">
                <div className="con">
                  <h3>
                        ThirtyOne Game
                  </h3>
                  <span>.NET, C#, Bootstrap, HTML, CSS</span>
                </div>
              </div>
              </a>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="project weather">
            <a
                href="https://github.com/cecastosic/hyf-homework/tree/master/javascript/javascript3/week1/weather"
                target="_blank"
                rel="noopener noreferrer"
              >
              <div className="desc">
                <div className="con">
                  <h3>
                    Weather App
                  </h3>
                  <span>JavaScript, HTML, CSS</span>
                </div>
              </div>
              </a>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div className="project giphy">
            <a
                href="https://github.com/cecastosic/hyf-homework/tree/master/javascript/javascript3/week1/giphy"
                target="_blank"
                rel="noopener noreferrer"
              >
              <div className="desc">
                <div className="con">
                  <h3>
                    Giphy Search
                  </h3>
                  <span>JavaScript, HTML, CSS</span>
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-12 animate-box">
            <p>
              <a href="#" className="btn btn-primary btn-lg btn-load-more">
                Load more <i className="icon-reload"></i>
              </a>
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Projects;
