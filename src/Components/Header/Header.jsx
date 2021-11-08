import React, { Component } from "react";
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <>
        <header className="bg-dark fixed-top">
          <div className="container">
            <nav className="navbar navbar-expand-lg row">
              <div className="collapse navbar-collapse col-2">
                <a
                  className="fab fa-facebook fa-2x  p-1 text-white "
                  href="http://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <a
                  className="fab fa-instagram fa-2x p-1 text-white"
                  href="http://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <a
                  className="fab fa-whatsapp fa-2x  p-1 text-white"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>

              {/* Links del menú */}
              <Navbar />
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
