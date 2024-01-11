import "../style/components/Footer.css";
// import logo from "../assets/images/logos/asklepio_logo_white_text.png";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as Mail } from "../assets/icons/mail.svg";
import { ReactComponent as Telegram } from "../assets/icons/telegram.svg";

export const Footer = () => {
  return (
    <footer>
      
      {/* <img src={logo} alt="Logo of Asklepio ry" /> */}

      <h1>Yhteystiedot</h1>

      <p>Vesilinnantie 5, 20014 Turun yliopisto</p>

      <ul>
        <li>
          <a href="mailto:hallitus@asklepio.fi" target="_blank" rel="noreferrer"><Mail />hallitus@asklepio.fi</a>
        </li>

        <li>
          <a href="https://www.instagram.com/asklepio.ry/" target="_blank" rel="noreferrer"><Instagram />Asklepio.ry</a>
        </li>

        <li>
          <a href="https://www.instagram.com/asklepio.ry/" target="_blank" rel="noreferrer"><Telegram />Asko tiedottaa</a>
        </li>
      </ul>

      <p>Asklepio ry © {new Date().getFullYear()}</p>

    </footer>
  );
};
