import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <ul className="nav header justify-content-left headerPrincipal">
      <li className="nav-item">
        <Link
          className="nav-link active btn-primary"
          aria-current="page"
          to="/"
        >
          Inicio
        </Link>
      </li>
      <li className="nav-item align-content-center ">
        <Link
          className="nav-link active btn-primary"
          aria-current="page"
          to={"/Catalogo"}
        >
          Catalogo
        </Link>
      </li>

      <li className="nav-item align-content-center ">
        <Link
          className="nav-link active btn-primary"
          aria-current="page"
          to={"/Contacto"}
        >
          Contacto
        </Link>
      </li>
    </ul>
  );
}

export default Header;
