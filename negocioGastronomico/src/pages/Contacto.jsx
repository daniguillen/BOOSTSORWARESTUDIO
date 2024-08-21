import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Contacto.css";

export function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <>
      <Header />
      <div className="containerContacto align-items-md-center">
        <div className="container  ">
          <h2 className="mb-4">Contacto</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="formName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="formName"
                name="name"
                className="form-control"
                placeholder="Introduce tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="formEmail" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="formEmail"
                name="email"
                className="form-control"
                placeholder="Introduce tu correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="formMessage" className="form-label">
                Mensaje
              </label>
              <textarea
                id="formMessage"
                name="message"
                rows="4"
                className="form-control"
                placeholder="Escribe tu mensaje aquí"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary mt-5">
              Enviar
            </button>
          </form>
          <p className="mt-2">
            Para contactarse con el creador de esta web puede escribirme por el
            email ing.danielguillen@gmail.com
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
