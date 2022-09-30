import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../Styles/navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Poke Fight
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <NavLink
            className="nav-link"
            to="/"
            onClick={() => setIsNavExpanded(false)}
          >
            <li>Pokedex</li>
          </NavLink>
          <NavLink
            className="nav-link"
            to="/battle"
            onClick={() => setIsNavExpanded(false)}
          >
            <li>Battle</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
