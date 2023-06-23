import error from "../../assets/Error404.jpg";
import { Button } from 'react-bootstrap';

const Error404 = () => {
    return (
        <section className='main text-center'>
            <img className="w-50" src={error} alt="error 404" />
            <p>Cuando le pedís a la IA que cree una imagen de error 404</p>
            <div>
                <Button>Regresar a la página principal</Button>
            </div>
        </section>
    );
};

export default Error404;