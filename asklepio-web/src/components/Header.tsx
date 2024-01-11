import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logos/asklepio_logo_no_text_lavender.png";
import "../style/components/Header.css";

export const Header = () => {
  const [show, setShow] = useState(false);
  const menuBtn = useRef(null);

  return (
    <header className={show ? "show" : ""}>

      <div className="header-container">

        <div className="header-container-text">
          <Link to="/" onClick={() => {if (show) {setShow(!show);}}}><img src={logo} alt="Logo of Asklepio ry" /></Link>
          <h1>Asklepio ry</h1>
        </div>

        <input type="checkbox" className="menu-btn" onChange={() => setShow(!show)} checked={show} ref={menuBtn}/>

        <div className="hamburger-lines">
          <span className="btn-line"></span>
          <span className="btn-line"></span>
          <span className="btn-line"></span>
        </div>

      </div>

      <nav>
        <ul>
          <Link className="nav-link" to="/" onClick={() => setShow(!show)}><li>Etusivu</li></Link>
          <Link className="nav-link" to="/hallitus" onClick={() => setShow(!show)}><li>Hallitus</li></Link>
          <Link className="nav-link" to="/uusiopiskelija" onClick={() => setShow(!show)}><li>Uusille opiskelijoille</li></Link>
        </ul>
      </nav>

    </header>
  );
};
