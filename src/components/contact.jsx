import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTheme } from "../context/ThemeContext.jsx";
import imageOverlay from "../img/earth.jpg";
import pod2 from "../img/pod2.jpeg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  // Import the darkMode state from your ThemeContext
  const { darkMode } = useTheme();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitted: true, success: false, message: "Sending..." });
    
    // Keep your original EmailJS configuration
    emailjs.send(
      "service_nn7lgbo",
      "loopmit2019@gmail.com",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      "loopmit2019@gmail.com"
    )
      .then((response) => {
        setStatus({
          submitted: true,
          success: true,
          message: "Your message has been sent. Thank you!"
        });
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        setStatus({
          submitted: true,
          success: false,
          message: "Something went wrong, please try again later."
        });
      });
  };

  // Choose the background image based on darkMode state
  const backgroundImage = darkMode ? pod2 : imageOverlay;

  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(" + backgroundImage + ")" }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send A Message</h5>
                    </div>
                    <div>
                      <form className="contactForm" onSubmit={handleSubmit}>
                        {status.submitted && (
                          <div className={status.success ? "alert alert-success" : "alert alert-danger"}>
                            {status.message}
                          </div>
                        )}
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                minLength="4"
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                minLength="4"
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows="5"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                              disabled={status.submitted && !status.success}
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd love to hear from
                        you.
                        <br />
                        Simply fill the from and send me an email.
                      </p>
                    </div>
                    <div className="socials">
                      <ul>
                        {/* <li>
                          <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-codepen"></i>
                            </span>
                          </a>
                        </li> */}
                        <li>
                          <a
                            href="https://www.instagram.com/loopmit/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-instagram"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a                       
                            href="https://www.linkedin.com/company/loopmit/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-linkedin"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;