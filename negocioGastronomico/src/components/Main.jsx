import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <>
      <main className="container-main align-content-center relleno">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center ">
            <h1 className="display-4 mb-4 ">
              Bienvenido a Gastronomia Boost Software Estudio
            </h1>
            <p className="lead mb-4">
              Proyecto Realizado con React Vite para Boost Software Estudio con
              React Vite
            </p>
            <Link to="/Catalogo">
              <button className="btn btn-primary btn-lg btn-custom">
                Entrar
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
