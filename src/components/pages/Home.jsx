import Menu from '../common/Menu.jsx';
import Footer from "../common/Footer.jsx";
import RecetasList from './receta/RecetasList.jsx';
import Administrador from './Administrador.jsx';

const Home = () => {
    return (
        <>
          <Menu></Menu>
          <RecetasList/>
          <Footer></Footer>
          <Administrador/>
        </>
    );
};

export default Home;