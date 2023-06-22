import Menu from '../common/Menu.jsx';
import Footer from "../common/Footer.jsx";
import RecetasList from './receta/RecetasList.jsx';
import DetalleReceta from './DetalleReceta.jsx';

const Home = () => {
    return (
        <>
          <Menu></Menu>
          <RecetasList/>
          <Footer></Footer> 
          <DetalleReceta/>
        </>
    );
};

export default Home;