import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu, Footer } from "./components/common";
import { Login, DetalleReceta, Error404, Home } from "./components/pages";
import { RutasAdministrador, RutasProtegidas } from './components/routes';
import { useState } from 'react';


function App() {
  const usuario = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      <BrowserRouter>
        <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado} />} />
          <Route path="/detalle/:id" element={<DetalleReceta></DetalleReceta>} />
          <Route path="/administrador/*" element={
            <RutasProtegidas>
              <RutasAdministrador />
            </RutasProtegidas>
          } />
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;
