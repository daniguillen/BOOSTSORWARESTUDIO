import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./catalogo.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
export function Catalogo() {
  const [Categoria, setCategoria] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [colClass, setColClass] = useState("col-md-4");
  const updateColumnClass = () => {
    if (window.innerWidth <= 1000) {
      setColClass("col-md-6");
    } else {
      setColClass("col-md-4");
    }
  };

  useEffect(() => {
    updateColumnClass(); 
    window.addEventListener("resize", updateColumnClass); 
    return () => window.removeEventListener("resize", updateColumnClass); 
  }, []);

  useEffect(() => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setCategoria(response.data.categories);
      } catch (error) {
        setError("Hubo un problema al cargar los datos");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="containerLoader relleno">
        <div className="loader"></div>
      </div>
    );
  if (error)
    return (
      <main className="error-container relleno">
        <div className="error-message">
          <h2>Algo salió mal</h2>
          <p>{error}</p>
        </div>
      </main>
    );

  return (
    <>
      <Header />
      <div className="container mb-5 ">
        <h2 className="mb-5 mt-5">Secciones</h2>
        <div className="row">
          {Categoria.map((datos, i) => (
            <div
              className={`${colClass} contenedorCartas align-content-around`}
              key={i}
            >
              <div className="d-flex flex-column align-items-center">
                <img
                  src={datos.strCategoryThumb}
                  className="imagenAdministracion"
                  alt={datos.strCategoryThumb}
                />

                <Link to={`/Platos/${datos.strCategory}`}>
                  <button className="btn btn-primary mt-1 ">
                    {datos.strCategory}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
