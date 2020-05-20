import React from "react";

function About() {
  return (
    <section className="colorlib-about" data-section="about" id="about">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-12">
            <div
              className="row row-bottom-padded-sm animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="col-md-12">
                <div className="about-desc">
                  <span className="heading-meta">About Me</span>
                  <h2 className="colorlib-heading">Who Am I?</h2>
                  <p>
                    During my 10 years of experience as a Designer, I have
                    developed both functional and aesthetic components of
                    different websites. My professional experience includes
                    using both Photoshop and Illustrator, and HTML, CSS, and
                    JavaScript to create various websites features.{" "}
                  </p>
                  <p>
                    After 10 years of working as a Designer, I moved to
                    Copenhagen and decided to upgrade my frontend skills. I
                    started my journey as developer in HackYourFuture school
                    where I was working on different projects and I have
                    experienced in working with React, NodeJS, ExpressJS, MySQL,
                    Firebase etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
