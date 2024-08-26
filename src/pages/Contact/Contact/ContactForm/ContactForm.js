import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from "react-icons/fa";

const ContactForm = () => {
  return (
    <>
      <section className="tp-contact-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div
                className="section-title-wrapper-two mb-50 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">
                  Get Free Estimate
                </h5>
                <h2 className="tp-section-title heading-color-black">
                  If you Have Any Query, Don't Hesitate <br />
                  Contact with us{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="row custom-mar-20">
                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                  <div
                    className="tp-contact-info mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="tp-contact-info-icon">
                      <i>
                        {" "}
                        <FaMapMarkerAlt className="contact_icon" />{" "}
                      </i>
                    </div>
                    <div className="tp-contact-info-text">
                      <h4 className="tp-contact-info-title mb-15">Address</h4>
                      <p>
                        208 Oakfield Dr Unit #303 <br />
                        Brandon, FL 33511.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                  <div
                    className="tp-contact-info mb-40 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="tp-contact-info-icon">
                      <i>
                        {" "}
                        <FaPhoneAlt className="contact_icon" />{" "}
                      </i>
                    </div>
                    <div className="tp-contact-info-text">
                      <h4 className="tp-contact-info-title mb-15">Phone</h4>
                      <a href="tel:+18133315461">+1 (813) 331-5461</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                  <div
                    className="tp-contact-info mb-40 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="tp-contact-info-icon">
                      <i>
                        {" "}
                        <FaEnvelopeOpen className="contact_icon" />{" "}
                      </i>
                    </div>
                    <div className="tp-contact-info-text">
                      <h4 className="tp-contact-info-title mb-15">Email</h4>
                      <a href="mailto:contact@quickandhappycleaning.com">
                        contact@quickandhappycleaning.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tp-contact-form">
                <div className="row custom-mar-20">
                  <div className="col-md-6 custom-pad-20">
                    <div className="tp-contact-form-field mb-20">
                      <input type="text" placeholder="Full name" />
                    </div>
                  </div>
                  <div className="col-md-6 custom-pad-20">
                    <div className="tp-contact-form-field mb-20">
                      <input type="email" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="col-md-6 custom-pad-20">
                    <div className="tp-contact-form-field mb-20">
                      <input type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-md-6 custom-pad-20">
                    <div className="tp-contact-form-field select-field-arrow mb-20">
                      <select>
                        <option defaultValue="">Choose Subject</option>
                        <option defaultValue="">House Cleaning</option>
                        <option defaultValue="">Office Cleaning</option>
                        <option defaultValue="">Kitchen Cleaning</option>
                        <option defaultValue="">Club Cleaning</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12 custom-pad-20">
                    <div className="tp-contact-form-field mb-20">
                      <textarea placeholder="Your Message"></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 custom-pad-20">
                    <div className="tp-contact-form-field">
                      <button type="submit" className="theme-btn text-white">
                        <i className="flaticon-enter"></i> Send Message
                      </button>
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

export default ContactForm;
