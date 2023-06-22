import PropTypes from 'prop-types';
import CardReceta from './CardReceta';
import { Container } from 'react-bootstrap';

const RecetasList = props => {
    return (
        <Container className={`rounded border border-dark p-3 my-5`}>
            {/* <h4 className='text-light text-center'> {peliculas.length >= 1 ? "Películas" : "No hay películas retgistradas"}</h4> */}
            <div className='d-flex row justify-content-around mt-4'>
                {/* {peliculas.map((pelicula, index) => <Pelicula pelicula={pelicula} key={index} borrarPelicula={borrarPelicula}></Pelicula>)} */}
                <CardReceta/>
                <CardReceta/>
                <CardReceta/>
                <CardReceta/>
                <CardReceta/>
                <CardReceta/>
            </div>
        </Container>
    );
};

RecetasList.propTypes = {

};

export default RecetasList;