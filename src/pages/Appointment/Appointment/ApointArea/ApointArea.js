import React, { useState } from "react";

const ApointArea = () => {
  const [name, setName] = useState(""); // Estado para el nombre
  const [email, setEmail] = useState(""); // Estado para el correo
  const [service, setService] = useState(""); // Estado para el servicio
  const [message, setMessage] = useState(""); // Estado para el mensaje
  const [phone, setPhone] = useState(""); // Agregado: Estado para el teléfono
  const [date, setDate] = useState(""); // Agregado: Estado para la fecha
  const [time, setTime] = useState(""); // Agregado: Estado para la hora

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log({ name, email, phone, service, message, date, time }); // Agregado: incluir fecha y hora en el log
  };

  return (
    <>
      <section
        className="tp-appoint-contact-area pt-145 appoint_bg"
        data-background="assets/img/appoint/appoint-bg.jpg"
      >
        <div className="container">
          <div className="row justify-content-lg-end justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="tp-appoint-contact">
                <form
                  onSubmit={handleSubmit}
                  className="text-start tp-testimonial-two-form-wrapper"
                >
                  <h3 className="tp-testimonial-form-title mb-30 text-white">
                    Appointment
                  </h3>
                  <div className="input-field mb-15">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="input-field mb-15">
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-field mb-15">
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="input-field mb-15">
                    <input
                      type="datetime-local"
                      placeholder="Appointment Date and Time"
                      value={`${date}T${time}`}
                      onChange={(e) => {
                        const [newDate, newTime] = e.target.value.split("T");
                        setDate(newDate);
                        setTime(newTime);
                      }}
                    />
                  </div>
                  <div className="input-field select-field-arrow mb-15">
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="">Choose Service</option>
                      <option value="house_cleaning">House Cleaning</option>
                      <option value="office_cleaning">Office Cleaning</option>
                      <option value="kitchen_cleaning">Kitchen Cleaning</option>
                      <option value="club_cleaning">Club Cleaning</option>
                    </select>
                  </div>
                  <div className="input-field mb-15">
                    <textarea
                      placeholder="Write Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="input-field">
                    <button type="submit" className="yellow-btn">
                      <i className="flaticon-enter"></i> Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApointArea;
