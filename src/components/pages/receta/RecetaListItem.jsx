import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


const RecetaListItem = props => {
    return (
        <tr>
            <td>Guiso de lentejas</td>
            <td className='recortar-texto'>Para palear el frío, una opción conocida, rica y nutritiva es preparar un guiso de lentejas. En sus variedades, el guiso de lentejas puede incluir entre sus ingredientes chorizo, carne o hacerse de forma tradicional, aportando pocas calorías pero suficientes para calentar el cuerpo. El paso a paso para prepararlo y una receta plus: con bondiola y osobuco.</td>
            <td className='recortar-texto'>https://media.minutouno.com/p/140fd8e8277fd049b1d0bacf9caba8ce/adjuntos/150/imagenes/039/020/0039020458/guiso-lentejas-maikyjpg.jpg</td>
            <td className='d-flex justify-content-around '>
                <Button className='btn-success'>Edit</Button>
                <Button className='btn-danger'>Delete</Button>
            </td>
        </tr>
    );
};

RecetaListItem.propTypes = {
    
};

export default RecetaListItem;