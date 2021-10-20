
import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="foo"></div>
            <div className="footer-info">
                <i className="fab fa-facebook footer-icon"></i>
                <i className="fab fa-instagram-square footer-icon"></i>
                <i className="fab fa-twitter-square footer-icon"></i>
                <p>info. support. help <br />
                Terms or us. Privacy policy <br />
                <small>© 2021 Art of Living</small>
                </p>


            </div>
        </footer>
    );
};

export default Footer;