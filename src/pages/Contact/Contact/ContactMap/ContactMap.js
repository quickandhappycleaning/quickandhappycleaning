import React from "react";

const ContactMap = () => {
  return (
    <>
      <div className="tp-map-area pt-120 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-contact-map">
                <iframe
                  title="contact map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894612!2d-82.309000!3d27.952000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c1e1e1e1e1e1%3A0x1e1e1e1e1e1e1e1!2s208%20Oakfield%20Dr%20Unit%20%23303%20Brandon%2C%20FL%2033511!5e0!3m2!1sen!2sbd!4v1636888514620!5m2!1sen!2sbd"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMap;
