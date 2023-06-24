import RecetasList from './receta/RecetasList.jsx';
import portada from "../../assets/portada.jpg";

const Home = () => {
  return (
    <section className='main'>
      <img
        className="banner"
        src={portada}
        alt="fondo cafe"
      />
      <h3 className='text-center p-5 mx-5 d-md-none'>¡Bienvenido a PPRCommpling! La fusión perfecta entre programación y recetas de cocina para despertar tu creatividad en la cocina digital. ¡Explora, aprende y crea platos deliciosos mientras expandes tus habilidades de programación!</h3>
      <RecetasList />
    </section>
  );
};

export default Home;