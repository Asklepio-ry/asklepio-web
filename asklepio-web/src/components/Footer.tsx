import "../style/components/Footer.css";
import asklepio from "../assets/images/logos/asklepio_logo.png";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as Mail } from "../assets/icons/mail.svg";

export const Footer = () => {
  return (
    <footer>
      <img src={asklepio} alt="Logo of Asklepio ry" />
      <p>Vesilinnantie 5, 20014 Turun yliopisto</p>
      <ul>
        <li>
          <a href="mailto:asklepio@utu.fi" target="_blank" rel="noreferrer">
            <Mail />
            asklepio[ät]utu.fi
          </a>
        </li>
        <li className="footer-socials-item">
          <a
            href="https://www.instagram.com/asklepio.ry/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
            Asklepio.ry
          </a>
        </li>
      </ul>
      <p>© 2023 Asklepio ry</p>
    </footer>
  );
};
