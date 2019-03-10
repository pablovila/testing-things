import React from "react";

const Layout = props => (
  <>
    <nav
      className="navbar has-shadow is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="./testing-logo.png" />
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarTT"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarTT" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div className="container">{props.children}</div>
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Testing Things</strong> by{" "}
          <a href="https://twitter.com/pablovila">Pablo Vila</a>.
        </p>
      </div>
    </footer>
  </>
);

export default Layout;
