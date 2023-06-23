import Menu from '../common/Menu.jsx';
import Footer from "../common/Footer.jsx";
import RecetasList from './receta/RecetasList.jsx';
import Error404 from './Error404.jsx';

const Home = () => {
    return (
        <>
          <Menu></Menu>
          <RecetasList/>
          <Footer></Footer>
        </>
    );
};

export default Home;