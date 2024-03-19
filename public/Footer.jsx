import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faInstagramSquare, faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';


const Footer = ({ locale }) => {
    return (
        <div className="container">
            {/* Footer section */}
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    {/* Logo */}
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap" /></svg>
                    </a>
                    {/* Company information */}
                    <span className="mb-3 mb-md-0 text-body-secondary">{locale === 'en' ? '2024 Company, Copyright belongs to TAYFUN DURMAZ.' : '2024 Şirketi, Telif Hakkı TAYFUN DURMAZ aittir.'}  </span>
                </div>

                {/* Social media links */}
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a href="https://twitter.com/ttyfmdrmz">
                            <FontAwesomeIcon icon={faTwitterSquare} style={{ color: 'black', fontSize: '24px' }} />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://www.instagram.com/ttyfndrmz/">
                            <FontAwesomeIcon icon={faInstagramSquare} style={{ color: 'black', fontSize: '24px' }} />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://tr-tr.facebook.com/">
                            <FontAwesomeIcon icon={faFacebookSquare} style={{ color: 'black', fontSize: '24px' }} />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://www.linkedin.com/in/tayfun-durmaz-405399277/">
                            <FontAwesomeIcon icon={faLinkedin} style={{ color: 'black', fontSize: '24px' }} />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://github.com/durmaztayfun22">
                            <FontAwesomeIcon icon={faGithubSquare} style={{ color: 'black', fontSize: '24px' }} />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;
