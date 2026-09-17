import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

import torraLogoLight from "../assets/torra-logo-light.png";
import torraLogoDark from "../assets/torra-logo-dark.png";
import torraLogoCoffee from "../assets/torra-logo-coffee.png";

import "./Footer.css";


// =========================================================
// LOGOS DAS REDES SOCIAIS
// =========================================================

function InstagramIcon({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}


function LinkedinIcon({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6.5 8.5H3.5V20H6.5V8.5ZM5 4C4.03 4 3.25 4.78 3.25 5.75C3.25 6.72 4.03 7.5 5 7.5C5.97 7.5 6.75 6.72 6.75 5.75C6.75 4.78 5.97 4 5 4ZM20.5 13.4C20.5 9.94 18.66 8.2 15.95 8.2C13.76 8.2 12.8 9.4 12.4 10.08V8.5H9.4V20H12.4V14.3C12.4 12.8 12.68 11.35 14.57 11.35C16.43 11.35 16.45 13.07 16.45 14.4V20H19.45V13.4H20.5Z" />
    </svg>
  );
}


function GithubIcon({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.22C2 16.73 4.87 20.55 8.84 21.9C9.34 21.99 9.52 21.67 9.52 21.39C9.52 21.14 9.51 20.48 9.5 19.6C6.73 20.23 6.14 18.23 6.14 18.23C5.69 17.04 5.03 16.72 5.03 16.72C4.12 16.08 5.1 16.09 5.1 16.09C6.1 16.17 6.62 17.15 6.62 17.15C7.51 18.72 8.95 18.28 9.54 18C9.63 17.34 9.89 16.89 10.17 16.63C7.96 16.37 5.64 15.49 5.64 11.68C5.64 10.59 6.02 9.69 6.64 8.98C6.54 8.72 6.19 7.69 6.74 6.32C6.74 6.32 7.59 6.04 9.5 7.37C10.31 7.14 11.16 7.03 12 7.03C12.84 7.03 13.69 7.14 14.5 7.37C16.41 6.04 17.26 6.32 17.26 6.32C17.81 7.69 17.46 8.72 17.36 8.98C17.98 9.69 18.36 10.59 18.36 11.68C18.36 15.5 16.04 16.36 13.82 16.63C14.17 16.94 14.48 17.54 14.48 18.47C14.48 19.8 14.47 20.87 14.47 21.39C14.47 21.67 14.65 21.99 15.16 21.9C19.13 20.55 22 16.73 22 12.22C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}


export default function Footer({
  onProdutosClick,
  onSobreClick,
  theme,
}) {
  const currentYear =
    new Date().getFullYear();

  const logos = {
    light: torraLogoLight,
    dark: torraLogoDark,
    coffee: torraLogoCoffee,
  };

  const currentLogo =
    logos[theme] ||
    torraLogoLight;

  return (
    <footer className="footer">

      <div className="footer-inner">

        {/* =================================================
            MARCA
            ================================================= */}

        <div className="footer-brand">

          <button
            type="button"
            className="footer-logo"
            onClick={onProdutosClick}
            aria-label="Torra"
          >
            <img
              src={currentLogo}
              alt="Torra"
            />
          </button>

          <p className="footer-description">
            Café, preparo e acessórios
            para transformar cada xícara
            em um momento especial.
          </p>


          {/* =================================================
              REDES SOCIAIS
              ================================================= */}

          <div className="footer-socials">

            {/* INSTAGRAM */}

            <a
              href="#"
              className="footer-social"
              aria-label="Instagram"
            >
              <span className="footer-social-icon">
                <InstagramIcon size={14} />
              </span>

              <span>
                Instagram
              </span>
            </a>


            {/* LINKEDIN */}

            <a
              href="#"
              className="footer-social"
              aria-label="LinkedIn"
            >
              <span className="footer-social-icon">
                <LinkedinIcon size={14} />
              </span>

              <span>
                LinkedIn
              </span>
            </a>


            {/* GITHUB */}

            <a
              href="#"
              className="footer-social"
              aria-label="GitHub"
            >
              <span className="footer-social-icon">
                <GithubIcon size={14} />
              </span>

              <span>
                GitHub
              </span>
            </a>

          </div>

        </div>


        {/* =================================================
            LOJA
            ================================================= */}

        <div className="footer-column">

          <h3>
            Loja
          </h3>

          <button
            type="button"
            onClick={onProdutosClick}
          >
            Produtos
          </button>

          <button
            type="button"
            onClick={onProdutosClick}
          >
            Grãos
          </button>

          <button
            type="button"
            onClick={onProdutosClick}
          >
            Equipamentos
          </button>

          <button
            type="button"
            onClick={onProdutosClick}
          >
            Acessórios
          </button>

        </div>


        {/* =================================================
            INSTITUCIONAL
            ================================================= */}

        <div className="footer-column">

          <h3>
            Institucional
          </h3>

          <button
            type="button"
            onClick={onSobreClick}
          >
            Sobre nós
          </button>

          <button
            type="button"
            onClick={onProdutosClick}
          >
            Nossa loja
          </button>

          <a href="#">
            Termos de uso
          </a>

          <a href="#">
            Privacidade
          </a>

        </div>


        {/* =================================================
            ATENDIMENTO
            ================================================= */}

        <div className="footer-column footer-contact">

          <h3>
            Atendimento
          </h3>

          <a href="mailto:contato@torra.com">

            <Mail
              size={15}
              strokeWidth={1.7}
            />

            <span>
              contato@torra.com
            </span>

          </a>


          <a href="tel:+5500000000000">

            <Phone
              size={15}
              strokeWidth={1.7}
            />

            <span>
              (00) 00000-0000
            </span>

          </a>


          <div className="footer-contact-item">

            <MapPin
              size={15}
              strokeWidth={1.7}
            />

            <span>
              Brasil
            </span>

          </div>

        </div>

      </div>


      {/* ===================================================
          PARTE INFERIOR
          =================================================== */}

      <div className="footer-bottom">

        <div className="footer-bottom-inner">

          <p>
            © {currentYear} Torra.
            Todos os direitos reservados.
          </p>

          <p>
            Projeto autoral desenvolvido
            para fins de demonstração.
          </p>

          <a
            href="#"
            className="footer-back-top"
            onClick={(event) => {
              event.preventDefault();

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Voltar ao topo

            <ArrowUpRight
              size={14}
              strokeWidth={1.7}
            />

          </a>

        </div>

      </div>

    </footer>
  );
}