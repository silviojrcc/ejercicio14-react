import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardReceta = ({receta}) => {
    return (
        <Card className='col-10 col-md-3 mb-3 mx-1 p-1 bg-dark text-light'>
            <Card.Img variant="top" src={receta.imagenReceta} />
            <Card.Body>
                <Card.Title>{receta.nombreReceta}</Card.Title>
                <Card.Text>
                    {receta.descripcionReceta}
                </Card.Text>
                <Link className='btn btn-primary' to={"/detalle/"+ receta.id}>Ver receta</Link>
            </Card.Body>
        </Card>
    );
};

CardReceta.propTypes = {
    receta: PropTypes.object.isRequired,
};

export default CardReceta;