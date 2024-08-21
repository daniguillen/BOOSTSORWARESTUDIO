import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./productos.css";

export function Productos() {
  const [Productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [colClass, setColClass] = useState("col-md-4");

  //recibir el paramentro
  const { seccion } = useParams();

  // Modal states
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleShow = (imageSrc) => {
    setCurrentImage(imageSrc);
    setShow(true);
  };
  const handleClose = () => setShow(false);

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
    const API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${seccion}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setProductos(response.data.meals);
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
      <div className="container containerProducto mb-5 ">
        <h2 className="mb-5 mt-5">{seccion}</h2>
        <div className="row">
          {Productos.map((datos, i) => (
            <div
              className={`${colClass} contenedorCartas mt-5 align-content-around`}
              key={i}
            >
              <div
                onClick={() => handleShow(datos.strMealThumb)}
                className="d-flex flex-column align-items-center m-4"
              >
                <img
                  src={datos.strMealThumb}
                  className="imagenAdministracion"
                  alt={datos.strMealThumb}
                />

                <button className="btn btn-primary mt-5 ">
                  {datos.strMeal}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer className="mt-5" />
      {/* Modal */}
      <div
        className={`modal fade ${show ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: show ? "block" : "none" }}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"></h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={currentImage}
                className="img-fluid"
                alt="Imagen del plato"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClose}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn7pP8s4w5JfztvQ1c0Q6FFV8L68I54K9wYI5x9tx27jYO5gC0fJw6uDgb6MfE"
      ></script>
    </>
  );
}
