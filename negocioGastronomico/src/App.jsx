import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//components

import Index from "./Index";

//webs
//import Gallery from './webs/Gallery';

//css
import "./App.css";
import "./Btn/Btn.css";
import { Catalogo } from "./pages/catalogo";
import { Productos } from "./pages/productos";
import { Contacto } from "./pages/Contacto";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Catalogo" element={<Catalogo />} />
          <Route path="/Platos/:seccion" element={<Productos />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
