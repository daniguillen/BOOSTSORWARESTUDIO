import { Link } from "react-router-dom";

export function Secciones() {
  return (
    <>
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
            to={"/Gallery"}
          >
            Galeria
          </Link>
        </li>

        <li className="nav-item align-content-center ">
          <Link
            className="nav-link active btn-primary"
            aria-current="page"
            to={"/"}
          >
            Secciones
          </Link>
        </li>
        <li className="nav-item align-content-center ">
          <Link
            className="nav-link active btn-primary"
            aria-current="page"
            to={"/"}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </>
  );
}
