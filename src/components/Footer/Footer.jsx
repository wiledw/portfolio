import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <div className="footer__social">
                <a href="https://www.instagram.com/wil_edw/" className="footer__social-link" target="_blank">
                <i class="bx bxl-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/william-edwardo-gunawan/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-linkedin"></i>
                </a>

                <a href="https://github.com/wiledw/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-github"></i>
                </a>

                <a href="mailto:william.gunawan@torontomu.ca" className="footer__social-link" target="_blank">
                    <i class='bx bxl-gmail'></i>
                </a>
            </div>

            <span className="footer__copy">Coded by William @ 2024</span>

        </div>
    </footer>
  )
}

export default Footer
