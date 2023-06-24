import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {borrarReceta, obtenerRecetas} from "../../helpers/queries";
import Swal from 'sweetalert2';


const RecetaListItem = ({receta, setRecetas}) => {

    const eliminarReceta = () => {
        //agregar consulta de sweet alert si estas seguro de borrar
        borrarReceta(receta.id).then((respuesta) => {
          if (respuesta && respuesta.status === 200) {
            Swal.fire("Receta eliminada", `La receta ${receta.nombreReceta} se ha eliminado correctamente`, "success");
            obtenerRecetas().then((respuesta) => {
              if(respuesta ) {
                setRecetas(respuesta)
              }
            })
          } else {
            Swal.fire("Error", `La receta ${receta.nombreReceta} no se ha eliminado correctamente`, "error");
          }
        })
      }

    return (
        <tr>
            <td>{receta.nombreReceta}</td>
            <td className='recortar-texto'>{receta.descripcionReceta}</td>
            <td className='recortar-texto'>{receta.imagenReceta}</td>
            <td className='d-flex justify-content-around '>
                <Link to={"administrador/editar-producto/" + receta.id} className='btn-success'>Edit</Link>
                <Button className='btn-danger' onClick={eliminarReceta}>Delete</Button>
            </td>
        </tr>
    );
};

RecetaListItem.propTypes = {
    
};

export default RecetaListItem;