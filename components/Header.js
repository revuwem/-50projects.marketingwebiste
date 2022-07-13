import Logo from "./Logo";

export default function Header() {
  return (
    <header className="header">
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
      </ul>
      <a href="#" className="btn btn--sm btn--primary">
        Get started
      </a>
    </header>
  );
}
