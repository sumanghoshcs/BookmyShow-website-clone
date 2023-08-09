import React from 'react'
import "../footer/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#">Movies</a>
          <a href="#">Events</a>
          <a href="#">Plays</a>
          <a href="#">Sports</a>
          <a href="#">Monuments</a>
          <a href="#">Activities</a>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className="footer-disclaimer">
        <p>&copy; 2023 Made By Suman. All rights reserved.</p>
        <p>Privacy Policy | Terms of Use</p>
      </div>
    </footer>
  );
}

export default Footer