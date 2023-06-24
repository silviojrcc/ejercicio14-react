import './App.css';
import Home from './components/pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/common/Menu';
import Login from "./components/pages/Login";
import DetalleReceta from './components/pages/DetalleReceta';
import RutasProtegidas from './components/routes/RutasProtegidas';
import RutasAdministrador from './components/routes/RutasAdministrador';
import { useState } from 'react';
import Error404 from './components/pages/Error404';
import Footer from "./components/common/Footer";

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
