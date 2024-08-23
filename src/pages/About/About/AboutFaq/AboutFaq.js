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
                    Essential Questions
                  </h5>
                  <h2 className="tp-section-title heading-color-black">
                    Every Cleaning Related <br />
                    Answer is Here
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
                        How Can Cleaning Services Improve Your Life?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Quick and Happy Cleaning offer time-saving solutions,
                        expertise, and health benefits, ensuring thorough
                        cleaning and peace of mind. With customizable options
                        and stress reduction, they provide a positive
                        environment for both residential and commercial spaces.
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
                        Do you offer recurring cleaning services?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Yes, we offer flexible recurring cleaning plans tailored
                        to your schedule, whether you need weekly, bi-weekly, or
                        monthly cleanings.
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
                        How long will the cleaning service take?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        The duration of the cleaning service depends on various
                        factors, such as the size of the space, the level of
                        cleaning required, and any specific requests you may
                        have. We’ll provide you with an estimated timeframe
                        based on your needs.
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
