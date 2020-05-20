import React from "react";

function Experience() {
  return (
    <section className="colorlib-experience" data-section="experience" id="experience">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">Experience</span>
            <h2 className="colorlib-heading animate-box">Work Experience</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="timeline-centered">
              <article
                className="timeline-entry animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-1">
                    <i className="icon-pen2"></i>
                  </div>

                  <div className="timeline-label">
                    <h2>
                      Senior Creative Designer at TeleSkin{" "}
                      <span>2013-2018</span>
                    </h2>
                    <p>
                      TeleSkin develops high-tech mobile and software solutions
                      for tracking and analysis of moles, lesions, and other
                      skin conditions over time.
                    </p>
                    <p>Achievements/Tasks</p>
                    <ul>
                      <li>
                        Designed UI/UX for{" "}
                        <a
                          href="https://apps.apple.com/dk/app/skinscan/id1025190936"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          skinScan iOS application
                        </a>
                      </li>
                      <li>
                        Designed UI/UX for{" "}
                        <a
                          href="https://play.google.com/store/apps/details?id=com.teleskin.skinscan&hl=en"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          skinScan Android application
                        </a>
                      </li>
                      <li>
                        Designed UI/UX for skinScan Windows Phone and tablet
                        application
                      </li>
                      <li>
                        Designed website and made front-end implementation |{" "}
                        <a href="http://teleskin.dk/" target="_blank" rel="noopener noreferrer">
                          www.teleskin.dk
                        </a>{" "}
                        |{" "}
                        <a href="http://skinscan.dk/" target="_blank" rel="noopener noreferrer">
                          www.skinscan.dk
                        </a>
                      </li>
                      <li>Designed and developed email campaigns</li>
                    </ul>
                  </div>
                </div>
              </article>

              <article
                className="timeline-entry animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-2">
                    <i className="icon-pen2"></i>
                  </div>
                  <div className="timeline-label">
                    <h2>
                      Graphic/Web Designer at mySkin <span>2009-2013</span>
                    </h2>
                    <p>
                      mySkin is a globally recognized leader in helping people
                      understand their skin, using science, and connecting them
                      with the right recommendations.
                    </p>
                    <p>Achievements/Tasks</p>
                    <ul>
                      <li>
                        Redesigned and developed{" "}
                        <a href="https://myskin.com" target="_blank" rel="noopener noreferrer">
                          mySkin portal
                        </a>
                      </li>
                      <li>
                        Designed{" "}
                        <a
                          href="https://www.myskin.com/dermograph"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          dermograph™
                        </a>{" "}
                        WPF desktop application
                      </li>
                      <li>
                        Designed and developed design for Samsung TV application
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
              <article
                className="timeline-entry begin animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-none"></div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
