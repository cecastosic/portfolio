import React from "react";

function Home() {
  return (
    <div id="home" data-section="home">
      <section id="colorlib-hero" className="js-fullheight">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li>
              <div className="overlay"></div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>
                          Hi! <br />
                          I'm Svetlana
                        </h1>
                        <h2>
                          I am passionate about coding and <br />
                          creating web applications.
                        </h2>
                        <p>
                          <a
                            className="btn btn-primary btn-learn"
                            href="https://github.com/cecastosic"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Projects <i className="icon-briefcase3"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="overlay"></div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>
                          I wrote <br />
                          an article
                        </h1>
                        <h2>How I won my first hackathon</h2>
                        <p>
                          <a
                            className="btn btn-primary btn-learn"
                            href="https://medium.com/@hackyourfuturecopenhagen/how-i-won-my-first-hackathon-f010742f182e"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read here <i className="icon-pencil"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
