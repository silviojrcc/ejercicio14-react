import Menu from '../common/Menu.jsx';
import Footer from "../common/Footer.jsx";
import RecetasList from './receta/RecetasList.jsx';
import CrearReceta from './receta/CrearReceta.jsx';

const Home = () => {
    return (
        <>
          <Menu></Menu>
          <RecetasList/>
          <Footer></Footer>
          <CrearReceta/>
        </>
    );
};

export default Home;