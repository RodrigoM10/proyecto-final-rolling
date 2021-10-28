import React from 'react'
import "./footer.css";
import { FaArrowUp } from 'react-icons/fa';

const FooterAdmin = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="mt-auto">
            <div className="d-flex align-items-center justify-content-between footer2">
                <div>
                    <p>© 2021 The Wine Vibes All rights reserved</p>
                </div>
                <div>
                    <p>Keep Calm and drink Wine</p>
                </div>
                <div>
                    <button className="volverArriba" onClick={scrollToTop}><FaArrowUp /></button>
                </div>
            </div>
        </div>
    )
}

export default FooterAdmin
