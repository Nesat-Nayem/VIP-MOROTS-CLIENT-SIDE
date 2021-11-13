import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { faMapMarkerAlt, faMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import FooterQuickLinks from '../FooterQuickLinks/FooterQuickLinks';

const Footer = () => {
    return (
        <footer className="color-4  py-5 mt-5">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center text-white">
                    <div className="col-md-3 col-12 text-start costom">
                      
                        <p>ABOUT US</p>
                        <p>CONTACT US</p>
                        <p>LATEST NEWS</p>
                        <p>TERMS & PRIVACY POLICY</p>
                    </div>
                   
                    <div className="col-md-3 col-12 costom text-start">
                        <p>APARTMENTS FOR SALE</p>
                        <p>VILLAS FOR SALE</p>
                        <p>APARTMENTS FOR RENT</p>
                        <p>VILLAS FOR RENT</p>
                        
                    </div>

                    <div className="col-md-6 col-12">
                        <h5 className="mb-5 text-center me-5">SOCIAL CONNECT</h5>
                        <div>
                            <FooterQuickLinks></FooterQuickLinks>
                        </div>
                    </div>
                   
                </div>
            </div>
        </footer>
    );
};

export default Footer;