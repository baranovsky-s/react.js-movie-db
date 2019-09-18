import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        &copy; just a movie site {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
