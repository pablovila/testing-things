import React, { Component } from "react";

import "bulma/bulma.sass";

import Layout from "./components/Layout";
import Standings from "./components/Standings";

const enableNavbarBurger = () => {
  document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
};

class App extends Component {
  componentDidMount() {
    enableNavbarBurger();
  }

  render() {
    return (
      <Layout>
        <div className="columns">
          <Standings league="nba" conference="east" className="column" />
          <Standings league="nba" conference="west" className="column" />
        </div>
      </Layout>
    );
  }
}

export default App;
