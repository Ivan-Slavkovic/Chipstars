import "../Style/NavBar.css";
const NavBar = () => {
  return (
    <div className="navigation">
      <div className="navigacion_container">
        <div className="navigation_container-logo">
          <p>Chipstars logo</p>
        </div>

        <ul className="navigation_container-menu">
          <li className="navigation_container-menu-link">
            <a href="google.com">Poker</a>
          </li>
          <li className="navigation_container-menu-link">
            <a href="google.com">Kazino</a>
          </li>
          <li className="navigation_container-menu-link">
            <a href="google.com">Live Casino</a>
          </li>
          <li className="navigation_container-menu-link">
            <a href="google.com">Virtuals</a>
          </li>
          <li className="navigation_container-menu-link">
            <a href="google.com">Sportsbook</a>
          </li>
          <li className="navigation_container-menu-link">
            <a href="google.com">eSport</a>
          </li>
        </ul>

        <div className="navigation_container-login">
          <a
            className="navigation_container-login-button-register"
            href="google.com"
          >
            <button className="register-button">Registracija</button>
          </a>
          <a
            className="navigation_container-login-button-login"
            href="google.com"
          >
            <button className="login-button">Prijava</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
