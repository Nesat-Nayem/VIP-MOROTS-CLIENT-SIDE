import { faCar, faCommentDots, faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const FooterQuickLinks = () => {
    return (
        
            <ul className="list-unstyled d-flex justify-content-end me-3 ">

                <li>
                    <Link to="/" style={{textDecoration:'none'}} className="text-white">
                    <FontAwesomeIcon className="me-5 " style={{fontSize:'2em'}} icon={faTwitter}/>
                        
                    </Link>
                </li>

                <li>
                    <Link to="/" style={{textDecoration:'none'}} className="text-white">
                    <FontAwesomeIcon className="me-5 " style={{fontSize:'2em'}} icon={faFacebook}/>
                     
                    </Link>
                </li>

                <li>
                    <Link to="/" style={{textDecoration:'none'}} className="text-white">
                    <FontAwesomeIcon className="me-5 " style={{fontSize:'2em'}} icon={faWhatsapp}/>
                        
                    </Link>
                </li>

                <li>
                    <Link to="/" style={{textDecoration:'none'}} className="text-white">
                    <FontAwesomeIcon className="me-5 " style={{fontSize:'2em'}} icon={faInstagram}/>
                       
                    </Link>
                </li>
            </ul> 
    );
};

export default FooterQuickLinks;