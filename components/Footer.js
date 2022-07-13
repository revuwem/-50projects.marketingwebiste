import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <ul className="menu-list">
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
        <li className="menu-list__item">
          <a href="#" className="link">
            Support
          </a>
        </li>
      </ul>
    </footer>
  );
}
