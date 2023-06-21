import React from "react";

const Footer = (props) => {
    return (
        <footer className="py-5 my-5 bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
            <p className="text-center text-white mb-0">{props.textFooter}</p>
        </footer>
        
    );
};

export default Footer;