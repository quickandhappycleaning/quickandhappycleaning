import React from "react";

const AboutFaq = () => {
  return (
    <>
      <section className="tp-faq-area">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="tp-about-faq-img">
                <img
                  src="assets/img/feature/faq-img-2.png"
                  alt="img not found"
                />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="tp-faq-text tp-about-faq-text pt-130 pb-120">
                <div className="section-title-wrapper-two mb-45">
                  <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">
                    About Us
                  </h5>
                  <h2 className="tp-section-title heading-color-black">
                    We make your place
                    <br />
                    Shine Bright!
                  </h2>
                </div>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Who We Are
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        At Quick and Happy Cleaning, we understand that life can
                        get busy, and maintaining a clean and organized home can
                        sometimes feel overwhelming. That’s where we come in!
                        Our professional cleaning services are designed to give
                        you back the time you deserve to enjoy the things that
                        matter most to you, while we take care of the dirty
                        work.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Mission
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        At Quick and Happy Cleaning, our mission is to brighten
                        your space and lighten your load. We strive to provide
                        exceptional cleaning services that exceed your
                        expectations, giving you the freedom to focus on what
                        truly matters in life.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item m-0">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Vision
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Our vision at Quick and Happy Cleaning is to be the
                        leading provider of cleaning services, renowned for our
                        dedication to excellence, reliability, and customer
                        satisfaction. We aim to enhance the lives of our clients
                        by creating clean, comfortable environments that promote
                        happiness and well-being.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFaq;
