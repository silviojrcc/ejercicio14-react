import error from "../../assets/Error404.jpg";
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <section className='main text-center'>
            <img className="w-50" src={error} alt="error 404" />
            <p>Cuando le pedís a la IA que cree una imagen de error 404</p>
            <div>
                <Link to="/" className="btn btn-primary">Regresar a la página principal</Link>
            </div>
        </section>
    );
};

export default Error404;