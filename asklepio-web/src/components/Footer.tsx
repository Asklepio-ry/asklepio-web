import "../style/components/Footer.css";
// import logo from "../assets/images/logos/asklepio_logo_white_text.png";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as Mail } from "../assets/icons/mail.svg";
// import { ReactComponent as Telegram } from "../assets/icons/telegram.png";

export const Footer = () => {
  return (
    <footer>
    <section id="yhteystiedot">

        <h3> Yhteystiedot </h3>

        <div class="kaikki">

            <div class="tiedot">
                <div class="osio">
                    <h4><a href="https://maps.app.goo.gl/w9LfezC5QyhCmf8dA" target="_blank" rel="noreferrer"><img src="img\icons\locator-1093167_1280.png" alt="locate" class="icons"></a> Osoite </h4>
                    <p> LäTäKkö, Agora</p>
                    <p> Vesilinnantie 5,</p>
                    <p> 20014 Turun yliopisto </p>
                </div>

                <div class="osio">
                    <h4><a href="mailto:hallitus@asklepio.fi"> <img src="img\icons\gmail-4561841_1280.png" alt="gmail" class="icons"></a> Sähköposti </h4>
                    <p> hallitus@asklepio.fi </p>
                </div>

                <div class="osio">
                    <h4><a href="https://www.instagram.com/asklepio.ry/" target="_blank" rel="noreferrer"> <img src="img\icons\instagram-1675670_1280.png" alt="insta" class="icons"></a> Instagram </h4>
                    <p> Asklepio.ry </p>
                </div>
            </div>

        </div>

        <p>Asklepio ry © {new Date().getFullYear()}</p>
      </section>

    </footer>
  );
};
