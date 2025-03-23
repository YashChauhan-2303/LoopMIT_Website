import React, { useEffect } from "react";
import $ from "jquery";
import { useTheme } from "../context/ThemeContext.jsx";
import logo2 from "../img/logo2.png";
import logox from "../img/logo.png";

function Navbar() {
  const [logo, setLogo] = React.useState(logox);
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function() {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });

    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-trans");
        
        // Only change to logo2 if not in dark mode
        if (!darkMode) {
          setLogo(logo2);
        } else {
          // Ensure logox is set when in dark mode, regardless of scroll
          setLogo(logox);
        }
      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");
        setLogo(logox);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial call to set the correct logo based on current scroll position
    handleScroll();

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5
            },
            1000,
            "easeInExpo"
          );
          return false;
        }
      }
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });

    // Cleanup event listeners when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      $(".navbar-toggler").off("click");
      $("body").scrollspy("dispose");
      $(".js-scroll").off("click");
      $('a.js-scroll[href*="#"]:not([href="#"])').off("click");
    };
  }, [darkMode]); // Keeping original dependency array as requested

  // Add an effect that runs whenever darkMode changes to immediately update the logo
  useEffect(() => {
    // If in dark mode, always set logo to logox
    if (darkMode) {
      setLogo(logox);
    } else {
      // If in light mode, set logo based on scroll position
      if (window.pageYOffset > 50) {
        setLogo(logo2);
      } else {
        setLogo(logox);
      }
    }
  }, [darkMode]);

  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll" href="#page-top">
          <img
            src={logo}
            alt="logo"
            style={{ maxWidth: "150px" }}
          />
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className="navbar-collapse collapse justify-content-end"
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <button 
                onClick={toggleDarkMode}
                className="nav-link" 
                style={{
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  padding: '8px 15px',
                  borderRadius: '5px',
                  color: darkMode ? '#fff' : '#000',
                  backgroundColor: darkMode ? '#333' : '#ddd'
                }}
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#work">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;