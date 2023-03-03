import logo from "../assets/images/logos/asklepio_logo_white_notext.png";
import "../style/components/Header.css";

export const Header = () => {
  return (
    <header>
      <div className="header-banner">
        <a href="https://www.asklepio.fi" rel="noreferrer">
          <img className="header-img" src={logo} alt="Logo of Asklepio ry" />
          <span>Asklepio</span>
        </a>
      </div>
    </header>
  );
};
