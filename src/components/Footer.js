import React from 'react'
import './style/Footer.css'

export default function Footer() {
  return (
    <div className="footer">
        <div className="f_footer section__padding">
            <div className="f_footer-links">
                <div className="f_footer_links_div">
                    <h5>Company</h5>
                    <a href="AboutUs.js">
                        <p>About Us</p>
                    </a>
                    <a href="/">
                        <p>Our Services</p>
                    </a>
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
