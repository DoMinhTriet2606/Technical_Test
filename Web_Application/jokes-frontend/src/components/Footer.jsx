import React from "react";
import "../assets/css/components/footer.css";

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="copyright__content">
                <p className="disclaimer">
                    This website is create as part of Hlsolutions program. The materials contained
                    on this website are provided for general <br /> information only and do not
                    constitute any form of advice. HLS assumes no responsibility for the accuracy of
                    any particular statement and <br /> accepts no liability for any loss or damage
                    which may arise from reliance on the information contained on this site.
                </p>

                <p className="copyright">Copyright 2021 HLS</p>
            </div>
        </div>
    );
};

export default Footer;
