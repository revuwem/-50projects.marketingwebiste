import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className="header">
      <Logo />
      <ul className={`menu-list ${menuIsOpen ? "open" : ""}`}>
        <li className="menu-list__item">
          <a href="#" className="link">
            Product
          </a>
        </li>
        <li className="menu-list__item">
          <a href="#" className="link">
            Company
          </a>
        </li>
        <li className="menu-list__item">
          <a href="#" className="link">
            Pricing
          </a>
        </li>
      </ul>
      <button
        className="menu-toggle"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 2V0H0V2H20ZM20 4V6H6V4H20ZM20 10V8H0V10H20ZM20 14V12H6V14H20Z"
            fill="black"
          />
        </svg>
      </button>
      <a href="#" className="btn btn--sm btn--primary">
        Get started
      </a>
    </header>
  );
}
