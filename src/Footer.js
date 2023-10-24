import React from 'react';
import {
    AiFillGithub,
    AiOutlineTwitter,
    // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css"

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="sec aboutus">
                    <h2>About Us</h2>
                    <p>Learn about Web accessibility, Web performance, and Database management.</p>
                    <ul className="sci">
                        <li className="social-icons">
                            <a
                                href="https://github.com/Aditi020"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://twitter.com/Aditi_2402"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/aditi-kumar02242/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="sec quicklinks">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="www.ccool">Home</a></li>
                        <li><a href="www.ccool">About</a></li>
                    </ul>
                </div>
                <div className="sec contactBx">
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <span><i className='bx bxs-map'></i></span>
                            <span>6444 London street
                                Brighton PA 33445
                                UK</span>
                        </li>
                        <li>
                            <span><i className='bx bx-envelope'></i></span>
                            <p><a href="www.ccool">Codemyhobby9@gmail.com</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
