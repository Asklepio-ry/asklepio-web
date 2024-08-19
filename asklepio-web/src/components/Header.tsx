import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logos/asklepio_logo_no_text_lavender.png";
import "../style/components/Header.css";

export const Header = () => {
  const [show, setShow] = useState(false);
  const menuBtn = useRef(null);

  return (
    <header>
        <nav>
            <div class="logo">
                <a href="#alku">
                    <img src="img\asklepio_logo_no_text.png" alt="logo">
                </a>
            </div>

            <div class="nav">
                <ul class="nav-links">
                    <li><a href="#asklepio"> Asklepio </a></li>
                    <li><a href="#hallitus"> Hallitus </a></li>
                    <li><a href="#tapahtumat"> Tapahtumat </a></li>
                    <li><a href="#palaute"> Palaute </a></li>
                    <li><a href="#yhteystiedot"> Yhteystiedot </a></li>
                </ul>
            </div>

            <div class="burgeri">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
    </header>
  );
};
