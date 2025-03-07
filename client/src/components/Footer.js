import React from 'react'
import './style/Footer.css'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div className="footer">
        <div className="f_footer section__padding">
            <div className="f_footer-links">
                <div className="f_footer_links_div">
                    <h5>Company</h5>
                    <Link to="/about">
                        <p>About Us</p>
                    </Link>
                    <Link to="/products">
                        <p>Our Services</p>
                    </Link>
                </div>
                <div className="f_footer_links_div">
                    <h5>Get Help</h5>
                    <a href="/">
                        <p>FAQs</p>
                    </a>
                    <a href="/">
                        <p>Complaints</p>
                    </a>
                </div>
                <div className="f_footer_links_div">
                    <h5>Contact Us</h5>
                    <a href="/">
                        <p>sayaputtur@gmail.com</p>
                    </a>
                    <a href="/">
                        <p>08251 235852</p>
                    </a>
                </div>
            </div>
            <hr></hr>
            <div className="f_footer-below">
                <div className="f_terms">
                <a href="/">
                        <p>Terms and Conditions</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
