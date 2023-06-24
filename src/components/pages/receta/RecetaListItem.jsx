import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const RecetaListItem = ({receta}) => {

    return (
        <tr>
            <td>{receta.nombreReceta}</td>
            <td className='recortar-texto'>{receta.descripcionReceta}</td>
            <td className='recortar-texto'>{receta.imagenReceta}</td>
            <td className='d-flex justify-content-around '>
                <Link to={"administrador/editar-producto/" + receta.id} className='btn-success'>Edit</Link>
                <Button className='btn-danger'>Delete</Button>
            </td>
        </tr>
    );
};

RecetaListItem.propTypes = {
    
};

export default RecetaListItem;