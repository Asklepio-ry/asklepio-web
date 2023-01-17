import { Link, Outlet } from "react-router-dom";
import "../style/pages/Layout.css";

export default function Layout() {
  return (
    <>
      <nav>
        <div className="nav-column">
          <h2 className="nav-column-header">Viralliset</h2>
          <ul className="nav-column-list">
            <li className="nav-column-list-item">
              <Link to="/hallitus">Hallitus</Link>
            </li>
            <li className="nav-column-list-item">
              <Link to="/yhteystiedot">Yhteystiedot</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />

      <div className="footer">
        <p className="footer-text">Asklepio ry</p>
        <p className="footer-text">Vesilinnantie 5, 20014 Turun yliopisto</p>
        <ul className="footer-socials">
          <li className="footer-socials-item">
            <a href="mailto:asklepio@utu.fi" target="_blank" rel="noreferrer">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              asklepio[ät]utu.fi
            </a>
          </li>
          <li className="footer-socials-item">
            <a
              href="https://www.instagram.com/asklepio.ry/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.65 7.2H16.66M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Asklepio.ry
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
