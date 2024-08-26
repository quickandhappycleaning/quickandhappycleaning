import React from "react";
import { Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const Sidebar = ({ show, handleClose }) => {
  return (
    <>
      <div className="side__bar">
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* 
            <ul className="sidebar_sub_menu text-white mt-3">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">Pages</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/blogSidebar">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            */}
            <ul className="sidebar_sub_menu text-white mt-3">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/appointment">Appointment</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>

            <div className="fix">
              <div className="side-info">
                <div className="side-info-content">
                  <div className="tp-mobile-menu"></div>
                  <div className="contact-infos mb-30">
                    <div className="contact-list mb-30">
                      <h4>Contact Info</h4>
                      <ul>
                        <li>
                          <i className="flaticon-pin"></i>208 Oakfield Dr Unit
                          #303 Brandon, FL 33511
                        </li>
                        <li>
                          <i className="flaticon-email"></i>
                          <a href="mailto:contact@quickandhappycleaning.com">
                            contact@quickandhappycleaning.com
                          </a>
                        </li>
                        <li>
                          <i className="flaticon-phone-call"></i>
                          <a href="tel:8133315461">(813) 331-5461</a>
                        </li>
                      </ul>
                      <div className="sidebar__menu--social">
                        <a className="text-white" href="/">
                          <i>
                            <FaFacebookF className="icon" />{" "}
                          </i>
                        </a>
                        <a className="text-white" href="/">
                          <i>
                            <BsTwitter className="icon" />{" "}
                          </i>
                        </a>
                        <a className="text-white" href="/">
                          <i>
                            <BsInstagram className="icon" />{" "}
                          </i>
                        </a>
                        {/*
                        <a className="text-white" href="/">
                          <i>
                            <AiOutlineGoogle className="icon" />{" "}
                          </i>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Sidebar;
